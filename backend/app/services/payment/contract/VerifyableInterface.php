<?php 

namespace App\services\payment\contract;

interface VerifyableInterface
{
    public function verify();
}