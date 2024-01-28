<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organiser extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $table = 'organisers'; // Specify the correct table name
    protected $fillable = [
        'user_id',
        'address',
        'phone_number',
        'description',
    ];
}
