import { RiReactjsLine } from "react-icons/ri";  //react JS
import { BiLogoNodejs } from "react-icons/bi";     //node JS
import { TbBrandJavascript } from "react-icons/tb";    // javascript
import { BiLogoJquery } from "react-icons/bi";    // jquery
import { RiBootstrapLine } from "react-icons/ri";     //bootstrap
import { TiHtml5 } from "react-icons/ti";  // css html

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-9xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoNodejs className="text-9xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandJavascript className="text-9xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoJquery className="text-9xl text-purple-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiBootstrapLine className="text-9xl text-red-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TiHtml5 className="text-9xl text-orange-400" />
        </div>
            

      </div>
    </div>
  );
};

export default Technologies;
