<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\FundProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FundProviderController extends Controller
{
    public function show($userId)
    {  
        $user = User::with('fundProvider')->findOrFail($userId);

        return view('fund-provider.show', compact('user'));
    }
}
