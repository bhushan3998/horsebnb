import { useState } from "react"
import { Link, useMatch } from "react-router-dom"

const YourLocation = () => {

    const [location , setLocation] = useState<string>("")


    const match = useMatch(`/create-stall/YourLocation/:id`)





    return (

        <>
            <div id="root">
                <div className="App">

                    <section className="add_Location">
                        <div className="progress" style={{ height: "8px" }}>
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "21%" }}>
                            </div>
                        </div>
                        <div className="row mx-0 h-100">
                            <div className="col-md-6 py-5 px-0 outer_location overflow-scroll" style={{ height: '91vh' }}>
                                <div className=" ">
                                    <div className="col-md-11 col-lg-8 px-0 mx-auto text-start">
                                        <h3 className="fw-600 heading-big">Where is your place located?</h3>
                                        <div className="">
                                            <p className="font-small-bold my-3">Please input your exact address. Guests will not be able to see your exact address until they have made a booking.</p>
                                            <button className="btn btn-sky-outline-lg my-3 mb-4 position-relative d-flex align-items-center justify-content-center" style={{ border: "1px solid rgb(0, 164, 180)" }}>
                                                <img src="../../Horsebnb Assets/near_me.svg" alt="" className="img-fluid" />Use current location </button>
                                            {/* <form className="form-group"> */}
                                               
                                                <input className="form-control  mt-4" placeholder="Enter a location"   value={location} onChange={(e: any) => {setLocation(e.target.value)}} />
                                                {/* </form> */}
                                                {/* <form className="form-group">
                                                    <div>
                                                        <div className="form-group my-3">
                                                            <label className="mb-3" htmlFor="">Country/Region</label>
                                                    <input placeholder="Enter country" name="country" className="form-control" value="IN" />
                                                </div>
                                                    <div className="form-group my-3">
                                                        <label className="mb-3" htmlFor="">State</label>
                                                        <input placeholder="Enter state" name="state" className="form-control ng-untouched ng-pristine ng-valid" value="PB" />
                                                    </div>
                                                    <div className="form-group my-3">
                                                        <label className="mb-3" htmlFor="">City</label>
                                                        <input placeholder="Enter city" name="city" className="form-control ng-untouched ng-pristine ng-valid" value="Sahibzada Ajit Singh Nagar" /></div>
                                                    <div className="form-group my-3">
                                                        <label className="mb-3" htmlFor="">Zip Code</label>
                                                        <input placeholder="Enter zip code" name="postcode" className="form-control" value="160071" />
                                                    </div>
                                                </div>
                                            </form> */}
                                        </div>
                                        <div className="d-flex justify-content-between mt-5 mb-0 border-top">
                                            <a href="/create-stall/step3/408">
                                                <Link to={"/create-stall/NumberOfStalls"}><button className="btn border-0 font-regular px-0 my-3" style={{ color: "#00A4B4" }}>
                                                    <img src="https://horsebnb.com/assets/img/chevron-left-primary.svg" alt="" className="ps-1" /> Back
                                                </button>
                                                </Link>
                                            </a>
                                            <Link to={`/create-stall/Amenities/${match?.params.id}`}> <button className="btn my-3 px-3 text-white d-flex align-items-center justify-content-center" style={{ background: "rgb(0, 164, 180)" }}> Next
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center px-0">
                                <div className="h-100 d-flex py-5 align-items-center border-start justify-content-center">
                                    <img src="https://horsebnb.com/assets/img/create-stalls/horse_image.png" alt="" width="250px" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )

}

export default YourLocation