<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Password;
use Closure;
use Session;
use Auth;
use DB;

class UsersController extends Controller
{
	public function index()
    {
        
        $users=DB::table('users')->get();
        echo json_encode($users);
    }

     public function create()
    {
        //
        return view('users.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|string',
            'tipo_usuario' => 'required|integer',
        ]);
 

      $ultimo_id=DB::table('users')->max('id');
        DB::table('users')->insert([
        	'id' => $ultimo_id+1,
            'name' => $request->name,
            'email' =>$request->email,
            'password' =>Hash::make($request->password),
            'tipo_usuario' => $request->tipo_usuario
        ]);

      //dd($request);
       /*$ultimo_id=DB::table('users')->max('id');
        //dd($ultimo_id);
        //dd($request->tipo_usuario);
        if($request->tipo_usuario==4){
          $nombre_secretaria=$request->name;
        //dd($nombre_secretaria);
        $cont_mayusculas_secretaria=0;
        $cont_espacios_secretaria=0;
            for($i=0;$i<strlen($nombre_secretaria);$i++)
        {
            if(($nombre_secretaria[$i]=="A" or $nombre_secretaria[$i]=="B" or $nombre_secretaria[$i]=="C" or $nombre_secretaria[$i]=="D" or $nombre_secretaria[$i]=="E" or $nombre_secretaria[$i]=="F" or $nombre_secretaria[$i]=="G" or $nombre_secretaria[$i]=="H" or $nombre_secretaria[$i]=="I" or $nombre_secretaria[$i]=="J" or $nombre_secretaria[$i]=="K" or $nombre_secretaria[$i]=="L" or $nombre_secretaria[$i]=="M" or $nombre_secretaria[$i]=="N" or $nombre_secretaria[$i]=="Ñ" or $nombre_secretaria[$i]=="O" or$nombre_secretaria[$i]=="P" or $nombre_secretaria[$i]=="Q" or $nombre_secretaria[$i]=="R" or $nombre_secretaria[$i]=="S" or $nombre_secretaria[$i]=="T" or $nombre_secretaria[$i]=="V" or $nombre_secretaria[$i]=="W" or $nombre_secretaria[$i]=="U" or $nombre_secretaria[$i]=="X" or $nombre_secretaria[$i]=="Y" or $nombre_secretaria[$i]=="Z"))
        {
              $cont_mayusculas_secretaria=$cont_mayusculas_secretaria+1;
        }
        if($nombre_secretaria[$i]==" ")
        {
              $cont_espacios_secretaria=$cont_espacios_secretaria+1;
        }
      }
      //dd($cont_espacios_secretaria);
      //dd($cont_mayusculas_secretaria);
      //Para garantizar que secretaria tenga 2 nombres y 2 apellidos.
      if($cont_espacios_secretaria!=3 or $cont_mayusculas_secretaria!=4)
      {
        return view('tesis.error_cantidad_espacios_mayusculas');
      }
    }
    if($request->tipo_usuario==3){
      $nombre_coordinador=$request->name;
       $cont_mayusculas_coordinador=0;
       $cont_espacios_coordinador=0;
    for($i=0;$i<strlen($nombre_coordinador);$i++)
        {
            if(($nombre_coordinador[$i]=="A" or $nombre_coordinador[$i]=="B" or $nombre_coordinador[$i]=="C" or $nombre_coordinador[$i]=="D" or $nombre_coordinador[$i]=="E" or $nombre_coordinador[$i]=="F" or $nombre_coordinador[$i]=="G" or $nombre_coordinador[$i]=="H" or $nombre_coordinador[$i]=="I" or $nombre_coordinador[$i]=="J" or $nombre_coordinador[$i]=="K" or $nombre_coordinador[$i]=="L" or $nombre_coordinador[$i]=="M" or $nombre_coordinador[$i]=="N" or $nombre_coordinador[$i]=="Ñ" or $nombre_coordinador[$i]=="O" or$nombre_coordinador[$i]=="P" or $nombre_coordinador[$i]=="Q" or $nombre_coordinador[$i]=="R" or $nombre_coordinador[$i]=="S" or $nombre_coordinador[$i]=="T" or $nombre_coordinador[$i]=="V" or $nombre_coordinador[$i]=="W" or $nombre_coordinador[$i]=="U" or $nombre_coordinador[$i]=="X" or $nombre_coordinador[$i]=="Y" or $nombre_coordinador[$i]=="Z"))
        {
           $cont_mayusculas_coordinador=$cont_mayusculas_coordinador+1;
        }
        if($nombre_coordinador[$i]==" ")
        {
          $cont_espacios_coordinador=$cont_espacios_coordinador+1;
        }
    }
    //Para garantizar que coordinar de tesis tenga 2 nombres y 2 apellidos
    if($cont_espacios_coordinador!=3 or $cont_mayusculas_coordinador!=4)
      {
        return view('tesis.error_cantidad_espacios_mayusculas');
      }
        }

       DB::table('users')->insert([
            'id' => $ultimo_id+1,
            'name' => $request->name,
            'email' =>$request->email,
            'password' => Hash::make($request->password),
            'tipo_usuario' =>$request->tipo_usuario,
            'sexo' =>$request->sexo,
        ]);

        $email=$request->get('email');
        $profes=DB::table('users')->where('email',$email)->get();
        //para transformar consulta en array, que pueda ser recibido por la vista, y saber 
        //a que profesor corresponderá el grado academico a seleccionar
        foreach($profes as $profesor);
                //dd($profesor->id);
        if($request->tipo_usuario==2 or $request->tipo_usuario==3){
             return view('grado_academico_create',compact('profesor'));   
        }*/


        return view('adminhome');
    }
}