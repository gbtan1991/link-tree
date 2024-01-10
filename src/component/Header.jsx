import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuBell } from "react-icons/lu";

const Header = () => {
  const buttonStyling =
    "w-10 h-10 mx-6 mt-6 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 grid place-items-center hover:bg-zinc-100 hover:text-zinc-900"

  return (
    <div className="w-full h-fit flex flex-row justify-between">
      <button className={buttonStyling}><BsThreeDots className="text-2xl text-zinc-600"/></button>
      <button className={buttonStyling}><LuBell className="text-2xl text-zinc-600"/></button>
    </div>
  );
};

export default Header;
