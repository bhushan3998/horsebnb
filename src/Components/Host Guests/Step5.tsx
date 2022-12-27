import { useEffect } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom"
import HenceForthApi from "../Utiles/HenceForthApi";
import nearMe from "../Images/nearMe.svg"
import guestStepsImg from "../Images/guestSteps.png"
import backArrow from "../Images/chevron-left-primary.svg"

type props = {
    steps: Array<number>,
    setSteps: (value : Array<number> ) => void
    saveExitbtn:number
}


const Step5 = (props: props) => {
    const {steps , setSteps , saveExitbtn} = props
    const navigate = useNavigate();
    const match = useMatch(`/create-guest/Step5/:id`)

    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        listId()
        // eslint-disable-next-line 
    }, [])
    
    
    const handleStep = (navigation: string) => {
        if (navigation==='next') {
            navigate(`/create-guest/step6/${match?.params.id}`)
            
        }else{
            navigate(`/create-guest/GuestsLastStep/${match?.params.id}`)

        }
    }

    useEffect(() => {
        if (saveExitbtn) {
            handleStep('last')
        }
    } , [saveExitbtn])
    return (

        <>
            <div className="row mx-0">
                <div className="col-md-6 py-5 steps-frame-height overflow-y-auto">
                    <div className="col-md-11 col-lg-8 px-0 mx-auto">
                        <h3 className="fw-600 heading-big">Where is your place located?</h3>
                        <div className="location-paragraph ng-star-inserted">
                            <p >Please input your exact address. Guests will not be able to see your exact address until they have made a booking.</p>
                            <button type="button" className="btn btn-primary lg my-3 mb-4 position-relative d-flex align-items-center justify-content-center">
                                <img src={nearMe} className="pr-2" />
                                Set Your Location

                            </button>
                            <form className="ng-untouched ng-pristine ng-invalid">
                                <input className="form-control ml-search mt-4 ng-untouched ng-pristine ng-valid pac-target-input" placeholder="Enter a location" />
                                <div className="invalid-feedback d-block">
                                </div>
                            </form>
                            <form className="ng-untouched ng-pristine ng-invalid">
                                <div className="d-flex justify-content-between border-top mt-5">
                                    <Link to={`/create-guest/step3/${match?.params.id}`}>
                                    </Link>
                                    <button type="button" className="btn btn-transparent font-regular my-3 px-0" tabIndex={0} >
                                        <img src={backArrow} className="pr-1" /> Back
                                    </button>

                            
                                    <button type="button" className="btn btn-primary my-3 px-3 position-relative d-flex align-items-center justify-content-center" onClick={() => handleStep('next')}>
                                        Next
                                    </button>
                                 
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-md-6 text-center px-md-0 d-none d-md-block">
                    <div className="py-5 h-100 d-flex align-items-center bg-light justify-content-center">
                        <img src={guestStepsImg} width="350px" />
                    </div>
                </div>
            </div>


        </>
    )

}
export default Step5