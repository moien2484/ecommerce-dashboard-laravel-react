<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\services\authentication\users\Users;
use Illuminate\Http\Request;

class UserController extends Controller
{

    private $users;
    public function __construct(Users $users) {
        $this->users = $users;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return response()->json(['users'=>$users],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $result = $this->users->add($request);
        if(!$result['success'])
        {
            return response()->json(['message'=>'خطا در ثبت کاربر' ,'errors'=>$result['error']]);
        }
        
        return response()->json(['message'=>$result['message'] ,'user'=>$result['user']]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        $user->delete();

        return response()->json(['user'=>$user , 'message'=>'کاربر با موفقیت حذف شد']);
    }
}
