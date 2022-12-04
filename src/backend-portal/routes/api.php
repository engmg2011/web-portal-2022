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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'customers'], function (){
    Route::get('/', 'App\Http\Controllers\CustomersController@list');
    Route::get('/{id}', 'App\Http\Controllers\CustomersController@getCustomer');
    Route::post('/create', 'App\Http\Controllers\CustomersController@create');
    Route::post('{id}/update', 'App\Http\Controllers\CustomersController@update');
    Route::post('{id}/delete', 'App\Http\Controllers\CustomersController@delete');
});
