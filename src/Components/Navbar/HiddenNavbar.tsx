import HenceForthApi from '../Utiles/HenceForthApi'
import image2 from "../Images/explore_one.png"
import { Link, useLocation , useNavigate } from 'react-router-dom';
import SaveAndExit from '../SaveAndExit/SaveandExit';
// import { match } from 'assert';

type props = {
  setToken: any
  getStartedShow: () => void
  saveAndExit: (value: any) => void
}
const HiddenNavbar = (props: props) => {
  const { setToken, getStartedShow , saveAndExit } = props

  const navigate=useNavigate()

  const location = useLocation()
  const logOut = () => {
    localStorage.removeItem("token")
    setToken(null)

  }  

  // const saveAndExitfun = () =>{
  //   navigate(`/create-stall/LastStep/:id}`)
  // }





  return (
    <>
      {!location.pathname.startsWith('/h') && (!location.pathname.startsWith('/c')) ? (<ul className="navbar-nav mb-2 mb-lg-0 navbar-nav ml-auto">
        <li className="nav-item pt-2 mx-3 border-1 px-2 rounded-5 shadow ">
          <a href='!#' className="pointer search-btn col-lg-12 col-md-6 text-decoration-none text-dark">
            <span className="mr-3 ml-2 fs-14">Start your search</span>
            <i className="bi bi-search text-dark ms-2"></i>
          </a>
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
          <a href="!#"><i className="bi bi-chat-dots text-dark fw-bold"></i></a>
        </li>

        <li className="nav-item pt-2 mx-3 border">
          <div className="dropdown">
            <a className="d-flex" href="!#" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="userImg">
                <img src={`${HenceForthApi.API_FILE_ROOT_SMALL}${image2}`} alt="" />
              </div>
              <div className="userName ">
                bhushan
              </div>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="!#">Action</a></li>
              <li><a className="dropdown-item" href="!#">Another action</a></li>
              <li><a className="dropdown-item" href="!#" onClick={logOut}>LogOut</a></li>
            </ul>
          </div>
        </li>
      </ul>) :
        location.pathname.startsWith('/create-stall/step1') ? ""
          : (location.pathname.startsWith('/c') ? <SaveAndExit/> : (<div className="getStarted">
              <Link to={"/create-stall/step1 "}> <button className='btn btn-outline' style={{ background: "#00A4B4" }}>
                Get Started
              </button></Link> 
              </div>))
      }
    </>
  )
}

export default HiddenNavbar