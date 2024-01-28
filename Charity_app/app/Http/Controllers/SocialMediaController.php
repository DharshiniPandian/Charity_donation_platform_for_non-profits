<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SocialMedia;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Redirect;

class SocialMediaController extends Controller
{
 
    public function register(Request $request)
    {        
        $request->validate([
            'linkedin' => 'string',
            'facebook' => 'string',
            'twitter' => 'string',
            'website' => 'string',
            // Add validation rules for other necessary columns...
        ]);

        $socialMedia = SocialMedia::create([
            'user_id' => auth()->user()->id, // Set the user_id
            'linkedin' => $request->linkedin,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'website' => $request->website,
            // Add other necessary columns...
        ]);

        return Redirect::to('/UserProfilePhotoForm');
    }
}
