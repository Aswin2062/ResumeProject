import React, { useState, useEffect } from "react";
import axios from "axios";

const HackerRankpage = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //   `https://leetcode-stats-api.herokuapp.com/${username}`
          `https://jsonmock.hackerrank.com/api/users/${username}`
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
      <div>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
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

export default HackerRankpage;
