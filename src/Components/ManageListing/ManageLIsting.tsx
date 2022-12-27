import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HenceForthApi from "../Utiles/HenceForthApi"
import Geocode from "react-geocode";    

const ManageListing = () => {
    const [allData, setAllData] = useState([])
    const [totalCount , setTotalCount] = useState<number>(0)
    const ManageListing = async () => {
        let allres = await HenceForthApi.Auth.listedalltype()
        setAllData(allres.data)
        setTotalCount(allres.meta.totalItems)
        
    }
    console.log(allData);
    useEffect(() => {
        ManageListing()
    }, [])


    // Geocode.fromLatLng("48.8583701", "2.2922926").then(
    //     (response) => {
    //       const address = response.results[0].formatted_address;
    //       console.log(address);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   )


    const handleAddress = (event: any): any => {
        Geocode.setApiKey("AIzaSyB43wC4ocf6N7samRwYUjRCJag2PYJ0xEU");
        
        Geocode.fromLatLng((event?.lat), (event?.lng)).then(
            (response : any) => {
              const address = response.results[0].formatted_address;
              return console.log(address , event?.lat , event?.lng );
            },
            (error) => {
            return console.log(error ,  event?.lat , event?.lng);
            ;
            }
          )
    }
    return (
        <>
            <div className="min-frame-height py-5">
                <div className="px-2 px-md-5">
                    <div className="row align-items-center mb-5 mx-0">
                        <div className="mr-4">
                            <span className="heading-big">{totalCount} Listings</span>
                        </div>
                    </div>
                    <div className="bookings-table">
                        <table className="table table-responsive d-lg-table h-auto overflow-auto">
                            <thead className="thead-light">
                                <tr >
                                    <th scope="col">Sr. no.</th>
                                    <th scope="col" style={{ width: "300px" }}>Listing</th>
                                    <th scope="col">To do</th>
                                    <th scope="col">Type</th>
                                    <th scope="col" style={{ width: "300px" }}>Location</th>
                                    <th scope="col">Created On</th>
                                    <th scope="col">
                                        <img alt="" src="" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody >

                                {allData.map((e: any, index: any) => {
                                    return (
                                        <>
                                            <tr className="ng-star-inserted">
                                                <td >{index + 1}</td>
                                                <td scope="row" style={{ width: "300px" }}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="manage-img mr-3">
                                                            <img className="obj-cover  ng-star-inserted ng-lazyloaded" src={(e?.attributes?.publicData?.cover_photo?.url) ? `${HenceForthApi.API_FILE_ROOT_SMALL}${e?.attributes?.publicData?.cover_photo?.url}` : "https://horsebnb.com:8081/assets/img/default_image.svg"} style={{ width: "35px", height: "35px" }} />
                                                        </div>

                                                        <span className="para-small mb-0 single-line-ellipsis ps-2" style={{ maxWidth: "220px" }} title={e.attributes.description}>{e.attributes.description}</span>
                                                    </div>
                                                </td>
                                                <td >
                                                    <Link to={`/manage-listing/publish-listing/${e.id.uuid}`}> <button className="btn btn-outline-dark px-3" tabIndex={0}>
                                                        {e.attributes.state}</button>

                                                    </Link>
                                                </td>
                                                <td >
                                                    {e.attributes.publicData.type === 1 ? <span className="ng-star-inserted"> Short Term Stalls </span> : e.attributes.publicData.type === 2 ? <span className="ng-star-inserted"> Monthly Term Stalls </span> : e.attributes.publicData.type !== 3 ? <span className="ng-star-inserted"> Host For Guest </span> : <span className="ng-star-inserted"> Host Advantures </span>}
                                                </td>
                                                <td style={{ width: "300px" }}>
                                                    <p className="mt-0 mb-4 ng-star-inserted">
                                                        {handleAddress(e?.attributes?.geolocation)}
                                                    
                                                    </p>
                                                </td>
                                                <td >{(new Date(e?.attributes?.createdAt)).toLocaleDateString()}</td>
                                                <td >
                                                    <span className="d-inline-block dropdown">
                                                        <img aria-haspopup="true" src="" id="dropdownBasic2" className="dropdown-toggle pointer" aria-expanded="false" />
                                                        <div aria-labelledby="dropdownBasic2" x-placement="bottom-left" className="dropdown-menu">
                                                            <button className="dropdown-item">Edit</button>
                                                            <button className="dropdown-item ng-star-inserted">Deactivate</button>
                                                            <button className="dropdown-item ng-star-inserted" tabIndex={0}>
                                                                Preview</button>

                                                        </div>
                                                    </span>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ManageListing