import React from "react";

import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const Profiles = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.global);
    const navigate = useNavigate();
    
    function CreateProfile() {
        navigate("/createprofile");
    }

    return (
        <div className="flex flex-col items-center justify-center"style={{ backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/003/127/954/original/abstract-template-blue-background-white-squares-free-vector.jpg")`,
        backgroundRepeat:"no-repeat",
        backgroundPosition: 'center',
        backgroundSize:"cover" , 
        
        }}>

                <div className="flex flex-col w-1/2 border-2 border-gray-400 p-4 gap-2 rounded-lg "style={{ backgroundImage:`url("https://media.istockphoto.com/id/1407271745/photo/gray-background.jpg?b=1&s=170667a&w=0&k=20&c=aAk4qTe2O_TAt77Nx9ROXTXyGTgXN0FFn1eep4RkvC0=")`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: 'center',
                    backgroundSize:"cover" ,
                    marginTop:"64px",
                    marginBottom:"63px",
                }}>

                    <img style={{
                            borderColor: 'gray',
                            borderWidth: 2,
                            borderRadius:360,
                            height: 200,
                            width: 200,
                            }}
                        src={require("../assets/medalert-logo.png")}
                        alt=""
                        className="w-1/2 h-1/2 "
                    />
                    <span >Your Profiles :</span>
                    <div >
                    <button 
                    className="flex w-1/3 items-center p-2 border border-black rounded-2xl justify-center" 
                    onClick={() => {
                        navigate("/home");
                    }}>
                    <img src="/static/media/user-icon.9e4745a27351f6317a61.png" alt="john" class="mini-icon mx-2 my-1"></img>
                    <span>John</span>
                        
                    </button>
                    </div>
                    <div >
                    <button className="flex w-1/3 items-center p-2 border border-black rounded-2xl justify-center" 
                    onClick={() => {
                        navigate("/home");
                    }}>
                    <img src="/static/media/user-icon.9e4745a27351f6317a61.png" alt="john" class="mini-icon mx-2 my-1"></img>
                    <span>Yigit</span>
                        
                    </button>
                                            
                    </div>

                    <div >
                    <button className="flex w-1/3 items-center p-2 border border-black rounded-2xl justify-center" 
                    onClick={() => {
                        navigate("/home");
                    }}>
                    <img src="/static/media/user-icon.9e4745a27351f6317a61.png" alt="john" class="mini-icon mx-2 my-1"></img>
                    <span>Emre</span>
                     
                    </button>
   
                    </div>
                    

                    <div className="grid mt-5 mb-5">
                <div className="col-12 flex justify-center items-center">
                    <ButtonComponent label="New Profile" type="cyan-500" onClick={() => CreateProfile()}/>
                </div>
            </div>
                </div>
            </div>
    );
};
        
export default Profiles;