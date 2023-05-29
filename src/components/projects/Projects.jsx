import React from 'react'

const Projects = () => {
  return (
    <div className='text-white mt-[300px]'>
     <div className='flex flex-col items-center '>
        <span className='text-[24px] text-white'>
            <span className='text-[#6AFF79] '>#</span>Projects</span>
        <ul className="flex flex-row justify-between items-center mt-6">
                    <li className="mx-5 text-[#6AFF79] ">&lt; All &gt;</li>
                    <li className="mx-5 text-white ">&lt; Web &gt;</li>
                    <li className="mx-5 text-white ">&lt; Data science &gt;</li>
                    <li className="mx-5 text-white ">&lt; Video games dev &gt;</li>
        </ul>   
        <div className="relative mt-10 flex card w-[70%] justify-between">
            <img className='' src={require("./imgs/item1.png")} alt="" />
            
            <div className=' right-[10%] top-[32%] flex flex-col gap-3 absolute z-[1]'>
                     <div className=' text-[20px] bg-[#8FFF9B] flex flex-row w-[234px] justify-around items-center h-[34px] font-bold self-end text-black '>
                        <span>Cosmos Memory</span>
                        <img className='' src={require("./imgs/fermer.png")} alt="" />
                     </div>
                    <div className='bg-black max-w-[600px] border border-[#6AFF79] text-[20px] font-light px-5 py-3'>
                             <span>A web application that consumes NASA's api to display the Astronomy Picture of the Day along with a brief explanation written by a professional astronomer.</span>
                    </div>
                    <div className='skills flex gap-2 font-light text-[14px] self-end'>
                            <span>Reactjs</span>
                            <span>Nodejs</span>
                            <span>Css</span>
                    </div>
                    <div className='skills flex gap-2 font-light text-[14px] self-end'>
                    <img className='' src={require("./imgs/github.png")} alt="" />
                    <img className='' src={require("./imgs/demo.png")} alt="" />
                    </div>

            </div>
        </div>     
     </div>
    </div>
  )
}

export default Projects