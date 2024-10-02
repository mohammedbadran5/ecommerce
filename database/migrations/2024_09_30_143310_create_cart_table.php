<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   // database/migrations/xxxx_xx_xx_create_cart_table.php
public function up()
{
    Schema::create('cart', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('user_id');  // User ID for tracking cart by user
        $table->unsignedBigInteger('product_id'); // Product ID
        $table->integer('quantity'); // Product quantity
        $table->timestamps();
        
        // Foreign keys
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart');
    }
};
