import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import HomePage from "./Components/HomePages/HomePage";
import Github from "./Components/Leetcode/LeetcodePage"
import Hacker from "./Components/HackerRank/HackerRankpage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/github" element={<Github />} />
        <Route path="/hacker" element={<Hacker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
