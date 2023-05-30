import React from "react";

const Hero = () => {
  return (
    
    <div id='hero' className="flex justify-center   text-white pt-[200px] large:pt-[300px] max-w-[80%]  large:h-screen relative mx-auto large:pr-[400px]  overflow-hidden">
      <div className="flex flex-col z-[2]">
        <div>
          <span className="text-[#6AFF79] font-light">Hi, my name is</span>
        </div>
        <div>
          <span className="text-[white] small:text-[56px] text-[64px] font-poppins font-[600]">
            Mohamed Baarar.
          </span>
        </div>
        <div>
          <span className="text-text_grey small:text-[56px] text-[64px] font-poppins font-[600]">
            I love <span className="text-text_green">building</span> things.
          </span>
        </div>
        <div className="small:mt-3 max-w-[600px]">
          <span>
            As a software developer i'm passionate about a lot of things, web
            dev, video games dev, data field and machine learning. Aspiring to
            be a <span className="text-[#6AFF79]">digital wizard</span>, using
            my skills to bring ideas to life and make magic happen on the
            screen.
          </span>
        </div>
        <div className="bg-[#78f785] max-w-[180px] h-[40px] text-black text-[20px] font-semibold flex justify-center items-center mt-10">
          <span># Contact me</span>
        </div>
      </div>
      <div className="top-[20%] small:top-[40%] flex flex-col right z-[1] absolute small:scale-150  w-full ">
           <img className="self-end opacity-[0.2] h-auto w-auto " src={require("./imgs/hero.gif")} alt="" />
      </div>
    </div>
  );
};

export default Hero;
