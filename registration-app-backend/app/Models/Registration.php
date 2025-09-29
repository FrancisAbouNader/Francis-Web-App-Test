<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    //
    protected $fillable = [
        'first_name',
        'last_name',
        'address',
        'phone_number',
        'invoice_path'
    ];
}
