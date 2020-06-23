<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comunidad extends Model
{
    //
    protected $table = 'comunidad';
    protected $primarykey = 'id';
    protected $fillable =['nombre'];
    public $timestamps = false;
}
