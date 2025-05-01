<?php 

namespace App\services\payment\contract;

interface PayableInterface
{
    public function pay();
}