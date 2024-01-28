<?php

namespace App\Http\Controllers;

use App\Models\UserDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class UserDocumentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'profilePhoto' => 'required|image|mimes:jpeg,png,jpg',
            'certificate' => 'required|mimes:pdf',
        ]);

        
        $profilePhotoPath = $this->storeBase64File($request->input('profilePhoto'), 'profile_photos', 'public');
        $certificatePath = $this->storeBase64File($request->input('certificate'), 'certificates', 'public');

        
        $userDocument = UserDocument::create([
            'user_id' => auth()->user()->id,
            'profile_photo_base64' => $profilePhotoPath,
            'certificate_base64' => $certificatePath,
        ]);

        return Redirect::to('/dashboard2');
    }

   

    private function storeBase64File($base64String, $directory, $disk)
    {
        $extension = $this->getBase64Extension($base64String);
        $fileName = uniqid() . '.' . $extension;
        $filePath = "$directory/$fileName";

        Storage::disk($disk)->put($filePath, base64_decode($base64String));

        return $filePath;  
    }

    private function getBase64Extension($base64String)
    {
        $data = explode(',', $base64String);
        $matches = [];
        preg_match('/^data:image\/(?<extension>.*?)\;/', $data[0], $matches);

        return $matches['extension'] ?? 'png'; 
    }
}
