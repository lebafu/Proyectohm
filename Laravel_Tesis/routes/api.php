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
});
//Route::post('login', [ 'as' => 'login', 'uses' => 'AuthController@login']); 

//Route::resource('users','UsersController');
Route::get('users', 'UsersController@index');
Route::get('profesores', 'UsersController@profesores');
Route::get('users{users}', 'UsersController@edit');
Route::get('/users/create', 'UsersController@create');
Route::get('users/{id}', 'UsersController@show');
Route::post('/users','UsersController@store');
Route::post('/profesores','UsersController@director_escuela');
Route::put('/users/{users}','UsersController@update');
Route::delete('/users/{id}','UsersController@destroy');
