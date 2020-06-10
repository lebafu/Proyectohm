<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;

class TesisController extends Controller
{
    //
    public function index_al_sec(){
        $tesistas=DB::table('tesis')->where('estado1','=',4)->where('estado2','=',1)->get();
        echo json_encode($tesistas);
        }
}
