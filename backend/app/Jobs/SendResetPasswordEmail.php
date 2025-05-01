<?php

namespace App\Jobs;

use App\Notifications\ResetPassword;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendResetPasswordEmail implements ShouldQueue
{
    use Queueable;

    private $user;
    private $token;

    /**
     * Create a new job instance.
     */
    public function __construct($user , $token)
    {
        $this->token = $token;

    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->user->notify(new ResetPassword($this->token));
    }
}
