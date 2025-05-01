<?php

namespace App\Http\Controllers;

use App\services\authentication\login\Login;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(Login $login , Request $request)
    {
        $result =  $login->logout($request);
        if($result['seccess'])
        {
            return response()->json([
                'message'=>'خروج موفقیت آمیز'
            ]);
        }
    }
}
