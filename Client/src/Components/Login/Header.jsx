import React from 'react'
import HeadLogo from './Image/headlogo.svg'

function Header() {
  return (
    <div className="bg-[#ecf7f3]">
      <div className="flex flex-row items-center gap-[100px] h-[50px] pl-[80px]">
        <div className="flex flex-row gap-[20px]">
          <img src={HeadLogo} alt="" />
          <p>Resume</p>
        </div>
        <div className="ml-[70%] bg-[#FF4A6C] w-[100px] flex items-center rounded-[5px]	">
          <a className="text-[#ffffff] pl-[20px]  " href="/signup">
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header
