<?php

use App\Http\Controllers\ExportController;
use App\Http\Controllers\RegistrationController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [RegistrationController::class, 'store']);
Route::get('/export-excel', [ExportController::class, 'export']);
