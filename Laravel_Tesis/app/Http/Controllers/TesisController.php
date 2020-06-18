<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Str;

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
          //return view('tesis.fecha_presentacion',compact('tesis'));  
     
        }
     
         public function update_fecha_presentacion($id, Request $request)
        {
             //dd($request);
             $tesista=DB::table('tesis')->where('id_pk',$id)->get();
             foreach($tesista as $tesis);
             //dd($tesis);
             $todas_tesis=DB::table('tesis')->get();
             DB::table('tesis')->where('id_pk', $id)->update(['fecha_presentacion_tesis' => $request->fecha_presentacion_tesis]);
             //return view('secretariahome'); 
             
        }
        //Se guarda la fecha seleccionada//

        public function verPDF($id){
          //dd($id);
          $tesista = DB::table('tesis')->where('id_pk','=',$id)->get();
          foreach($tesista as $tesis);
          $pathToFile =public_path().'\constancia_ex/'.$tesis->constancia_ex;
          return response()->file($pathToFile);
  
      }

      public function verPDF_acta($id){

        $tesista = DB::table('tesis')->where('id_pk','=',$id)->get();
        foreach($tesista as $tesis);
        $pathToFile =public_path().'\acta_ex/'.$tesis->acta_ex;
        return response()->file($pathToFile);

    }

    public function repositorio_tesis(Request $request)
    {
        //Para usar la funcion now(), se modifico en app/config/app.php 'timezone' => 'UTC' a 'America/Santiago', para que tome la hora del pais. 
        //dd($request);
        //$palabra=$request->get('palabra');
        //dd($request);
        $nombre_completo=$request->get('nombre_completo');
        $nombre_tesis=$request->get('nombre_tesis');
        $abstract=$request->get('abstract');
         $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())->where('nota_tesis','>=',4)->get();
        //dd($tesis);
        if($nombre_completo==null and $nombre_tesis==null and $abstract==null)
        {
            $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())->where('nota_tesis','>=',4)->get();
            //dd($tesis);
            foreach($tesis as $tes)
            {
                $var_titulo=$tes->nombre_tesis;
                $tes->titulo=Str::limit($var_titulo,100);
                $var=$tes->abstract;
                $tes->abstract_res=Str::limit($var,309); //variable para cortar string y mostrarlo en la vista
            }
             //return view('tesis.repositorio_tesis',compact('tesis'));
        }else{
            if($nombre_completo==null and $nombre_tesis!=null and $abstract!=null)
            {
                foreach($tesis as $tes)
            {
                $var_titulo=$tes->nombre_tesis;
                $tes->titulo=Str::limit($var_titulo,100);
                $var=$tes->abstract;
                $tes->abstract_res=Str::limit($var,309);
            }
               $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())->where('nota_tesis','>=',4)
                ->where('nombre_tesis','like',"%$nombre_tesis%")
                ->where('abstract','like',"%$abstract%")->get();
             //return view('tesis.repositorio_tesis',compact('tesis'));
            }else{
                    if($nombre_completo==null and $nombre_tesis==null and $abstract!=null)
                    {
                         $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())
                         ->where('abstract','like',"%$abstract%")
                         ->get();
                        
                        foreach($tesis as $tes)
                        {
                             $var_titulo=$tes->nombre_tesis;
                             $tes->titulo=Str::limit($var_titulo,100);
                             $var=$tes->abstract;
                             $tes->abstract_res=Str::limit($var,309);
                        }
                         //return view('tesis.repositorio_tesis',compact('tesis'));
                    }else{
                            if($nombre_completo==null and $nombre_tesis!=null and $abstract!=null)
                            {
                                 $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())
                                  ->where('nombre_tesis','like',"%$nombre_tesis%")->where('nota_tesis','>=',4)
                                 ->where('abstract','like',"%$abstract%")
                                 ->get();
                                foreach($tesis as $tes)
                                {
                                    $var_titulo=$tes->nombre_tesis;
                                    $tes->titulo=Str::limit($var_titulo,100);
                                    $var=$tes->abstract;
                                    $tes->abstract_res=Str::limit($var,309);
                                }
                                 //return view('tesis.repositorio_tesis',compact('tesis'));
                            }else{
                                if($nombre_completo!=null and $nombre_tesis==null and $abstract==null)
                                {
                                     $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())
                                     ->where('nombre_completo','like',"%$nombre_completo%")->where('nota_tesis','>=',4)
                                    ->get();
                                    //dd($request);
                                    //dd($tesis);
                                foreach($tesis as $tes)
                                {
                                    $var_titulo=$tes->nombre_tesis;
                                    $tes->titulo=Str::limit($var_titulo,100);
                                    $var=$tes->abstract;
                                   $tes->abstract_res=Str::limit($var,309);
                                }
                                 //return view('tesis.repositorio_tesis',compact('tesis'));
                                }else{
                                    if($nombre_completo==null and $nombre_tesis!=null and $abstract==null)
                                    {
                                         $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())
                                         ->where('nota_tesis','>=',4)
                                         ->where('nombre_tesis','like',"%$nombre_tesis%")->get();
                                         //dd($tesis);
                                             foreach($tesis as $tes)
                                            {
                                             $var_titulo=$tes->nombre_tesis;
                                             $tes->titulo=Str::limit($var_titulo,100);
                                             $var=$tes->abstract;
                                             $tes->abstract_res=Str::limit($var,309);
                                            }
                                             return view('tesis.repositorio_tesis',compact('tesis'));
                                    }else{
                                        if($nombre_completo!=null and $nombre_tesis!=null and $abstract==null)
                                        {
                                        $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())
                                        ->where('nota_tesis','>=',4)
                                         ->where('nombre_completo','like',"%$nombre_completo%")
                                         ->where('nombre_tesis','like',"%$nombre_tesis%")->get();;
                                        }
                                            foreach($tesis as $tes)
                                            {
                                                $var_titulo=$tes->nombre_tesis;
                                                $tes->titulo=Str::limit($var_titulo,100);
                                                $var=$tes->abstract;
                                                $tes->abstract_res=Str::limit($var,309);
                                            }
                                            //return view('tesis.repositorio_tesis',compact('tesis'));
                                            

                                    }
                                        }

                                }
                            }
                    }      
            }
        $tesis=DB::table('tesis')->where('fecha_presentacion_tesis','<',now())
        
        ->where('nombre_completo','like',"%$nombre_completo%")
        ->where('nombre_tesis','like',"%$nombre_tesis%")
        ->where('abstract','like',"%$abstract%")
        //->nombre_completo($nombre_completo)
        //->nombre_tesis($nombre_tesis)
        //->abstract($abstract)
        //->paginate(7);
        ->get();
        foreach($tesis as $tes)
        {
        $var_titulo=$tes->nombre_tesis;
        $tes->titulo=Str::limit($var_titulo,100);
        $var=$tes->abstract;
        $tes->abstract_res=Str::limit($var,309);
        }
        echo json_encode($tesis);
    }

        public function show($id){
            $tesistas=DB::table('tesis')->where('id',$id)->get();
            foreach($tesistas as $tesis);
            echo json_encode($tesis);
        }
    
  
}
