<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class Capitulos_TesisController extends Controller
{
    //
    public function lista_capitulos_tesis($id)
    {
   $tesistas=DB::table('tesis')->where('id_pk',$id)->join('capitulos','tesis.id_pk','=','capitulos.id')->orderby('fecha','desc')->get();
    	//dd($tesistas->isEmpty());
    	//dd($id);
    	//dd($id);
    	$tes=DB::table('tesis')->where('id_pk',$id)->get();
    	foreach($tes as $t);
    	$tes=DB::table('tesis')->where('id_pk',$id)->get()->first();
    	//foreach($tes as $t);
    	if($tes->acta_ex!=null)
    	{
    	 return response()->json(['mensaje'=>'capitulos no_existen_capitulos']);
    	} 
    	echo json_encode($tesistas); 
    }
}
