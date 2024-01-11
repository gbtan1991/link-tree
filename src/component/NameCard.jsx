import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const NameCard = () => {
  const profileDetails = {
    name: "Gilbert Tan",
    userName: "@gbtan1991",
    profilePhoto: "./profile.jpg",
  };

  const profilePhotoStyle = {
    background: `url(${profileDetails.profilePhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div
        className="w-28 h-28 rounded-full border border-zinc-500"
        style={profilePhotoStyle}
      ></div>
      <div className="flex items-center"><h1 className="text-xl font-theme font-bold">{profileDetails.name}</h1>
      <PiSealCheckFill className="text-blue-700"/>
      </div>
      <h2 className="text-base font-theme font-medium">{profileDetails.userName}</h2>

      <div className="my-2 flex gap-2 text-2xl text-zinc-600 ">
      <a href="#"><CiMail className="hover:text-blue-900 hover:transform transition-transform duration-100 ease-in-out hover:scale-150 hover:ease-linear"/></a>
      <a href="#"><CiFacebook className="hover:text-blue-900 hover:transform transition-transform duration-100 ease-in-out hover:scale-150 hover:ease-linear"/></a>
      <a href="#"><FaThreads className="hover:text-blue-900 hover:transform transition-transform duration-100 ease-in-out hover:scale-150 hover:ease-linear"/></a>
      <a href="#"><FaInstagram className="hover:text-blue-900 hover:transform transition-transform duration-100 ease-in-out hover:scale-150 hover:ease-linear"/></a>
      <a href="#"><AiOutlineYoutube className="hover:text-blue-900 hover:transform transition-transform duration-100 ease-in-out hover:scale-150 hover:ease-linear"/></a>
      
      </div>
    </div>
  );
};

export default NameCard;
