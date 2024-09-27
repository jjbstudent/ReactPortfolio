// Importing the content for the hero section and the profile picture
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/JermainePic1.jpg";
import {delay, motion} from 'framer-motion'

const container = ({ delay }) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="ml-5 mr-5 border-b border-neutral-900 pb-4 lg:mb-32"> {/* Corrected margin class */}
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start lg:ml-5"> {/* Moved ml-16 here */}
                    <motion.h1 
                    variants={container({delay:0})}
                    initial='hidden'
                    animate='visible'
                    className="pb-10 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
                    >
                    Jermaine Bandoo
                    </motion.h1>
                        <motion.span 
                        variants={container({delay:0.5})}
                        initial='hidden'
                        animate='visible'                   
                        className="bg-gradient-to-r from-purple-300 via-slate-500 to-pink-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Front-End Developer
                        </motion.span>
                        <motion.p 
                        variants={container({delay:1})}
                        initial='hidden'
                        animate='visible'
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:100, opacity:0 }}
                        animate={{x:0 , opacity: 1}}
                        transition={{duration:2, delay:1.2}}
                        src={profilePic} alt="Profile picture" className="max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Hero;