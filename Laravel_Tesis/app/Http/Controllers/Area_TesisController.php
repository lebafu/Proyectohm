<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\User;
use App\Tesis;
use App\Comision;
use App\Area_tesis;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Contracts\Auth\Guard;
use iio\libmergepdf\Merger;
use iio\libmergepdf\Pages;
use PDFMerger;
use DB;
use Auth;
use Closure;
use Session;

class Area_TesisController extends Controller
{
    //
    public function index()
    {
    $areaT=DB::table('area_tesis')->orderby('id')->get();
    echo json_encode($areaT);
    }

    /*public function create()
    {
   		return view('area_tesis.create'); 	
    }

     public function edit($id)
        {
        //dd($id);
            //$user = DB::table('users')->where('id', $id)->first();
            //return view('users.edit',compact('user'));
        $area_tesis= DB::table('area_tesis')->where('id','=',$id)->first();
        //$tes->estado1=2;
        //dd($area_tesis);
        return view('area_tesis.edit',compact('area_tesis'));
            //return $user; 
        }*/

     public function update(Request $request,$id)
    {
        //dd($id);
        //dd($request);
        $area_tesis=Area_tesis::findorfail($id);
        //dd($area_tesis);
        $nombre_actual_area_tesis=$area_tesis->area_tesis;
        //dd($nombre_actual_area_tesis);
        $area_tesis->area_tesis=$request->area_tesis;
        $area_tesis->update();
        DB::table('tesis')->where('area_tesis', $nombre_actual_area_tesis)->update(['area_tesis' => $request->area_tesis]);
    }

    public function destroy($id)
    {
    	DB::table('area_tesis')->where('id','=',$id )->delete();
    }

    /*public function update($id, Request $request)
    {
        $area_tesis=DB::table('area_tesis')->where('area_tesis','=',$request->area_tesis)->get();
        $tesis=Tesis::find($id);
        $tes->fecha_presentacion_tesis=$request->fecha_presentacion_tesis;
        $tes->update();
            return view('alumnohome'); 
    }*/


    public function store(Request $request)
    {
    		DB::table('area_tesis')->insert([
    			'area_tesis' => $request->area_tesis]);
            //return view('adminhome');
    
    	}
    	

    public function show($id)
    {
    
        $areas_tesis=DB::table('area_tesis')->where('id','=',$id)->get();
        foreach($areas_tesis as $area_tesis);
        echo json_encode($area_tesis);
    }

}
