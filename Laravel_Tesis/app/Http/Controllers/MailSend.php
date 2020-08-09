<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Mail\SendMail;

class MailSend extends Controller
{
    public function mailsend(Request $request)
    {
    $email=$request->email;
     $data = [
        'title' => 'Title: Mail from Real Programmer',
        'body' => 'Body: This is for testing email using smtp'
    ];
   //echo json_encode($data);
    \Mail::to($email)->send(new SendMail($data));
    return ('MAIL ENVIADO');
    }
}
