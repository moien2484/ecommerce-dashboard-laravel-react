<?php 

namespace App\services\payment\requests;

// use Psr\Http\Message\RequestInterface;

class IdPayRequest
{

    private $user;
    private $amount;


    public function __construct( array $data) {
        $this->user = $data['user'];
        $this->amount = $data['amount'];

    }

    public function getuser()
    {
        return $this->user;
    }

    public function getamount()
    {
        return $this->amount;
    }
}

