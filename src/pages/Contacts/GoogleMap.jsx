import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: window.innerWidth,
  height: window.innerHeight
};


const center = {
  lat: 50.391890,
  lng: 30.644690,
};

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  if(containerStyle.width > 700) {
    containerStyle.width /= 2
    containerStyle.height -= 350

  }

  return isLoaded ? (
      <GoogleMap
        // mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapContainerClassName='google-map'
      >
        <Marker position={center}/> 
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapComponent)