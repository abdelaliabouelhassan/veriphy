<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class ContactUsController extends Controller
{
    public function index(Request $request){
        $request->validate([
            'fullname' => 'required',
            'email' => 'required|email',
            'content' => 'required',
        ]);
        try {
            
            Mail::to('test@example.com')->send(new ContactUsMail($request->collect()));
            return response('success');
        } catch (\Throwable $th) {
            return response('something went wrong!',500);
        }
    }
}
