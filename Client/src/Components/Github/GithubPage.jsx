import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubData = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `GET https://api.linkedin.com/v2/me/${username}`
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
      <p>{data.bio}</p>
      <p>Followers: {data.followers}</p>
      <p>Repositories: {data.public_repos}</p>
    </div>
  );
};

export default GitHubData;
