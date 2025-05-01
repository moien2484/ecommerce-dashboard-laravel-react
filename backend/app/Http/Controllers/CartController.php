<?php
namespace App\Http\Controllers;
use App\Models\Cart;
use App\services\cart\Basket;
use Illuminate\Http\Request;

class CartController extends Controller
{
    private $basket;

    public function __construct(Basket $basket) {
        $this->basket = $basket;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $TotalPrace = $this->basket->total_price();
        $items = Cart::with('product')->where('user_id' , $user->id)->get();
        return response()->json(['items'=>$items , 'TotalPrice'=>$TotalPrace]); 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $result = $this->basket->create($request);
        if(!$result['success'])
        {
            return response()->json(['message'=>'خطا در ثبت محصول' , 'errors'=>$result['errors']]);
        }
        return response()->json(['message'=>' ثبت محصول  در سبد خرید' , 'item'=>$result['item']]);

    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $result =  $this->basket->edit($request , $id);

        if($result['success'] ==false)
        {
            return response()->json(['errors'=>$result['errors']]);
        }
        else{

        return response()->json(['message'=>'سبد خرید با موفقیت تغییر کرد' , 'item'=>$result['item']]);
        }
        
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Cart::find($id);
        $item->delete();
        return response()->json(['message'=>'حذف محصول از سبد خرید' , 'item'=>$item]);
    }

    
}
