<?php 

namespace App\services\cart;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Basket
{
    public function create(Request $request)
    {
        if($this->validation($request)->fails())
        {
            return ['success'=>false , 'errors'=>$this->validation($request)->errors()];
        }

        $user = auth()->user(); 

        if(!$user)
        {
            return ['success'=>false , 'errors'=>'کاربر لاگین نکرده است'];
        }

        $item = Cart::where('user_id' , $user->id)->where('product_id' , $request->product_id)->first();
        if($item){
            $item->quantity += 1;
            $item->save();
        }

        else
        {
        $item = Cart::create([
            'user_id'=>$user->id,
            'product_id'=>$request->product_id,
            'quantity'=>1
        ]);
        }

        return ['success'=>true , 'item'=>$item];

    }

    public function validation(Request $request)
    {
        $validate = Validator::make(
            $request->all() ,
            [
                'product_id'=>['required' , 'exists:products,id']
            ]
            );
        return $validate;    
    }


    public function edit(Request $request , $id)
    {
        $user = auth()->user();
        $item = Cart::where('id' , $id)->where('user_id' , $user->id)->first();
        if(!$item)
        {
            return ['success'=>false , 'errors'=>'متعلق به کاربر نیست'];
        }

        $item->update([
            'quantity'=>$request->quantity
        ]);

        return['success'=>true , 'item'=>$item];
        
    }

    public function total_price()
    {
        $user = auth()->user();
        $items = Cart::with('product')->where('user_id' , $user->id)->get();
        $total_price = 0;
        foreach ($items as $item) {
            $total_price += $item->quantity * $item->product->price;
        }
        return $total_price;
    }
}