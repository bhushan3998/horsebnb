import React, { useState } from 'react'
import ModalComponent from '../Modal/ModalComponent'
import HenceForthApi from '../Utiles/HenceForthApi'
import HiddenNavbar from './HiddenNavbar'

type props = {
  getStartedShow: () => void,
  token: string | null,
  setToken: (token: string | null) => void,
  saveAndExit: (value: any) => void,
  profileData: any,

}

const Navbar = (props: props) => {
  const [modal, setModal] = useState<boolean>(false)
  const [userLoginEmail, setUserLoginEmail] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")

  // const [token, setToken] = useState<string | null>(localStorage.getItem("token"))

  const { getStartedShow, token, setToken, saveAndExit, profileData } = props


  const handleToken = (token: string) => {
    setToken(token)
  }
  const login = async (e: any) => {
    e.preventDefault()
    try {
      const res = await HenceForthApi.Auth.login({
        username: userLoginEmail,
        password: userPassword,
        fcmId: "string",
        deviceId: "string",
        deviceType: 3,
      })
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token)
      handleToken(res.data.token)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <nav className="navbar bg-light navbar-expand-lg shadow bg-white p-3">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="164.247" height="50" viewBox="0 0 164.247 50">
              <g id="logo" transform="translate(-528 -155)">
                <g id="HorseBnB" transform="translate(568.096 171.51)" style={{ isolation: "isolate" }}>
                  <g id="Group_1" data-name="Group 1" transform="translate(0 0)" style={{ isolation: "isolate" }}>
                    <path id="Path_1" data-name="Path 1" d="M374.61,161.824h-3.121v-8.568h-8.763v8.568h-3.107V142.816h3.107v7.775h8.763v-7.775h3.121Z" transform="translate(-359.619 -142.816)" fill="#00A4B4" />
                    <path id="Path_2" data-name="Path 2" d="M472.329,173.251a7.848,7.848,0,0,1-1.807,5.5,6.476,6.476,0,0,1-5.032,1.976,6.893,6.893,0,0,1-3.562-.91,6.007,6.007,0,0,1-2.379-2.613,8.9,8.9,0,0,1-.832-3.952,7.8,7.8,0,0,1,1.794-5.461,6.505,6.505,0,0,1,5.058-1.963,6.335,6.335,0,0,1,4.941,2.009A7.759,7.759,0,0,1,472.329,173.251Zm-10.466,0q0,4.98,3.679,4.98,3.641,0,3.641-4.98,0-4.928-3.667-4.928a3.126,3.126,0,0,0-2.789,1.274A6.484,6.484,0,0,0,461.862,173.251Z" transform="translate(-439.903 -161.458)" fill="#00A4B4" />
                    <path id="Path_3" data-name="Path 3" d="M556.2,165.827a7.349,7.349,0,0,1,1.521.13l-.3,2.847a5.775,5.775,0,0,0-1.352-.156,3.912,3.912,0,0,0-2.971,1.2,4.323,4.323,0,0,0-1.138,3.107v7.515H548.91v-14.38H551.3l.4,2.535h.156a5.7,5.7,0,0,1,1.866-2.041A4.434,4.434,0,0,1,556.2,165.827Z" transform="translate(-512.973 -161.458)" fill="#00A4B4" />
                    <path id="Path_4" data-name="Path 4" d="M615.157,176.371a3.763,3.763,0,0,1-1.534,3.231,7.347,7.347,0,0,1-4.395,1.125,10.379,10.379,0,0,1-4.615-.871v-2.639a11.332,11.332,0,0,0,4.719,1.17q2.821,0,2.821-1.7a1.35,1.35,0,0,0-.312-.91,3.694,3.694,0,0,0-1.027-.754,17.71,17.71,0,0,0-1.989-.884,9.2,9.2,0,0,1-3.36-1.924,3.56,3.56,0,0,1-.878-2.5,3.279,3.279,0,0,1,1.489-2.867,7.063,7.063,0,0,1,4.049-1.021,11.473,11.473,0,0,1,4.8,1.027l-.988,2.3a10.668,10.668,0,0,0-3.913-.962q-2.417,0-2.418,1.378a1.387,1.387,0,0,0,.631,1.144A13.85,13.85,0,0,0,610.983,172a12.574,12.574,0,0,1,2.587,1.261,3.767,3.767,0,0,1,1.2,1.32A3.818,3.818,0,0,1,615.157,176.371Z" transform="translate(-558.08 -161.458)" fill="#00A4B4" />
                    <path id="Path_5" data-name="Path 5" d="M680.275,180.727a6.956,6.956,0,0,1-5.246-1.957,7.428,7.428,0,0,1-1.892-5.389,8.15,8.15,0,0,1,1.755-5.539,6.062,6.062,0,0,1,4.824-2.015,5.925,5.925,0,0,1,4.5,1.729,6.608,6.608,0,0,1,1.651,4.759v1.651h-9.582a4.723,4.723,0,0,0,1.131,3.218,3.94,3.94,0,0,0,3,1.125,11.084,11.084,0,0,0,2.373-.241,12.444,12.444,0,0,0,2.36-.8v2.483a9.377,9.377,0,0,1-2.262.754A13.876,13.876,0,0,1,680.275,180.727Zm-.559-12.586a3.07,3.07,0,0,0-2.334.923,4.4,4.4,0,0,0-1.047,2.691h6.527a3.98,3.98,0,0,0-.858-2.7A2.935,2.935,0,0,0,679.716,168.141Z" transform="translate(-613.616 -161.458)" fill="#00A4B4" />
                    <path id="Path_6" data-name="Path 6" d="M760.18,142.816h5.643q3.927,0,5.675,1.144a4.006,4.006,0,0,1,1.749,3.615,4.38,4.38,0,0,1-.858,2.769,3.837,3.837,0,0,1-2.47,1.391v.13a4.905,4.905,0,0,1,2.945,1.489,4.5,4.5,0,0,1,.943,3.01,4.879,4.879,0,0,1-1.788,4.011,7.69,7.69,0,0,1-4.973,1.45H760.18Zm3.107,7.853h2.99a5.119,5.119,0,0,0,2.847-.618,2.365,2.365,0,0,0,.9-2.1,2.1,2.1,0,0,0-.969-1.937,6.049,6.049,0,0,0-3.075-.6h-2.691Zm0,2.522v6.02h3.3a4.862,4.862,0,0,0,2.945-.748,2.76,2.76,0,0,0,.995-2.36,2.506,2.506,0,0,0-1.014-2.2,5.375,5.375,0,0,0-3.081-.715Z" transform="translate(-684.134 -142.816)" fill="#00A4B4" />
                    <path id="Path_7" data-name="Path 7" d="M863.71,180.467h-3.068v-8.841a3.869,3.869,0,0,0-.67-2.483,2.588,2.588,0,0,0-2.126-.819,3.38,3.38,0,0,0-2.834,1.144,6.317,6.317,0,0,0-.9,3.835v7.164h-3.055v-14.38h2.392l.429,1.885h.156a4.253,4.253,0,0,1,1.846-1.586,6.188,6.188,0,0,1,2.652-.559q5.175,0,5.175,5.266Z" transform="translate(-757.76 -161.458)" fill="#00A4B4" />
                    <path id="Path_8" data-name="Path 8" d="M941.8,142.816h5.643q3.927,0,5.675,1.144a4.006,4.006,0,0,1,1.749,3.615,4.38,4.38,0,0,1-.858,2.769,3.837,3.837,0,0,1-2.47,1.391v.13a4.905,4.905,0,0,1,2.945,1.489,4.5,4.5,0,0,1,.943,3.01,4.879,4.879,0,0,1-1.788,4.011,7.69,7.69,0,0,1-4.973,1.45H941.8Zm3.107,7.853h2.99a5.119,5.119,0,0,0,2.847-.618,2.365,2.365,0,0,0,.9-2.1,2.1,2.1,0,0,0-.969-1.937,6.049,6.049,0,0,0-3.075-.6h-2.691Zm0,2.522v6.02h3.3a4.862,4.862,0,0,0,2.945-.748,2.76,2.76,0,0,0,.995-2.36,2.506,2.506,0,0,0-1.014-2.2,5.375,5.375,0,0,0-3.081-.715Z" transform="translate(-831.274 -142.816)" fill="#00A4B4" />
                  </g>
                </g>
                <g id="Group_2" data-name="Group 2" transform="translate(528 155)">
                  <path id="Path_1592" data-name="Path 1592" d="M155.038,56.494c-.7,1.247.919,5.145,2.723,6.57.773.592.733,1.216-.037,1.8a19.552,19.552,0,0,0-4.489,6.639,31.988,31.988,0,0,0-1.1,5.84,20.648,20.648,0,0,1-2.792,9.464,4.686,4.686,0,0,0-.919,1.912c0,.348.846,1.286,1.84,2.121,1.582,1.286,1.906,1.46,2.612,1.108.846-.452.88-.382-1.4-2.815l-.846-.869,1.1-1.912A22.528,22.528,0,0,0,154.124,77c.368-4.658,1.173-6.639,4.12-9.942a19.745,19.745,0,0,0,1.987-2.677c.4-.831.331-1.043-.88-2.294-1.32-1.386-2.282-2.815-1.906-2.815a9.047,9.047,0,0,1,1.76,1.009,12.332,12.332,0,0,0,6.807,2.294c4.305.592,6.107,1.147,8.651,2.746A13.5,13.5,0,0,1,180.831,75.5a12.016,12.016,0,0,1-1.877,8.795,80.072,80.072,0,0,1-7.065,7.127c-6.917,6.4-8.358,8.412-8.684,12.2-.183,2.225-.183,2.225.81,2.225.88,0,.956-.139.956-1.356,0-3.476,1.509-5.528,9.308-12.9,7.1-6.71,8.358-8.59,8.651-12.966.77-8.8-5.96-16.6-15.235-17.655-5.335-.693-6.255-1.043-9.825-4.033C156.29,55.625,155.59,55.534,155.038,56.494Z" transform="translate(-148.42 -55.852)" fill="#00A4B4" fill-rule="evenodd" />
                  <path id="Path_1593" data-name="Path 1593" d="M207.6,136.844c-.368.416-.221.831.733,2.294,1.613,2.329,1.877,4.589.733,5.98a11.673,11.673,0,0,1-3.274,2.085c-2.465,1.108-7.027,4.936-7.027,5.945,0,.73,1.582.97,1.987.313a13.755,13.755,0,0,1,5.483-4.45c2.98-1.46,4.12-2.364,4.893-3.72,1.068-1.947.368-5.18-1.729-7.961C208.555,136.183,208.262,136.114,207.6,136.844Z" transform="translate(-189.206 -121.082)" fill="#00A4B4" fill-rule="evenodd" />
                </g>
              </g>
            </svg>
          </a>
          <div className=" collapse navbar-collapse  flex-row-reverse">
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              </ul>
            </div>
          </div>
          {token !== null ? <HiddenNavbar setToken={setToken} getStartedShow={getStartedShow} saveAndExit={saveAndExit} profileData={profileData} /> : (<div className="d-flex">
            <button className="btn  border-0" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => { setModal(true) }}>Log In</button>
            <button
              className="btn text-white ms-2"
              data-bs-toggle="modal" data-bs-target="#loginModal"
              style={{ backgroundColor: "#00A4B4", border: "#00A4B4" }}
              onClick={() => { setModal(false) }}
            >
              Sign Up
            </button>
          </div>)}
        </div>
        <ModalComponent modal={modal} setModal={setModal} setUserLoginEmail={setUserLoginEmail} setUserPassword={setUserPassword} userPassword={userPassword} userLoginEmail={userLoginEmail} login={login} handleToken={handleToken} />
      </nav >
    </>
  )
}

export default Navbar
