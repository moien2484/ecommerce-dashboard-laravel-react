<?php 

namespace App\services\authentication\users;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Users
{
    public function add(Request $request)
    {
        if($this->validation($request)->fails())
        {
            return['success'=>false , 'error'=>$this->validation($request)->errors()];
        }

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>$request->password,
        ]);

        return ['success'=>true ,'user'=>$user ,'message'=>'کاربر با موفقیت ثبت شد'];

    }

    private function validation(Request $request)
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


    public function delete($id)
    {
        $user = User::find($id);

        $user->delete();

        return ['user'=>$user , 'message'=>'کاربر با موفقیت حذف شد'];
    }
}