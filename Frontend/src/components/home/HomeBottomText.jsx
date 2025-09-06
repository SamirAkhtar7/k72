import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 mb-2 p ">
      <p className="absolute lg:top-[60vh] lg:w-[28vw] w-64 lg:right-5 right-5 text-end bottom-28  lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-5 leading-tight">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>
      <div className="  lg:border-3 border-2 border-white uppercase rounded-full px-4 lg:px-6  leading-tight hover:border-[#d3fd50] hover:text-[#d3fd50]">
        <Link className="lg:text-[6.5vw] text-[5.5vw] " to="/project">
          Projects
        </Link>
      </div>
      <div className="  lg:border-3 border-2 border-white uppercase rounded-full px-4 lg:px-6 leading-tight  hover:border-[#d3fd50]  hover:text-[#d3fd50]">
        <Link className="lg:text-[6.5vw] text-[5.5vw]" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
