import { useEffect, useState, Children, cloneElement } from "react";
export default function GeolocationContainer({ children }) {

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
    <div>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          latitude: latitude,
          longitude: longitude,
        });
      })}
    </div>
  );
}

// -> Presentation Layer (ui) , -> Container layer (logic)
