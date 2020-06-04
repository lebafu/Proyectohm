<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area_Tesis extends Model
{
    //
    protected $table = 'area_tesis';
    protected $primarykey = 'id';
    protected $fillable =['area_tesis'];
    public $timestamps = false;
}
