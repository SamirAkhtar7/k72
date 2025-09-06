import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SocialButtons from "../context/SocIcon";

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.2,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -190%",
        scrub: "Linear",
      },
    });
  });

  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  return (
    <div>
      <div className=" lg:pt-[35vh]  pt-[30vh]">
        <h2 className="font-[font2] flex items-start text-black lg:text-[10vw] text-[18vw]  uppercase ">
          Projects{" "}
          <div className="lg:text-4xl md:text-4xl lg:mt-[25px] lg:-ml-3 md:mt-[25px] md:-ml-3 text-xl -ml-2 mt-1">
            16
          </div>
        </h2>
      </div>
      <div className="  lol  lg:-mt-12 mb:-mt-7 -mt-4 p-2 ">
        {projects.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="hero  w-full lg:h-[500px] h-[600px] md:h-[550px] lg:mb-5 mb-2 flex lg:flex-row flex-col lg:gap-2 gap-1"
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          );
        })}
      </div>

      <div className=" flex flex-col justify-between  page2 h-[450px] w-screen bg-black p-5 -mt-4 uppercase">
        {/* <div className=" flex justify-between p-2  ">
          <div className="flex gap-4 justify-center items-center  uppercase ">
            <div className=" relative flex justify-center items-center font-[font2]  border-4 rounded-full w-[9vw] md-[10vw] h-18 md:h-10 pt-4  ">
              <h1 className="text-[4vw] absolute "> fb</h1>
            </div>
            <div className=" relative flex justify-center items-center font-[font2]  border-4 rounded-full w-[9vw] h-18 pt-4  ">
              <h1 className="text-[4vw] absolute "> ig</h1>
            </div>
            <div className=" relative flex justify-center items-center font-[font2]  border-4 rounded-full w-[9vw] h-18 pt-4  ">
              <h1 className="text-[4vw] absolute "> in</h1>
            </div>

            <div className=" relative flex justify-center items-center font-[font2]  border-4 rounded-full w-[9vw] h-18 pt-4  ">
              <h1 className="text-[4vw] absolute "> be</h1>
            </div>
          </div>
          <div className=" relative flex justify-center items-center font-[font2]  border-4 rounded-full w-[24vw] h-18 pt-4 uppercase  ">
            <h1 className="text-[4vw] absolute ">contact</h1>
          </div>
        </div> */}
        <div>
          <SocialButtons />
        </div>
        <div className="footer flex lg:flex-row flex-col gap-1.5  justify-between items-center font-[font2]  text-xl ">
          <div className=""> montreal_</div>
          <div className="flex gap-4 lg:gap-5 md:gap-1 md:text-xs text-xs bg-[]  ">
            <div className="hover:text-[#D3FD48] ">privacy policy</div>
            <div className="hover:text-[#D3FD48] "> privacy notics</div>
            <div className="hover:text-[#D3FD48] "> ethics report </div>
            <div className="hover:text-[#D3FD48]"> consent options</div>
          </div>
          <div className="hover:text-[#D3FD48]"> back to top</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
 