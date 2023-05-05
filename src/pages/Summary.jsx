import React , {useState}from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";


import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const Maps = () => {
    const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState('');

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    setLocation(autocomplete.getPlace().formatted_address);
    };
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    
    const [searchText, setSearchText] = useState('');

    const handlePlaceSelect = (place) => {
        setSearchText(place.formatted_address);
    };
    function StartAgain() {
        navigate("/profiles");
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg">
                
                <div className="border border-gray-400 rounded-lg p-4 flex flex-row justify-center bg-cyan-500">
                    <span className="text-zinc-100	text-2xl">SUMMARY</span>
                </div>
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg">
                    <span>POSSIBLE COUSES
                    1) Common Cold
	                3 out 10 people….
                    </span>
                </div>
                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg">
                    <span>2) Viral Sinusitis
	                2 out 10 people….
                    </span>
                </div>
                <div className="border border-gray-400 rounded-lg p-4 flex flex-row justify-center ">
                    <LoadScript libraries={["places"]} googleMapsApiKey="AIzaSyABJwOB8DHDvnY4ETA5Sb_jbffDZEGUV4o">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                            <Autocomplete
                            onLoad={(autocomplete) => console.log('autocomplete: ', autocomplete)}
                            onPlaceChanged={() => handlePlaceSelect(autocomplete.getPlace())}>
                                <input
                                    type="text"
                                    placeholder="Search location"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    style={{
                                    boxSizing: `border-box`,
                                    border: `1px solid transparent`,
                                    width: `240px`,
                                    height: `32px`,
                                    padding: `0 12px`,
                                    borderRadius: `3px`,
                                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                    fontSize: `14px`,
                                    outline: `none`,
                                    textOverflow: `ellipses`,
                                    position: 'absolute',
                                    left: '50%',
                                    marginLeft: '-120px',
                                    }}
                                />
                            </Autocomplete>
                        </GoogleMap>
                    </LoadScript>
                    </div>
                    <div className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-200">
                        <span>Nearest Hospital</span>
                    </div>
                    <div className="flex flex-row justify-center w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg bg-red-200">
                        <span>Nearest Pharmacy</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ButtonComponent label="Start Again" type="turquoise" onClick={() => StartAgain()} />
                    </div>
            </div>
        </div>
    );
};
        
export default Maps;