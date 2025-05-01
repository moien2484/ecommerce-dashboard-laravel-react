<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class ResetPasswordController extends Controller
{

    public function reset(Request $request)
    {
        if($this->validation($request)->fails())
        {
            return response()->json([
                'message'=>'خطا در بازیابی رمز عبور' ,
                'errors'=>$this->validation($request)->errors()
            ]);
        }


        $result = Password::broker()->reset(
        $request->only('email' , 'password', 'token') ,
        function($user , $password){
            $this->resetpassword($user , $password);
        }
        );

        if ($result == Password::PASSWORD_RESET){
            
            return response()->json(['message'=>'موفقیت در تغییر رمز عبور '] ,  200);
        }
        
    }


    public function validation(Request $request)
    {
        $validator =  Validator::make(
        $request->all() ,
        [
            'password' =>['required' ,'digits:8'],
            'email' =>['required' ,'email'],
            'token' =>['required']

        ]);

        return $validator;   
    }

    public function resetpassword($user , $password)
    {
        $user->password = Hash::make($password);
        $user->save();
    }
}
