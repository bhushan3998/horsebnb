import "./Dashboard.css"

const DashBoardHome = () => {
    return (
        <>
            <div className="bg-white p-3">
                <div className="d-flex">
                    <div>
                        <img src="bgImage" style={{ width: '80px', height: '80px', borderRadius: '50%' }} alt="" />
                    </div>
                    <div className="p-2">
                        <h6 style={{ fontSize: "25px" }}>henceforth mohali</h6>
                    </div>
                </div>
                <hr />
                <div className="my-1 ps-4">
                    <div className="  ul my-3 ">
                        <a>
                            <img src="../../../assets/dashboard.png" alt="" />
                            <span className="ms-3" >Dashboard</span>
                        </a>
                    </div>
                    <div className="  ul my-3">
                        <a>
                            <img src="../../../assets/bookings.png" alt="" />
                            <span className="ms-3" >Booking</span>
                        </a>
                    </div>
                    <div className="my-3 ul">
                        <a>
                            <img src="../../../assets/reviews.png" alt="" />
                            <span className="ms-3" > Review</span>

                        </a>
                    </div>
                    <div className="my-3 ul">
                        <a>
                            <img src="../../../assets/transaction.png" alt="" />
                            <span className="ms-3">Transactions</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashBoardHome