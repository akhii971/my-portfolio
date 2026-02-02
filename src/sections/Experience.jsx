import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className={`flex flex-col gap-4 relative w-full sm:w-[calc(50%-40px)] ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"} text-left`}
        >
            <div className="p-[1px] rounded-2xl bg-gradient-to-b from-[#E947F5] via-[#2F4BA2] to-transparent shadow-[0_0_20px_rgba(233,71,245,0.2)] group">
                <div className="bg-black/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl relative overflow-hidden group-hover:bg-black/80 transition-colors duration-300 border border-white/5">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#E947F5] opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2F4BA2] opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-opacity"></div>

                    <h3 className="text-white text-[20px] sm:text-[24px] font-bold leading-[1.2] group-hover:text-[#E947F5] transition-colors">{experience.title}</h3>
                    <p className="text-[#a0a0a0] text-[14px] sm:text-[16px] font-semibold mt-1 group-hover:text-[#2F4BA2] transition-colors">
                        {experience.company_name}
                    </p>
                    <p className="text-gray-400 text-[12px] sm:text-[14px] mt-2 italic flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#E947F5] to-[#2F4BA2]"></span>
                        {experience.date}
                    </p>

                    <ul className="list-none space-y-2 sm:space-y-3">
                        {experience.points.map((point, i) => (
                            <li
                                key={`experience-point-${i}`}
                                className="text-gray-300 text-[13px] sm:text-[14px] pl-1 tracking-wider flex items-start gap-3"
                            >
                                <span className="min-w-[6px] h-[6px] mt-[8px] rounded-full bg-[#E947F5] shadow-[0_0_5px_#E947F5]"></span>
                                <span className="text-gray-300 group-hover:text-white transition-colors">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section className="py-20 w-full relative z-0 overflow-hidden" id="work">
            {/* Background glow */}
            <div className="absolute top-[20%] left-[50%] w-[500px] h-[500px] bg-[#C0C0C0]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" ></div>

            <div className="max-w-7xl mx-auto padding-x flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <p className="text-[#E5E5E5] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] uppercase tracking-wider mb-2">
                        My Career Path
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Internship
                    </h2>
                </motion.div>

                <div className="w-full flex flex-col items-center relative">
                    {/* Gradient Line */}
                    <div className="absolute left-[20px] sm:left-[50%] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#915EFF] via-purple-500 to-transparent sm:-translate-x-1/2" />

                    <div className="w-full flex flex-col gap-12 sm:gap-20">
                        {experiences.map((experience, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center w-full relative pl-8 sm:pl-0">
                                {/* Center Icon - Desktop */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="hidden sm:flex absolute left-[50%] -translate-x-1/2 w-16 h-16 rounded-full bg-[#1d1836] border-4 border-[#151030] shadow-[0_0_20px_rgba(145,94,255,0.5)] z-20 items-center justify-center p-2"
                                >
                                    <div className="w-full h-full rounded-full bg-[#151030] flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[#915EFF] opacity-20"></div>
                                        <experience.icon className="w-8 h-8 text-white" />
                                    </div>
                                </motion.div>

                                {/* Connector Dot - Mobile */}
                                <div className="sm:hidden absolute left-[11px] top-8 w-5 h-5 rounded-full bg-[#915EFF] border-4 border-[#1d1836] z-20"></div>

                                <ExperienceCard experience={experience} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
