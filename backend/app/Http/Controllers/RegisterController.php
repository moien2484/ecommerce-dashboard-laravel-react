<?php

namespace App\Http\Controllers;

use App\services\authentication\register\Register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Register $register , Request $request)
    {
        $result = $register->store($request);
        if($result['success'])
        {
            return response()->json([
                'message'=>'ثبت نام با موفیت انجام شد',
                'user'=>$result['user']
            ] , 201);
        }

        else{
            return response()->json([
                'message'=>'خطا در ثبت نام',
                'errors'=>$result['errors']
            ] , 422);
        }
    }
}
