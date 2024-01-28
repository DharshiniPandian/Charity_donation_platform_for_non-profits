<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDocument extends Model
{
    use HasFactory;

    protected $table = 'organisers_certificate';

    protected $fillable = [
        'user_id',
        'profile_photo_base64',
        'certificate_base64',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
