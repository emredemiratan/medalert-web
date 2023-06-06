import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import Typewriter from "../components/Typewriter";
import { Panel } from "primereact/panel";

import { GoogleMap, LoadScript, Autocomplete, Marker } from "@react-google-maps/api";
import axios from "axios";
import { switchLoadingStatus } from "../store/slices/globalSlice";
import { toast } from "react-hot-toast";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const Maps = () => {
    const [autocomplete, setAutocomplete] = useState(null);
    const [location, setLocation] = useState("");

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const [hospitals, setHospitals] = useState([]);
    const [pharmacies, setPharmacies] = useState([]);

    const { response } = useSelector((state) => state.response);

    useEffect(() => {
        dispatch(switchLoadingStatus(true));
        axios
            .get("https://ipapi.co/json")
            .then((res) => {
                setLatitude(res.data.latitude);
                setLongitude(res.data.longitude);
                axios
                    .post("http://3.78.3.122:8000/location/", {
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
            })
            .finally(() => {
                dispatch(switchLoadingStatus(false));
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

    // const appointmentData = {
    //     questions: questions,
    //     profile_details: user,
    //     symptom_details: response,
    // };

    // const handleAppointment = () => {
    //     axios
    //         .post("http://3.78.3.122:8000/appointment/", appointmentData)
    //         .then((res) => {
    //             console.log(res);
    //             toast.success("Appointment created!");
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             toast.error(err.message);
    //         });
    // };

    return (
        <div className="flex flex-col items-center justify-center blue-bg">
            <div className="grid mt-5 flex-col border-2 border-gray-400 p-4 gap-2 rounded-lg custom-card gray-bg mb-5">
                <div className="border border-gray-400 rounded-lg p-4 flex flex-row justify-center bg-cyan-500">
                    <span className="text-zinc-100	text-2xl">SUMMARY</span>
                </div>
                <div className="flex flex-col border-2 border-gray-400 p-2 rounded-lg bg-white opacity-90">
                    <div className="p-3 flex justify-center">
                        <Typewriter text="Here are some possible causes I've gathered for you. And some of the nearest hospitals and pharmacies. In case you need it. Hope you'll feel better soon..." />
                    </div>
                </div>
                {response.color === "Green" && (
                    <>
                        <Panel header="Possible Cause">
                            <div className="h-full w-full green-response p-4">
                                <p className="m-0">{response.prediction}</p>
                            </div>
                        </Panel>
                        <Panel header="Desription">
                            <div className="h-full w-full green-response p-4">
                                <p className="m-0">{response.description}</p>
                            </div>
                        </Panel>
                        <Panel header="Treatment">
                            <div className="h-full w-full green-response p-4">
                                <p className="m-0">{response.treatment}</p>
                            </div>
                        </Panel>
                    </>
                )}
                {response.color === "Yellow" && (
                    <>
                        <Panel header="Possible Cause">
                            <div className="h-full w-full yellow-response p-4">
                                <p className="m-0">{response.prediction}</p>
                            </div>
                        </Panel>
                        <Panel header="Desription">
                            <div className="h-full w-full yellow-response p-4">
                                <p className="m-0">{response.description}</p>
                            </div>
                        </Panel>
                        <Panel header="Treatment">
                            <div className="h-full w-full yellow-response p-4">
                                <p className="m-0">{response.treatment}</p>
                            </div>
                        </Panel>
                    </>
                )}
                {response.color === "Red" && (
                    <>
                        <Panel header="Possible Cause">
                            <div className="h-full w-full red-response p-4">
                                <p className="m-0">{response.prediction}</p>
                            </div>
                        </Panel>
                        <Panel header="Desription">
                            <div className="h-full w-full red-response p-4">
                                <p className="m-0">{response.description}</p>
                            </div>
                        </Panel>
                        <Panel header="Treatment">
                            <div className="h-full w-full red-response p-4">
                                <p className="m-0">{response.treatment}</p>
                            </div>
                        </Panel>
                    </>
                )}

                <div className="border border-gray-800 rounded-lg p-4 flex flex-row justify-center ">
                    <LoadScript
                        libraries={["places"]}
                        googleMapsApiKey="AIzaSyABJwOB8DHDvnY4ETA5Sb_jbffDZEGUV4o"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{ lat: latitude, lng: longitude }}
                            zoom={14}
                        >
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
                <div className="col-6 flex flex-col justify-center self-center border-2 border-gray-400 p-4 gap-2 rounded-lg bg-teal-200">
                    <span className="text-lg font-semibold border-b-2 border-slate-950">
                        NEAREST HOSPITALS
                    </span>
                    <div className="flex w-full flex-wrap">
                        <ul>
                            {hospitals.map((hospital) => {
                                return <li className="mb-1"> • {hospital.name.toUpperCase()}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-6 flex flex-col justify-center self-center border-2 border-gray-400 p-4 gap-2 rounded-lg bg-red-200">
                    <span className="text-lg font-semibold border-b-2 border-slate-950">
                        NEAREST PHARMACIES
                    </span>
                    <div className="flex w-full flex-wrap">
                        <ul>
                            {pharmacies.map((pharmacy) => {
                                return <li className="mb-1"> • {pharmacy.name.toUpperCase()}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-between my-3">
                    <ButtonComponent label="Appointment" icon="pi-send" type="turquoise" />
                    <Callto phone="+905077369888">
                        <ButtonComponent label="112" icon="pi-phone" type="red" />
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
