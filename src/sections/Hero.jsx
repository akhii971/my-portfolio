import { motion } from "framer-motion";
import { StarsCanvas, ComputersCanvas } from "../canvas";
import MagneticButton from "../components/MagneticButton";
import TypingText from "../components/TypingText";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            {/* Background Stars */}
            {/* Background Stars - Removed in favor of global background */}
            {/* <div className="absolute inset-0 z-0">
                <StarsCanvas />
            </div> */}

            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 padding-x z-10 pointer-events-none">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#C0C0C0]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div className="pointer-events-auto z-20 flex flex-col items-center justify-center text-center">
                    <h1 className="text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 font-bold drop-shadow-2xl">
                        Hi, I'm <span className="animate-text-shimmer bg-[linear-gradient(110deg,#E947F5,45%,#fff,55%,#2F4BA2)] bg-[length:250%_100%] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(233,71,245,0.5)]">Akhinesh KV</span>
                    </h1>
                    <div className="text-[#E947F5] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 h-[80px] drop-shadow-[0_0_5px_rgba(233,71,245,0.4)]">
                        <TypingText texts={["MERN Stack Developer", "Full-Stack Engineer", "React Specialist", "Creative Coder"]} />
                    </div>

                    <p className="mt-4 text-gray-300 text-[16px] max-w-lg leading-[26px] hidden sm:block backdrop-blur-sm bg-black/30 p-4 rounded-xl border-l-4 border-[#2F4BA2]">
                        MERN Stack Developer focused on performance, clean UI, and scalability
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <MagneticButton className="group relative px-8 py-3 rounded-full font-bold text-white overflow-hidden bg-transparent border border-[#E947F5] shadow-[0_0_15px_rgba(233,71,245,0.3)] hover:shadow-[0_0_30px_rgba(233,71,245,0.6)] transition-all">
                            <div className="absolute inset-0 w-full h-full bg-[#E947F5] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <a href="#projects" className="relative z-10 flex items-center gap-2">
                                View Projects
                            </a>
                        </MagneticButton>
                        <MagneticButton className="group relative px-8 py-3 rounded-full font-bold text-white overflow-hidden bg-transparent border border-[#2F4BA2] shadow-[0_0_15px_rgba(47,75,162,0.3)] hover:shadow-[0_0_30px_rgba(47,75,162,0.6)] transition-all">
                            <div className="absolute inset-0 w-full h-full bg-[#2F4BA2] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <a href="#contact" className="relative z-10">Contact Me</a>
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* 3D Computer/Object Canvas - Removed */}
            {/* <div className="absolute xl:right-[-10%] bottom-0 xl:bottom-10 w-[100%] h-[50%] xl:w-[60%] xl:h-[80%] z-10">
                <ComputersCanvas />
            </div> */}

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 pointer-events-none">
                <a href="#about" className="pointer-events-auto">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 backdrop-blur-sm bg-black/20">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
