import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/projects/JermainePic.jpg";

const Hero = () => {
    return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="PB-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Jermaine Bandoo</h1>
                    <span className="bg-gradient-to-r from-purple-300 via-slate-500 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Front-End Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-linght tracking-tighter">{HERO_CONTENT}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-centre">
                <img src={profilePic} alt="Jermaine Bandoo" className="max-w-xs" />
                </div>
            
            </div>
        </div>
    </div>
    );
};

export default Hero;