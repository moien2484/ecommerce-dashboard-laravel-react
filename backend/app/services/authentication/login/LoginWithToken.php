<?php 

namespace App\services\authentication\login;

use App\Jobs\SendOtpEmail;
use App\Models\Token;
use App\Models\User;
use App\Notifications\LoginToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPSTORM_META\type;

class LoginWithToken
{

    const TOKEN_EXPIRED = 60;
    private $request;
    public function __construct(Request $request) {
        $this->request = $request;
    }   

    public function sendotp()
    {
        if($this->validation()->fails())
        {
            return['success'=>false , 'errors'=>$this->validation()->errors() ,'type'=>'validation'];
        }

        $user = User::where('email' , $this->request->email)->first();
        $token = rand(100000 ,999999);

        if(!$user)
        {
            return ['success'=>false , 'errors'=>'ایمیل وارد شده نادرست است' ,'type'=>'email'];
        }

        $this->duplicatetoken();

        Token::create([
            'user_id'=>$user->id,
            'token'=>$token,
            'expired_at'=>now()
        ]);
        SendOtpEmail::dispatch($user , $token);
        return['success'=>true];
    }

    public function login()
    {
        $user = User::where('email' , $this->request->email)->first();
        
        if(!$this->exist())
        {
            return ['success'=>false , 'type'=>'invalid', 'errors'=>'کد وارد شده اشتباه است'];
        }


        if($this->expired())
        {
            return ['success'=>false , 'type'=>'expired','errors'=>'تاریخ این کد منقضی شده است'];
        }

        $token_snactum = $user->createToken('auth_token')->plainTextToken;
        return ['success'=>true , 'token'=> $token_snactum];
        
    }


    public function exist()
    {
        $user = User::where('email' , $this->request->email)->first();
        $token = Token::where('user_id' , $user->id)->first();
        return $token->token == $this->request->token ?  true : false;
    

    }

    public function expired()
    {
        $user = User::where('email' , $this->request->email)->first();
        $token = Token::where('user_id' , $user->id)->first();
        return $token->expired_at->diffInSeconds(now()) > self::TOKEN_EXPIRED; 
    }

    public function validation()
    {
        $validator = Validator::make($this->request->all() , [
            'email'=>['required' , 'email'] ,
        ]);

        return $validator;
    }

    public function duplicatetoken()
    {
        $user = User::where('email' , $this->request->email)->first();
        $token = Token::where('user_id' , $user->id)->first();
        if($token)
        {
            $token->delete(); 
        }
    }


}