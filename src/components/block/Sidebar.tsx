// import React from 'react'

import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[full] p-[20px] text-white font-bold flex flex-col gap-4 pt-[80px]">

      <NavLink to="/"><ol className="cursor-pointer text-white">Upload Cars</ol></NavLink>

      <NavLink to="/properties"><ol className="cursor-pointer text-white">Upload Properties</ol></NavLink>

      <NavLink to="/dogs"><ol className="cursor-pointer text-white">Upload Dogs</ol></NavLink>
      
    </div>
  )
}

export default Sidebar