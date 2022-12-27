
import Facebook from "../Facebook/Facebook"
import { GoogleLogin } from "../Google/GoogleLogin"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react"
import HenceForthApi from "../Utiles/HenceForthApi"
import { ToastContainer } from "react-toastify"


type props = {
    modal: boolean,
    setModal: any,
    userLoginEmail: string,
    setUserLoginEmail: any,
    userPassword: string,
    setUserPassword: any,
    login: any,
    handleToken: (token: any) => void;


}

// interface userData {

//     firstName: string,
//     lastName: string,
//     email: string,
//     password: string,
//     fcmId: string,
//     deviceId: string,
//     deviceType: number,
//     country_code: string


// }
const ModalComponent = ({ modal, setModal, userLoginEmail, login, userPassword, setUserLoginEmail, setUserPassword, handleToken }: props) => {
    const [signUpUser, setSignUpUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        fcmId: "",
        deviceId: "",
        deviceType: 0,
        phoneNumber:"",
        country_code: "",

    } as any)


    const registerNewUser = async (e: any) => {
        e.preventDefault()
        try {
            let res = (await HenceForthApi.Auth.signup({
                firstName: signUpUser.firstName,
                lastName: signUpUser.lastName,
                email: signUpUser.email,
                password: signUpUser.password,
                fcmId: "string",
                deviceId: "string",
                deviceType: 3,
                protectedData: {
                    phoneNumber: signUpUser.phoneNumber
                },
                publicData: {
                    country_code: signUpUser.countryCode
                }
            }))
            console.log(res);

        } catch (error : any) {
            console.log(error.res.data.error_description);

        }
    }



const handleChange = (e: any) => {
    setSignUpUser({
        ...signUpUser,
        [e.target.name]:e.target.value
    })
}




    return (
        <>

            <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModal" aria-hidden="true">
                <ToastContainer/>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {modal ? (<h1 className="modal-title fs-5" id="exampleModalLabel">LOGIN</h1>) : (<h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>)}

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modal ? (<form onSubmit={login}>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" value={userLoginEmail} placeholder="Email address" aria-describedby="emailHelp" onChange={(e: any) => { setUserLoginEmail(e.target.value) }} />

                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" value={userPassword} onChange={(e: any) => { setUserPassword(e.target.value) }} />
                                </div>
                                <div className="d-flex justify-content-between ">

                                    <div className="">

                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                    </div>

                                    <div className=" ">
                                        <a href="!#" style={{ color: "#00a4b4" }}> Forget Password</a>

                                    </div>

                                </div>
                                <div className="loginButton">
                                    <button type="submit" className="btn  col-12" style={{ backgroundColor: "#00a4b4" }}>Login</button>
                                </div>
                            </form>) : (<form onSubmit={registerNewUser}>
                                <div className="mb-3">

                                    <input type="text" className="form-control" id="exampleInputFirstName" name="firstName" placeholder="First Name" aria-describedby="emailHelp" value={signUpUser.firstName} onChange={handleChange} />
                                </div>
                                <div className="mb-3">

                                    <input type="text" className="form-control" id="exampleInputLastName" name="lastName" placeholder="Last Name" aria-describedby="emailHelp" value={signUpUser.lastName} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <PhoneInput
                                        // country={'us'}
                                        value={signUpUser.phoneNumber}
                                        onChange={(value :any, data: any) => {(value.slice(data.dialCode.length));}}
                                    />
                                </div>
                                <div className="mb-3">

                                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Email address" aria-describedby="emailHelp" value={signUpUser.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name="password" id="exampleInputPassword1"onChange={handleChange} value={signUpUser.password}  />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" id="exampleInputPassword2"  />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Agree to <a href="!#" style={{ color: "#00a4b4" }}>Terms & Conditions</a> </label>
                                </div>
                                <button type="submit" className="btn  col-12" style={{ backgroundColor: "#00a4b4" }}>Submit</button>
                            </form>)}
                        </div>
                        <div className="container-fluid border">

                            <p className='text-center'>
                                Or Continue with
                            </p>

                            <div className="loginWithGmail p-3 text-center">
                                <GoogleLogin handleToken={handleToken} />
                            </div>

                            <div className="loginWithFaceBook pb-3 text-center">
                                <Facebook handleToken={handleToken} />
                            </div>
                        </div>
                        {modal ? (<p className="ps-5">Don't have an HorseBnB account ? <button className="border-0 bg-white" onClick={() => { setModal(false) }} style={{ color: "#00a4b4" }}>Sign Up</button> </p>)

                            : (<p className="ps-5">Already have an HorseBnB account ? <button className="border-0 bg-white " onClick={() => { setModal(true) }} style={{ color: "#00a4b4" }}>Log In</button> </p>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalComponent