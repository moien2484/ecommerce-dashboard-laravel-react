<?php 

namespace App\services\authentication\register;

use App\Jobs\SendWelcomeEmail;
use App\Models\User;
use App\Notifications\WelcomeEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class Register
{
    public function store(Request $request)
    {

        if($this->validation($request)->fails())
        {
            return ['success'=>false , 'errors'=>$this->validation($request)->errors()];
        }

        $user =  User::create([
            'name' =>$request->name,
            'email' =>$request->email,
            'phone' =>$request->phone,
            'password' =>Hash::make($request->password)
        ]);

        SendWelcomeEmail::dispatch($user);

        return ['success'=>true , 'user' =>$user];


    }


    public function validation(Request $request)
    {

        $validator = Validator::make($request->all() ,   
        [
            'name' =>['required'],
            'email' =>['required' ,'email' , 'unique:users'],
            'phone' =>['required' ,'numeric','digits:11' , 'unique:users'],
            'password' =>['required' ,'digits:8']
        ]);

        return $validator;

    }

}