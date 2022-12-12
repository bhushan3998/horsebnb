import { Link } from "react-router-dom"
import "./HostGuests.css"
import readyToLearn from "../Images/change_ready_to_learn.jpg"
import checkRound from "../Images/host-check-round.svg"


type props = {
    getStartedShow: () => void
}

const HostGuests = (props: props) => {
    const {getStartedShow} =props
    
    return (
        <>
            <div className="container-fluid">
                <div className="host-stall-bg py-5 px-5" style={{ backgroundImage: `url(${readyToLearn})`, height: '600px', backgroundRepeat: "no-repeat", backgroundSize: '100% 100%' }} >
                    <div className="col-md-12 py-5 text-center">
                        <h1 className="mb-3 py-3 text-white fw-bold">Learn more about hosting with HorseBnB Accommodations</h1>
                        <Link to={"/create-guest/step1"}><button type="button" className="btn btn-outline-light px-4 py-2" onClick={getStartedShow}>Get Started</button></Link>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="textCard">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6 mb-5 mb-md-0">
                                <div className="border p-5 why-host h-100">
                                    <h4 className="mb-3 text-black font-22">Why host on <span className="text-primary">HorseBnB</span>
                                    </h4>
                                    <p className="text-black mb-0">Host travelers with a guest accommodation listing on HorseBnB. You choose the availability, pricing and how you interact with guests.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stepsInHosting">
                    <div className="padd-t-host">
                        <h3 className="text-center text-black hosting">Hosting in 3 steps</h3>
                        <hr className="host-stall-hr py-5" />
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="h-100 border p-5 p-lg-4 br-4">
                                    <img alt="" src={checkRound} height="30px" className="mb-2 tick-R" />
                                    <h5 className="font-medium fw-700">CREATE AN ACCOUNT</h5>
                                    <p >Create an account using your email address and contact information on the HorseBnB website.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="h-100 border p-5 p-lg-4 br-4">
                                    <img src={checkRound} height="30px" className="mb-2 tick-R" alt="" />
                                    <h5 className="font-medium fw-700">MAKE A LISTING</h5>
                                    <p >Take a few pictures and write up a brief description of your facility. Include as much information as you can so the guests can see exactly what you have to offer.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="h-100 border p-5 p-lg-4 br-4">
                                    <img src={checkRound} height="30px" className="mb-2 tick-R" alt="" />
                                    <h5 className="font-medium fw-700">START EARNING MONEY</h5>
                                    <p >Start hosting other horse lovers and taking advantage of the HorseBnB platform. You can meet new friends and earn extra income at the same time!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomCoverImg pt-4">
                    <div className="host-earn padd-y-sm container-fluid" style={{ backgroundColor: '#00a4b4' }}>
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-4 mb-5 mb-md-0">
                                    <img src={readyToLearn} alt="" className="w-100" />
                                </div>
                                <div className="col-md-4">
                                    <h4 className="text-dark mb-5">Ready to earn ?</h4>
                                    <Link to={"/create-guest/step1"}>
                                        <button className="btn btn-outline-light" tabIndex={0} onClick={getStartedShow} >Get started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}
export default HostGuests