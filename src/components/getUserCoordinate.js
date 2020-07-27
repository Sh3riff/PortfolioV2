export const getLocation = ( location, setLocation) =>{
    const setPosition = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation( {...location, latitude, longitude } )
    };
    const error = (error) => {
        console.log(error)
    };
    const options = {
        enableHighAccuracy: true
    };
    if (window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(setPosition, error, options);
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}