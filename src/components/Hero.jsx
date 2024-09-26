// Importing the content for the hero section and the profile picture
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/JermainePic.jpg";

const Hero = () => {
    return (
        <div className="ml-5 mr-5 border-b border-neutral-900 pb-4 lg:mb-32"> {/* Corrected margin class */}
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start lg:ml-16"> {/* Moved ml-16 here */}
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Jermaine Bandoo
                        </h1>
                        <span className="bg-gradient-to-r from-purple-300 via-slate-500 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Front-End Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="Profile picture of Jermaine Bandoo" className="max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Hero;