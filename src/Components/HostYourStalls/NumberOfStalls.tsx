import { useEffect, useState } from "react"
import { Link, useMatch, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import HenceForthApi from "../Utiles/HenceForthApi"

type props ={
    steps: Array<number>,
    setSteps: any,
    stepsRun:number
    // stepAdd: (val: number) => void
}
const NumberOfStalls = (props: props) => {
    const {steps , setSteps,stepsRun } = props
    let [count, setCount] = useState<number>(1)
    // console.log(count);  

    const navigate = useNavigate();
    const match = useMatch(`/create-stall/NumberOfStalls/:id`)
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
    
    const setStallsCount = async () => {
        const list = {
            id: match?.params.id,
            publicData: {
                stalls: count,
                stepsCompleted: [...steps  , 3]
            }
        }
        try {
            if(count){
                await HenceForthApi.Auth.Updatedlisting(list)
                navigate(`/create-stall/YourLocation/${match?.params.id}`)
            }else{
                toast('Please fill  count', {
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
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
        
    //     setStallsCount()
    //     // eslint-disable-next-line 
    // }, [stepsRun])
    
    return (
        <>

            <div className="App">
                <section className="stall_step3">
                    <div className="progress" style={{ height: "8px" }}>
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "14%" }}>
                        </div>
                    </div>
                    <div className="row mx-0 h-100">
                        <div className="col-md-6 text-start pt-5 px-0 outer_location">
                            <div className="col-md-11 col-lg-8 mx-auto px-0 d-flex flex-column ">
                                <h3 className="fw-600 heading-big">How many horses can your barn accommodate?</h3>
                                <p className="font-small-bold mb-4">Check that you have enough stalls.</p>
                                <div className="d-flex mb-0 pt-1">
                                    <h5 className="font-medium-bold">Stalls</h5>
                                    <div className="input-group d-flex justify-content-end">
                                        <div className="input-group-prepend">
                                            <button className="btn border-0" onChange={(e: any) => { setCount(e.target.value) }} onClick={() => { setCount(count - 1) }} disabled={count === 0}>
                                                <img src="https://horsebnb.com/assets/img/remove_circle_outline.svg" alt="" width="18px" />
                                            </button>
                                        </div>
                                        <input type="text" className=" form-control text-center" value={count} style={{ flex: "0.1 1 auto" }} />
                                        <div className="input-group-prepend">
                                            <button className="btn border-0" onClick={() => { setCount(count + 1) }} onChange={(e: any) => { setCount(e.target.value) }}>

                                                <img src="https://horsebnb.com/assets/img/add_circle_outline.svg" alt="" width="18px" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-5 py-5 border-0" />
                                <div className="d-flex justify-content-between mt-5 mb-0 border-top">
                                    <a className="text-decoration-none" href="/create-stall/step1/408">
                                        <Link to={"/create-stall/step1"}><button className="btn border-0 font-regular px-0 my-3" style={{ color: "rgb(0, 164, 180)" }}>
                                            <img src="https://horsebnb.com/assets/img/chevron-left-primary.svg" alt="" className="ps-1" /> Back</button></Link>
                                    </a>
                                   <button className="btn my-3 px-3 text-white d-flex align-items-center justify-content-center" style={{ background: "rgb(0, 164, 180)" }} onClick={setStallsCount} > Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center px-0">
                            <div className="h-100 d-flex py-5 align-items-center border-start justify-content-center">
                                <img src="https://horsebnb.com/assets/img/create-stalls/horse_image.png" alt="" width="250px" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NumberOfStalls