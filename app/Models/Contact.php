<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email','landline','mobile','favourite'];

    protected $casts = [
        'favourite' => 'boolean'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
