import { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import HenceForthApi from "../Utiles/HenceForthApi";
import subCount from "../Images/decCount.svg"
import addCount from "../Images/addCount.svg"
import guestStepsImg from "../Images/guestSteps.png"
import backArrow from "../Images/chevron-left-primary.svg"

type props = {
    steps: Array<number>,
    setSteps: (value: Array<number>) => void
    saveExitbtn: number
}
const Step3 = (props: props) => {
    const { steps, setSteps , saveExitbtn } = props
    let [count, setCount] = useState<number>(0)
    const navigate = useNavigate();
    const match = useMatch(`/create-guest/Step3/:id`)
    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);
            setCount(res?.data?.attributes?.publicData?.rooms)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        listId()
        // eslint-disable-next-line 
    }, [])


    const setRoomCount = async (navigation: string ) => {
        const list = {
            id: match?.params.id,
            publicData: {
                guests: count,
                stepsCompleted: [...steps, 3]
            }
        }
        if (count && count !== 0) {
            try {
                await HenceForthApi.Auth.Updatedlisting(list)

                if (navigation=== 'next') {
                    navigate(`/create-guest/step5/${match?.params.id}`)
                    
                } else {
                    navigate(`/create-guest/GuestsLastStep/${match?.params.id}`)
                    
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            toast('Please fill  count', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    useEffect(() => {
        if (saveExitbtn) {
            setRoomCount('last')
        }
    } , [saveExitbtn])



    return (

        <>
            <div className="row mx-0 h-100">
                <ToastContainer />
                <div className="col-md-6 py-5 px-md-0 steps-frame-height overflow-y-auto">
                    <div className="col-md-11 col-lg-8 mx-auto px-md-0 d-flex flex-column h-100">
                        <h3 className="fw-600 heading-big mb-5">How many rooms can you accommodate?</h3>
                        <div className="d-flex justify-content-between align-items-baseline room-input mb-2">
                            <h5 className="font-medium-bold">Rooms</h5>
                            <div className="input-group d-flex justify-content-end">
                                <div className="input-group-prepend">
                                    <button className="btn border-0" onChange={(e: any) => { setCount(e.target.value) }} onClick={() => { setCount(count - 1) }} disabled={count === 0}>
                                        <img src={subCount} alt="" width="18px" />
                                    </button>
                                </div>
                                <input type="text" className=" form-control text-center" value={count} style={{ flex: "0.1 1 auto" }} />
                                <div className="input-group-prepend">
                                    <button className="btn border-0" onClick={() => { setCount(count + 1) }} onChange={(e: any) => { setCount(e.target.value) }}>

                                        <img src={addCount} alt="" width="18px" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5"> Note : Occupancy of 2 guests in a room.</div>
                        <hr />
                        <div className="d-flex justify-content-between mt-auto border-top">
                            <Link to={`/create-guest/step1${match?.params.id}`}>
                            </Link>
                            <button type="button" className="btn btn-transparent font-regular px-0 my-3" tabIndex={0}  >
                                <img src={backArrow} className="pr-1" />
                                Back
                            </button>

                            <Link to={""}>
                                <button type="button" className="btn btn-primary my-3 px-3 position-relative d-flex align-items-center justify-content-center" onClick={()=>setRoomCount('next')}> Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center px-md-0 d-none d-md-block">
                    <div className="h-100 d-flex py-5 align-items-center bg-light justify-content-center">
                        <img src={guestStepsImg} width="350px" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Step3