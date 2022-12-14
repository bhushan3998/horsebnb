import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import backArrow from "../Images/chevron-left-primary.svg"
import lightBulb from "../Images/lightBulb.svg"
import DateModal from "./DateModal/DateModal";

type props = {
    adSteps: Array<number>
    setAdSteps: (value: Array<number>) => void;
}


const AdStep7 = (props: props) => {
    const { adSteps, setAdSteps } = props

    const match = useMatch('add-experience/step7/:id')
    const [days, setDays] = useState<Array<string>>([])


    const [state, setState] = useState<any>({
        startTime: "" as any,
        daysChecked: false as boolean
    })


    const handleDays = (e: any) => {
        setState({
            daysChecked: e.target.checked
        })
        console.log(state.startTime);
        //     let prev = days
        //     let value = e.target.value
        //     let lastIndex = prev.indexOf(value)
        //     if(lastIndex !== -1) {
        //         prev.splice(lastIndex , 1)
        //     } else {
        //         prev.push(value)
        //     }
        //     setDays([...prev])
    }
    // console.log(days);

    // var hours = dt.getHours()
    // let minute = dt.getMinutes();
    // hours = (hours % 12) || 12;
    // console.log("Time is - " + hours + ":" + minute;

    // function myFunction() {
    //     var date = new Date();
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
        
    //     // Check whether AM or PM
    //     var newformat = hours >= 12 ? 'PM' : 'AM'; 
        
    //     // Find current hour in AM-PM Format
    //     hours = hours % 12; 
        
    //     // To display "0" as "12"
    //     lehours = hours ? hours : 12; 
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
        
    //     let t : any = document.getElementById("change").innerHTML = 
    //       hours + ':' + minutes + ' ' + newformat as any
    // }



    const availabilityDays = [
        { day: "Sunday" },
        { day: "Monday" },
        { day: "Tuesday" },
        { day: "Wednesday" },
        { day: "Thursday" },
        { day: "Friday" },
        { day: "Saturday" },
    ]



    return (
        <>

            <div className="row mx-0">
                <div className="col-lg-7 col-md-12 py-5 steps-frame-height overflow-y-auto">
                    <div className="col-md-10 px-0 mx-auto">
                        <h3 className="heading-big text-black">Set your Availability</h3>
                        <div >
                            <h6 className="mb-4">As a host it is very important that you keep your availability accurate.</h6>
                            <div className="d-flex">
                                <div className="border">
                                    <span className="badge badge-primary" >Single Day Slots</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="" className="font-small mb-1 fw-600">Slot Size (In Hours)</label>
                                <input type="text" placeholder="Please enter size" maxLength={50} className="form-control ng-untouched ng-pristine ng-valid" style={{ maxWidth: "250px" }} />
                                <div className="invalid-feedback d-block">
                                </div>
                            </div>
                            <label htmlFor="" className="font-small mt-3 mb-0 fw-600">Set Schedule</label>
                            <div className="border col-auto p-2 mt-1 mb-4">

                                {availabilityDays.map((e: any, index: number) => {
                                    return (
                                        <>
                                            <div className="p-2">
                                                <div className="d-flex flex-wrap" >
                                                    <div className="col-md-4 p-0 d-flex justify-content-start align-items-center">
                                                        <label className="tickbox d-flex m-0 font-14" key={index} >
                                                            <input type="checkbox" className="ng-untouched ng-pristine ng-valid" data-bs-toggle="modal" data-bs-target="#exampleModal" value={e.day} onChange={handleDays} />
                                                            <span className="checkmark">
                                                                <span >{e.day}</span>
                                                            </span>
                                                        </label>
                                                        <DateModal state={state} setState={setState} />
                                                    </div>
                                                    <div className="col-md-8 mt-2 mt-md-0 p-0">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <span className="fs-14 text-primary fw-600 cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i aria-hidden="true" className="fas fa-plus-circle pr-1">
                                                                </i> Add Time Slots </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                            <div className="d-flex justify-content-between border-top mt-5">
                                <button type="button" className="btn btn-transparent font-regular my-3 px-0" tabIndex={0} >
                                    <img src={backArrow} className="pr-1" />
                                    Back
                                </button>
                                <Link to={`/add-experience/step7/${match?.params.id}`}>


                                    <button type="button" className="btn btn-primary my-3 px-3 position-relative d-flex align-items-center justify-content-center">
                                        Next
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 px-md-0 d-none d-lg-block">
                    <div className="py-5 h-100 d-flex align-items-start px-md-5 bg-light justify-content-start">
                        <div className="border col-md-7 px-4 py-4 mb-4 bg-white">
                            <img src={lightBulb} height="32px" className="mb-4" />
                            <p className="font-small mb-3">
                                Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don't get any unwanted bookings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AdStep7