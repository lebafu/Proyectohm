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
        $input = $request->only('email', 'password');
            $token = null;

            if (!$token = JWTAuth::attempt($input)) {
                return response()->json([[
                    'estado' => false,
                    'mensaje' => 'Email o Contrasena invalida, intente nuevamente'
                ]], 401);
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
            'user' => auth()->user()->name
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
       $user->tipo_usuario=1; 
       //echo json_encode($user);
       $user->save();

       return response()->json([[
        'estado'   =>  true,
        'mensaje' => 'Usuario registrado correctamente',
        'data' =>  $user
    ]], 200);
    }
}


