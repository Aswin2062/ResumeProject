import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import HomePage from "./Components/HomePages/HomePage";
import Github from "./Components/Github/GithubPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;