import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import HenceForthApi from "../Utiles/HenceForthApi"

type props = {
    steps: Array<number>,
    setSteps: any,
    // stepAdd: (val: number) => void
}

const Step1 = (props: props) => {

    const { setSteps, steps } = props
    const [stallType, setStallType] = useState()
    const [title, setTitle] = useState<string>("")
    const navigate = useNavigate()

    const step1 = async () => {
        if (stallType && title) {
            try {
                let res = await HenceForthApi.Auth.createdraftlisting({
                    title: title,
                    publicData: {
                        stepsCompleted: [...steps, 1],
                        type: parseInt(stallType)
                    }
                })
                navigate(`/create-stall/NumberOfStalls/${res.data.id.uuid}`)
            } catch (error) {
                console.log(error);
            }
        } else {
            toast('Please fill  Details', {
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
    return (
        <>
            <section className="createStallStep container-fluid">
                <div className="progress" style={{ height: "8px" }}>
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "7%" }}></div>
                </div>
                <div className="createStall container">
                    <ToastContainer />
                    <div className="row py-5">
                        <div className="col-md-6 col-lg-4 text-start">
                            <h2 className="heading-large mb-3">Hi henceforth, <br /> let's get started listing your space.</h2>
                            <p className="fw-600 mb-1 text-dim">STEP 1</p>
                            <h3 className="heading-big mb-4">What kind of place do you have?</h3>
                            <div className="my-2">
                                <p className="text-danger">Please note if you offer multiple services, you must create an individual listing per category. </p>
                            </div>
                            <div>
                                <form className="form-group">
                                    <select className="form-control mt-4 decorated" name="stallType" value={stallType} onChange={(e: any) => { setStallType(e.target.value) }}>
                                        <option value={0}>Choose stall type</option>
                                        <option value={1}>Short term stall</option>
                                        <option value={2}>Monthly board</option>
                                    </select>
                                    <h2 className="heading-big mt-4">Create a title for your listing?</h2>
                                    <p>Catch guest's attention with a listing title that highlights what makes your place special. This can not be your business name.</p>
                                    <input type="text" placeholder="Enter title" name="title" className="form-control mt-4" value={title} onChange={(e: any) => { setTitle(e.target.value) }} />
                                    <button type="button" className="btn btn-primary px-3 py-2 mt-4 position-relative d-flex align-items-center justify-content-center" style={{ background: "#00A4B4" }} onClick={step1}
                                    > Continue </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-8 d-flex align-items-center justify-content-center">
                            <img src="https://horsebnb.com/assets/img/create-stalls/image.png" width="500px" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Step1