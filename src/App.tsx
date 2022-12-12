
import './App.css';
import { Components } from './Components/Components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { useState } from 'react';
import HostGuests from './Components/Host Guests/HostGuests';
import GuestStep1 from './Components/Host Guests/GuestStep1';
import Step3 from './Components/Host Guests/Step3';
import Step5 from './Components/Host Guests/Step5';
import Step6 from './Components/Host Guests/Step6';
import Step7 from './Components/Host Guests/Step7';
import Step8 from './Components/Host Guests/Step8';
import Step9 from './Components/Host Guests/Step9';
import Step10 from './Components/Host Guests/Step10';
import Step11 from './Components/Host Guests/Step11';
import Step12 from './Components/Host Guests/Step12';
import Step13 from './Components/Host Guests/Step13';
import GuestsLastStep from './Components/Host Guests/GuestsLastStep';
import HostGuestPublish from './Components/Host Guests/HostGuestPublish';
import ManageListing from './Components/ManageListing/ManageLIsting';
import AdventureStalls from './Components/Host An Adventure/AdventureStalls';
import AdLastStep from './Components/Host An Adventure/AdLastStep';
import AdPublish from './Components/Host An Adventure/AdPublish';
import AdStep1 from './Components/Host An Adventure/AdStep1';
import AdStep2 from './Components/Host An Adventure/AdStep2';
import AdStep4 from './Components/Host An Adventure/AdStep4';
import AdStep5 from './Components/Host An Adventure/AdStep5';
import AdStep6 from './Components/Host An Adventure/AdStep6';
import AdStep8 from './Components/Host An Adventure/AdStep8';
import AdStep9 from './Components/Host An Adventure/AdStep9';
import "./Components/Host An Adventure/HostAd.css"
import SearchComponent from './Components/SearchComponent/SearchComponent';
import BookingDetails from './Components/BookingDetails/BookingDetails';

function App() {

  const [token, setToken] = useState<string | null>(localStorage.getItem("token"))
  const [steps, setSteps] = useState<Array<number>>([])
  const [stepsRun, setStepsRun] = useState<number>(0)
  const [spinner , setSpinner] =useState<boolean>(false)
  const [pageNumber , setPageNumber] =  useState<any>({})

  console.log(steps);

  const saveAndExit = (x: any) => {
    setStepsRun(x)
  }

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
          <Route path='*' element={<Components getStartedShow={getStartedShow} token={token} saveAndExit={saveAndExit} setToken={setToken} />}>
            <Route index element={<ExploreHorsebnb setPageNumber={setPageNumber} pageNumber={pageNumber} />} />
            <Route path='hostStalls' element={<HostStalls getStartedShow={getStartedShow} />} />
            <Route path='create-stall/step1' element={<Step1  setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/NumberOfStalls/:id' element={<NumberOfStalls setSteps={setSteps} stepsRun={stepsRun} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/YourLocation/:id' element={<YourLocation setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/Amenities/:id' element={<Amenities setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/AddPhotos/:id' element={<AddPhotos getStartedShow={getStartedShow} setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/Description/:id' element={<Description getStartedShow={getStartedShow} setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/Timmings/:id' element={<Timmings getStartedShow={getStartedShow} setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/Availability/:id' element={<Availability getStartedShow={getStartedShow} setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/Calender/:id' element={<Calender getStartedShow={getStartedShow} setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/Pricing/:id' element={<Pricing getStartedShow={getStartedShow} setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/StripeConnect/:id' element={<StripeConnect setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />
            <Route path='create-stall/LastStep/:id' element={<LastStep setSteps={setSteps} steps={steps} setSpinner={setSpinner} spinner={spinner} />} />

            {/* <Route path='create-stall/Publish/:id' element={<Publish />} /> */}

            


            

            <Route path='host-guests/' element={<HostGuests getStartedShow={getStartedShow} />} />
            <Route path='create-guest/step1' element={<GuestStep1 steps={steps} />} />
            <Route path='create-guest/step3/:id' element={<Step3 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step5/:id' element={<Step5 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step6/:id' element={<Step6 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step7/:id' element={<Step7 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step8/:id' element={<Step8 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step9/:id' element={<Step9 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step10/:id' element={<Step10 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step11/:id' element={<Step11 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step12/:id' element={<Step12 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/step13/:id' element={<Step13 setSteps={setSteps} steps={steps} />} />
            <Route path='create-guest/GuestsLastStep/:id' element={<GuestsLastStep setSteps={setSteps} steps={steps} />} />
            {/* <Route path='create-guest/HostGuestPublish/:id' element={<HostGuestPublish  />} /> */}



            <Route path="host-an-experience" element={<AdventureStalls />} />
            <Route path="add-experience/step1/" element={<AdStep1 adSteps={steps} />} />
            <Route path="add-experience/step2/:id" element={<AdStep2 adSteps={steps} setAdSteps={setSteps} />} />
            <Route path="add-experience/step4/:id" element={<AdStep4 adSteps={steps} setAdSteps={setSteps} />} />
            <Route path="add-experience/step5/:id" element={<AdStep5 adSteps={steps} setAdSteps={setSteps} />} />
            <Route path="add-experience/step6/:id" element={<AdStep6 adSteps={steps} setAdSteps={setSteps} />} />
            <Route path="add-experience/step8/:id" element={<AdStep8 adSteps={steps} setAdSteps={setSteps} />} />
            <Route path="add-experience/step9/:id" element={<AdStep9 adSteps={steps} setAdSteps={setSteps} />} />
            <Route path="add-experience/last-step/:id" element={<AdLastStep adSteps={steps} setAdSteps={setSteps} />} />



            <Route path="manage-listing/publish-listing/:id" element={<AdPublish />} />
            <Route path='ManageListing' element={<ManageListing />} />
            <Route path="search/type=:type" element={<SearchComponent setPageNumber={setPageNumber} pageNumber={pageNumber} />} />
            <Route path="bookingdetails/:id" element={<BookingDetails/>} />




          



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
