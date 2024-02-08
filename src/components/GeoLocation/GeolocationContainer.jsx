/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react";

const GeolocationContainer = (BaseComponent) => {

    const [latitude, setLatiude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    function handleLocationSettings(coordinates) {
        console.log(coordinates.coords);
        setLatiude(coordinates.coords.latitude);
        setLongitude(coordinates.coords.longitude);
    }

    // when the component loads at that time we want to access the users lat and long
    useEffect(() => {
        console.log("Started executing effect", navigator);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleLocationSettings);
        }
    }, [navigator]);

    return function FinalComponent(props){
      return <BaseComponent {...props} latitude={latitude} longitude={longitude}/>
    }
}

export default GeolocationContainer;

// -> Presentation Layer (ui) , -> Container layer (logic)
