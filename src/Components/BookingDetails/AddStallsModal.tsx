import subCount from "../Images/decCount.svg"
import addCount from "../Images/addCount.svg"
import backArrow from "../Images/chevron-left-primary.svg"

const AddStallsModal = (props: any) => {

    const { count, setCount } = props

    return (
        <>
            <div className="modal fade" id="examplemodal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Stalls</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="d-flex mb-0 pt-1 modal-body">
                            <h5 className="font-medium-bold">Stalls</h5>
                            <div className="input-group d-flex justify-content-end">
                                <div className="input-group-prepend">
                                    <button className="btn border-0" onClick={(e: any) => {
                                        // e.preventDefault()
                                        setCount(count - 1)
                                    }}
                                        disabled={count === 0}
                                    >
                                        <img src={subCount} alt="" width="18px" />
                                    </button>
                                </div>
                                <input type="text" className="form-control text-center border-1" value={count} style={{ flex: "0.1 1 auto" }} />
                                <div className="input-group-prepend">
                                    <button className="btn border-0" onClick={(e: any) => {
                                        // e.preventDefault()
                                        setCount(count + 1)
                                    }}>
                                        <img src={addCount} alt="" width="18px" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <div className="">
                                <img src={backArrow} alt="" />
                                <button type="button" className="btn border-0"
                                    style={{ color: "#00a4b4" }} data-bs-dismiss="modal">Cancel</button>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddStallsModal