<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Capitulos_Tesis extends Model
{
    //
    protected $table = 'capitulos';
    protected $primarykey = 'id';
    public $timestamps = false;
    protected $fillable = [
    'cap1',
    'cap2',
    'cap3',
    'cap4',
    'cap5',
    'cap6',
    'avance_cap1',
    'avance_cap2',
    'avance_cap3',
    'avance_cap4',
    'avance_cap5',
    'avance_cap6',
    'fecha'
];
}
