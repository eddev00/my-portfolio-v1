import React from "react";

const Contact = () => {
  return (
    <div className="text-white  mx-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <span className="text-[#8FFF9B] text-[48px]">
          &lt; Get in Touch &gt;
        </span>
        <p className="max-w-[900px] text-[28px] text-center">
          I am always excited to collaborate with others and take on new
          projects<br></br>
          Let's create something great together!
        </p>
        <div className="flex flex-row gap-5 flex-wrap justify-center">
        <div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold text-[28px]">
          LinkedIn
        </div>
        <div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold text-[28px]">
          Github
        </div>

        <div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold text-[28px]">
          Instagram
        </div>
        <div className="flex justify-center items-center text-black bg-[#8FFF9B] w-[260px] h-[60px] font-bold text-[28px]">
          E-mail
        </div>
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
