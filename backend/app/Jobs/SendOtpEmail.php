<?php

namespace App\Jobs;

use App\Notifications\LoginToken;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendOtpEmail implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    private $user;
    private $token;
    public function __construct($user , $token)
    {
        $this->user = $user;
        $this->token = $token;

    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->user->notify(new LoginToken($this->token));
    }
}
