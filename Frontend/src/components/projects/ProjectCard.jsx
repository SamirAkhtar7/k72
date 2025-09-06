import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-2 gap-1.5 h-full">
      <div className=" relative group lg:w-1/2 md:w-1/2 w-full h-full rounded-none transition-all  hover:rounded-[50px] overflow-hidden ">
        <img
          className="h-full w-full object-cover object-center "
          src={props.image1}
          alt=""
        />
        <div className=" opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center p-2  left-0 h-full w-full  bg-black/5 ">
          <h2 className="uppercase text-white border-white  text-5xl pt-5 px-4 font-[font1] border-4 rounded-full ">
            viorle project
          </h2>
        </div>
      </div>

      <div className=" relative group lg:w-1/2 md:w-1/2 w-full h-full rounded-none transition-all   bg-green-900 hover:rounded-[50px] overflow-hidden ">
        <img
          className="h-full w-full object-cover object-center "
          src={props.image2}
          alt=""
        />
        <div className=" opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center p-2  left-0 h-full w-full  bg-black/5 ">
          <h2 className="uppercase text-white border-white  text-5xl pt-5 px-4 font-[font1] border-4 rounded-full ">
            viorle project
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard