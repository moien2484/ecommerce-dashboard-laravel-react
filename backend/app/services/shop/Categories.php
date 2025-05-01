<?php 

namespace App\services\shop;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Categories
{
    public function store(Request $request)
    {
        if($this->validation($request)->fails())
        {
            return['success'=>false ,'errors'=>$this->validation($request)->errors()];
        }

        $category =  Category::create([
            'slug'=>$request->slug,
            'title'=>$request->title
        ]);

        return ['success'=>true , 'category' =>$category];

    }

    

    public function validation(Request $request)
    {
        $validator = Validator::make($request->all() , [
            'title'=>['required' , 'min:3'],
            'slug'=>['required' , 'min:3'],
        ]);

        return $validator;
    }


    public function edit(Request $request , $id)
    {
        if($this->validation($request)->fails())
        {
            return['success'=>false ,'errors'=>$this->validation($request)->errors()];
        }

        $Category = Category::find($id);

        $Category->update([
            'title'=>$request->title,
            'description'=>$request->description,
            'price'=>$request->price,
        ]);

        return ['success'=>true , 'Category' =>$Category];


        
    }
}