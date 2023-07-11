import React from 'react'
import HeadLogo from './Image/logotitle1.png'

function Header() {
  return (
    <div className="bg-[#47b7f8]">
      <div className="flex flex-row items-center gap-[100px] h-[50px] pl-[80px]">
        <div className="flex flex-row gap-[20px]">
          <img src={HeadLogo} alt="" className="w-[120px] h-[30px]" />
          <h1 className=" font-extrabold	text-[#ffffff]">Digital Resume</h1>
        </div>
        <div className="ml-[60%] bg-[#FF4A6C] w-[100px] flex items-center rounded-[5px]	">
          <a className="text-[#ffffff] pl-[20px]  " href="/signup">
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header
