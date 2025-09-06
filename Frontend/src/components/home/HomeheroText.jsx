import React from 'react'
import Video from './Video';

const HomeheroText = () => {
return (
  <div className="font-[font1] text-white mt-62 lg:mt-0 md:mt-30 text-center">
    <div className=" lg:text-[9vw] text-[11vw] md:text-[12vw] uppercase lg:leading-[8.5vw] leading-12  md:leading-22 flex items-center justify-center ">
      L'étincelle
    </div>
    <div className=" lg:text-[9vw] text-[11vw] md:text-[12vw] uppercase lg:leading-[8.5vw] leading-12  md:leading-22 flex items-center justify-center">
      qui
      <div className="relative h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden ">
        <div className="w-full h-full rounded-full  overflow-hidden">
          <Video />
        </div>
      </div>
      génère
    </div>
    <div className=" lg:text-[9vw] text-[11vw] md:text-[12vw] uppercase lg:leading-[8.5vw] leading-12  md:leading-22 flex items-center justify-center ">
      la créativité
    </div>
  </div>
);
}

export default HomeheroText