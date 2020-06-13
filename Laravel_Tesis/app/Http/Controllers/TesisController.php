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

        public function fecha_presentacion($id)
        {
          //dd($id);
          $tesista=DB::table('tesis')->where('id_pk',$id)->get();
          foreach($tesista as $tesis);
         // dd($tesis);
          //dd($tesis->id);
          return view('tesis.fecha_presentacion',compact('tesis'));  
     
        }
     
         public function update_fecha_presentacion($id, Request $request)
        {
             //dd($request);
             $tesista=DB::table('tesis')->where('id_pk',$id)->get();
             foreach($tesista as $tesis);
             //dd($tesis);
             $todas_tesis=DB::table('tesis')->get();
             DB::table('tesis')->where('id_pk', $id)->update(['fecha_presentacion_tesis' => $request->fecha_presentacion_tesis]);
             return view('secretariahome'); 
             //echo gettype($request->fecha_presentacion); 
             /*if(whereTime($request->fecha_presentacion,'=','15:00:00') or (whereTime($request->fecha_presentacion, '=' ,'16:00:00')) or   (whereTime(,$request->fecha_presentacion,'=','17:00:00')) or (whereTime($request->fecha_presentacion,'=','18:00:00')) or  (whereTime($request->fecha_presentacion,'=','19:00:00'))or(whereTime($request->fecha_presentacion,'=','20:00:00')) or (whereTime($request->fecha_presentacion,'=','21:00:00'))) */
             /*$cont=0;
             foreach($todas_tesis as $tesis)
             {
                     if($tesis->fecha_presentacion_tesis==$request->fecha_presentacion_tesis)
                          {
                          $cont=$cont+1;
             //dd($tes);
                          }
             }
             if($cont==0){
             $tes->fecha_presentacion_tesis=$request->fecha_presentacion_tesis;
             $tes->update();
             return view('alumnohome');
             }else{
                 $tesis=Tesis::find($id);
                 return view('tesis.fecha_presentacion',compact('tesis'));  
             }*/
        }
        //Se guarda la fecha seleccionada//
}
