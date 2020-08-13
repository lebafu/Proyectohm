<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Comunidad;

class ComunidadController extends Controller
{
    //
    public function index()
    {
    $comunidades=DB::table('comunidad')->orderby('id')->get();
    echo json_encode($comunidades);
    }

    public function store(Request $request)
    {
    		DB::table('comunidad')->insert([
    			'nombre' => $request->nombre]);
            
    }

    public function update(Request $request,$id)
    {
        
        $comunidad=Comunidad::findorfail($id);
        DB::table('tesis')->where('tipo_vinculacion','=','Comunidad')->where('nombre_vinculacion','=',$comunidad->nombre)->update(['nombre_vinculacion' => $request->nombre]);
        $comunidad->nombre=$request->nombre;
        $comunidad->update();
        
    }

    public function show($id)
    {
    
        $comunidades=DB::table('comunidad')->where('id','=',$id)->get();
        foreach($comunidades as $comunidad);
        echo json_encode($comunidad);
    }

    public function destroy($id)
    {
    	DB::table('comunidad')->where('id','=',$id )->delete();
    }
}
