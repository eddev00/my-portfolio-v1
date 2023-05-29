import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 mt-5 mx-20">
        <div className="flex flex-row justify-between items-center  text-base">
            {/* Logo */}
            <div className="img">
                <img src={require("./imgs/logo.png")} alt="" />
            </div>
            <div className='nav-links'>
                <ul className="flex flex-row justify-between items-center">
                    <li className="mx-5 text-white "><span className='text-[#6AFF79]'>#</span>Home</li>
                    <li className="mx-5 text-white "><span className='text-[#6AFF79]'>#</span>About</li>
                    <li className="mx-5 text-white "><span className='text-[#6AFF79]'>#</span>Projects</li>
                </ul>    
            </div>
            <span className='text-[white]'><span className='text-[#6AFF79]'>#</span>Contact</span>

        </div>

    </div>
  )
}

export default Navbar