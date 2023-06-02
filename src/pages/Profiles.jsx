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
  function MyAccount() {
    navigate("/myaccount");
  }

  const profiles = [
    {
      id: "1",
      name: "John",
      surname: "Doe",
    },
    {
      id: "2",
      name: "John",
      surname: "Doe",
    },
    {
      id: "3",
      name: "John",
      surname: "Doe",
    },
    {
      id: "4",
      name: "John",
      surname: "Doe",
    },
  ];

  return (
    <div className="flex flex-row h-full w-full items-start justify-center blue-bg">
      <div className="grid mt-5 border-2 border-gray-400 p-4 gap-2 rounded-lg gray-bg custom-card">
        <div className="col-12 flex justify-center items-center">
          <img
            style={{
              borderColor: "gray",
              borderWidth: 2,
              borderRadius: 360,
              height: 200,
              width: 200,
            }}
            src={require("../assets/medalert-logo.png")}
            alt=""
            className="w-1/2 h-1/2 "
          />
        </div>
        <span className="ml-5">Your Profiles:</span>
        <div className="col-12 max-h-[300px] overflow-scroll p-3">
          <div className="grid grid-cols-3 flex-col flex-wrap">
            {profiles.map((profile) => {
              return (
                <div
                  className="col flex justify-center items-center mb-3"
                  key={profile.id}
                >
                  <button
                    className="flex w-11/12 items-center p-2 border border-black bg-color-red rounded-2xl justify-center"
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <img
                      src="/static/media/user-icon.9e4745a27351f6317a61.png"
                      alt={profile.name}
                      className="mini-icon mx-2 my-1"
                    />
                    <span>{profile.name}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid mt-5 mb-5">
          <div className="col-12 flex justify-center items-center">
            <ButtonComponent
              label="New Profile"
              type="lightblue"
              onClick={() => CreateProfile()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
