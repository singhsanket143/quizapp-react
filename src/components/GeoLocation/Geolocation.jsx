// eslint-disable-next-line react/prop-types
import { useGeolocation } from "./GeolocationContainer"
export default function Geolocation() {
    const [latitude , longitude] = useGeolocation()
    return (
        <div>
            <h1>Geolocation:</h1>
            <div>Latiude: {latitude}</div>
            <div>Longitude: {longitude} </div>
        </div>
    )
}

// -> Presentation Layer (ui) , -> Container layer (logic)
