<?php
// app/Http/Controllers/DocumentSubmissionController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\DocumentSubmitted;
use Illuminate\Support\Facades\Mail;

class DocumentSubmissionController extends Controller
{
    public function submit(Request $request)
    {
        // Handle document submission logic

        // Send email notification
        $url = 'https://GenerosityGateway.com/document-details'; // Change this URL accordingly
        Mail::to('dharshini.ad22@bitsathy.ac.in')->send(new DocumentSubmitted(['url' => $url]));

        // Return a response
        return response()->json(['success' => true]);
    }
}
