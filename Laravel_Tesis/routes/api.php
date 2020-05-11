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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::resource('users','UsersController');
Route::get('users', 'UsersController@index');
Route::get('/users{users}', 'UsersController@edit');
Route::get('/users/create', 'UsersController@create');
Route::get('/usersmostrar/{id}', 'UsersController@show');
Route::post('/users','UsersController@store');
Route::put('/actualizarusers{users}','UsersController@update');
Route::delete('/eliminarusers{users}','UsersController@destroy');