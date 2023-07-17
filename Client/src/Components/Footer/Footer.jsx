import React from 'react'
import Marryboat from "../Login/Image/marry1.png"
import footer from "../Login/Image/footerl.svg"

export default function Footer() {
  return (
   
      <div className=" ">
        {/* <img
          src={Marryboat}
          alt=""
          className="w-[30%] h-[30%]  ml-[60%] absolute"
        /> */}

        <img src={footer} alt="" className="pt-[170px]" />
      </div>
  
  );
}
