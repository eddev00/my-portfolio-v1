import React from "react";
const Projects = () => {
  return (
    <div id='projects' className="text-white mt-[300px] mx-auto w-[90%]  overflow-hidden">
      <div className="flex flex-col items-center gap-10 w-full">
        <span className="text-[24px] text-white">
          <span className="text-[#6AFF79] ">#</span>Projects
        </span>
        <ul className="flex flex-row justify-center items-center mb-6 flex-wrap w-full gap-8 whitespace-nowrap">
          <li className="  small:text-[14px] text-[#6AFF79] ">&lt; All &gt;</li>
          <li className="  small:text-[14px] text-white">&lt; Web &gt;</li>
          <li className=" small:text-[14px] text-white ">&lt; Data science &gt;</li>
          <li className="  small:text-[14px] text-white ">&lt; Video games &gt;</li>
        </ul>
        {/* this is a card */}
        <div className="relative flex md:flex-row flex-col card w-[70%] justify-between md:gap-0 gap-5">
          <img className="" src={require("./imgs/item1.png")} alt="" />

          <div className="top-[32%] flex flex-col gap-3 md:absolute z-[1] w-full ">
            <div className=" text-[20px] bg-[#8FFF9B] flex flex-row md:w-[234px] md:justify-around justify-between items-center h-[34px] font-bold self-end text-black  w-full px-2 md:px-0">
              <span>Cosmos Memory</span>
              <img className="" src={require("./imgs/fermer.png")} alt="" />
            </div>
            <div className="bg-black md:max-w-[600px] border border-[#6AFF79] text-[20px] font-light px-5 py-3 self-end">
              <span>
                A web application that consumes NASA's api to display the
                Astronomy Picture of the Day along with a brief explanation
                written by a professional astronomer.
              </span>
            </div>
            <div className="skills flex gap-2 font-light text-[14px] self-end">
              <span>Reactjs</span>
              <span>Nodejs</span>
              <span>Css</span>
            </div>
            <div className="skills flex gap-2 font-light text-[14px] self-end">
              <img className="" src={require("./imgs/github.png")} alt="" />
              <img className="" src={require("./imgs/demo.png")} alt="" />
            </div>
          </div>
        </div>
        
       <img className=" transform scale-x-[-1]"  src={require("./imgs/line.png")} alt="" hidden/>
       <img className="sd:hidden "  src={require("./imgs/line.png")} alt="" />
       <img className="md:hidden  visible"  src={require("./imgs/horiline.png")} alt="" />
        {/* this is a card */}
        <div className="relative flex flex-col card w-[70%] justify-between md:gap-0 gap-5 md:flex-row-reverse">
          <img className="" src={require("./imgs/item1.png")} alt="" />

          <div className="top-[32%] flex flex-col gap-3 md:absolute z-[1] w-full ">
            <div className=" text-[20px] bg-[#8FFF9B] flex flex-row md:w-[234px] md:justify-around justify-between items-center h-[34px] font-bold  text-black w-full  px-2 md:px-0">
              <span>Cosmos Memory</span>
              <img className="" src={require("./imgs/fermer.png")} alt="" />
            </div>
            <div className="bg-black md:max-w-[600px] border border-[#6AFF79] text-[20px] font-light px-5 py-3 ">
              <span>
                A web application that consumes NASA's api to display the
                Astronomy Picture of the Day along with a brief explanation
                written by a professional astronomer.
              </span>
            </div>
            <div className="skills flex gap-2 font-light text-[14px] ">
              <span>Reactjs</span>
              <span>Nodejs</span>
              <span>Css</span>
            </div>
            <div className="skills flex gap-2 font-light text-[14px] ">
              <img className="" src={require("./imgs/github.png")} alt="" />
              <img className="" src={require("./imgs/demo.png")} alt="" />
            </div>
          </div>
        </div>
        {/* this is a button */}
        <div className="text-black bg-[#8FFF9B] w-[160px] h-[50px] text-[20px] flex justify-center items-center font-bold my-10" >
          <span>Show more</span>
        </div>
        <img className="mb-10" src={require("./imgs/horiline.png")} alt="" />
        
      </div>
    </div>
  );
};

export default Projects;
