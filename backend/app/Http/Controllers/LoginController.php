<?php

namespace App\Http\Controllers;
use App\services\authentication\login\LoginWithPassword;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request , LoginWithPassword $login)
    {
        $result = $login->login($request);
        if($result['success'] == false){

            if($result['type']=='validation')
            {
            return response()->json([
                'message'=>'خطا در ورود',
                'errors'=> $result['errors']
            ]);
            }

            elseif($result['type'] =='emailorpassword')
            {
            return response()->json([
                'message'=>'خطا در ورود',
                'errors'=>$result['errors']
            ]);

            }

        }
        else
        {
            return response()->json([
                'message'=>'ورود موفقیت آمیز',
                'token'=> $result['token'],
                'user'=> $result['user']

            ]);
        }
    }
}


