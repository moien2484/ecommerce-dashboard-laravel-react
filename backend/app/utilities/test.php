<?php 
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ResetPasswordNotification extends Notification
{
    use Queueable;

    protected $token;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function via($notifiable)
    {
        return ['mail']; // ارسال ایمیل
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('بازیابی رمز عبور')
            ->line('درخواست بازنشانی رمز عبور دریافت شد.')
            ->action('بازنشانی رمز عبور', url('/reset-password?token=' . $this->token))
            ->line('اگر شما این درخواست را ارسال نکرده‌اید، نیازی به اقدامی نیست.');
    }
}



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

public function sendResetLink(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink($request->only('email'));

    return $status === Password::RESET_LINK_SENT
        ? response()->json(['message' => 'ایمیل بازیابی ارسال شد'], 200)
        : response()->json(['message' => 'ایمیل نامعتبر است'], 400);
}