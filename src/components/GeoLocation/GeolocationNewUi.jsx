// eslint-disable-next-line react/prop-types
import {useGeolocation} from './GeolocationContainer'
export default function GeolocationNewUi() {
    // let latitude=32 , longitude=321;
    const [latitude , longitude] = useGeolocation()
    return (
        <div>
            <h1>Geolocation:</h1>
            <h1>Latiude: {latitude}</h1>
            <h1>Longitude: {longitude} </h1>
        </div>
    )

}

// -> Presentation Layer (ui) , -> Container layer (logic)
