import { Outlet } from 'react-router-dom'
import Booking from './Bookings/Bookings'
import DashBoardHome from './DashBoard/DashBoardHome'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

type props = {
  getStartedShow: () => void
  token: string | null,
  setToken: (token : string | null) => void ,
  saveAndExit : (value: any) => void
  profileData: any
}
export const Components = (props: props) => {

  const { getStartedShow, token, setToken , saveAndExit , profileData  } = props

  return (
    <>
      <Navbar getStartedShow={getStartedShow} token={token} setToken={setToken} saveAndExit={saveAndExit} profileData={profileData} />
      <Outlet />
      {/* <DashBoardHome/> */}
      {/* <Booking/> */}
      <Footer />
    </>
  )
}
