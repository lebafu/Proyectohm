<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => []], function () {
    Route::post('/login', 'AuthController@login'); 
    Route::post('/signup', 'AuthController@signup');
    Route::post('/logout', 'AuthController@logout');
    Route::post('refresh',  'AuthController@refresh');
    Route::post('/me', 'AuthController@me');
   //Route::post('/sendPasswordResetLink','ResetPasswordController@sendPasswordResetLink');
   Route::post('/sendPasswordResetLink','ResetPasswordController@sendPasswordResetLink');
   Route::post('/changePassword','ChangePasswordController@changePassword');
   
});
//Route::post('login', [ 'as' => 'login', 'uses' => 'AuthController@login']); 
//Capitulos de Tesis
Route::get('/mostrar_capitulos_tesis/{id}', 'Capitulos_TesisController@lista_capitulos_tesis');
Route::put('/actualizarcapitulosnombres{capitulo}','Capitulos_TesisController@update_nombres');
Route::put('/actualizarcapitulosavances{capitulo}','Capitulos_TesisController@update_avances');


//RUTAS USERS
//Route::resource('users','UsersController');
Route::get('users', 'UsersController@index');
Route::get('/nombre_alumno/{id}', 'UsersController@getNombreAlumno');
Route::get('profesores', 'UsersController@profesores');
Route::get('users{users}', 'UsersController@edit');
Route::get('/users/create', 'UsersController@create');
Route::get('usersshow', 'UsersController@show');
Route::post('/users','UsersController@store');
Route::post('/director_escuela','UsersController@asignar_director_escuela');
Route::put('/users/{users}','UsersController@update');
Route::delete('/users/{id}','UsersController@destroy');
Route::get('profesores', 'UsersController@index_profesores');
Route::get('/docentes/{id}', 'UsersController@rol');


Route::get('area_tesis', 'Area_TesisController@index');
Route::put('/area_tesis/{area_tesis}','Area_TesisController@update');
Route::get('area_tesis{area_tesis}', 'Area_TesisController@edit');
Route::get('/area_tesis/create', 'Area_TesisController@create');
Route::get('area_tesis{id}', 'Area_TesisController@show');
Route::post('/area_tesis','Area_TesisController@store');
Route::delete('/area_tesis/{id}','Area_TesisController@destroy');

Route::post('/tesis','TesisController@store')->name('tesis.store');
Route::get('/tesis_actual/{id}','TesisController@tesis_actual')->name('tesis.tesis_actual');
Route::get('/index_al_sec', 'TesisController@index_al_sec');
Route::get('/index_titulados_sec', 'TesisController@index_titulados_sec');
Route::get('/constancia_ex_ver/{id}', 'TesisController@verPDF')->name('verPDF');
Route::get('/acta_ex_ver/{id}', 'TesisController@verPDF_acta')->name('verPDF_acta');

Route::get('/fecha_presentacion/{tesis}', 'TesisController@fecha_presentacion')->name('tesis.fecha_presentacion');
Route::put('/update_fecha_presentacion/{tesis}','TesisController@update_fecha_presentacion')->name('tesis.update_fecha_presentacion');

Route::get('/repositorio_tesis', 'TesisController@repositorio_tesis');
Route::get('/tesis/{id_pk}', 'TesisController@getTesis')->name('tesis.getTesis');
Route::get('/tesis_alumno_solicitud/{id}', 'TesisController@index1')->name('tesis.index1');
Route::put('/tesis/{tesis}','TesisController@update');
Route::put('/tesis_editada_profesor/{tesis}','TesisController@update2');
Route::put('/tesis3/{tesis}','TesisController@u');
Route::get('/tesis_editada_profesor/{id_pk}','TesisController@getTCC');
Route::delete('/tesis/{id}','TesisController@destroy');

Route::get('/tesis_inscritas','TesisController@todas_tesis_inscritas');


Route::get('/comunidades', 'ComunidadController@index');
Route::get('/empresas', 'EmpresasController@index');
Route::get('/fondos_concursables', 'Fondo_concursableController@index');
Route::get('/proyectos', 'ProyectoController@index');

Route::post('/comunidades', 'ComunidadController@store');
Route::post('/empresas', 'EmpresasController@store');
Route::post('/fondos_concursables', 'Fondo_concursableController@store');
Route::post('/proyectos', 'ProyectoController@store');

Route::get('/comunidad{comunidad}', 'ComunidadController@edit');
Route::get('/empresa{empresas}', 'EmpresasController@edit');
Route::get('/fondo_concursable{fondo_concursables}', 'Fondo_concursableController@edit');
Route::get('/proyecto{proyectos}', 'EmpresasController@edit');

Route::put('/comunidad/{comunidad}','ComunidadController@update');
Route::put('/empresa/{empresa}','EmpresasController@update');
Route::put('/fondo_concursable/{fondo_concursable}','Fondo_concursableController@update');
Route::put('/proyecto/{proyecto}','ProyectoController@update');

Route::get('/comunidad{id}', 'ComunidadController@show');
Route::get('/empresa{id}', 'EmpresasController@show');
Route::get('/fondo_concursable{id}', 'Fondo_concursableController@show');
Route::get('/proyecto/{id}', 'ProyectoController@show');

Route::delete('/comunidad/{id}','ComunidadController@destroy');
Route::delete('/empresa/{id}','EmpresasController@destroy');
Route::delete('/fondo_concursable/{id}','Fondo_concursableController@destroy');
Route::delete('/proyecto/{id}','ProyectoController@destroy');

Route::get('/tesis_comision_profesor/{id}','TesisController@tesis_comision_profesor');
Route::get('/tesis_inscritas_profesor/{id}','TesisController@tesis_inscritas_profesor');
Route::get('/tesis_espera_profesor/{id}', 'TesisController@tesis_espera_profesor');
Route::get('/tesis_espera_director_escuela/{id}', 'TesisController@tesis_espera_director_escuela');

//Para formulario de evaluación Tesis profesor guia
Route::get('/tesisevaluada/{id}','TesisController@tesisevaluada');
Route::get('/tesisrechazada/{id}','TesisController@tesisrechazada');
Route::get('/tesisevaluadainscrita/{id}','TesisController@tesisevaluadainscrita');

Route::get('/crearword','TesisController@wordlistatesisprofe');