import React from 'react'
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 py-4  bg-black z-10 border-b-[1px] border-t-[1px] border-[#27632d]">
        <div className=" flex flex-row  justify-between items-center  text-base w-[90%] mx-auto small:justify-normal small:flex-col">
            {/* Logo */}
            <div className="img">
                <img src={require("./imgs/logo.png")} alt="" />
            </div>
            <div className='nav-links small:z-[5] '>
                <ul className={`nav-large small:justify-normal  duration-300 flex flex-row justify-between items-center small:flex-col small:items-start small:gap-16 ${!toggle ? ` small:right-[300%] top-0 bottom-0 small:h-0` : `small:right-0 top-0 bottom-0 small:min-h-screen`} small:bg-[#000000] relative`}>
                    <li className="mx-10 text-[24px] large:text-base text-white small:pt-20"><span className='text-[#6AFF79]'>#</span>Home</li>
                    <li className="mx-10 text-[24px] large:text-base text-white "><span className='text-[#6AFF79]'>#</span>About</li>
                    <li className="mx-10 text-[24px] large:text-base text-white "><span className='text-[#6AFF79]'>#</span>Projects</li>
                    <li className="mx-10 text-[24px] large:text-base text-white large:hidden"><span className='text-[#6AFF79]'>#</span>Contact</li>
                </ul> 
                   

            
            </div>
            <span className='text-[white] small:hidden'><span className='text-[#6AFF79]'>#</span>Contact</span>
            <div onClick={()=>setToggle(false)} className={`close absolute block large:hidden  cursor-pointer small:self-end  ${!toggle ? `small:hidden `:`small:visible`}`}>
                <img src={require("./imgs/fermer2.png")} alt="" />
              </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={()=>setToggle(true)} className={`absolute large:hidden small:self-start ${!toggle ? `small:visible `:`small:hidden`}`}>
                <div className="open block w-8 ">
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                    <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar