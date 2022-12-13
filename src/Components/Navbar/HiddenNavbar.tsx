import HenceForthApi from '../Utiles/HenceForthApi'
import image2 from "../Images/explore_one.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SaveAndExit from '../SaveAndExit/SaveandExit';
import { useEffect } from 'react';
// import { match } from 'assert';

type props = {
  setToken: (token: string | null) => void,
  getStartedShow: () => void,
  saveAndExit: (value: any) => void,
  profileData: any,
  // setDisplayName:(value:string) => void
}
const HiddenNavbar = (props: props) => {
  const { setToken, getStartedShow, saveAndExit, profileData } = props

  const navigate = useNavigate()

  const location = useLocation()
  const logOut = () => {
    localStorage.removeItem("token")
    setToken(null)

  }

  useEffect(() => {
    getStartedShow()
  }, [])

  // const saveAndExitfun = () =>{
  //   navigate(`/create-stall/LastStep/:id}`)
  // }





  return (
    <>
      {!location.pathname.startsWith('/h') && (!location.pathname.startsWith('/c')) ? (<ul className="navbar-nav mb-2 mb-lg-0 navbar-nav ml-auto">
        <li className="nav-item pt-2 mx-3 border-1 px-2 rounded-5 shadow ">
          <Link to={"search/type=1"} className="pointer search-btn col-lg-12 col-md-6 text-decoration-none text-dark">
            <span className="mr-3 ml-2 fs-14">Start your search</span>
            <i className="bi bi-search text-dark ms-2"></i>
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link to="/hostStalls" className="nav-link fw-semibold" onClick={getStartedShow} >Host your Stalls</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to={"/host-guests/"} className="nav-link fw-semibold" onClick={getStartedShow}>Host Guests</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to={"/host-an-experience"} className="nav-link fw-semibold" >Host an Adventure</Link>
        </li>
        <li className="nav-item pt-2 mx-3">
          <a href="!#">
            <i className="bi bi-chat-dots text-dark fw-bold"></i>
          </a>
        </li>

        <div className="nav-item dropdown">

          <button className="drotabIndex={0}pdown-toggle btn btn-profile" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="profile-img">
              <img className="obj-cover  ng-lazyloaded" src={profileData.profileImage ? profileData.profileImage : "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"} />
            </div>
            <span >{profileData.displayName}</span>
          </button>
          <div className="dropdown_items dropdown-menu" x-placement="bottom-right" style={{ top: "0px", left: "0px", willChange: "transform", position: "absolute", transform: "translate(-28px, 47px)" }}>
            <Link to='/bookings' className='text-decoration-none'>
              <button type="button" className="dropdown-item fw-600" tabIndex={0}>Bookings</button>
            </Link>
            <div className="dropdown-divider" />
            <Link to='/bookings' className='text-decoration-none'>
              <button type="button" className="dropdown-item" tabIndex={0}>Dashboard</button>
            </Link>
            <Link to='/ManageListing' className='text-decoration-none'>
              <button type="button" className="dropdown-item" tabIndex={0} >Manage Listings </button>
            </Link>
            <Link to='/bookings' className='text-decoration-none'>
              <button type="button" className="dropdown-item" tabIndex={0}>Account</button>
            </Link>
            <div className="dropdown-divider" />
            <button className="btn border-0" onClick={logOut}>Log Out</button>
          </div>
        </div>
      </ul>) :
        location.pathname.startsWith('/create-stall/step1') ? ""
          : (location.pathname.startsWith('/c') ? <SaveAndExit /> : (<div className="getStarted">
            <Link to={"/create-stall/step1 "}> <button className='btn btn-outline' style={{ background: "#00A4B4" }}>
              Get Started
            </button></Link>
          </div>))
      }
    </>
  )
}

export default HiddenNavbar