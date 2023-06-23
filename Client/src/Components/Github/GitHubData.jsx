import React, { useState, useEffect } from "react";
import axios from "axios";

const GitHubData = ({ username }) => {
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

    fetchData();
  }, [username]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <p>Followers: {data.followers}</p>
      <p>Repositories: {data.public_repos}</p>
    </div>
  );
};

export default GitHubData;
