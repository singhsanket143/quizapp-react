
// eslint-disable-next-line react/prop-types
export default function Geolocation({ longitude, latitude}) {


    return (
        <div>
            <h1>Geolocation:</h1>
            <div>Latiude: {latitude}</div>
            <div>Longitude: {longitude} </div>
        </div>
    )

}

// -> Presentation Layer (ui) , -> Container layer (logic)