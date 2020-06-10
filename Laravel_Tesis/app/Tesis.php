<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tesis extends Model
{
    //
    protected $table = 'tesis';
    protected $primarykey = 'id';
    public $timestamps = false;
    //
    protected $fillable = [
    'nombre_completo',
    'nombre_completo2',
    'rut',
    'rut2',
    'profesor_guia',
    'ano_ingreso',
    'ano_ingreso2',
    'telefono1',
    'telefono2',
    'carrera',
    'tipo',
    'nombre_vinculacion',
    'tipo_vinculacion',
    'nombre_tesis',
    'area_tesis',
    'descripcion',
    'objetivos',
    'contribucion',
    'observacion',
    'estado1', //para decir si esta con el alumno, profesor o director de tesis
    'estado2', //Para decir si esta aprobado o desaprobado segun el director de tesis.
    'estado3',
    'fecha_peticion',
    'nota_pendiente',
    'nota_prorroga',
    'constancia_ex',
    'acta_ex',
    'fecha_presentacion_tesis',
    'publicar',
    'abstract',
    'estado4',
    'estado5',
    'estado6',
    'estado7',
    'codigo_postal1',
    'codigo_postal2',
    'avance_general',
    'reunion',
    ];

}
