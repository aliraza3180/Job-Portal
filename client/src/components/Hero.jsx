import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 font-medium">Over 10,000+ jobs to apply</h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
        <div className="flex items-center justify-between bg-white text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto rounded">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              type="text"
              placeholder="Search for jobs"
              name=""
              id=""
            /> 
          </div>
          <div className="bg-[#9D9D9D] h-6 w-[1px]"></div>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              type="text"
              placeholder="Search for location"
              name=""
              id=""
            />
          </div>
          <button className="bg-blue-600 px-6 py-2 rounded text-white m-1">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
