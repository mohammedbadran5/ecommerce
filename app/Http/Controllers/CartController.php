<?php

// app/Http/Controllers/CartController.php
namespace App\Http\Controllers;
use App\Models\Cart;
use Illuminate\Http\Request;
class CartController extends Controller
{
    // Add item to the cart
    public function addToCart(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'user_id' => 'required|integer',
            'product_id' => 'required|integer',
            'quantity' => 'required|integer|min:1',
        ]);
    
        // Update or create the cart item
        $cartItem = Cart::updateOrCreate(
            ['user_id' => $request->user_id, 'product_id' => $request->product_id],
            ['quantity' => $request->quantity]
        );
    
        return response()->json(['message' => 'Item added to cart', 'cart' => $cartItem]);
    }

    // Get cart items for a user
    public function getCartItems($userId)
    {
        $cartItems = Cart::where('user_id', $userId)->with('product')->get();
        return response()->json($cartItems);
    }

    // Remove an item from the cart
    public function removeFromCart($id)
    {
        Cart::where('id', $id)->delete();
        return response()->json(['message' => 'Item removed from cart']);
    }
}
