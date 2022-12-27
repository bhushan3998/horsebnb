import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

type props = {
  getStartedShow: () => void
  token: string | null,
  setToken: (token : string | null) => void ,

  profileData: any,
  saveAndExit:(value:number)=>void
}
export const Components = (props: props) => {

  const { getStartedShow, token, setToken , saveAndExit , profileData  } = props

  return (
    <>
      <Navbar saveAndExit={saveAndExit} getStartedShow={getStartedShow} token={token} setToken={setToken} profileData={profileData} />
      
      <Outlet context={<ToastContainer/>} />
      <Footer />
    </>
  )
}
