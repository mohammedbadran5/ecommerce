<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'description']; // Add necessary fields here

    public function cartItems()
    {
        return $this->hasMany(Cart::class);
    }
}
