
const Publish = () => {
    return (
        <>
            <div >
                <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "99%" }}>

                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-md-6 py-5 h-md-auto frame-height overflow-y-auto">
                        <div className="col-lg-8 col-md-11 px-md-0 mx-auto">
                            <h3 className="heading-big mb-3">Get ready to start hosting</h3>
                            <p >You are almost finished! If you are happy with your listing you can publish it now. If you want to edit any information you can also do that now.</p>
                            <div >
                                <div className="d-flex border-bottom py-3">
                                    <img alt="" src="https://horsebnb.com/assets/img/check-circle-primary.svg" className="pr-3 align-self-start" />
                                    <div >
                                        <span className="font-medium-bold text-black d-block">Edit your listing?</span>
                                    </div>
                                    <a href="!#" className="text-skyblue fw-600  text-decoration-none" style={{ color: "#00A4B4" }}>Edit</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="ng-star-inserted">

                                        <a href="!#">
                                            <div className="my-3 px-0 position-relative d-flex align-items-center justify-content-center">
                                                <img alt="" src="https://horsebnb.com/assets/img/connect_stripe_buttin.png" />
                                            </div>
                                        </a>
                                    </div>
                                    <form className="ng-untouched ng-pristine ng-invalid">
                                        <div className="mt-5">
                                            <label className="tickbox tickbox-sm text-default"> By publishing your listing, you agree to our <u style={{ cursor: "pointer" }} > Terms and Conditions</u> and have read our <u style={{ cursor: "pointer" }}  >Privacy Policy</u>. <input value="no" type="checkbox" className="ng-untouched ng-pristine ng-invalid" /><span className="checkmark skyblue"></span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <button className="btn btn-primary px-3 mt-5 py-2 ng-star-inserted"> Publish listing </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <div className="py-5 h-100 d-flex align-items-start px-md-5 bg-light justify-content-start">
                            <div className="border col-md-12 col-lg-7 px-4 py-4 mb-4 bg-white">
                                <div className="host-img mb-1">
                                    <img alt="" className="obj-cover  ng-star-inserted ng-lazyloaded" ng-reflect-default-image="https://horsebnb.s3.us-east-2." ng-reflect-lazy-image="https://horsebnb.s3.us-east-2." src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/1669005557512-Albert.png" />
                                </div>
                                <p className="text-lite mb-1 font-small">PMCX+F64, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 140308, India</p>
                                <p className="mb-1 font-small w-100 single-line-ellipsis">oo</p>
                                <p className="text-black font-regular-sm mb-1 w-100 single-line-ellipsis">Oo</p>
                                <p className="text-black mb-0 ng-star-inserted"><span className="fw-600">$898</span> /Night    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Publish