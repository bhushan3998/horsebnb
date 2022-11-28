import { Link } from "react-router-dom"
import CompletedSteps from "./CompletedSteps"

const LastStep = () => {




    const allSteps = [
        {id:1, step:"Title"  , url:"step1" },
        {id:2, step:"Stalls" , url:"NumberOfStalls/:id"},
        {id:3, step:"Location" , url:"YourLocation/:id"},
        {id:4, step:"Amenities" , url:"Amenities/:id"},
        {id:5, step:"Photos" , url:"AddPhotos/:id"},
        {id:6, step:"Description" , url:"Description/:id"},
        // {id:7, step:"Profile Photo" , url:"Timmings/:id"},
        {id:7, step:"Check in and Check out" , url:"Timmings/:id"},
        {id:8, step:"Agreement" , url:"Availability/:id"},
        {id:9, step:"Calendar Availability" , url:"Calender/:id"},
        {id:10, step:"Pricing" , url:"Pricing/:id"},
        {id:11, step:"Stripe Connect" , url:"StripeConnect/:id"},
        

    ]


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


                       {allSteps.map((e : any , index: any)=>
                        <CompletedSteps stepName={e.step} key={index} url={e.url}/>
                       )}
                    </div>
                    <div className="col-md-7 text-center d-flex flex-column">
                        <div className="d-flex align-items-center flex-column justify-content-center flex-grow-1">
                            <div className="d-flex flex-column w-md-100">
                                <img alt="" src="https://horsebnb.com/assets/img/create-stalls/finish_your_listing.svg" width="400px" className="d-none d-md-block" />
                                <div className="px-0 mt-4 flex-basis-auto">
                                    <div className="steps-preview d-flex align-items-center justify-content-between p-3 ml-md-5">
                                        <div className="text-left">
                                            <h6 className="font-medium single-line-ellipsis">oo</h6>
                                            <Link className="pointer text-decoration-none" style={{ color: "#00A4B4" }} to={""}>Preview</Link>
                                        </div>
                                        <div className="prev-img">
                                            <img alt="" className="obj-cover  ng-star-inserted ng-lazyloaded" ng-reflect-default-image="https://horsebnb.s3.us-east-2." ng-reflect-lazy-image="https://horsebnb.s3.us-east-2." src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Medium/1669005557512-Albert.png" />
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
                                            <img alt="" src="https://horsebnb.com/assets/img/chevron-left-primary.svg" className="pr-1" /> Back
                                        </button>
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="/create-stall/Publish">
                                        <button className="btn my-3 px-3 text-white" style={{ background: "rgb(0, 164, 180)" }}> Next
                                        </button>
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

export default LastStep