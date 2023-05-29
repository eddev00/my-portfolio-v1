import React from 'react'

const Hero = () => {
  return (
    <div className='text-white pt-[300px] px-[22vw] h-screen'>
        <div><span className='text-[#6AFF79] font-light'>Hi, my name is</span></div>
        <div><span className='text-[white] text-[64px] font-poppins font-[600]'>Mohamed Baarar.</span></div>
        <div><span  className='text-text_grey text-[64px] font-poppins font-[600]'>I love <span className='text-text_green'>building</span> things.</span></div>
        <div className='max-w-[600px]'><span>As a software developer i'm passionate about a lot of things, web dev,
        video games dev, data field and machine learning. Aspiring to be a <span className='text-[#6AFF79]'>digital wizard</span>, using 
        my skills to bring ideas to life and make magic happen on the screen.</span></div>
    </div>
  )
}

export default Hero