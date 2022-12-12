import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"

import stripeConnectImg from "../Images/connect_stripe_buttin.png"
import backArrow from "../Images/chevron-left-primary.svg"
import stripePayments from "../Images/stripe_payments.svg"


type props = {
    steps: Array<number>,
    setSteps: (value : Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    // stepAdd:(val: number) => void
}

const StripeConnect = (props: props) => {
    const { steps, setSteps , spinner , setSpinner } = props

    const navigate = useNavigate()
    const match = useMatch(`/create-stall/StripeConnect/:id`)
    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        // getStartedShow()
        listId()
        // eslint-disable-next-line 
    }, [])

    const StripeConnect = async () => {

        let list = {
            id: match?.params.id,
            publicData: {
                stepsCompleted: [...steps, 12]
            }
        }
        try {
            await HenceForthApi.Auth.Updatedlisting(list)
            navigate(`/create-stall/LastStep/${match?.params.id}`)
        } catch (error) {
        }
        // stepAdd(12)
    }

    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "77%" }}>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-6 py-5 steps-frame-height overflow-y-auto">
                    <div className="col-md-11 col-lg-8 px-md-0 mx-auto d-flex flex-column h-100">
                        <h3 className="heading-big">Connect with Stripe to accept payments</h3>
                        <div className="d-flex align-items-center justify-cont ng-star-inserted">
                            <div className="btn my-3 px-3 position-relative d-flex align-items-center justify-content-center">
                                <img alt="" src={stripeConnectImg} />
                            </div>
                            <Link to={`/create-stall/LastStep/${match?.params.id}`}>
                                <button type="button" className="btn btn-primary skip-btn font-regular my-3 px-3 mr-3"  > Skip for now </button>
                            </Link>
                        </div>
                        <div className="d-flex justify-content-between mt-5 border-top">
                            <Link to="/create-stall/Pricing">
                                <button type="button" className="btn btn-transparent font-regular my-3 px-0" >
                                    <img alt="" src={backArrow} className="pr-1" /> Back
                                </button>
                            </Link>
                            <Link to="/create-stall/L">
                                <button className="btn my-3 px-3 text-white d-flex align-items-center justify-content-center " disabled={spinner} style={{ background: "rgb(0, 164, 180)" }}> {!spinner ?   " Next" : <Spinner/>}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center px-md-0 d-none d-md-block">
                    <div className="py-5 h-100 d-flex align-items-center bg-light justify-content-center">
                        <img alt="" src={stripePayments} height="250px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StripeConnect