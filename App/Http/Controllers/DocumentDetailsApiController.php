<?php
// app/Http/Controllers/DocumentDetailsApiController.php

namespace App\Http\Controllers;

class DocumentDetailsApiController extends Controller
{
    public function index()
    {
        // Implement logic to fetch and return document details data
        $documentDetails = [
            ['id' => 1, 'name' => 'Field 1', 'value' => 'Value 1'],
            ['id' => 2, 'name' => 'Field 2', 'value' => 'Value 2'],
            // ... Add more fields as needed
        ];

        return response()->json($documentDetails);
    }
}
