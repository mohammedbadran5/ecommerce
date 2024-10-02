<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;


Route::get('/', function () {
    return view('welcome');
});





Route::post('/cart', [CartController::class, 'addToCart']);
Route::get('/cart/{userId}', [CartController::class, 'getCartItems']);
Route::delete('/cart/{id}', [CartController::class, 'removeFromCart']);


