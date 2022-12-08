import { useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HenceForthApi from "../Utiles/HenceForthApi";
type props = {
    adSteps: any
    setAdSteps: any;
}


const AdStep8 = (props: props) => {
    const { adSteps, setAdSteps } = props

    HenceForthApi.setToken(localStorage.getItem("token"))
    const match = useMatch('/add-experience/step8/:id')
    const navigate = useNavigate()

    const [price, setPrice] = useState<number>()
    const [check, setCheck] = useState<number>()

    const poststep8Data = async () => {
        if (price) {
            try {
                (await HenceForthApi.Auth.Updatedlisting({
                    id: match?.params.id,
                    price: {
                        amount: "",
                        currency: "USD"
                    },
                    publicData: {
                        bookingAcceptType: check,
                        listing_price: price,
                        stepsCompleted: [
                            ...adSteps,
                            8
                        ]

                    }
                }))
                navigate(`/add-experience/step9/${match?.params.id}`)
            }
            catch (error) {
                console.log(error);
            }
        } else {
            toast('🦄 Please Choose Your prize', {
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
    }
    const list = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setAdSteps(res.data.attributes.publicData.stepsCompleted)
        }
        catch (error) {

        }
    }

    useState(() => {
        list()
    })
    return (
        <>
            <div >
                <ToastContainer />
                <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "90%" }}>
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-lg-6 py-5 steps-frame-height overflow-y-auto">
                        <div className="col-lg-8 col-md-11 px-md-0 mx-auto d-flex flex-column h-100">
                            <h3 className="heading-big">Price your stall.</h3>
                            <span className="font-small mb-2 d-block"> This will be your nightly price per stall </span>
                            <div className="input-group mb-3 mh-40">
                                <div className="input-group-prepend">
                                    <span className="input-group-text dollar">$</span>
                                </div>
                                <input type="text" value={price} name="num" onChange={(e: any) => setPrice(e.target.value.replace(/\D/g, ''))} placeholder="" className="form-control dollar ng-untouched ng-pristine ng-valid" />
                            </div>
                            <div className="mt-3">
                                <div>
                                    <h5 className="pb-2">Do you want to allow guests to make instant bookings?
                                    </h5>
                                </div>
                                <div >
                                    <label htmlFor="radio-three" className="radio-lable px-3 d-flex position-relative align-items-center">
                                        <span className="ml-3 font-medium">Yes</span>
                                        <input type="radio" id="radio-three" value={1} onChange={(e: any) => setCheck(e.target.value)} className="ng-untouched ng-pristine ng-valid" name='radio-btn' />
                                        <span className="radio-checkmark"></span>
                                    </label>
                                    <label htmlFor="radio-four" className="radio-lable px-3 d-flex position-relative align-items-center">
                                        <span className="ml-3 font-medium">No</span>
                                        <input type="radio" id="radio-four" value={2} onChange={(e: any) => setCheck(e.target.value)} name='radio-btn' className="ng-untouched ng-pristine ng-valid" />
                                        <span className="radio-checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-5 border-top">
                                <Link to="">
                                    <button type="button" className="btn btn-transparent font-regular my-3 px-0" >
                                        <img src="https://horsebnb.com/assets/img/chevron-left-primary.svg" className="pr-1" alt="" /> Back
                                    </button>
                                </Link>
                                <Link to={`/add-experience/step9/${match?.params.id}`}>
                                    <button className="btn my-3 px-3 text-white"
                                        onClick={poststep8Data}
                                        style={{ background: "rgb(0, 164, 180)" }}> Next
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center px-md-0 d-none d-md-block">
                        <div className="py-5 h-100 d-flex align-items-center bg-light justify-content-center">
                            <img src="https://horsebnb.com/assets/img/experience.png" alt="" width="350px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdStep8