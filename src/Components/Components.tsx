import { Outlet} from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

type props = {
  getStartedShow: ()=> void
  token : string | null,
  setToken : any ,
}
export const Components = (props: props) => {

  const {getStartedShow , token , setToken} = props
  
  return (
    <>
    <Navbar getStartedShow={getStartedShow} token={token} setToken={setToken} />
    <Outlet/>
    <Footer/>


    
    </>
  )
}
