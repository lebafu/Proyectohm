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
      $ultimo_id=DB::table('users')->max('id');
        DB::table('users')->insert([
        	'id' => $ultimo_id+1,
            'name' => $request->name,
            'email' =>$request->email,
            'password' =>Hash::make($request->password),
            'tipo_usuario' => 1,
            'sexo' => $request->sexo
        ]);

       }

        public function update(Request $request,$id)
    {

    	//dd($id);
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
}