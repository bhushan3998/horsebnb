import { useEffect, useState } from 'react';
import horseImg from "../Images/set_up_and_start_hosting.jpg"
import hotelRoomImg from "../Images/explore_one.png"
import horsecattle from "../Images/one.png"
import introImg from "../Images/introducing_horsebnb.png"
import adventureImg from "../Images/explore_three.png"
import HenceForthApi from '../Utiles/HenceForthApi';
import Card from '../CardComponent/Card';
import exploreBorading from "../Images/no_monthly_banner.png"
import { Link } from 'react-router-dom';

type props ={
  pageNumber : any , 
  setPageNumber: any
}

const ExploreHorsebnb = (props: props) => {
  const {setPageNumber , pageNumber} = props

  const [dataList, setDataList] = useState<any>({
    shortTerm: [],
    guestAcc: [],
    monthly: [],
    horseAdv: []
  })

  const getAllListData = async () => {
    try {
      let res1 = (await HenceForthApi.listing.querylisting(1, 8, 1))
      // let resTest = (await HenceForthApi.listing.querylisting(1, 8, 1))

      let res2 = (await HenceForthApi.listing.querylisting(2, 8, 1))
      let res3 = (await HenceForthApi.listing.querylisting(3, 8, 1))
      let res4 = (await HenceForthApi.listing.querylisting(4, 8, 1))
      console.log(res1.data); 
      console.log(res1.meta);
      setPageNumber(res1.meta)
      
      
      setDataList({
        ...dataList,
        shortTerm: res1.data,
        guestAcc: res2.data,
        monthly: res3.data,
        horseAdv: res4.data,
      });
    } catch (error) {
      console.log(error);

    };
  }

  useEffect(() => {

    getAllListData()
    // eslint-disable-next-line
  }, [])



  const explore = [
    { id: 1, img: horseImg, title: "Short Term Stalls" },
    { id: 2, img: horsecattle, title: "Monthly Board" },
    { id: 3, img: hotelRoomImg, title: "Guest Accommodations" },
    { id: 4, img: adventureImg, title: "Horse Adventures & Equine Activities" },
  ]

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Explore HorseBnB</h3>
          </div>
        </div>
        <div className="row d-flex">
          {explore.map((e: any, index) =>

            <div className="col-3" key={index}>

              <Link to={`/search/type=${e.id}`}  >
                <div className="card  shadow" style={{ width: "18rem" }} />
                <img src={e.img} style={{ height: "222px" }} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between pt-3">
                  <p className="card-title">{e.title}</p>
                  <a href="!#" className="btn" style={{ backgroundColor: "#00a4b4" }}>Go</a>
                </div>
              </Link>
            </div>
          )}
        </div>
        <div className="pt-5">
          <div className="cover-img position-relative-">
            <div className="intro-img rounded-4" style={{ backgroundImage: `url(${introImg})`, height: '300px', backgroundRepeat: "no-repeat", backgroundSize: '100% 100%' }}>
              <div className="intro-content pl-5 p-5  ">
                <span >INTRODUCING</span>
                <h1 className="mb-3">HorseBnB</h1>
                <button className="btn btn-dark align-self-start" tabIndex={0} >About Us</button>
              </div>
            </div>

          </div>
        </div>
        <div className="container">

          <div className="row pt-3">
            <div className="col-md-12 ">
              <h4>Short Term Stalls</h4>
              <p>Traveling with your horse? Find overnight accommodations for your horse</p>
            </div>

            {dataList.shortTerm && dataList.shortTerm.length ? dataList.shortTerm.map((res1: any, index: any) => <Card
              key={index}
              description={res1?.attributes?.description}
              title={res1?.attributes?.title}
              listing_price={res1?.attributes?.publicData?.listing_price}
              image={res1?.attributes?.publicData?.cover_photo?.url}
              uid={res1?.id?.uuid}
            />)
              : <div className="d-flex justify-content-center">
                < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
              </div>}

          </div>
        </div>
        <Link to="/search/type=1" className="text-decoration-none">
                    <div className="container my-3">
                        <div className="heading h5">
                            <span style={{ color: "#00a4b4" }}>
                                Show all Short Term Stalls
                            </span>
                            <img src="https://horsebnb.com:8081/assets/img/blue-arw.svg" alt="" />
                        </div>
                    </div>
                </Link>

        <div className="row pt-4">
          <div className="col-md-12">
            <h4>Guest Accommodation</h4>
            <p>Traveling with your horse? Find overnight accommodations for yourself</p>
          </div>

          {Array.isArray(dataList.guestAcc) && dataList.guestAcc.length ? dataList.guestAcc.map((res2: any, index: any) => <Card
            description={res2?.attributes?.description}
            title={res2?.attributes?.title}
            listing_price={res2?.attributes?.publicData?.listing_price}
            image={res2?.attributes?.publicData?.cover_photo?.url}
            uid={res2?.id?.uuid}
          />)
            : <div className="d-flex justify-content-center">
              < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
            </div>}

        </div>
        <Link to="/search/type=2" className="text-decoration-none">
                    <div className="container my-3">
                        <div className="heading h5">
                            <span style={{ color: "#00a4b4" }}>
                            Guest Accommodation
                            </span>
                            <img src="https://horsebnb.com:8081/assets/img/blue-arw.svg" alt="" />
                        </div>
                    </div>
                </Link>


        <div className="container">


          <div className="pt-3">
            <div className="container position-relative-">
              <h3>Monthly stabling for your horse</h3>
              <p>Find monthly boarding facilities</p>
              <div className="intro-img rounded-4" style={{ backgroundImage: `url(${exploreBorading})`, height: '300px', backgroundRepeat: "no-repeat", backgroundSize: '100% 100%' }}>
                <div className="intro-content pl-5 p-5  text-center" >
                  <button className="btn btn-light align-self-start " style={{ position: 'relative', top: '90px' }} tabIndex={0} ng-reflect-router-link="/about-us">Explore Boarding Facilities</button>
                </div>
              </div>

            </div>

            <div className="row">
              {Array.isArray(dataList.monthly) && dataList.monthly.length ? dataList.monthly.map((res3: any, index: any) => <Card
                description={res3?.attributes?.description}
                title={res3?.attributes?.title}
                listing_price={res3?.attributes?.publicData?.listing_price}
                image={res3?.attributes?.publicData?.cover_photo?.url}
                uid={res3?.id?.uuid}
              />)
                : <div className="d-flex justify-content-center">
                  < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
                </div>}
            </div>
          </div>
        </div>
        <Link to="/search/type=3" className="text-decoration-none">
                    <div className="container my-3">
                        <div className="heading h5">
                            <span style={{ color: "#00a4b4" }}>
                            Monthly stabling for your horse
                            </span>
                            <img src="https://horsebnb.com:8081/assets/img/blue-arw.svg" alt="" />
                        </div>
                    </div>
                </Link>


        <div className="container pt-4">
          <div className="col-md-12">
            <h4>Horse Adventures</h4>
            <p>Traveling with your horse? Find overnight accommodations for your horse</p>
          </div>
          <div className="row">


            {Array.isArray(dataList.horseAdv) && dataList.horseAdv.length ? dataList.horseAdv.map((res4: any, index: any) => <Card
              description={res4?.attributes?.description}
              title={res4?.attributes?.title}
              listing_price={res4?.attributes?.publicData?.listing_price}
              image={res4?.attributes?.publicData?.cover_photo?.url}
              uid={res4?.id?.uuid}/>)
              : <div className="d-flex justify-content-center">
                < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
              </div>}
          </div>
        </div>
        <Link to="/search/type=4" className="text-decoration-none">
                    <div className="container my-3">
                        <div className="heading h5">
                            <span style={{ color: "#00a4b4" }}>
                            Horse Adventures
                            </span>
                            <img src="https://horsebnb.com:8081/assets/img/blue-arw.svg" alt="" />
                        </div>
                    </div>
                </Link>


      </div>


    </>
  )
}
export default ExploreHorsebnb
