import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"
import CompletedSteps from "./CompletedSteps"
import finishListing from "../Images/finish_your_listing.svg"
import backArrow from "../Images/chevron-left-primary.svg"

type props = {
    setSteps: (value: Array<number>) => void
    steps: Array<number>,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    setSaveExitbtn: (value:number) => void
    saveExitbtn: number
}
const LastStep = (props: props) => {
    const { steps, setSteps, spinner, setSpinner , setSaveExitbtn  , saveExitbtn } = props

    const [allStep , setAllSteps] =useState<any>([])
    let [coverPhoto, setCoverPhoto] = useState<string>("")
    const navigate = useNavigate()
    const match = useMatch(`/create-stall/LastStep/:id`)

    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            console.log(res?.data?.attributes?.publicData?.stepsCompleted);
            setCoverPhoto(res?.data?.attributes?.publicData?.cover_photo.url);
            setSteps(res.data.attributes.publicData.stepsCompleted);
            
            console.log(allStep);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        
        


        listId()
        // setSaveExitbtn(0)
        // eslint-disable-next-line 
    }, [saveExitbtn])

    console.log(steps);
    


    const allSteps = [
        {
            id: 1,
            step: "Title",
            url: `create-stall/step1/${match?.params.id}`,
            stepNumber: 1
        },
        {
            id: 2,
            step: "Stalls",
            url: `create-stall/NumberOfStalls/${match?.params.id}`,
            stepNumber: 3

        },
        {
            id: 3,
            step: "Location",
            url: `create-stall/YourLocation/${match?.params.id}`,
            stepNumber: 5

        },
        {
            id: 4,
            step: "Amenities",
            url: `create-stall/Amenities/${match?.params.id}`,
            stepNumber: 6

        },
        {
            id: 5,
            step: "Photos",
            url: `create-stall/AddPhotos/${match?.params.id}`,
            stepNumber: 7

        },
        {
            id: 6,
            step: "Description",
            url: `create-stall/Description/${match?.params.id}`,
            stepNumber: 8

        },
        // {id:7, step:"Profile Photo" , url:"Timmings/:id"},
        {
            id: 7,
            step: "Check in and Check out",
            url: `create-stall/Timmings/${match?.params.id}`,
            stepNumber: 9

        },
        {
            id: 8,
            step: "Agreement",
            url: `create-stall/Availability/${match?.params.id}`,
            stepNumber: 14

        },
        {
            id: 9,
            step: "Calendar Availability",
            url: `create-stall/Calender/${match?.params.id}`,
            stepNumber: 15

        },
        {
            id: 10,
            step: "Pricing",
            url: `create-stall/Pricing/${match?.params.id}`,
            stepNumber: 11

        },
        {
            id: 11,
            step: "Stripe Connect",
            url: `create-stall/StripeConnect/${match?.params.id}`,
            stepNumber: 12
            // checked: {}
        },
    ]


    const lastStep = () => {
        setSpinner(true)
        navigate(`/manage-listing/publish-listing/${match?.params.id}`)
        setSpinner(false)
    }


    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: "84%" }}>
                </div>
            </div>
            <div className="container">
                <div className="row mt-3 border-bottom pb-4">
                    <div className="col-md-5">
                        <h3 className="heading-large text-black line-height-space mb-3">Finish your listing to start earning..</h3>
                        <h6 className="text-lite mb-3">You can always edit your listing after you publish it.</h6>
                        {allSteps.map((e: any, index: any) =>
                            <CompletedSteps stepsArray={steps} stepName={e.step} key={index} url={e.url} stepNumber={e.stepNumber} />
                        )}
                    </div>
                    <div className="col-md-7 text-center d-flex flex-column">
                        <div className="d-flex align-items-center flex-column justify-content-center flex-grow-1">
                            <div className="d-flex flex-column w-md-100">
                                <img alt="" src={finishListing} width="400px" className="d-none d-md-block" />
                                <div className="px-0 mt-4 flex-basis-auto">
                                    <div className="steps-preview d-flex align-items-center justify-content-between p-3 ml-md-5">
                                        <div className="text-left">
                                            <h6 className="font-medium single-line-ellipsis">oo</h6>
                                            <Link className="pointer text-decoration-none" style={{ color: "#00A4B4" }} to={""}>Preview</Link>
                                        </div>
                                        <div className="prev-img">
                                            <img alt="" className="obj-cover  ng-star-inserted ng-lazyloaded" src={`${HenceForthApi.API_FILE_ROOT_MEDIUM}${coverPhoto}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-6 ">
                            <div className="d-flex justify-content-between mt-5 border-top">
                                <div className="">
                                    <Link to="/create-stall/StripeConnect">
                                        <button type="button" className="btn btn-transparent font-regular my-3 px-0" >
                                            <img alt="" src={backArrow} className="pr-1" /> Back
                                        </button>
                                    </Link>
                                </div>
                                <div className="">
                                    <button className="btn my-3 px-3 text-white" style={{ background: "rgb(0, 164, 180)" }} disabled={spinner} onClick={lastStep}> {!spinner ? " Next" : <Spinner />}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LastStep