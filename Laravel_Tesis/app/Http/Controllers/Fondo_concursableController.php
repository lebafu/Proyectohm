<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fondo_concursable;
use DB;

class Fondo_concursableController extends Controller
{
    //
    public function index()
    {
    $fondos_concursables=DB::table('fondo_concursable')->orderby('id')->get();
    echo json_encode($fondos_concursables);
    }

    public function store(Request $request)
    {
    		DB::table('fondo_concursable')->insert([
    			'nombre' => $request->nombre]);
            
    }

        public function update(Request $request,$id)
        {
            $fondo_concursable=Fondo_concursable::findorfail($id);
            $fondo_concursable->nombre=$request->nombre;
            $fondo_concursable->update();
        }

        public function show($id)
        {
        
            $fondos_concursables=DB::table('fondo_concursable')->where('id','=',$id)->get();
            foreach($fondos_concursables as $fondo_concursable);
            echo json_encode($fondo_concursable);
        }

        public function destroy($id)
        {
            DB::table('fondo_concursable')->where('id','=',$id )->delete();
        }
}
