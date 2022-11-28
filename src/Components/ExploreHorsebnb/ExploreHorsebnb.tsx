import { useEffect, useState } from 'react';
import horseImg from "../Images/set_up_and_start_hosting.jpg"
import hotelRoomImg from "../Images/explore_one.png"
import horsecattle from "../Images/one.png"
import introImg from "../Images/introducing_horsebnb.png"
import adventureImg from "../Images/explore_three.png"
import HenceForthApi from '../Utiles/HenceForthApi';
import Card from '../CardComponent/Card';
import exploreBorading from "../Images/no_monthly_banner.png"







const ExploreHorsebnb = () => {


  const [dataList, setDataList] = useState<any>({
    shortTerm: [],
    guestAcc: [],
    monthly: [],
    horseAdv: []
  })




  const getAllListData = async () => {
    try {
      let res1 = (await HenceForthApi.listing.querylisting(1, 8, 1)).data
      let res2 = (await HenceForthApi.listing.querylisting(2, 8, 1)).data
      let res3 = (await HenceForthApi.listing.querylisting(3, 8, 1)).data
      let res4 = (await HenceForthApi.listing.querylisting(4, 8, 1)).data

      setDataList({
        ...dataList,
        shortTerm: res1,
        guestAcc: res2,
        monthly: res3,
        horseAdv: res4,
      });

    }


    catch (error) {
      console.log(error);

    };
  }

  useEffect(() => {

    getAllListData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col md-12">
            <h3>Explore HorseBnB</h3>
          </div>
        </div>
        <div className="row pt-4 ">
          <div className="col-md-3   shadow">
            <div className="card  shadow" style={{ width: "18rem" }} />
            <img src={horseImg} style={{ height: "222px" }} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-between pt-3">
              <p className="card-title">Short Term Stalls</p>
              <a href="!#" className="btn  " style={{ backgroundColor: "#00a4b4" }}>Go</a>
            </div>
          </div>
          <div className="col-md-3  shadow">
            <div className="card " style={{ width: "18rem" }} />
            <img src={horsecattle} style={{ height: "222px" }} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-between pt-3">
              <p className="card-title">Monthly Board</p>
              <a href="!#" className="btn " style={{ backgroundColor: "#00a4b4" }}>Go</a>
            </div>
          </div>
          <div className="col-md-3  shadow">
            <div className="card" style={{ width: "18rem" }} />
            <img src={hotelRoomImg} style={{ height: "222px" }} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-between pt-3">
              <p className="card-title">Guest Accommodations</p>
              <a href="!#" className="btn" style={{ backgroundColor: "#00a4b4" }}>Go</a>
            </div>
          </div>
          <div className="col-md-3  shadow">
            <div className="card" style={{ width: "18rem" }} />
            <img src={adventureImg} style={{ height: "222px" }} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-between ">
              <p className="card-title">Horse Adventures & Equine Activities</p>
              <a href="!#" className="btn" style={{ backgroundColor: "#00a4b4" }}>Go</a>
            </div>
          </div>
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

            {Array.isArray(dataList.shortTerm) && dataList.shortTerm.length ? dataList.shortTerm.map((res1: any, index: any) => <Card
              key={index}
              description={res1?.attributes?.description}
              title={res1?.attributes?.title}
              listing_price={res1?.attributes?.publicData?.listing_price}
              image={res1?.attributes?.publicData?.cover_photo?.url}
            />)
              : <div className="d-flex justify-content-center">
                < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
              </div>}

          </div>
        </div>

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
          />)
            : <div className="d-flex justify-content-center">
              < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
            </div>}

        </div>


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
              />)
                : <div className="d-flex justify-content-center">
                  < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
                </div>}
            </div>
          </div>
        </div>


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
            />)
              : <div className="d-flex justify-content-center">
                < img className='p-2' alt="" src={'https://horsebnb.com:8081/assets/img/create-stalls/empty.png'} width="253" height="168" />
              </div>}
          </div>
        </div>


      </div>

    </>
  )
}
export default ExploreHorsebnb
