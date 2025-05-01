<?php
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SendResetPasswordEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\TokenLoginController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\IsAdmin;
use App\Http\Middleware\Islogin;
use App\services\authentication\login\LoginWithToken;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register' , [RegisterController::class , 'register']);
Route::post('/login', [LoginController::class , 'login']);
Route::apiResource('products',ProductController::class);
Route::get('products',[ProductController::class , 'index']);
Route::post('products',[ProductController::class , 'store'])->middleware([Islogin::class,IsAdmin::class]);
Route::put('products/{product}',[ProductController::class , 'update'])->middleware(['auth:sanctum',IsAdmin::class]);
Route::delete('products/{product}',[ProductController::class , 'destroy'])->middleware(['auth:sanctum',IsAdmin::class]);



Route::apiResource('categories',CategoryController::class)->middleware(IsAdmin::class);
Route::post('/reset-password', [SendResetPasswordEmail::class , 'sendresetlink']);
Route::put('/reset-password', [ResetPasswordController::class , 'reset']);
Route::middleware('auth:sanctum')->apiResource('cart',CartController::class);
Route::apiResource('users',UserController::class)->middleware(IsAdmin::class);
Route::post('/sendotp', [TokenLoginController::class , 'sendotp']);
Route::post('/otplogin', [TokenLoginController::class , 'login']);




 




