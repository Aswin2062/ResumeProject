import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import HomePage from "./Components/GithubPage/GitHub";
import Github from "./Components/Leetcode/LeetcodePage"
import Hacker from "./Components/HackerRank/HackerRankpage"
import Home from "./Components/MergePage/MergePage"

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Background from "./Components/Login/Image/background.avif"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/github" element={<Github />} />
          <Route path="/hacker" element={<Hacker />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
