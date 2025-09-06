import React from 'react'

const Video = () => {
  return (
   
      <video
        className="h-full w-full object-cover "
        autoPlay
        loop
        muted
        src="../../../public/video/video.mp4"
      ></video>
  
  );
}

export default Video