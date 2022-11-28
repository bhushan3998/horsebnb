import React, { useEffect } from 'react'


type props = {
  handleToken: (token: string)=>void
}
export const GoogleLogin = (props:props) => {
const {handleToken}=props
  const loadGoogleMapScript = (callback: any) => {
        if (typeof (window as any).google === 'object' && typeof (window as any).google.maps === 'object') {
            callback();
        } else {
            const googleMapScript = document.createElement("script");
            googleMapScript.src = `https://accounts.google.com/gsi/client`;
            window.document.body.appendChild(googleMapScript);
            googleMapScript.addEventListener("load", callback);
        }
    }
  const loginWithGoogle = async (response: any) => {
    console.log(response);
    localStorage.setItem("token", response.credential)  
    handleToken(response.credential)
    // debugger
        // await loginWithSocial("GOOGLE", response.credential)
    }
    const initLoginWithGoogle = () => {
        loadGoogleMapScript(() => {
            const google = (window as any).google
            google?.accounts?.id?.initialize({
                client_id: '56578242597-2bnalu2om5a7ghrbmogu81itc00m7t0c.apps.googleusercontent.com',
                callback: loginWithGoogle,
                cancel_on_tap_outside: false
            });
            google?.accounts?.id?.renderButton(
                document.getElementById('g_id_signin'),
                { theme: "outline", size: "medium", type: 'standard', }  // customization attributes
            );
            google.accounts.id.prompt()
        })
    }
  useEffect(()=>{
    
    initLoginWithGoogle()
  // eslint-disable-next-line
  },[])

  return (
    <>
    {/* <div className="container"> */}
    {/* <button className='btn btn-outline-primary'onClick={loginWithGoogle}> */}
     
    {/* </button> */}
    <div className="container" >

    <div id="g_id_signin" >
    Login with Google
      </div>
    </div>
    {/* </div> */}
      
    </>
  );
}
