import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";

const NameCard = () => {
  const profileDetails = {
    name: "Gilbert Tan",
    userName: "@gbTan",
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
        className="w-28 h-28 bg-white rounded-full border border-zinc-500"
        style={profilePhotoStyle}
      ></div>
      <div className="flex items-center"><h1 className="text-xl font-theme font-bold">{profileDetails.name}</h1>
      <PiSealCheckFill className="text-blue-700"/>
      </div>
      <h2 className="text-base font-theme font-medium">{profileDetails.userName}</h2>

      <div>
      <CiMail />
      <CiFacebook />
      <FaThreads />
      
      </div>
    </div>
  );
};

export default NameCard;
