import useGeolocation from "../../hooks/useGeolocation"

export default function GeoLocationContainer(BaseContainer) {

    const [latitude, longitude] = useGeolocation();

    return function EnhancedGeoLocation(props) {
        return (
            <BaseContainer {...props} latitude={latitude} longitude={longitude} />
        )
    }
}