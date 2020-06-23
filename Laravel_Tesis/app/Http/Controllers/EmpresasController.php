<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Empresa;

class EmpresasController extends Controller
{
    //
    public function index()
    {
    $empresas=DB::table('empresas')->orderby('id')->get();
    echo json_encode($empresas);
    }

    public function store(Request $request)
    {
    		DB::table('empresas')->insert([
    			'nombre' => $request->nombre]);
            
    }

    public function update(Request $request,$id)
    {
        $empresa=Empresa::findorfail($id);
        $empresa->nombre=$request->nombre;
        $empresa->update();
    }

    public function show($id)
    {
    
        $empresas=DB::table('empresas')->where('id','=',$id)->get();
        foreach($empresas as $empresa);
        echo json_encode($empresa);
    }

    public function destroy($id)
    {
    	DB::table('empresas')->where('id','=',$id )->delete();
    }
}
