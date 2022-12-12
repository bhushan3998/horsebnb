import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"

type props = {
    getStartedShow: () => void,
    steps: Array<number> ,
    setSteps: (value : Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    // stepAdd: (val: number) => void
}

const Timmings = (props: props) => {
    const {steps , setSteps , getStartedShow , spinner , setSpinner  }=props

    const [arrive, setArrive] = useState<string>("")
    const [leave, setLeave] = useState<string>("")
    const navigate = useNavigate()
    const match = useMatch(`/create-stall/Timmings/:id`)
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

    const uploadTimings = async () => {
        const list = {
            id: match?.params.id,
            publicData: {
                arrive_after: arrive,
                leave_before: leave,
                stepsCompleted: [...steps , 9],
            }
        }
        try {
            if (arrive && leave) {
                setSpinner(true)
                
                await HenceForthApi.Auth.Updatedlisting(list)
                setSpinner(false)

                navigate(`/create-stall/Availability/${match?.params.id}`)
            } else {
                toast('select Options', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        } catch (error) {
        }
    }

    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "49%" }}>
                </div>
            </div>
            <div className="row">

                <div className="col-md-6 py-5 px-md-0 frame-height overflow-y-auto">
                    <div className="col-md-8 mx-auto d-flex flex-column h-100">
                        <h4 className="fw-600 heading-big text-black mb-1">Check In &amp; Check Out</h4>
                        <p className="font-small-bold my-2">Choose a time for Check-in and Check-out</p>
                        <div className="form-group">
                            <label htmlFor="arrive_after" className="font-small-bold w-100">Arrive After
                                <input type="time" className="form-control" value={arrive} onChange={(e: any) => { setArrive(e.target.value) }} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="arrive_after" className="font-small-bold w-100">Leave Before
                                <input type="time" className="form-control" value={leave} onChange={(e: any) => { setLeave(e.target.value) }} />
                            </label>
                        </div>
                        <div className="d-flex justify-content-between border-top btn-footer mt-auto">
                            <Link to={"create-stall/Description"}>    <button type="button" className="btn btn-transparent font-regular my-3" tabIndex={0} >
                                <img src="" alt="" className="pr-1" />
                                Back
                            </button></Link>
                            <button type="button" className="btn btn-primary my-3 px-3 position-relative d-flex align-items-center justify-content-center" disabled={spinner} onClick={uploadTimings}>
                            {!spinner ?   " Next" : <Spinner/>}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-center px-0">
                    <div className="h-100 d-flex py-5 align-items-center border-start justify-content-center">
                        <img src="https://horsebnb.com/assets/img/create-stalls/horse_image.png" alt="" width="250px" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Timmings