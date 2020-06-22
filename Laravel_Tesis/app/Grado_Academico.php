<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grado_Academico extends Model
{
    protected $table = 'grado_academico_profesor_planta';
    protected $primarykey = 'id';
    protected $fillable =['estado','grado_academico'];
    public $timestamps = false;
}
