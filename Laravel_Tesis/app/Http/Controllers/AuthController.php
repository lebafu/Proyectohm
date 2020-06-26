<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\User;

class AuthController extends Controller
{

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    

    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password does\'t exist'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'id' => auth()->user()->id,
            'user' => auth()->user()->name,
            'tipo_usuario' => auth()->user()->tipo_usuario,
            'director_escuela' => auth()->user()->director_escuela,
        ]);
    }
    
    //Registro de alumno
    public function signup(Request $request){
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
       $user=new User();
       $user->id=$ultimo_id+1;
       $user->name=$request->name;
       $user->email=$request->email;
       $user->password=Hash::make($request->password);
       $user->sexo=$request->sexo;
       $user->token=$request->token;
       $user->tipo_usuario=1; 
       //echo json_encode($user);
       $user->save();

       return $this->login($request);
    }

    public function index1()
    {
        //$user_data=JWTAuth::toUser($this->respondWithToken($token));
        $user=$this->me();
        echo json_encode($user);
        $id=$user->id;
        $alumno=User::findorfail($id);
        //echo json_encode($alumno);
        $profes=DB::table('users')->where('tipo_usuario','=',2)->get();
        //dd($id);
        if($id==null){
            return('tesis.sinpermiso');
        }
        $user=User::findorfail($id);
        //dd($user);
        $tesistas=DB::table('tesis')->where('nombre_completo','=',$user->name)->orwhere('nombre_completo2','=',$user->name)->paginate(7);
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

}


