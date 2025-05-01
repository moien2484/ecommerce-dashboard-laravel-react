<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\services\shop\Categories;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    private $Categories;

    public function __construct(Categories $Categories) {
        $this->Categories = $Categories;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            'categories'=>$categories
        ] , 200);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $result = $this->Categories->store($request);
        if($result['success'] == false)
        {
            return response()->json([
                'message'=>'خطا ذر ذخیره ی دسته بندی',
                'errors'=>$result['errors']
            ] , 201);
        }

        else
        {
            return response()->json([
                'message'=>'دسته بندی با موفقیت ذخیره شد',
                'errors'=>$result['category']
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $Category =  Category::find($id);
        return response()->json([
            'Category'=>$Category
        ] , 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $result =  $this->Categories->edit($request , $id);

        if($result['success'] == false)
        {
            return response()->json([
                'message'=>'خطا ذر ذخیره ی دسته بندی',
                'errors'=>$result['errors']
            ] , 201);
        }

        else
        {
            return response()->json([
                'message'=>'دسته بندی با موفقیت ذخیره شد',
                'Category'=>$result['Category']
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $Category =  Category::find($id);
        $Category->delete();

        return response()->json(null , 204);
    }
}
