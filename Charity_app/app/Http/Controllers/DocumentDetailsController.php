<?php

// app/Http/Controllers/DocumentDetailsController.php

namespace App\Http\Controllers;

class DocumentDetailsController extends Controller
{
    public function index()
    {
        // Fetch document details data from the backend
        $documentDetails = []; // Implement your logic to fetch data

        // Return the view with data
        return view('document-details', compact('documentDetails'));
    }
}

