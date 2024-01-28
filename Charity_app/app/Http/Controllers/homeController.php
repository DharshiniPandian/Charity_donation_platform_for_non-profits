<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organiser;
use App\Models\SocialMedia;
use App\Models\UserDocument;
use App\Models\User;

class HomeController extends Controller
{
    public function displayUserData()
    {
        // Retrieve organisers from the organisers table
        $organisers = Organiser::all();

        // Retrieve users from the users table with role equal to 'organisers'
        $users = User::where('role', 'organiser')->get();

        // Retrieve social media data for all users
        $socialMedia = SocialMedia::all();

        // Retrieve organisers certificate data for all users
        $organisersCertificate = UserDocument::all();

        return Inertia::render('Home', compact('users', 'organisers', 'socialMedia', 'organisersCertificate'));
    }
}
