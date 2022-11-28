
import './App.css';
import { Components } from './Components/Components';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import ExploreHorsebnb from './Components/ExploreHorsebnb/ExploreHorsebnb';
import HostStalls from './Components/HostYourStalls/HostStalls';
import Step1 from './Components/HostYourStalls/Step1';
import NumberOfStalls from './Components/HostYourStalls/NumberOfStalls';
import YourLocation from './Components/HostYourStalls/YourLocation';
import Amenities from './Components/HostYourStalls/Amenities';
import AddPhotos from './Components/HostYourStalls/AddPhotos';
import Description from './Components/HostYourStalls/Description';
import Timmings from './Components/HostYourStalls/Timmings';
import Availability from './Components/HostYourStalls/Availability';
import Calender from './Components/HostYourStalls/Calender';
import Pricing from './Components/HostYourStalls/Pricing';
import StripeConnect from './Components/HostYourStalls/StripeConnect';
import LastStep from './Components/HostYourStalls/LastStep';
import Publish from './Components/HostYourStalls/Publish';
import HenceForthApi from './Components/Utiles/HenceForthApi';
import {  useState } from 'react';
function App() {  

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"))
  const [steps , setSteps ] = useState<any>([])


  

  const handleSteps = () => {
   let count = 0
   count +=1
   console.log(count);
   
  }


  // const handleSteps= () => {
  //    setSteps((steps: any) => {
  //   [...steps , steps+=1]
  //   })
  // }

  // console.log(steps);
  
 


  HenceForthApi.setToken(localStorage.getItem("token"))
  const getStartedShow = async () => {
    try {
      let res = (await HenceForthApi.Auth.getdata()).data      
    } catch (error) {
      console.log(error);
    }
}
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Components getStartedShow={getStartedShow} token={token} setToken={setToken} />}>
            <Route index element={ <ExploreHorsebnb  />} />
            <Route path='hostStalls' element={<HostStalls getStartedShow={getStartedShow} />} />
            <Route path='create-stall/step1' element={<Step1 handleSteps={handleSteps} />} />
            <Route path='create-stall/NumberOfStalls/:id' element={<NumberOfStalls />} />
            <Route path='create-stall/YourLocation/:id' element={<YourLocation />} />
            <Route path='create-stall/Amenities/:id' element={<Amenities />} />
            <Route path='create-stall/AddPhotos/:id' element={<AddPhotos getStartedShow={getStartedShow} />} />
            <Route path='create-stall/Description/:id' element={<Description getStartedShow={getStartedShow}  />} />
            <Route path='create-stall/Timmings/:id' element={<Timmings getStartedShow={getStartedShow} />} />
            <Route path='create-stall/Availability/:id' element={<Availability  getStartedShow={getStartedShow} />} />
            <Route path='create-stall/Calender/:id' element={<Calender  getStartedShow={getStartedShow}/>} />
            <Route path='create-stall/Pricing/:id' element={<Pricing getStartedShow={getStartedShow} />} />
            <Route path='create-stall/StripeConnect/:id' element={<StripeConnect />} />
            <Route path='create-stall/LastStep/:id' element={<LastStep />} />
            <Route path='create-stall/Publish/:id' element={<Publish />} />








          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
