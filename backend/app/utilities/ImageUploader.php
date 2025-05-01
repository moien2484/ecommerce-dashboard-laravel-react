<?php 

namespace App\utilities;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ImageUploader
{
    public static function uploadmany($images , $path , $disktype='public_storage')
    {
        $imagespath =[];

        foreach ($images as $key => $image){
            $fullpath = $path . $key . '_' . $image->getClientOriginalName();
            Storage::disk($disktype)->put($fullpath , File::get($image));

            $imagespath +=[$key=>$fullpath];
            
        }

        return  $imagespath;

        
    }
}