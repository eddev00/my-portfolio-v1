import React from "react";

const Contact = () => {
  return (
    <div id='contact' className="text-white  mx-auto">
      <div className="flex flex-col justify-center items-center gap-10">
        <span className="text-[#8FFF9B] md:text-[48px] text-[28px]">
          &lt; Get in Touch &gt;
        </span>
        <p className="max-w-[900px] md:text-[28px] text-[14px] text-center">
          I am always excited to collaborate with others and take on new
          projects<br></br>
          Let's create something great together!
        </p>
        <div className="flex flex-row gap-5 flex-wrap justify-center">
        <a href="https://www.linkedin.com/in/mohamed-baarar/"><div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold md:text-[28px] text-[16px]">
          LinkedIn
        </div></a>
        <a href="https://github.com/eddev00"><div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold md:text-[28px] text-[16px]">
          Github
        </div></a>

        <a href="https://www.instagram.com/mohamedbaarar/"><div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold md:text-[28px] text-[16px]">
          Instagram
        </div></a>
        <a href="mailto: eddevjo@gmail.com"><div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold md:text-[28px] text-[16px]">
          E-mail
        </div></a>
      </div>
      <div className="flex justify-center items-center mt-[100px]">
        <span className="text-white text-[14px] font-light text-center mb-3">
          All rights reserved © 2023 Designed & built by Mohamed Baarar
        </span>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
