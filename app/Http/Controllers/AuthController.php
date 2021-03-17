<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Psy\Util\Str;

class AuthController extends Controller
{
    public function store(Request $request)
    {

        $request->validate([
            'username' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        $user = User::create([
            'email' => $request->input('username'),
            'password' => Hash::make($request->input('password')),
            'api_token' => \Illuminate\Support\Str::random(80)
        ]);
        return response(['message' => 'Your account has been created','api_token' => $user->api_token]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if(Auth::attempt([
            'email'=>$request->email,
            'password'=>$request->password
        ])) {
            $user = Auth::user();
            return response(['message' => 'Welcome to your account','api_token' => $user->api_token]);
        }else{
            return response(['errors' => ['Invalid username or password, please try again']], 401);
        }

    }
}
