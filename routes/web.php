<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/about', function () {
    return view('pages.about-us');
});
Route::get('/contact', function () {
    return view('pages.contact');
});
Route::get('/career', function () {
    return view('pages.career');
});
Route::get('/software-development-services', function () {
    return view('pages.software-development-services.software-development-services');
});
Route::get('/web-development-services', function () {
    return view('pages.software-development-services.web-development');
});
Route::get('/product-development-maintenance', function () {
    return view('pages.software-development-services.product-development-maintenance');
});
Route::get('/ecommerce-development', function () {
    return view('pages.software-development-services.ecommerce-development');
});

Route::get('/mobile-app-development', function () {
    return view('pages.software-development-services.mobile-app-development');
});

Route::get('/android-app-development', function () {
    return view('pages.software-development-technology.android-app-development');
});
Route::get('/microsoft-dot-net', function () {
    return view('pages.software-development-technology.microsoft-dot-net');
});

Route::get('/java-development', function () {
    return view('pages.software-development-technology.java-development');
});
Route::get('/node-js-development', function () {
    return view('pages.software-development-technology.node-js-development');
});
Route::get('/php-development-india', function () {
    return view('pages.software-development-technology.php-development-india');
});
Route::get('/angular-development-services', function () {
    return view('pages.software-development-technology.angular-development-services');
});
Route::get('/react-development-services', function () {
    return view('pages.software-development-technology.react-development-services');
});
Route::get('/iphone-development', function () {
    return view('pages.software-development-technology.iphone-development');
});