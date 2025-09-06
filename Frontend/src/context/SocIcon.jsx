
import React from "react";

const HeartIcon = () => (
  <svg
    fill="white"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-label="heart"
    className="inline-block ml-2"
  >
    <path d="M12 21s-7.5-6.2-7.5-11A5.5 5.5 0 0 1 12 4.5 5.5 5.5 0 0 1 19.5 10c0 4.8-7.5 11-7.5 11z" />
  </svg>
);

const SocialButtons = () => (
  <div className="flex flex-wrap gap-4 items-center font-[font1] justify-between w-full max-w-5xl mx-auto py-8">
    <div className="flex gap-4 flex-wrap">
      {["FB", "IG", "IN", "BE"].map((label) => (
        <button
          key={label}
          className=" opacity-0 md:opacity-100 lg:opacity-100  border-2 rounded-full md:px-6 md:py-2 lg:px-6 lg:py-2 px-5 py-1 text-white lg:text-2xl text-lg md:text-2xl  font-bold uppercase transition hover:text-[#D3FD48] hover:border-[#D3FD48] bg-black"
        >
          {label}
        </button>
      ))}
    </div>
    <button className="border-2 rounded-full md:px-8 md:py-2 lg:px-8 lg:py-2 px-4 py-1 text-white lg:text-2xl text-4xl md:text-2xl  font-bold uppercase flex items-center bg-black transition hover:text-[#D3FD48] hover:border-[#D3FD48]">
      CONTACT <HeartIcon />
    </button>
  </div>
);

export default SocialButtons;
