import { Link, useParams } from 'react-router-dom'
import HenceForthApi from '../Utiles/HenceForthApi'
import defaultImage from "../Images/default_image.svg"

const Card = (props: any) => {
    const { description, title, listing_price, image, uid } = props
    return (
        <div className=' col-3 mt-4' >
            <Link className='text-decoration-none text-black' to={`bookingdetails/${uid}`}><div className='border rounded'>
                <img className='p-2' src={image ? `${HenceForthApi.API_FILE_ROOT_MEDIUM}${image}` : defaultImage} width="253" height="168" alt="" />
                <p className='text-muted ms-2'>{title?.length > 20 ? `${title?.slice(0, 20)}...` : title}</p>
                <p className='ms-2 fw-bold'>{description?.length > 20 ? `${description?.slice(0, 20)}...` : description} </p>
                <p className='ms-2 fw-bold'>${listing_price}/Night</p>
            </div>
            </Link>
        </div>
    )
}
export default Card