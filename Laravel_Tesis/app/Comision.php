<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comision extends Model
{
    //
    protected $table = 'comision';
    protected $primarykey = 'id';
    public $timestamps = false;
    //
    protected $fillable = [
    'id_profesor_guia',
    'nombre_alumno',
    'profesor1_comision',
    'profesor2_comision',
    'profesor3_comision',
    'profesor1_externo',
    'profesor1_grado_academico',
    'correo_profesor1_externo',
    'institucion1',
    'sexo1',
    'profe2_externo',
    'profeo2_grado_academico',
   	'correo_profe2_externo',
   	'institucion2',
    'sexo2',
    ];
}
