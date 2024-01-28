<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FundProvider;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Redirect;

class FundProviderController extends Controller
{
 
    public function register(Request $request)
    {        
        $request->validate([
            'profilePhoto' => 'image|mimes:jpg,jpeg,png',
            'phone' => 'required|string',
            'age' => 'required|string',
            'gender' => 'required|string',
            'address' => 'required|string',
            'occupation' => 'required|string',
            'dateOfBirth' => 'required|date',
          
        ]);

      
        $profilePhotoPath = null;
        if ($request->hasFile('profilePhoto')) {
            $profilePhotoPath = $request->file('profilePhoto')->store('profile_photos', 'public');
        }

        $fundProvider = FundProvider::create([
            'user_id' => auth()->user()->id, 
            'profile_photo' => $profilePhotoPath,
            'phone' => $request->phone,
            'age' => $request->age,
            'gender' => $request->gender,
            'address' => $request->address,
            'occupation' => $request->occupation,
            'date_of_birth' => $request->dateOfBirth,
    
        ]);

        return Redirect::to('/Home');
    }
}
