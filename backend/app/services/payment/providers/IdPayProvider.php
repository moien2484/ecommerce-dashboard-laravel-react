<?php 

namespace App\services\payment\providers;

use App\services\payment\contract\PayableInterface;
use App\services\payment\contract\VerifyableInterface;
use App\services\payment\contract\AbstractProviderInterface;

class IdPayProvider extends AbstractProviderInterface implements PayableInterface , VerifyableInterface
{
    public function pay()
    {
        return 'سلام';
    }

    public function verify()
    {
        
    }
}