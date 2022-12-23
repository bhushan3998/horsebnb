import React, { useEffect, useRef, useState } from 'react';

type props = {
    state: any
}
const GMap = ({state}: props) => {


  const [addMarker , setAddMarker] = useState<any>({})
  const googleMapRef = useRef(null);
  let googleMap: any = null;

  // for (var i = 0;  1<= 50; i++) {
  //   // const element = array[];
    // console.log(state);
    // console.log(state?.data[0]?.attributes?.geolocation);
  // }
  // let geoLoc = state[i]
  // console.log(geoLoc);

  

  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

  // list of the marker object along with icon
//   const markerList = [
//     { lat: 59.2967322, lng: 18.0009393, icon: iconList.icon1 },
//     { lat: 59.2980245, lng: 17.9971503, icon: iconList.icon2 },
//     { lat: 59.2981078, lng: 17.9980875, icon: iconList.icon3 },
//     { lat: 59.2987638, lng: 17.9917639, icon: iconList.icon4 }
//   ]

  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    
    state?.map((x: any , index:any) => {
      // console.log(x);
      // let loc = x?.data[index]?.attributes?.geolocation
      // console.log(loc);
      
      console.log(x?.data[index]?.attributes?.geolocation);
      
      // const marker: any = createMarker(loc);

      setAddMarker(x?.data[index]?.attributes?.geolocation)
      
      
      // bounds.extend(marker.position);
      
      
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
    // console.log(bounds);
  }, []);
  
  console.log(addMarker);
  

  

  // initialize the google map
  const initGoogleMap = (): any => {
    return new (window as any).google.maps.Map(googleMapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  // const icon = {
   
  // };


  // create marker on google map
  // debugger
  const createMarker = (markerObj: any) => new window.google.maps.Marker(
    {
      // position: { lat: parseFloat(markerObj.lat), lng: parseFloat(markerObj.lng) },
      // position:addMarker,
      
      map: googleMap,
      icon:  {
        url: iconList.icon1,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      }
      
    }
    );
    // console.log(markerObj)

  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />
}

export default GMap;