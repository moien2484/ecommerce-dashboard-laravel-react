<?php 

namespace App\services\authentication\login;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginWithPassword
{
    public function login(Request $request)
    {
        if($this->validation($request)->fails())
        {
            return['success'=>false , 'errors'=>$this->validation($request)->errors() ,'type'=>'validation'];
        }
        
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return [ 'success'=>false ,'errors' => 'ایمیل یا رمز عبور اشتباه است' ,'type'=>'emailorpassword'];
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return ['success'=>true ,'user'=>$user ,'token'=>$token];

    }


    private function validation(Request $request)
    {
        $validator = Validator::make($request->all() , [
            'email'=>['required' , 'email'] ,
            'password'=>['required' , 'digits:8']
        ]);

        return $validator;

    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return ['seccess'=>true];
    }
}
