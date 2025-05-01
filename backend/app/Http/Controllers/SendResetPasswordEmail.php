<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class SendResetPasswordEmail extends Controller
{
    public function sendresetlink(Request $request)
    {

        if( $this->validation($request)->fails())
        {
            return response()->json([
                'message'=>'خطا در ارسال ایمیل', 
                'errors'=>$this->validation($request)->errors()
            ]);
        }

        $result = Password::broker()->sendResetLink($request->only('email'));

        if($result == Password::RESET_LINK_SENT)
        {
            return response()->json([
                'message'=>'موفقیت در ارسال ایمیل فراموشی رمز عبور',
            ] , 200);
        }
    }


    public function validation(Request $request)
    {
        $validator =  Validator::make($request->all() , [
            'email'=>['required' , 'email' , 'exists:users']
        ]);

        return $validator;
    }
}
