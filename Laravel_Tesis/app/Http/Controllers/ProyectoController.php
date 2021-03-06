<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Proyecto;
use DB;

class ProyectoController extends Controller
{
    //
    public function index()
    {
    $proyectos=DB::table('proyectos')->orderby('id')->get();
    echo json_encode($proyectos);
    }

    public function store(Request $request)
    {
    		DB::table('proyectos')->insert([
    			'nombre' => $request->nombre]);
            
    }
    
    public function update(Request $request,$id)
    {
        $proyecto=Proyecto::findorfail($id);
        DB::table('tesis')->where('tipo_vinculacion','=','Proyecto')->where('nombre_vinculacion','=',$proyecto->nombre)->update(['nombre_vinculacion' => $request->nombre]);
        $proyecto->nombre=$request->nombre;
        $proyecto->update();
        //echo "Hola desde Update";
    }
   

    public function show($id)
    {
    
        $proyectos=DB::table('proyectos')->where('id','=',$id)->get();
        foreach($proyectos as $proyecto);
        echo json_encode($proyecto);
    }

    public function destroy($id)
    {
        DB::table('proyectos')->where('id','=',$id )->delete();
    }
}
