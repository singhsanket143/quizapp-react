
// eslint-disable-next-line react/prop-types
export default function GeolocationNewUi({latitude, longitude}) {
    return (
        <div>
            <h1>Geolocation:</h1>
            <h1>Latiude: {latitude}</h1>
            <h1>Longitude: {longitude} </h1>
        </div>
    )

}

// -> Presentation Layer (ui) , -> Container layer (logic)