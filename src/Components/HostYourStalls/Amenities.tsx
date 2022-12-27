import { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import HenceForthApi from "../Utiles/HenceForthApi";

import backArrow from "../Images/chevron-left-primary.svg"
import horseImg from "../Images/horseImage.png"

type props = {
    steps: Array<number>,
    setSteps: (value: Array<number>) => void,
    spinner: boolean,
    setSpinner: (value: boolean) => void
    saveExitbtn: number


}

const Amenities = (props: props) => {

    const { steps, setSteps, spinner, setSpinner, saveExitbtn } = props
    const navigate = useNavigate()
    const [check, setChecked] = useState<Array<string>>([]);


    const handleChecked = (e: any) => {
        let prev = check;
        let value = e.target.value
        let itemIndex = prev.indexOf(value);
        if (itemIndex !== -1) {
            prev.splice(itemIndex, 1);
        } else {
            prev.push(value);
        }
        setChecked([...prev]);
    };

    const match = useMatch(`/create-stall/Amenities/:id`)
    const listId = async () => {
        try {
            let res = await HenceForthApi.Auth.Listid(match?.params.id)
            setSteps(res?.data?.attributes?.publicData?.stepsCompleted);
            setChecked(res?.data?.attributes?.publicData?.amenities)

        } catch (error) {
            console.log(error);
        }
    }
    console.log(check[0]);
    useEffect(() => {
        listId()
        // Title()
        // eslint-disable-next-line 
    }, [])


    const uploadAmenities = async (navigation: string) => {
        const list = {
            id: match?.params.id,
            publicData: {
                amenities: check,
                stepsCompleted: [...steps, 6],
            }
        }

        if (check) {
            try {
                setSpinner(true)
                await HenceForthApi.Auth.Updatedlisting(list)
                if (navigation === "next") {
                    navigate(`/create-stall/AddPhotos/${match?.params.id}`)
                } else {
                    navigate(`/create-stall/LastStep/${match?.params.id}`)
                }
                setSpinner(false)
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.warn("Select the Amenities Offers")
        }
    }

    useEffect(() => {
        if (saveExitbtn) {
            uploadAmenities("last")
        }
    }, [saveExitbtn])


    const amenitiesOffers = [
        { option: "Climate Contolled Barn", id: 1 },
        { option: "Indoor Arena", id: 2 },
        { option: "Out Door Arena", id: 3 },
        { option: "Hot Walker", id: 4 },
        { option: "Round Pen", id: 5 },
        { option: "Trak Room", id: 6 },
        { option: "Trak Loader", id: 7 },
        { option: "Wash Rack", id: 8 },
        { option: "Hot Water", id: 9 },
        { option: "Lighted Arena", id: 10 },
        { option: "Trail Riding Accessible", id: 11 },
        { option: "Dog Friendly", id: 12 },
        { option: "Bathroom", id: 13 },
        { option: "Wifi", id: 14 },
        { option: "Shavings Included", id: 15 },
        { option: "Paddock", id: 16 },
        { option: "Box Stall", id: 17 },
        { option: "Box Stalls With Run", id: 18 },
        { option: "Stall Fans", id: 19 },
        { option: "Matted stalls", id: 20 },
        { option: "Private Pasture", id: 21 },
        { option: "Automatic Water Feeder", id: 22 },
        { option: "Feed Buckets", id: 23 },
        { option: "Water Buckets", id: 24 },
        { option: "Electric Fencing", id: 25 },
        { option: "Pasture", id: 26 },
        { option: "Turn Out", id: 27 },
        { option: "Mare Motel", id: 28 },
        { option: "Accepts Stallions", id: 29 },
    ]

    return (
        <>
            <div className="progress" style={{ height: "8px" }}>
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '28%' }}>
                </div>
            </div>
            <div className="row gx-0 mx-0 h-100 ">
                <div className="col-md-6 py-5 px-0 overflow-scroll" style={{ height: '91vh' }}>
                    <div className="heading py-4 ">

                        <h2 className="text-center">What amenities do you offer?</h2>
                        <p className=" text-center">You will be able to add more amenities in your write up for your listing.</p>
                    </div>
                    {amenitiesOffers.map((e: any, index: any) => {
                        return (
                            <>
                                <div className="row ps-3 ">

                                    <label className="tickbox tickbox-sm mt-0 mb-4 text-default" key={index}>
                                        <input type="checkbox" checked={check.includes(e.option)} value={e.option} name="selectOptions" multiple={true} onChange={(e: any) => handleChecked(e)} className="me-1" />
                                        {e.option}
                                        <span className="checkmark">
                                        </span>
                                    </label>
                                </div>
                            </>
                        )
                    })}
                    <hr />
                    <div className="d-flex justify-content-between mt-5 mb-0 border-top">

                        <Link to={`/create-stall/YourLocation/${match?.params.id}`}>
                        
                        <button className="btn border-0 font-regular px-0 my-3" style={{ color: "#00A4B4" }}>
                            <img src={backArrow} alt="" className="ps-1" /> Back
                        </button>
                        </Link>

                        <button className="btn my-3 px-3 text-white d-flex align-items-center justify-content-center" disabled={spinner} style={{ background: "rgb(0, 164, 180)" }} onClick={() => uploadAmenities("next")}> {!spinner ? " Next" : <Spinner />}
                        </button>
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
export default Amenities