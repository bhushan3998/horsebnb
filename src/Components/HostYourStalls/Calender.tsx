import { useEffect } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"
import backArrow from "../Images/chevron-left-primary.svg"
import lightBulb from "../Images/lightBulb.svg"

type props = {
    getStartedShow: ()=>void,
    steps: Array<number> ,
    setSteps: (value : Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    // stepAdd: (val:number)=> void
}
const Calender = (props: props) => {
    const {steps , setSteps , getStartedShow , spinner , setSpinner }=props

    const navigate = useNavigate()
    const match = useMatch(`/create-stall/Calender/:id`)

    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getStartedShow()
        listId()
        // eslint-disable-next-line 
    }, [])

    const setCalender = async () => {
        let list = {
            id: match?.params.id,
            publicData:{
                stepsCompleted: [...steps , 15],

            }
        }
        try {
            setSpinner(true)
           await HenceForthApi.Auth.Updatedlisting(list) 
           setSpinner(false)

        } catch (error) {
            
        }
        navigate(`/create-stall/Pricing/${match?.params.id}`)
    }



    return (
        <>
         <div className="progress" style={{ height: "8px" }}>
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "63%" }}>
                            </div>
                        </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-between border-top mt-5">
                       <Link to={'/create-stall/Availability'}><button type="button" className="btn btn-transparent font-regular my-3 px-0" tabIndex={0}>
                            <img src={backArrow} className="pr-1" alt="" /> Back </button> </Link> 
                      <button type="button" className="btn btn-primary my-3 px-3 position-relative d-flex align-items-center justify-content-center" disabled={spinner} onClick={setCalender}> {!spinner ?   " Next" : <Spinner/>}
                        </button>
                    </div>
                </div>
                <div className="col-md-6 px-md-0 d-none d-md-block">
                    <div className="py-5 h-100 d-flex align-items-start px-md-5 bg-light justify-content-start">
                        <div className="border col-md-8 px-4 py-4 mb-4 bg-white">
                            <img src={lightBulb} alt="" height="32px" className="mb-4" />
                            <p className="font-small">Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don't get any unwanted bookings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Calender