<?php

namespace App\Http\Controllers;

use App\services\authentication\login\LoginWithToken;
use Illuminate\Http\Request;

class TokenLoginController extends Controller
{
    private $otp;
    public function __construct(LoginWithToken $otp) {
        $this->otp = $otp;
    }

    public function sendotp()
    {
        $result =  $this->otp->sendotp();

        if(!$result['success'] and $result['type']=='validation')
        {
            return response()->json(['message'=>'خطا در ارسال کد' , 'errors'=>$result['errors']]);
        }

        if(!$result['success'] and $result['type']=='email')
        {
            return response()->json(['message'=>'خطا در ارسال کد' , 'errors'=>$result['errors']]);
        }

        return response()->json(['message'=>'ارسال کد با موفقیت آمیز']);
    }

    public function login()
    {
        $result =  $this->otp->login();

        if(!$result['success'] and $result['type'] == 'invalid')
        {
            return response()->json(['message'=>'خطا در  ورود' , 'errors'=>$result['errors']]);
        }

        if(!$result['success'] and $result['type'] == 'expired')
        {
            return response()->json(['message'=>'خطا در  ورود' , 'errors'=>$result['errors']]);
        }

        return response()->json(['message'=>' ورود با موفقیت آمیز' , 'token'=>$result['token']]);

    }
}
