<?php

use App\Http\Controllers\BasketController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RegisterController;
use App\services\authentication\login\LoginWithToken;
use App\services\shop\products;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::prefix('/api')->group(function(){
// });

// Route::post('/ddd' , [products::class , 'store']);
// Route::get('/cart' , [BasketController::class , 'show']);
Route::get('/pay' , [PaymentController::class , 'pay']);
// Route::get('/otp' , [LoginWithToken::class , 'login']);



