<?php

use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\UserDocumentController;
use App\Http\Controllers\SocialMediaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FundProviderDetailsController;
use App\Http\Controllers\FundProviderController;
use App\Http\Controllers\OrganiserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\homeController;
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

// web.php

// routes/web.php

use App\Http\Controllers\DocumentSubmissionController;
// routes/web.php

use App\Http\Controllers\DocumentDetailsController;

Route::get('/document-details', [DocumentDetailsController::class, 'index']);


Route::post('/api/submit-document', [DocumentSubmissionController::class, 'submit']);


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    $user = auth()->user();

    if ($user->role === 'fundprovider') {
        return Inertia::render('Dashboard');
    } elseif ($user->role === 'organiser') {
        
        return Inertia::render('Dashboard1');
    } else {
        
        return Inertia::render('Dashboard');
    }
})->middleware(['auth', 'verified'])->name('dashboard');
    

    Route::get('/OrganiserRegistrationForm', function () {
        return Inertia::render('OrganiserRegistrationForm');
    })->name('profile');

    Route::get('/DocumentSubmissionForm', function () {
        return Inertia::render('DocumentSubmissionForm');
    })->name('DocumentSubmissionForm');

    Route::get('/App', function () {
        return Inertia::render('App');
    })->name('App');

    Route::post('/organiser/register', [OrganiserController::class, 'register'])
    ->name('organiser.register');

    Route::post('/organiser/register', [OrganiserController::class, 'register'])
    ->name('organiser.register');

    Route::post('/fund-provider/register', [FundProviderController::class, 'register'])
    ->name('fundProvider.register');

    Route::get('/Home', [HomeController::class, 'displayUserData'])
    ->name('Home');

    Route::get('/dashboard2', function () {
        return Inertia::render('Dashboard2');
    })->name('dashboard2');

    Route::get('/UserProfilePhotoForm', function () {
        return Inertia::render('UserProfilePhotoForm');
    })->name('UserProfilePhotoForm');

    
    Route::post('/UserProfilePhotoForm', [UserDocumentController::class, 'store']
    )->name('UserProfilePhotoForm');

    Route::get('/SocialMediaForm', function () {
        return Inertia::render('SocialMediaForm');
    })->name('SocialMediaForm');

    Route::get('/FundProviderRegistrationForm', function () {
        return Inertia::render('FundProviderRegistrationForm');
    })->name('FundProviderRegistrationForm');

    Route::post('user.uploadProfilePhoto', [UserDocumentController::class, 'store'])->name('user.uploadProfilePhoto');

    Route::post('/socialMedia.register', [SocialMediaController::class, 'register'])->name('socialMedia.register');
    
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
