<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App/User;
use Mail;

class ResetPasswordController extends Controller
{
    //

    /* public function sendEmail(Request $request)
    {
       if(!$this->validateEmail($request->email)){
       	return $this->failedResponse();
       }

       $this->send($request->email);
    }

    public function send( Request $request)
    {

        $token= $this->createToken($email);
    	 Mail::send('view_email',$data,function($message)
                    {
                        $message->from('leonardo211294@gmail.com','UCM');//Aqui deberia ir el email del administrador
                        //https://myaccount.google.com/lesssecureapps  colocar Si, para permitir el acceso de la aplicación y poder enviar emails.
                        $message->subject('UCM ALERTA ACTUALIZACION DE CONTRASEÑA');
                        $message->to($request->email);
                    }); 

    }

    public function createToken($email){

        $token=str_random(60);
        $this->saveToken($token,$email);
    }


    public function saveToken($token,$email){
        DB::table('password_resets')->insert([
            'email'=> $email,
            'token' => $token

    ])
    }

    public function validateEmail($email){

    	return !!User::where('email',$email)->first();
    }

    public funtion failedResponse(){
    	return response()->json([
    		'error' => 'Email no ha sido encontrado en la base de datos',
    	], Response::HTTP_NOT_FOUND);
    }

     public funtion successdResponse(){
    	return response()->json([
    		'data' => 'El Link para actualizar la contraseña ha sido enviado a su email',
    	], Response::HTTP_NOT_FOUND);
    }*/


     public function showLinkRequestForm(Request $request)
    {   
         if($request->email!=null)
            {
                    $token=$this->createToken($request->email);
                    $users=DB::table('users')->where('email','=',$request->email)->get();
                    foreach($users as $user)
                    {
                        $usuario->name=$user->name;
                        $usuario->email=$user->email;
                        $usuario->token=$token;                    }
            Mail::send('view_email',$usuario,function($message)
                    {
                        $message->from('leonardo211294@gmail.com');//Aqui deberia ir el email del administrador
                        //https://myaccount.google.com/lesssecureapps  colocar Si, para permitir el acceso de la aplicación y poder enviar emails.
                        $message->to($request->email)->subject('test Email Curso Laravel');
                    }); 
        }
        return view('auth.passwords.email');
    }

     public function createToken($email){

        $token=str_random(60);
        $this->saveToken($token,$email);
    }


    public function saveToken($token,$email){
        DB::table('password_resets')->insert([
            'email'=> $email,
            'token' => $token

    ])
    }

    /**
     * Send a reset link to the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function sendResetLinkEmail(Request $request)
    {
        $this->validateEmail($request);

        // We will send the password reset link to this user. Once we have attempted
        // to send the link, we will examine the response then see the message we
        // need to show to the user. Finally, we'll send out a proper response.
        $response = $this->broker()->sendResetLink(
            $this->credentials($request)
        );

        return $response == Password::RESET_LINK_SENT
                    ? $this->sendResetLinkResponse($request, $response)
                    : $this->sendResetLinkFailedResponse($request, $response);
    }

    /**
     * Validate the email for the given request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function validateEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);
    }

    /**
     * Get the needed authentication credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        return $request->only('email');
    }

    /**
     * Get the response for a successful password reset link.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    protected function sendResetLinkResponse(Request $request, $response)
    {
        return back()->with('status', trans($response));
    }

    /**
     * Get the response for a failed password reset link.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        return back()
                ->withInput($request->only('email'))
                ->withErrors(['email' => trans($response)]);
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }
}
