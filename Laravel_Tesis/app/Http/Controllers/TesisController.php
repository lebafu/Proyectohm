<?php

namespace App\Http\Controllers;
use JWTAuth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use App\Tesis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Str;


class TesisController extends Controller
{




    public function store(Request $request)
    {

        //echo ($request->get('rut'));
    
    if(($request->nombre_completo2==null and $request->rut2!=null and $request->ano_ingreso2!=null and $request->telefono2!=null)or($request->nombre_completo2!=null and $request->rut2==null and $request->ano_ingreso2!=null and $request->telefono2!=null)or($request->nombre_completo2!=null and $request->rut2!=null and $request->ano_ingreso2==null and $request->telefono2!=null)or($request->nombre_completo2!=null and $request->rut2!=null and $request->ano_ingreso2!=null and $request->telefono2==null)or($request->nombre_completo2!=null and $request->rut2==null and $request->ano_ingreso2==null and $request->telefono2!=null)or($request->nombre_completo2==null and $request->rut2!=null and $request->ano_ingreso2==null and $request->telefono2!=null)or($request->nombre_completo2==null and $request->rut2!=null and $request->ano_ingreso2!=null and $request->telefono2==null)or($request->nombre_completo2==null and $request->rut2==null and $request->ano_ingreso2!=null and $request->telefono2!=null)or($request->nombre_completo2==null and $request->rut2==null and $request->ano_ingreso2==null and $request->telefono2!=null)or($request->nombre_completo2==null and $request->rut2==null and $request->ano_ingreso2!=null  and $request->telefono2==null)or($request->nombre_completo2==null and $request->rut2!=null and $request->ano_ingreso2==null and $request->telefono2==null)or($request->nombre_completo2!=null and $request->rut2==null and $request->ano_ingreso2==null and $request->telefono2==null))
    {
    //dd($request->nombre_completo2);
        //return json('error_campos');
    }

        //dd($request);
        $users=DB::table('users')->where('name','=',$request->nombre_completo)->get();
        if($users==null){
            response()->json([
                'mensaje' => 'El alumno no existe o es incorrecto']);
        }
        //echo ($users);
        foreach($users as $user);
        $id_user=$user->id;
        //echo json_encode($users);
        DB::table('tesis')->insert([
            'id'=> $id_user,
            'nombre_completo' => $request->nombre_completo,
            'nombre_completo2' => $request->nombre_completo2,
            'rut' =>$request->rut,
            'rut2' =>$request->rut2,
            'ano_ingreso' => $request->ano_ingreso,
            'ano_ingreso2' => $request->ano_ingreso2,
             'telefono1' => $request->telefono1,
             'telefono2' => $request->telefono2,
            'profesor_guia' =>$request->profesor_guia,
            'nombre_tesis' => $request->nombre_tesis,
            'area_tesis' => $request->area_tesis,
            'carrera' => $request->carrera,
            'tipo_vinculacion' => $request->tipo_vinculacion,
            'nombre_vinculacion' =>$request->nombre_vinculacion,
            'tipo'=> $request->tipo,
            'descripcion' =>$request->descripcion,
            'objetivos' => $request->objetivos,
            'contribucion'=> $request->contribucion,
            'estado1' => 1,
            'estado2' => 0
        ]);

    }

    
//}

    /*if($user->tipo_usuario==1 and $request->nombre_completo2==null and $request->rut2==null and $request->ano_ingreso2==null){ 
        $user->name=$request->nombre_completo;
        $user->save();
    foreach($rut1 as $rut)
    {
        if(($rut->rut==$request->rut2 and $tesista1->nota_tesis>4) or ($rut->rut==$request->rut2 and $tesista1->nota_tesis==null)){
            return view('tesis.error_rut');
        }
    }

    foreach($rut2 as $rut)
    {
        if(($rut->rut==$request->rut2 and $tesista1->nota_tesis>4) or ($rut->rut==$request->rut2 and $tesista1->nota_tesis==null)){
            return view('tesis.error_rut');
        }
    }*/
       /* DB::table('tesis')->insert([
            'id' => $id,
            'nombre_completo' => $request->nombre_completo,
            'rut' =>$request->rut,
            'ano_ingreso' => $request->ano_ingreso,
            'telefono1'=> $request->telefono1,
            'profesor_guia' =>$request->profesor_guia,
            'nombre_tesis' => $request->nombre_tesis,
            'area_tesis' => $request->area_tesis,
            'carrera' => $request->carrera,
            'tipo_vinculacion' => $request->tipo_vinculacion,
            'nombre_vinculacion' =>$request->nombre_vinculacion,
            'tipo'=> $request->tipo,
            'descripcion' =>$request->descripcion,
            'objetivos' => $request->objetivos,
            'contribucion'=> $request->contribucion,
        ]);*/





//return  view('alumnohome');


    public function update(Request $request,$id)
    {
        $tesis=DB::table('tesis')->where('id_pk',$id)->get();
        foreach($tesis as $tes);
        //dd($tes);
        if($tes->estado1==1  or ($tes->estado1==2 and $tes->estado2=null))
        {
        $tes->nombre_completo=$request->get('nombre_completo');
        DB::table('tesis')->where('id_pk',$id)->update(['nombre_completo' =>  $tes->nombre_completo]);
        $tes->rut=$request->get('rut');
        DB::table('tesis')->where('id_pk',$id)->update(['rut' =>  $tes->rut]);
        $tes->ano_ingreso=$request->get('ano_ingreso');
        DB::table('tesis')->where('id_pk',$id)->update(['ano_ingreso' =>  $tes->ano_ingreso]);
        //En caso de que se ingresen los datos del segundo alumno tesista
        if($request->get('nombre_completo2')!=null){
            $tes->nombre_completo2=$request->get('nombre_completo2');
            DB::table('tesis')->where('id_pk',$id)->update(['nombre_completo2' =>  $tes->nombre_completo2]);
        }
         if($request->get('rut2')!=null){
            $tes->rut2=$request->get('rut2');
            DB::table('tesis')->where('id_pk',$id)->update(['rut2' =>  $tes->rut2]);
        }
         if($request->get('ano_ingreso2')!=null){
            $tes->ano_ingreso2=$request->get('ano_ingreso2');
            DB::table('tesis')->where('id_pk',$id)->update(['ano_ingreso2' =>  $tes->ano_ingreso2]);
        }
         if($request->get('telefono2')!=null){
            $tes->telefono2=$request->get('telefono2');
            DB::table('tesis')->where('id_pk',$id)->update(['telefono2' =>  $tes->telefono2]);
        }
        $tes->profesor_guia=$request->get('profesor_guia');
        DB::table('tesis')->where('id_pk',$id)->update(['profesor_guia' =>  $tes->profesor_guia]);
        $tes->nombre_tesis=$request->get('nombre_tesis');
        DB::table('tesis')->where('id_pk',$id)->update(['nombre_tesis' =>  $tes->nombre_tesis]);
        $tes->area_tesis=$request->get('area_tesis');
        DB::table('tesis')->where('id_pk',$id)->update(['area_tesis' =>  $tes->area_tesis]);
        $tes->carrera=$request->get('carrera');
        DB::table('tesis')->where('id_pk',$id)->update(['carrera' =>  $tes->carrera]);
        $tes->telefono1=$request->get('telefono1');
        DB::table('tesis')->where('id_pk',$id)->update(['telefono1' =>  $tes->telefono1]);
        $tes->tipo_vinculacion=$request->get('tipo_vinculacion');
        DB::table('tesis')->where('id_pk',$id)->update(['tipo_vinculacion' =>  $tes->tipo_vinculacion]);
        $tes->nombre_vinculacion=$request->get('nombre_vinculacion');
        DB::table('tesis')->where('id_pk',$id)->update(['nombre_vinculacion' =>  $tes->nombre_vinculacion]);
        $tes->tipo=$request->get('tipo');
        DB::table('tesis')->where('id_pk',$id)->update(['tipo' =>  $tes->tipo]);
        $tes->descripcion=$request->get('descripcion');
        DB::table('tesis')->where('id_pk',$id)->update(['descripcion' =>  $tes->descripcion]);
        $tes->objetivos=$request->get('objetivos');
        DB::table('tesis')->where('id_pk',$id)->update(['objetivos' =>  $tes->objetivos]);
        $tes->contribucion=$request->get('contribucion');
        DB::table('tesis')->where('id_pk',$id)->update(['contribucion' =>  $tes->contribucion]);
        $user=User::findorfail($tes->id);
        $user->name=$tes->nombre_completo;
        $user->update();
        //return view('alumnohome');
        }else{
             //return back()->with('status','El registro de tesis ha fallado');
        }
    }

    public function index1($id)
    {
        //echo json_encode('HOLA');
        $user=User::findorfail($id);
        //echo json_encode($alumno);
        $profes=DB::table('users')->where('tipo_usuario','=',2)->get();
        //dd($id);
        if($id==null){
            return('tesis.sinpermiso');
        }
        $user=User::findorfail($id);
        //dd($user);
        $tesistas=DB::table('tesis')->where('nombre_completo','=',$user->name)->orwhere('nombre_completo2','=',$user->name)->get();
        //dd($tesistas);

          $j=0;
          foreach($tesistas as $tesista);
        $area_tesis=DB::table('area_tesis')->get();
        $empresas=DB::table('empresas')->get();
        $comunidads=DB::table('comunidad')->get();
        $fcs=DB::table('fondo_concursable')->get();
        $proyectos=DB::table('proyectos')->get();
        //dd($area_tesis);
        //dd($nota_tesis);
        //dd($tesistas->isEmpty());
        //En caso de que no hayan tesis inscritas, ocurre que se redirecciona al formulario de inscribir tesis.
        if($tesistas->isEmpty()==true){
        //return view('tesis.create',compact('alumno','profes','area_tesis','empresas','comunidads','fcs','proyectos'));
        }else{
            //dd($tesistas->isEmpty());
            if($tesistas->isEmpty()==false){
                //En caso de que si haya tesis inscritas para el alumno logueado, se mostrará la lista con las tesis inscritas de este alumno.
            //return view('tesis.index1',compact('tesistas','user'));
                }
        }
        echo json_encode($tesistas);

    }

    

    public function index_al_sec(){
        $tesistas=DB::table('tesis')->where('estado1','=',4)->where('estado2','=',1)->get();
        //echo json_encode($tesistas);
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

        public function index_titulados_sec(){
            $tesistas=DB::table('tesis')->where('estado1','=',4)->where('estado2','=',1)->where('nota_tesis','>=',4)->select('tesis.id_pk','tesis.id','tesis.nombre_completo','tesis.nombre_completo2','tesis.profesor_guia')->get();
            echo json_encode($tesistas);
        }

        public function show($id){
            $tesistas=DB::table('tesis')->where('id',$id)->get();
            foreach($tesistas as $tesis);
            echo json_encode($tesis);
        }
    
        public function destroy($id)
        {
            DB::table('tesis')->where('id_pk','=',$id)->delete();
        }

       

        
        
  
}
