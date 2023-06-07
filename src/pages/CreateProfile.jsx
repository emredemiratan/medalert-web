import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import DropdownComponent from "../components/DropdownComponent";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
import { toast } from "react-hot-toast";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState();
  const [drug, setDrug] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [diseases, setDiseases] = useState([]);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  
  

  const genders = [
    { name: "Male", code: "M" },
    { name: "Female", code: "F" },
  ];

  useEffect(() => {
    axios
      .get("http://3.78.3.122:8000/symptoms/diseases/")
      .then((res) => {
        setDiseases(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function CreateProfile() {
    let toSend = {
      name: name,
      surname: surname,
      phone: phone,
      date: date,
      genders: genders,
      user: "",
    };
  
    axios
      .post("http://3.78.3.122:8000/profile/", toSend)
      .then((res) => {
        console.log(res.data);
        toast.success("your account has been created!");
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    }

    function Drug() {
      let toSend = {
        drug: drug,
        user: "",
      };
      axios
      .post("http://3.78.3.122:8000/profile/drugs/", toSend)
      .then((res) => {
        console.log(res.data);
        toast.success("your account has been created!");
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    }

    function Diseases() {
      let toSend = {
        sickness: diseases,
        user: "",
      };

      axios
      .post("http://3.78.3.122:8000/profile/sickness/", toSend)
      .then((res) => {
        console.log(res.data);
        toast.success("your account has been created!");
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
    }
  

  function CreateProfile() {
    const toSend = {
      name: "",
      gender: "",
      birthdate: "",
      phone_number: "",
      user: "",
    };
    axios.post(("", toSend));
    navigate("/profiles");
  }

  return (
    <form className="flex md:flex-row flex-col w-screen h-screen">
      <div className="h-full md:w-1/2 w-full blue-bg relative md:block hidden">
        <div className="flex flex-col h-full w-full absolute items-center justify-center">
          <img
            src={require("../assets/medalert-logo.png")}
            alt=""
            className="w-[200px] h-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center overflow-auto">
        <div className="flex flex-col custom-card gray-bg border-2 border-gray-400 p-4 gap-1 rounded-lg max-h-[650px] overflow-scroll">
          <div className="flex justify-start">
            <button onClick={() => navigate("/profiles")}>
              <i className="pi pi-arrow-left mr-3" />
              <span>My Profile(s)</span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={require("../assets/medalert-logo.png")}
              alt=""
              className="w-[200px] h-[200px] -m-4"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Name</span>
            <input
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="name"
              placeholder="Please Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Surname</span>
            <input
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="surname"
              placeholder="Please Enter Your Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Phone Number</span>
            <input
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="phone"
              placeholder="Please Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Date Of Birth</span>
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              showIcon
              placeholder="Date Of Birth"
            />
          </div>
          <span>Gender</span>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row w-full gap-2 items-center">
              <Dropdown
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.value)}
                options={genders}
                optionLabel="name"
                placeholder="Gender"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
          <span>Extra Diseases</span>
          <div className="grid">
            <div className="flex flex-row w-full gap-2 items-center ">
              <DropdownComponent
                value={selectedDiseases}
                onChange={(e) => setSelectedDiseases(e.value)}
                options={diseases}
                optionLabel="name"
                placeholder="Select Disease(s)"
                className="w-full"
              />
            </div>
          </div>
          <span>Regularly Used Medications</span>
          <div className="grid mb-3">
            <input
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="text"
              placeholder="Regularly Used Medications"
              value={drug}
              onChange={(e) => setDrug(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <ButtonComponent
              label="Create Profile"
              type="lightblue"
              onClick={() => CreateProfile()}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProfile;
