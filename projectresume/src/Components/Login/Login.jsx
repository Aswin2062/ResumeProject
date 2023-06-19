import React from "react";
import footer from "./Image/footerl.svg";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const Navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();

    if (Username === "aswin" && Password === "aswin") {
      console.log("Login successful");
      Navigate("./homepage");
    } else {
      console.log("Login failed");
      setError("Invalid username or password.");
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-[450px] h-[300px] ml-[35%] mt-[10%] rounded-[10px] pt-[50px] bg-[#C2C2C2] items-center gap-[30px]  flex flex-col">
        <p className=" flex">Welcome</p>
        <form
          onSubmit={Submit}
          className="flex flex-col items-center gap-[30px]"
          // onSubmit={Submit}
        >
          <input
            className="w-[300px] h-[40px] border-[2px] rounded-[5px] items-center text-center "
            type="text"
            value={Username}
            onChange={handleUsernameChange}
            placeholder="Login"
            required
          />
          <input
            className="w-[300px] h-[40px] border-[2px] rounded-[5px] items-center text-center	"
            type="password"
            value={Password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <button className="bg-[#12A35C] w-[150px] rounded-[5px] ">
            Login
          </button>
        </form>
      </div>
      <div className="mt-[10%]">
        <img src={footer} alt="" />
      </div>
    </div>
  );
}
