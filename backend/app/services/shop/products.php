<?php 

namespace App\services\shop;

use App\Models\Product;
use App\utilities\ImageUploader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class products
{
    public function store(Request $request)
    {

        if($this->validation($request)->fails())
        {
            return['success'=>false ,'errors'=>$this->validation($request)->errors()];
        }

        $product = Product::create([
            'title'=>$request->title,
            'description'=>$request->description,
            'price'=>$request->price,
        ]);

        $basepath = 'products/'. $product->id . '/';

        $images = [
            'thumbnail_url'=>$request->thumbnail_url,
            'demo_url'=>$request->demo_url
 
        ];

        $imagesUploader =  ImageUploader::uploadmany($images , $basepath);

        // $uplader =  new Uploader;

        $product->update([
            // 'thumbnail_url'=>$uplader->upload($request)['imagesUploader'],
            // 'demo_url'=>$uplader->upload($request)['imagesUploader'],
            // 'source_url'=>$uplader->upload($request)['sourceimagefullpath']


            'thumbnail_url'=>$imagesUploader['thumbnail_url'],
            'demo_url'=>$imagesUploader['demo_url'],
        ]);

        
        return ['success'=>true , 'product' =>$product];



    }

    public function validation(Request $request)
    {
        $validator = Validator::make($request->all() , [
            'title'=>['required' , 'min:3'],
            'category_id'=>['required' , 'exists:categories,id'],
            'description'=>['required' , 'min:10'],
            'thumbnail_url'=>['required' , 'image', 'mimes:png,jpg,jpeg'],
            'demo_url'=>['required' , 'image', 'mimes:png,jpg,jpeg'],
            'price'=>['required' , 'min:10000' , 'numeric']
        ]);

        return $validator;
    }


    public function validationUpdate(Request $request)
    {
        $validator = Validator::make($request->all() , [
            'title'=>['required' , 'min:3'],
            'description'=>['required' , 'min:10'],
            'thumbnail_url'=>['required' , 'image', 'mimes:png,jpg,jpeg'],
            // 'demo_url'=>['required' , 'image', 'mimes:png,jpg,jpeg'],   
            'price'=>['required' , 'min:10000' , 'numeric']
        ]);

        return $validator;
    }


    public function edit(Request $request , $id)
    {
        if($this->validationUpdate($request)->fails())
        {
            return['success'=>false ,'errors'=>$this->validationUpdate($request)->errors()];
        }

        $product = Product::find($id);

        $product->update([
            'title'=>$request->title,
            'description'=>$request->description,
            'price'=>$request->price,
            'thumbnail_url'=>$request->thumbnail_url,
            'demo_url'=>$request->demo_url
        ]);

        return ['success'=>true , 'product' =>$product];
        
    }
    
}