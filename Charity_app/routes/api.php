<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// routes/api.php

use App\Http\Controllers\DocumentDetailsApiController;
// routes/api.php

use App\Http\Controllers\DocumentVerificationController;

Route::post('/verify-document', [DocumentVerificationController::class, 'verify']);


Route::get('/document-details', [DocumentDetailsApiController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
