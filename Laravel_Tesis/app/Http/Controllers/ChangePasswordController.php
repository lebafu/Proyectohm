<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class ChangePasswordController extends Controller
{
    //

    /*public function process(ChangePasswordRequest $request)
    {
        return $this->getPasswordResetTableRow($request);
    }

    private function getPasswordResetTableRow($request)
    {

    	return DB::table('password_resets')->where(['email' => $request->email,'token'=> $request->resetToken]);
    }*/

    public function changePassword(Request $request){

    	//echo json_encode($request);
    	if($request->password==$request->password_confirmation){
    	DB::table('users')->where('email','=',$request->email)->update(['password'=> bcrypt($request->password)]);
    	return response()->json(['data' => 'La Contraseña ha sido actualizada','res'=>1]);

    	}else{
    		return response()->json(['error' => 'CONTRASEÑA y CONFIRMATION PASSWORD son DIFERENTES','res'=> 0]);
    	}
    }
}
