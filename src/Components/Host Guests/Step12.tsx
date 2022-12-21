import { useState, useEffect } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import HenceForthApi from "../Utiles/HenceForthApi"

import backArrow from "../Images/chevron-left-primary.svg"
import lightBulb from "../Images/lightBulb.svg"

type props ={
    steps: Array<number>,
    setSteps: (value : Array<number>) => void,
    saveExitbtn : number
}


const Step12 = (props: props) => {

    const {steps , setSteps , saveExitbtn} = props 
    const navigate = useNavigate()
    const match = useMatch(`/create-guest/Step12/:id`)
    const [state, setstate] = useState({
        listing_price: 0 as number,
        bookingAcceptType: 0 as number,
    })
    const handleState = (e: any) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);
            setstate({
                listing_price: res?.data?.attributes?.publicData?.listing_price ,
                bookingAcceptType:res?.data?.attributes?.publicData?.bookingAcceptType
            })

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        // getStartedShow()
        listId()
        // eslint-disable-next-line 
    }, [])

    const setPricing = async (navigation: string) => {
        let list = {
            id: match?.params.id,
            publicData:
            {
                listing_price: state.listing_price,
                bookingAcceptType: state.bookingAcceptType,
                stepsCompleted: [...steps , 11],
            }
        }
        if (state.listing_price !== 0 && state.bookingAcceptType!==0) {
            
            try {
                await HenceForthApi.Auth.Updatedlisting(list)
                if (navigation === 'next') {
                    navigate(`/create-guest/Step13/${match?.params.id}`)
                    
                } else {
                    navigate(`/create-guest/GuestLastStep/${match?.params.id}`)
                    
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            toast('fill the conditions  to Continue', {
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
            setPricing('last')
        }
    } , [saveExitbtn])



    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "70%" }}>
                </div>
            </div>
            <div >
                <div className="row mx-0">
                    <ToastContainer/>
                    <div className="col-lg-6 py-5 steps-frame-height overflow-y-auto">
                        <div className="col-lg-8 col-md-11 px-md-0 mx-auto d-flex flex-column h-100">
                            <h3 className="heading-big">Price your stall.</h3>
                            <span className="font-small mb-2 d-block"> This will be your nightly price per stall </span>
                            <div className="input-group mb-3 mh-40">
                                <div className="input-group-prepend">
                                    <span className="input-group-text dollar">$</span>
                                </div>
                                <input type="number" placeholder="" className="form-control dollar ng-untouched ng-pristine ng-valid" name='listing_price' value={state.listing_price} onChange={handleState} />
                            </div>
                            <div className="mt-3">
                                <div >
                                    <h5 className="pb-2">Do you want to allow guests to make instant bookings?</h5>
                                </div>
                                <div className="form-check row"  >
                                    <input className="form-check-input col-md-1" type="radio" id="flexRadioDefault1" value={1} onChange={handleState} name="bookingAcceptType" />
                                    <label className="form-check-label col-md-2" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                    <input className="form-check-input col-md-1" type="radio" name="bookingAcceptType" id="flexRadioDefault2" onChange={handleState} value={2} />
                                    <label className="form-check-label col-md-2" htmlFor="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-5 border-top">
                                <Link to="/create-stall/Calender">
                                    <button type="button" className="btn btn-transparent font-regular my-3 px-0" >
                                        <img alt="" src={backArrow} className="pr-1" /> Back
                                    </button>
                                </Link>
                          
                                <button className="btn my-3 px-3 text-white d-flex align-items-center justify-content-center " style={{ background: "rgb(0, 164, 180)" }} onClick={()=>setPricing('next')} > Next
                                </button>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-md-0 d-none d-lg-block">
                        <div className="py-5 h-100 d-flex align-items-start px-md-5 bg-light justify-content-start">
                            <div className="border col-md-7 px-4 py-4 mb-4 bg-white">
                                <img alt="" src={lightBulb} height="32px" className="mb-4" />
                                <h6 className="fw-600">Start with a lower price to attract bookings</h6>
                                <p className="font-small mb-0">We suggest starting with a competitive price as you are new to the website. This will help you develop a good reputation and get some guest reviews to help with future bookings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Step12


