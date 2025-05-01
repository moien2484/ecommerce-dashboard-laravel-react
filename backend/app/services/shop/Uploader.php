<?php 

namespace App\services\shop;

use App\Models\Product;
use App\utilities\ImageUploader;
use Illuminate\Http\Request;

class Uploader
{

    public function upload(Request $request)
    {
        $product = Product::where('title' , $request->title);

        $basepath = 'products/'. $product->id . '/';
        $sourceimagefullpath = $basepath . 'source_url' . $request->source_url->getClientOriginalName();


        $images = [
            'thumbnail_url'=>$request->thumbnail_url,
            'demo_url'=>$request->demo_url

        ];

        $imagesUploader =  ImageUploader::uploadmany($images , $basepath);

        return['imagesUploader'=>$imagesUploader , 'sourceimagefullpath'=>$sourceimagefullpath];

    }

}