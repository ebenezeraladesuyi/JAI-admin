import React, { ReactNode } from 'react';

import Sidebar from "../components/block/Sidebar";
// import { Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

interface AdminDashProps {
    children : ReactNode
}

const DashLayout: React.FC<AdminDashProps> = ({children}) => {

  const [show, setShow] = React.useState(false);

  const showSide = () => {
    setShow(!show)
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blac overflow-hidden">
        <div className='w-[300px] shadow-m min-h-screen flex flex-col gap-6 px-[25px relative'>
          <div className='w-full h-[70px] bg-white z-30 flex justify-between items-center shadow-m'>
            <h5 className='font-bold text-[20px] pl-[20px]'>JAI</h5>

          {show ?
            <div onClick={showSide} className='pr-[20px] text-[20px] cursor-pointer'>
              <IoClose />
            </div>
            :
            <div onClick={showSide} className='pr-[20px] text-[20px] cursor-pointer'>
              <TiThMenu />
            </div>
            }

          </div>

          <div className="bg-blac w-full flex justify-center items-center">
              {children}
          </div>

          {show ? 
            <div onClick={showSide} className="absolute w-full bg-blac bg-[#000000bc] fixe h-screen shadow-md">
              <Sidebar />
            </div>
            :
              null}
        </div>
    </div>
  )
}

export default DashLayout