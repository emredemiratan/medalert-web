import React, { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import Typewriter from "../components/Typewriter";
import { Panel } from "primereact/panel";

import { GoogleMap, LoadScript, Autocomplete, Marker } from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 36.8969,
    lng: 30.7133,
};
const Maps = () => {
    const [autocomplete, setAutocomplete] = useState(null);
    const [location, setLocation] = useState("");

    const [hospitals, setHospitals] = useState([]);
    const [pharmacies, setPharmacies] = useState([]);

    useEffect(() => {
        axios
            .get("https://ipapi.co/json")
            .then((res) => {
                axios
                    .post(process.env.REACT_APP_BASE_URL + "/location/", {
                        latitude: res.data.latitude,
                        longitude: res.data.longitude,
                    })
                    .then((res) => {
                        console.log(res.data);
                        setHospitals(res.data.hospitals);
                        setPharmacies(res.data.pharmacies);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onLoad = (autocomplete) => {
        setAutocomplete(autocomplete);
    };

    const onPlaceChanged = () => {
        setLocation(autocomplete.getPlace().formatted_address);
    };
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");

    const handlePlaceSelect = (place) => {
        console.log(place);
        setSearchText(place);
    };
    const Callto = ({ phone, children }) => {
        return <a href={`tel:${phone}`}>{children}</a>;
    };
    function StartAgain() {
        navigate("/profiles");
    }

    return (
        <div className="flex flex-col items-center justify-center blue-bg">
            <div className="flex mt-5 flex-col border-2 border-gray-400 p-4 gap-2 rounded-lg custom-card gray-bg mb-5">
                <div className="border border-gray-400 rounded-lg p-4 flex flex-row justify-center bg-cyan-500">
                    <span className="text-zinc-100	text-2xl">SUMMARY</span>
                </div>
                <div className="flex flex-col border-2 border-gray-400 p-2 rounded-lg bg-white opacity-90">
                    <div className="p-3 flex justify-center">
                        <Typewriter text="Here are some possible causes I've gathered for you. And some of the nearest hospitals and pharmacies. In case you need it. Hope you'll feel better soon..." />
                    </div>
                </div>
                <Panel header="Possible Causes">
                    <p className="m-0">
                        1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                        accusantium. <br />
                        2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                        accusantium. <br />
                        3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                        accusantium. <br />
                        4) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                        accusantium. <br />
                        5) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
                        accusantium. <br />
                    </p>
                </Panel>
                <div className="border border-gray-800 rounded-lg p-4 flex flex-row justify-center ">
                    <LoadScript
                        libraries={["places"]}
                        googleMapsApiKey="AIzaSyABJwOB8DHDvnY4ETA5Sb_jbffDZEGUV4o"
                    >
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                            <Autocomplete
                                onLoad={(autocomplete) =>
                                    console.log("autocomplete: ", autocomplete)
                                }
                                onPlaceChanged={() => handlePlaceSelect(searchText)}
                            >
                                <input
                                    type="text"
                                    placeholder="Search location"
                                    value={searchText}
                                    onChange={(e) => {
                                        setSearchText(e.target.value);
                                    }}
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
                                        position: "absolute",
                                        left: "50%",
                                        marginLeft: "-120px",
                                    }}
                                />
                            </Autocomplete>
                            {hospitals.map((hospital) => {
                                return (
                                    <Marker
                                        key={hospital.name}
                                        position={{
                                            lat: parseFloat(hospital.latitude),
                                            lng: parseFloat(hospital.longitude),
                                        }}
                                        // onClick={() => props.onMarkerClick(marker)}
                                    />
                                );
                            })}
                            {pharmacies.map((pharmacy) => {
                                return (
                                    <Marker
                                        key={pharmacy.name}
                                        position={{
                                            lat: parseFloat(pharmacy.latitude),
                                            lng: parseFloat(pharmacy.longitude),
                                        }}
                                        // onClick={() => props.onMarkerClick(marker)}
                                    />
                                );
                            })}
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="col-12 flex flex-col justify-center self-center border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-200">
                    <span className="text-lg">Nearest Hospital</span>
                    <div className="flex w-full flex-wrap">
                        <ul>
                            {hospitals.map((hospital) => {
                                return <li className="mb-1"> • {hospital.name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col flex-row justify-center self-center border-2 border-gray-400 p-4 gap-2 rounded-lg bg-red-200">
                    <span className="text-lg">Nearest Pharmacy</span>
                    <div className="flex w-full flex-wrap">
                        <ul>
                            {pharmacies.map((pharmacy) => {
                                return <li className="mb-1"> • {pharmacy.name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col self-end">
                    <Callto phone="+905077369888">
                        <Button
                            label="  112"
                            severity="success"
                            rounded
                            className="pi pi-phone "
                            Button
                        />
                    </Callto>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <ButtonComponent
                        label="Start Again"
                        type="lightblue"
                        onClick={() => StartAgain()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Maps;
