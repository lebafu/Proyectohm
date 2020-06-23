<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    protected $table = 'proyectos';
    protected $primarykey = 'id';
    protected $fillable =['nombre'];
    public $timestamps = false;
}
