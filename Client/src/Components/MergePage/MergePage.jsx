import React from "react";
import Header from "../Login/Header";
import Footer from "../Footer/Footer";
import GitHub from "../GithubPage/GitHub";
import { BsFiletypePdf } from "react-icons/bs";
import { useState,useEffect } from "react";
import LeetcodePage from "../Leetcode/LeetcodePage";

export default function MergePage() {

    // const [Loader,setLoader] = useState(flase)
  return (
    <div>
      <Header />
      <div className="flex ml-[10%] mt-[10%] gap-[20%]">
        <GitHub />
        <LeetcodePage />
      </div>
      {/* <button className="bg-[#f4c95c] w-[130px] pl-[10px] ml-[42%] h-[30px] items-center gap-[10px] rounded-[5px] flex "
    //   onClick={}
    >
        Download
        <BsFiletypePdf />{" "}
      </button> */}

      <Footer />
    </div>
  );
}
