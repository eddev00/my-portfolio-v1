import React from 'react'

const About = () => {
    return (
        <div id='about' className='text-white pt-[300px]  w-[90%] flex justify-center mx-auto'>
           <div className='flex flex-col md:flex-row md:justify-between md:flex-wrap md:gap-8 gap-10'>
                <div className='flex flex-col max-w-[600px] gap-10'>

                 <span className='font-[600] text-[24px]'><span className='text-[#6AFF79]'>#</span>About me</span>
                 <span className="leading-7">Hello! and welcome to my portfolio! My name is Mohamed Baarar, i’m someone who is passionate about <span className='text-[#6AFF79]'>creating</span> and building things, I find great joy in exploring the vast and dynamic world of technology. From designing and developing websites and apps, to video games development and exploring the the vast world of data, I am constantly seeking out new challenges and opportunities to expand my skills and knowledge. 

                    <br></br><br></br>Whether I am working on a personal project or collaborating with others on a larger endeavor, I am always eager to push the boundaries of what is possible and to find innovative solutions to complex problems.</span>
                </div>
                <img className='small:mt-10 large:max-w-[519px] h-auto w-auto' src={require("./imgs/about.gif")} alt="" />
           </div>
        </div>
      )
    }

export default About