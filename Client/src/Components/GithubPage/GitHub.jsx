import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Login/Header";
import LeetcodePage from "../Leetcode/LeetcodePage";
import Background from "../Login/Image/background.png"
import Footer from "../Footer/Footer"


const GitHub = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
          
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (username !== "") {
      fetchData();
    }
  }, [username]);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  if (!data) {
    return (
      <div
      >
     
        <div className="flex">
          <div className="w-[400px] bg-[#f6b8c0] h-[200px]  flex flex-col  gap-[20px] rounded-lg shadow-2xl">
            <h1 className="text-[20px] font-bold	font-sans	pl-[100px] pt-[50px]">
              Github UserName
            </h1>
            <input
              type="text"
              className="w-[200px] ml-[100px] pl-[20px] shadow-md bg-[#ecf7f3] border-[2px]"
              value={username}
              onChange={handleInputChange}
              placeholder="Username"
            />
            <div className=" ml-[130px]">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
    >
     
      <div className="flex mb-[90%]">
        <div className="w-[400px] bg-[#f6b8c0] h-[200px]  flex flex-col  gap-[20px] rounded-lg shadow-2xl">
          <h1 className="text-[20px] font-bold	font-sans	pl-[100px] pt-[50px]">
            Github UserName
          </h1>
          <input
            type="text"
            className="w-[200px] ml-[100px] pl-[20px] shadow-md bg-[#ecf7f3]"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
          />
          <div className="pt-[50px] gap-[10px] w-[500px] bg-[#bcd9ee] h-[900px]  flex flex-col mt-[100px] gap-[20px] rounded-lg shadow-2xl">
            <img
              className="rounded-full ml-[50px]"
              width={150}
              height={100}
              src={data.avatar_url}
              alt=""
            />

            <h2 className="text-[30px] font-semibold ml-[50px]	 not-italic	">
              Username : {data.name}
            </h2>
            
            <p className="text-[30px] font-semibold	 ml-[50px] not-italic	">
              Followers: {data.followers}
            </p>

            {/* <p className="text-[30px]  font-semibold ml-[50px]	not-italic	">
              {data.following_url}
            </p> */}
            <p className="text-[30px] pb-[10px] font-semibold ml-[50px]	not-italic	">
              Repositories: {data.public_repos}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
