<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Token extends Model
{

    protected $fillable = [
        'user_id',
        'token',
        'expired_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $casts = [
        'expired_at' => 'datetime',
    ];
}
