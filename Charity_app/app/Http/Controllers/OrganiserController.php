<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Organiser;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Redirect; // Add this line

class OrganiserController extends Controller
{
    public function register(Request $request)
{
    // Validate the form data
    $request->validate([
        'address' => 'required|string',
        'phone_number' => 'required|regex:/^[0-9]{10}$/',
        'description' => 'required|string',
    ]);

    // Create a new organiser with the associated user_id
    $organiser = Organiser::create([
        'user_id' => auth()->user()->id, // Set the user_id
        'address' => $request->address,
        'phone_number' => $request->phone_number,
        'description' => $request->description,
    ]);

    // Set a flag to indicate that the user has completed filling the form
    auth()->user()->update(['form_completed' => 1]);

    // Redirect to the dashboard2 route with a success message
    return Redirect::to('/SocialMediaForm');
}

}
