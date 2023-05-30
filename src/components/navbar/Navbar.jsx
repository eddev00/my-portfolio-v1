import React from 'react'
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleSetActive = ()=>{
    console.log('clicked')
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 py-4  bg-black z-10 border-b-[1px] border-t-[1px] border-[#27632d]">
        <div className=" flex flex-row  justify-between items-center  text-base w-[90%] mx-auto small:justify-normal small:flex-col">
            {/* Logo */}
            <div className="img md:self-auto self-start">
                <img src={require("./imgs/logo.png")} alt="" />
            </div>
            <div className='nav-links small:z-[5] '>
                <ul className={`nav-large small:justify-normal  duration-300 flex flex-row justify-between items-center small:flex-col small:items-start small:gap-16 ${!toggle ? ` small:right-[300%] top-0 bottom-0 small:h-0` : `small:right-0 top-0 bottom-0 small:min-h-screen`} small:bg-[#000000] relative`}>
                    <li className="mx-10 text-[24px] large:text-base text-white small:pt-20">
                    <Link  to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={()=>setToggle(false)}>
                        <span className='text-[#6AFF79]'>#</span>Home</Link></li>
                    <li className="mx-10 text-[24px] large:text-base text-white ">
                    <Link  to="about" spy={true} smooth={true} offset={50} duration={500} onClick={()=>setToggle(false)}>
                        <span className='text-[#6AFF79]'>#</span>About </Link></li>
                    <li className="mx-10 text-[24px] large:text-base text-white ">
                    <Link  to="projects" spy={true} smooth={true} offset={-200} duration={500} onClick={()=>setToggle(false)}>
                        <span className='text-[#6AFF79]'>#</span>Projects
                        </Link>
                        </li>
                    <li className="mx-10 text-[24px] large:text-base text-white large:hidden">
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={()=>setToggle(false)}>
                    <span className='text-[#6AFF79]'>#</span>Contact</Link></li>
                </ul> 
                

            
            </div>
            <span className='text-[white] small:hidden'><span className='text-[#6AFF79]'>#</span>Contact</span>
            <div onClick={()=>setToggle(false)} className={`close absolute block large:hidden  cursor-pointer small:self-end  ${!toggle ? `small:hidden `:`small:visible`}`}>
                <img src={require("./imgs/fermer2.png")} alt="" />
              </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={()=>setToggle(true)} className={`absolute large:hidden small:self-end ${!toggle ? `small:visible `:`small:hidden`}`}>
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