import React from "react";
import {useHistory} from 'react-router-dom'
import AuthServices from "../../AuthServices/AuthServices";
// import SocialLogin from 'react-social-login'
import InstagramLogin from "react-instagram-oauth";
import TwitterLogin from "react-twitter-login";

// import InstaButton from "./InstaButton";
// import InstagramLogin from 'react-instagram-login';

function InstagramLoginReact() {
    const history=useHistory()
    const responseInstagram = (err,data) => {
      console.log(err,'error');
      console.log(data,'user');
      // AuthServices.instagramLogin().then(data=>console.log(data))
    }
    const authHandler = (err, data) => {
      console.log(err, data);
    };
    const handleSocialLoginFailure = (err) => {
      console.error(err)
    }
  return (
    <>
    <div className='mt-3'>
      <TwitterLogin
      authCallback={authHandler}
      className='twitter__button'
      buttonTheme="dark"
      consumerKey={'HDdaUxlDfuVtv2C7PqCwylnEt'}
      consumerSecret={'FqpoDp1Ge1aMAO6xnmjhRzweIflxM7Jfwr5Uf3sIhllWSDQcjJ'}
    />
   </div>
    <div className='mt-3'>
      <InstagramLogin
      authCallback={responseInstagram}
      appId={'234089404726480'}
      scopes={['user_profile,']}
      className='instagram__button'
      // response_type='code'
      appSecret={'4adba27b8a1697b52525557fc803e6f0'}
      redirectUri={'https://localhost:3000/'}
  />
  </div>
    </>
  );
}

export default InstagramLoginReact;
