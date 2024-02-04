import { useEffect, useState } from "react";
import Geolocation from "./Geolocation";

export default function GeolocationContainer() {

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

    return (
        <Geolocation latitude={latitude} longitude={longitude} />
    )

}

// -> Presentation Layer (ui) , -> Container layer (logic)