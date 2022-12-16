const Booking = () => {
    return (
        <>
            <div className="container my-5">
                <h1 className="heading-large mb-3 text-black">Bookings
                </h1>
                <ul className="nav-tabs bookings-tabs nav" role="tablist">
                    <li className="nav-item">
                        <a href="" role="tab" aria-selected="true" aria-disabled="false" className="nav-link active" aria-controls="ngb-nav-4-panel">Upcomings</a>
                    </li>
                    <li className="nav-item">
                        <a href="" id="ngb-nav-5" role="tab" aria-selected="false" aria-disabled="false" className="nav-link">
                            Past
                        </a>
                    </li>
                </ul>
                <div className="mt-2 tab-content">
                    <div className="tab-pane active" id="ngb-nav-4-panel" role="tabpanel" aria-labelledby="ngb-nav-4">
                        <div className="bookings-content my-5">
                            <div className="row">

                                <div className="col-12 pb-5 text-center d-flex flex-column align-items-center justify-content-center"><div className="nothing mb-4">
                                    <img src="../../../assets/img/no_data.png" alt="no Data" className="w-100 h-100" />
                                </div>
                                    <h2 className="mt-4"> No Booking Found </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking