import React, { useState, useEffect } from "react";
import axios from "axios";

const LeetcodePage = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        setData(response.data);
        console.log(response.data);
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
      <div className="w-[400px] bg-[#ecf7f3] h-[200px] ml-[35%] flex flex-col mt-[100px] gap-[20px] rounded-lg shadow-2xl">
        <h1 className="text-[20px] font-bold	font-sans	pl-[100px] pt-[50px]">
          leetcode UserName
        </h1>
        <input
          type="text"
          className="w-[200px] ml-[100px] pl-[20px] shadow-md bg-[#ecf7f3] border-[2px]"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <div className=" ml-[130px]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-[400px] bg-[#ecf7f3] h-[200px] ml-[35%] flex flex-col mt-[100px] gap-[20px] rounded-lg shadow-2xl">
      <h1 className="text-[20px] font-bold	font-sans	pl-[100px] pt-[50px]">
        leetcode UserName
      </h1>
      <input
        type="text"
        className="w-[200px] ml-[100px] pl-[20px] shadow-md bg-[#ecf7f3]"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <h2 className="text-[10px]">{data.name}</h2>
      <div>{data.acceptanceRate}</div>
      <p>Followers: {data.followers}</p>
      <p>Repositories: {data.public_repos}</p>
    </div>
  );
};

export default LeetcodePage;