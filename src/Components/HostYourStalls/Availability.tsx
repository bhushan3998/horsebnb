import { error } from "console"
import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"

import backArrow from "../Images/chevron-left-primary.svg"
import horseImg from "../Images/horseImage.png"

type props = {
    getStartedShow: () => void,
    steps: Array<number>,
    setSteps: (value: Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    // stepAdd: (val: number) => void

}
const Availability = (props: props) => {
    const { steps, setSteps, getStartedShow, spinner, setSpinner } = props

    const [check, setCheck] = useState()

    const navigate = useNavigate()
    const match = useMatch(`/create-stall/Availability/:id`)

    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);
            setCheck(res?.data?.attributes?.publicData?.gotIt)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getStartedShow()
        listId()
        // eslint-disable-next-line 
    }, [])

    const setAvailability = async () => {

        const list = {
            id: match?.params.id,
            publicData: {
                gotIt: check,
                stepsCompleted: [...steps, 14]
            }
        }
        try {
            setSpinner(true)
            await HenceForthApi.Auth.Updatedlisting(list)
            navigate(`/create-stall/Calender/${match?.params.id}`)
            setSpinner(false)

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "56%" }}>
                </div>
            </div>
            <div className="row mx-0">
                <ToastContainer />
                <div className="col-md-6 py-5 frame-height overflow-y-auto">
                    <div className="col-md-8 px-md-0 mx-auto d-flex flex-column h-100">
                        <h3 className="heading-big mb-4">Successful hosting starts with an accurate calendar</h3>
                        <p className="font-small-bold my-3">Guests will be able to book your listing instantly. By keeping your calendar up to date you will only get bookings when you are able to host. If you make multiple cancellations it could affect your listings ranking and create negative reviews as it causes problems for travellers.</p>

                        <label htmlFor="calendar_up_to_date" className="tickbox tickbox-sm mt-0 mb-4 text-default"> Got it! I'll keep my calendar up to date.
                            <input type="checkbox" id="calendar_up_to_date" name="got_it" className="ng-valid ng-dirty ng-touched" checked={check} required onChange={(e: any) => { setCheck(e.target.checked) }} />

                            <span className="checkmark skyblue"></span>
                        </label>

                        <div className="d-flex justify-content-between border-top mt-auto">
                            <Link to={"/create-stall/Timmings"}>   <button type="button" className="btn btn-transparent font-regular my-3 px-0">
                                <img src={backArrow} className="pr-1" alt="" /> Back </button></Link>
                            <button type="button" className="btn btn-primary my-3 px-3 position-relative d-flex align-items-center justify-content-center" disabled={spinner} onClick={setAvailability}> {!spinner ? " Next" : <Spinner />} </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-center px-0">
                    <div className="h-100 d-flex py-5 align-items-center border-start justify-content-center">
                        <img src={horseImg} alt="" width="250px" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Availability