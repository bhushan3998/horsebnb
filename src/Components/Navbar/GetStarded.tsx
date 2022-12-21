import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"

const GetStarted = () => {

    const location = useLocation()
    const navigate = useNavigate()


    const handlePageLink = () => {
        if (location.pathname.startsWith("/hostStalls")) {
            navigate("/create-stall/step1")
        }else if (location.pathname.startsWith("/host-guests")){
            navigate("/create-guest/step1")
        } else {
            navigate("/add-experience/step1")
        }
    }

    return (
        <>

            {/* <Link to={"/create-stall/step1 "}> */}
                <button className='btn btn-outline' style={{ background: "#00A4B4" }} onClick={handlePageLink}>
                    Get Started
                </button>
            {/* </Link> */}
        </>
    )
}
export default GetStarted