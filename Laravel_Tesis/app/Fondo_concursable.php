<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fondo_concursable extends Model
{
    //
    protected $table = 'fondo_concursable';
    protected $primarykey = 'id';
    protected $fillable =['nombre'];
    public $timestamps = false;
}
