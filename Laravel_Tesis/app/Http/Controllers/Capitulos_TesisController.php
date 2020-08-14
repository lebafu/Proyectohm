<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Capitulos_Tesis;
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

     public function update_nombres(Request $request,$id)
    {
        $cap=Capitulos_Tesis::findorfail($id);
        $cap->cap1=$request->cap1;
        $cap->cap2=$request->cap2;
        $cap->cap3=$rquest->cap3;
        $cap->cap4=$request->cap4;
        $cap->cap5=$request->cap5;
        $cap->cap6=$request->cap6;
        $cap->update();
        /*DB::table('capitulos')->where('id',$id)->update(['cap1' =>  $request->cap1]);
        DB::table('capitulos')->where('id',$id)->update(['cap2' =>  $request->cap2]);
        DB::table('capitulos')->where('id',$id)->update(['cap3' =>  $request->cap3]);
        DB::table('capitulos')->where('id',$id)->update(['cap4' =>  $request->cap4]);
        DB::table('capitulos')->where('id',$id)->update(['cap5' =>  $request->cap5]);
        DB::table('capitulos')->where('id',$id)->update(['cap6' =>  $request->cap6]);*/
       
    }

     public function update_avances(Request $request,$id)
    {
        //estado2==0 es que ha sido rechazado por director de tesis
        //dd($request);
        //dd($id_pk);
        /*DB::table('capitulos')->where('id',$id)->update(['cap1' =>  $request->cap1]);
        DB::table('capitulos')->where('id',$id)->update(['cap2' =>  $request->cap2]);
        DB::table('capitulos')->where('id',$id)->update(['cap3' =>  $request->cap3]);
        DB::table('capitulos')->where('id',$id)->update(['cap4' =>  $request->cap4]);
        DB::table('capitulos')->where('id',$id)->update(['cap5' =>  $request->cap5]);
        DB::table('capitulos')->where('id',$id)->update(['cap6' =>  $request->cap6]);*/
        DB::table('capitulos')->where('id',$id)->update(['avance_cap1' =>  $request->avance_cap1]);
        DB::table('capitulos')->where('id',$id)->update(['avance_cap2' =>  $request->avance_cap2]);
        DB::table('capitulos')->where('id',$id)->update(['avance_cap3' =>  $request->avance_cap3]);
        DB::table('capitulos')->where('id',$id)->update(['avance_cap4' =>  $request->avance_cap4]);
        DB::table('capitulos')->where('id',$id)->update(['avance_cap5' =>  $request->avance_cap5]);
        DB::table('capitulos')->where('id',$id)->update(['avance_cap6' =>  $request->avance_cap6]);
        DB::table('capitulos')->where('id',$id)->update(['avance_cap6' =>  $request->avance_cap6]);
        DB::table('tesis')->where('id_pk',$id)->update(['avance_general' =>  $request->avance_general]);
      
    }
}
