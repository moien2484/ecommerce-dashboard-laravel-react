<?php 

$user = User::where('email', $request->email)->first();

if ($user) {
    $token = Password::createToken($user); // ایجاد توکن بازیابی رمز
    $user->notify(new ResetPasswordNotification($token)); // ارسال ایمیل با Notification
    return response()->json(['message' => 'ایمیل بازیابی ارسال شد'], 200);
}

return response()->json(['message' => 'ایمیل نامعتبر است'], 400);





use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use App\Models\User;

public function resetPassword(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'token' => 'required',
        'password' => 'required|min:6|confirmed',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function (User $user, string $password) {
            $user->forceFill(['password' => Hash::make($password)])->save();
            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
        ? response()->json(['message' => 'رمز عبور تغییر کرد'], 200)
        : response()->json(['message' => 'توکن نامعتبر است'], 400);
}