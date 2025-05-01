<?php

namespace App\Http\Controllers;

use App\Http\Middleware\IsAdmin;
use App\Models\Product;
use Illuminate\Http\Request;
use App\services\shop\products;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    private $products;

    public function __construct(Products $products) {
        $this->products = $products;
        // $this->middleware(IsAdmin::class)->only(['store' ,'update','destroy']);
     }


    /**
     * Display a listing of the resource.
     */


    public function index()
    {        
        $products = Product::all();
        return response()->json([
            'products'=>$products
        ] , 200);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $result = $this->products->store($request);
        if($result['success'] == false)
        {
            return response()->json([
                'message'=>'خطا ذر ذخیره ی محصول',
                'errors'=>$result['errors']
            ] , 201);
        }

        else
        {
            return response()->json([
                'message'=>'محصول با موفقیت ذخیره شد',
                'product'=>$result['product']
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product =  Product::find($id);
        return response()->json([
            'product'=>$product
        ] , 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $result =  $this->products->edit($request , $id);

        if($result['success'] == false)
        {
            return response()->json([
                'message'=>'خطا ذر ذخیره ی محصول',
                'errors'=>$result['errors']
            ] , 201);
        }

        else
        {
            return response()->json([
                'message'=>'محصول با موفقیت ذخیره شد',
                'product'=>$result['product']
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {  
        $product =  Product::find($id);
        $product->delete();

        
        return response()->json(null , 204); 
        
    }
}
