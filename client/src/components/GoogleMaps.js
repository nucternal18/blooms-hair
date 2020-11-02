import React, { useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";



const center = {
  lat: 51.526528,
  lng: -0.099461,
};

const Maps = ({containerStyle}) => {
  const [selected, setSelected] = useState(false);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <Marker
          position={{ lat: 51.526528, lng: -0.099461 }}
          onClick={() => {
            setSelected(true);
          }}
        />
        {selected && (
          <InfoWindow
            position={{ lat: 51.526528, lng: -0.099461 }}
            onCloseClick={() => {
              setSelected(false);
            }}>
            <div>
              <h1 className='p-2 text-xl bg-red-700 text-white font-bold mb-2'>
                Blooms Hair
              </h1>
              <p className='mb-4 font-thin'>9 Lever Street, London. EC1V 3QU</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};



export default React.memo(Maps);
