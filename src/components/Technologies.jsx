import React, { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";  //react JS
import { BiLogoNodejs } from "react-icons/bi";     //node JS
import { TbBrandJavascript } from "react-icons/tb";    // javascript
import { BiLogoJquery } from "react-icons/bi";    // jquery
import { RiBootstrapLine } from "react-icons/ri";     //bootstrap
import { TiHtml5 } from "react-icons/ti";  // css html

const animationClasses = [
  "animate-spin", // Tailwind built-in
  "animate-bounce", // Tailwind built-in
  "animate-pulse", // Tailwind built-in
  "wiggle", // custom
  "shake" // custom
];

const iconList = [
  { Icon: RiReactjsLine, color: "text-cyan-400" },
  { Icon: BiLogoNodejs, color: "text-yellow-400" },
  { Icon: TbBrandJavascript, color: "text-green-400" },
  { Icon: BiLogoJquery, color: "text-purple-400" },
  { Icon: RiBootstrapLine, color: "text-red-400" },
  { Icon: TiHtml5, color: "text-orange-400" }
];

const Technologies = () => {
  const [hovered, setHovered] = useState(Array(iconList.length).fill(null));

  const handleMouseEnter = (idx) => {
    const randomAnim = animationClasses[Math.floor(Math.random() * animationClasses.length)];
    setHovered((prev) => prev.map((v, i) => (i === idx ? randomAnim : v)));
  };
  const handleMouseLeave = (idx) => {
    setHovered((prev) => prev.map((v, i) => (i === idx ? null : v)));
  };

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {iconList.map(({ Icon, color }, idx) => (
          <div
            key={idx}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <Icon className={`text-9xl ${color} ${hovered[idx] || ""}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
