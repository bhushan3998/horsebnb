
import { useEffect, useState } from "react";


type props = {
  handleToken: (token: string)=>void
}
const Facebook = (props: props) => {

  const {handleToken}=props

  const [login , setLogin] = useState<boolean>(true)


  function loginInFacebook() {
    (window as any).FB.login(function (response: any) {
      if (response.authResponse) {
        var access_token = (window as any).FB.getAuthResponse()["accessToken"];
        localStorage.setItem("token", access_token);
        handleToken(access_token)

        console.log("Welcome!  Fetching your information.... ");
        (window as any).FB.api("/me", function (response: any) {
          console.log("helllo !!!, " + response.name + ".");
        });
        
        console.log(response.authResponse)

        setLogin(false)
      
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  }

  (window as any).fbAsyncInit = function () {
    (window as any).FB?.init({
      appId: "1333400020802897",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
  };

  useEffect(() => {
    (window as any).fbAsyncInit();
  });

  function outFbUserData() {
    (window as any).FB.logout(function (res: any) {
      console.log("logOut");
       setLogin(true);
    });
  }


  return (
    <>

      <div>
        {login ? (<button className="btn btn-outline-primary" onClick={loginInFacebook}>Login  With FaceBook</button>) 
        :
        (<button className="btn btn-outline-primary" onClick={outFbUserData}>Logout Your account</button>)}

        

      </div>

    </>
  )
}

export default Facebook


