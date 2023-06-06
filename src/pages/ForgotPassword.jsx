import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { toast } from "react-hot-toast";

import { Dialog } from "primereact/dialog";

import axios from "axios";
import { switchLoadingStatus } from "../store/slices/globalSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");

  function ForgotPassword() {
    let toSend = {
      email: email,
    };

    axios
      .post("http://3.78.3.122:8000/auth/forgot-password/", toSend)
      .then((res) => {
        console.log(res.data);
        toast.success("a pin has been sent your email!");
        setVisible(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }
  function ResetPassword() {
    let toSend = {
      pin: pin,
      password: password,
      email: email,
    };

    axios
      .post("http://3.78.3.122:8000/auth/reset-password/", toSend)
      .then((res) => {
        console.log(res.data);
        toast.success("password updated!");
        setVisible(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }

  return (
    <div className="flex md:flex-row flex-col w-screen h-screen">
      <div className="h-full md:w-1/2 w-full blue-bg md:block hidden relative">
        <div className="flex flex-col h-full w-full absolute items-center justify-center">
          <img
            src={require("../assets/medalert-logo.png")}
            alt=""
            className="w-[200px] h-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center">
        <div className="flex flex-col custom-card gray-bg border-2 border-gray-400 p-4 gap-4 rounded-lg justify-center items-center">
          <img
            src={require("../assets/medalert-logo.png")}
            alt=""
            className="w-1/2 h-1/2 -m-4 "
          />
          <div className="flex flex-col items-center">
            <span>
              Enter the email address associated with your account. We will
              email you link to reset your password!
            </span>
          </div>
          <div className="flex flex-col  gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <ButtonComponent
              label="Send"
              type="lightblue"
              onClick={() => ForgotPassword()}
            />
          </div>
        </div>
      </div>
      <Dialog
        header="Reset Password"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="flex flex-col w-full custom-card p-2 gap-4 rounded-lg justify-center items-center">
          <div className="flex flex-col items-center">
            <span>Please Enter The Pin</span>
          </div>
          <div className="flex flex-col  gap-2">
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="text"
              placeholder="Please Enter The Pin"
            />
          </div>
          <div className="flex flex-col items-center">
            <span>Please Enter The Your New Password</span>
          </div>
          <div className="flex flex-col  gap-2">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg border-2 border-green-600"
              type="email"
              placeholder="New Password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <ButtonComponent
              label="Reset Password"
              type="lightblue"
              onClick={() => ResetPassword()}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ForgotPassword;
