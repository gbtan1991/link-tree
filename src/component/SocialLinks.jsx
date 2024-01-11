import React from "react";
import { FaGithub, FaHashnode, FaCodepen } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

const SocialLinks = () => {
  
  const codingProfiles = [
    {
      id: 1,
      name: "GitHub",
      link: "https://github.com/gbtan1991",
      color: "#22272e",
      icon: <FaGithub />,
    },
    {
      id: 2,
      name: "Hashnode",
      link: "https://hashnode.com/@gbtan1991",
      color: "#2760fd",
      icon: <FaHashnode />,
    },
    {
      id: 3,
      name: "CodePen",
      link: "https://codepen.io/gbtan1991",
      color: "#63d7d0",
      icon: <FaCodepen />,
    },
    {
      id: 4,
      name: "BuyMeACoffee",
      link: "https://www.buymeacoffee.com/gbtan1991",
      color: "#ffdd00",
      icon: <SiBuymeacoffee />,
    },
  ];
  const hoverColor = codingProfiles.color
  

  return (
    <div className="w-full h-2/4 bg-zinc-50">
      <div className="grid place-content-center mt-12">
        <ul className="flex flex-col justify-center gap-5">
        {codingProfiles.map((profile) => (
          <li key={profile.id} className=
          {`flex hover:bg-[${profile.color}] hover:transform transition-transform duration-100 ease-in-out hover:scale-150 hover:ease-linear`}>
            <a href={profile.link} target="_blank" className={`flex flex-row items-center gap-5 text-xl py-5 px-14 w-full rounded-full`}>              
              <span >{profile.icon}</span>
              <p className="">{profile.name}</p>
              {profile.color}
            </a>
          </li>
        ))}

        </ul>

      </div>



    </div>
  );
};

export default SocialLinks;
