import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { CredentialResponse, GoogleLoginProps, GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { circularProgressClasses } from '@mui/material';

/*
Missing:
  Check if email is verified
  redirect to wall of clients
  Do whatever needs to be done with the token (pass to backend, generate claims, etc...)
  Create auth-wrapper // or // Create access limitations through routing (protected routes)
*/


const GoogleLoginPage = () => {
  const responseGoogle = (response: CredentialResponse) => {
    console.log(response);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
  }

  return (
    <div className="">
          <div className="">
            <GoogleOAuthProvider 
              // clientId must be remade as an environment variable, as critical information should not be included in the app files
              clientId={`553606492401-2a1pav65lrfebte0hpkh2711sd0keh7r.apps.googleusercontent.com`}
            >
             <GoogleLogin onSuccess={responseGoogle}/>
            </GoogleOAuthProvider>
          </div>
    </div>
  )
}

export default GoogleLoginPage