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
        /*$request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|string',
            'tipo_usuario' => 'required|integer',
        ]);*/
 
       $ultimo_id=DB::table('users')->max('id');
       /*$user=new User;
       $user->id=$ultimo_id+1;
       $user->name=$request->get('name');
       $user->email=$request->get('email');
       $user->password=Hash::make($request->get('password'));
       $user->tipo_usuario=$request->get('tipo_usuario');
       $user->sexo=$request->get('sexo');
       $user->save();
       echo json_encode($user);*/
       if($request->tipo_usuario=="Administrador"){
           $num=0;
       }elseif($request->tipo_usuario=="Profesor"){
           $num=2;
       }elseif($request->tipo_usuario=="Director de Tesis"){
           $num=3;
       }elseif($request->tipo_usuario=="Secretaria"){
           $num=4;
       }
      $ultimo_id=DB::table('users')->max('id');
        DB::table('users')->insert([
        	'id' => $ultimo_id+1,
            'name' => $request->name,
            'email' =>$request->email,
            'password' =>Hash::make($request->password),
            'tipo_usuario' => $num,
            'sexo' => $request->sexo
        ]);

       }

       public function asignar_director_escuela(Request $request)
       {
        
        /*$director_escuela_existe=DB::table('users')->where('director_escuela','=',1)->get();
        dd($director_escuela_existe);
        if($director_escuela_existe->isEmpty()==true) //No existe director de escuela
        {
        $id=$director_escuela_existe->id;
        $user=User::find($id);
        $user->director_escuela=1;
        $user->save();
        //dd($user);
        }else{
            if($director_escuela_existe->isEmpty()==false) //Ya existe director_escuela;
            {
             //dd($director_escuela);
             DB::table('users')->where('director_escuela','=',1)->update(['director_escuela' => 0]);
             $id=$director_escuela_existe->id;
            $user=User::find($id);
             $user->director_escuela=1;
             //dd($user->director_escuela);
             $user->save();
            }
        }*/
        DB::table('users')->where('director_escuela','=',1)->update(['director_escuela' => 0]);
        
        //$profe=DB::table('users')->where('name','=', $request->name)->get();
        DB::table('users')->where('name','=',$request->name)->update(['director_escuela'=>1]);


    }
        public function update(Request $request,$id)
    {

        $user=User::find($id);
        //$nombre_actual=$user->name;
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->sexo=$request->input('sexo');
        $user->update();
        //echo json_enconde($user);
         //$email=$request->get('email');
     
    }

    public function show($id){
    
        $users=DB::table('users')->where('id','=',$id)->get();
        foreach($users as $user);
        echo json_encode($user);
    }
    public function destroy($id)
    {
    DB::table('users')->where('id','=',$id)->delete();
    }

    public function profesores(){
        $profesores=DB::table('users')->where('tipo_usuario','=',2)->get();
        echo json_encode($profesores);
        //return response()->json([$profesores]);
    }
}