import useGeolocation from "../../hooks/useGeolocation";

// eslint-disable-next-line react/prop-types
export default function GeolocationNewUi() {
    const [latitude, longitude] = useGeolocation();

    return (
        <div>
            <h1>Geolocation:</h1>
            <h1>Latiude: {latitude}</h1>
            <h1>Longitude: {longitude} </h1>
        </div>
    )

}

// -> Presentation Layer (ui) , -> Container layer (logic)