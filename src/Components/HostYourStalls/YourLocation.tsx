import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import HenceForthApi from "../Utiles/HenceForthApi"
import backArrow from "../Images/chevron-left-primary.svg"
import horseImg from "../Images/horseImage.png"

type props = {
    steps: Array<number>,
    setSteps: (value: Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    saveExitbtn: number
}

const YourLocation = (props: props) => {
    const { steps, setSteps, spinner, setSpinner, saveExitbtn } = props
    const [location, setLocation] = useState<string>("")
 
    const navigate = useNavigate()
    const match = useMatch(`/create-stall/YourLocation/:id`)

    const [geoLoc, setGeoLoc] = useState<any>({
        lat: 0 as number,
        lng: 0 as number
    })

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


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                // console.log("Latitude is :", position.coords.latitude);
                // console.log("Longitude is :", position.coords.longitude);
                setGeoLoc({
                    ...geoLoc,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            });
        }
    }
    console.log(geoLoc);
    


    const addLocation = async (navigation: string) => {
        let list = {
            id: match?.params.id,
            geolocation: {
                lat: geoLoc.lat,
                lng: geoLoc.lng,
            },
            publicData: {
                stepsCompleted: [...steps, 5],

            }
        }
        try {
            setSpinner(true)
            await HenceForthApi.Auth.Updatedlisting(list)
            setSpinner(false)
            if(navigation=== 'last'){

                navigate(`/create-stall/LastStep/${match?.params.id}`)
            }else {
                navigate(`/create-stall/Amenities/${match?.params.id}`)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (saveExitbtn) {
            addLocation("last")
        }
    } , [saveExitbtn])
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
                                            <button className="btn btn-sky-outline-lg my-3 mb-4 position-relative d-flex align-items-center justify-content-center" style={{ border: "1px solid rgb(0, 164, 180)" }} onClick={getLocation}>
                                                <img src="../../Horsebnb Assets/near_me.svg" alt="" className="img-fluid" />Use current location </button>
                                            
                                            <input className="form-control  mt-4" placeholder="Enter a location" value={location} onChange={(e: any) => { setLocation(e.target.value) }} />
                                        </div>
                                        <div className="d-flex justify-content-between mt-5 mb-0 border-top">
                                            <a href="/create-stall/step3/408">
                                                <Link to={`/create-stall/NumberOfStalls${match?.params.id}`}><button className="btn border-0 font-regular px-0 my-3" style={{ color: "#00A4B4" }}>
                                                    <img src={backArrow} alt="" className="ps-1" /> Back
                                                </button>
                                                </Link>
                                            </a>
                                            <button className="btn my-3 px-3 text-white d-flex align-items-center justify-content-center" disabled={spinner} style={{ background: "rgb(0, 164, 180)" }} onClick={() => addLocation("next")}> {!spinner ? " Next" : <Spinner />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center px-0">
                                <div className="h-100 d-flex py-5 align-items-center border-start justify-content-center">
                                    <img src={horseImg} alt="" width="250px" />
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