<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\services\payment\PaymentService;
use App\services\payment\requests\IdPayRequest;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function pay()
    {
        $user = User::find(2);
        $idpayrequest = new IdPayRequest(['amount'=>100 ,'user'=>$user]);

        $paymentservice = new PaymentService(PaymentService::IDPAY , $idpayrequest);
        // $paymentservice->pay();
        dd($paymentservice->pay());
    }
}
