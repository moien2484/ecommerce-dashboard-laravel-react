<?php 

namespace App\services\payment;

use App\Exceptions\payment\ProviderNotFoundException;
use App\services\payment\contract\RequestInterface;
use App\services\payment\requests\IdPayRequest;

class PaymentService
{
    public const IDPAY = 'IdPayProvider';
    public const ZARINPAL = 'ZarinpalProvider';

    private $providername;
    private $request;


    public function __construct($providername, $request) {
        $this->providername = $providername;
        $this->request = $request;
    }

    public function pay()
    {
        return $this->findprovider()->pay();
    }

    private function findprovider()
    {
        $calssname = 'App\\services\\payment\\providers\\'. $this->providername;

        if(!class_exists($calssname))
        {
            throw new ProviderNotFoundException('درگاه پرداخت مورد نظر یافت نشد');
        }

        return new $calssname($this->request);
    }

}

// $idpayrequest = new IdPayRequest();
// $PaymentService = new PaymentService(PaymentService::IDPAY , $idpayrequest);
