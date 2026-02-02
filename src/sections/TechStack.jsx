import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";
import { skills } from "../constants";
import { BallCanvas } from "../canvas";

const TechStack = () => {
    return (
        <section className="py-20 w-full relative z-0" id="skills">
            <div className="max-w-7xl mx-auto padding-x flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center mb-16"
                >
                    <p className="text-[#E947F5] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] uppercase tracking-wider">
                        My Arsenal
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] drop-shadow-[0_0_10px_rgba(233,71,245,0.3)]">
                        Tech Stack
                    </h2>
                </motion.div>

                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {skills.map((category, index) => (
                        <TiltCard
                            key={category.title}
                            className="w-full sm:w-[280px] p-[1px] rounded-[24px] shadow-[0_0_30px_rgba(47,75,162,0.2)] bg-gradient-to-b from-[#E947F5] via-[#2F4BA2] to-transparent cursor-pointer group"
                        >
                            <div className="bg-[#050505]/60 backdrop-blur-xl rounded-[24px] py-6 px-8 min-h-[400px] flex flex-col items-center relative overflow-hidden h-full border border-white/5 group-hover:bg-[#050505]/80 transition-all duration-300">
                                {/* Ambient Background Glow */}
                                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#E947F5]/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2F4BA2] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                                {/* 3D Rotating Ball Icon */}
                                <div className="w-28 h-28 mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(233,71,245,0.3)]">
                                    <BallCanvas icon={category.icon} />
                                </div>

                                <h3 className="text-white text-[22px] font-bold text-center mb-6 z-10 tracking-wide border-b border-white/10 pb-2 w-full group-hover:border-[#E947F5]/50 transition-colors">
                                    {category.title}
                                </h3>

                                <ul className="flex flex-col gap-3 w-full z-10">
                                    {category.skills.map((skill) => (
                                        <li key={skill.name} className="flex items-center gap-3 text-gray-300 text-[15px] hover:text-white transition-colors duration-200 group/skill">
                                            <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover/skill:bg-[#E947F5] group-hover/skill:border-[#E947F5] transition-all shadow-[0_0_5px_rgba(255,255,255,0.05)] group-hover/skill:shadow-[0_0_15px_rgba(233,71,245,0.5)]">
                                                <skill.icon className="w-5 h-5 text-gray-400 group-hover/skill:text-white transition-colors" />
                                            </div>
                                            <span className="font-medium tracking-wide">{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#2F4BA2] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
