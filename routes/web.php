<?php

use App\Http\Controllers\AccessController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaxonomyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
require __DIR__.'/auth.php';
Route::middleware(['auth', 'web'])->group(function () {
    Route::get('/dashboard', function () {
        auth()->user()->assignRole('super-admin');
        return Inertia::render('Dashboard/Index')->with([]);
    })->name('dashboard');
    Route::post('/upload', function(){
        request()->user()->addMedia(request()->file('files'))->toMediaCollection('images');
    });
    Route::resource('roles-and-permissions', AccessController::class);
    Route::get('taxonomy/{taxonomy?}/{action?}/{taxonomy_id?}', [TaxonomyController::class, 'index'])->name('taxonomy.get');
    Route::post('/taxonomy/{taxonomy}/{taxonomy_id?}', [TaxonomyController::class, 'action'])->name('taxonomy.post');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
