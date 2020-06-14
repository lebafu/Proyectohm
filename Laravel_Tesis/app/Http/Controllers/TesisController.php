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
             
        }
        //Se guarda la fecha seleccionada//

        public function verPDF($id){
          //dd($id);
          $tesista = DB::table('tesis')->where('id_pk','=',$id)->get();
          foreach($tesista as $tesis);
          $pathToFile =public_path().'\constancia_ex/'.$tesis->constancia_ex;
          dd($pathToFile);
          return response()->json([($pathToFile)]);
  
      }

      public function verPDF_acta($id){

        $tesista = DB::table('tesis')->where('id_pk','=',$id)->get();
        foreach($tesista as $tesis);
        $pathToFile =public_path().'\acta_ex/'.$tesis->acta_ex;
        return response()->file($pathToFile);

    }
  
}
