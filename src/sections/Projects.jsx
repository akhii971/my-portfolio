import { motion } from "framer-motion";
import { projects } from "../constants";
import { Github, ExternalLink } from "lucide-react";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({ index, name, subtitle, description, tags, image, source_code_link, live_link }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.25, 0.75)}
            className="w-full sm:w-[360px]"
        >
            {/* Main Card Container with Levitation on Hover */}
            <motion.div
                whileHover={{ y: -20, scale: 1.03, rotateZ: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full h-[500px] perspective-1000 group cursor-pointer relative"
            >
                {/* 3D Flipper */}
                <div className="relative w-full h-full transition-all duration-700 w-full h-full preserve-3d group-hover:rotate-y-180 rounded-2xl">

                    {/* Front Face: Neon Cyber-Glass */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden backdrop-blur-xl bg-black/40 border border-white/5 shadow-[0_0_30px_rgba(47,75,162,0.3)] flex flex-col justify-between p-5 z-10">
                        {/* Gradient Border Overlay */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-[#E947F5]/40 to-[#2F4BA2]/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ maskImage: 'linear-gradient(black, black), linear-gradient(black, black)', maskClip: 'content-box, border-box', maskComposite: 'exclude' }} />

                        {/* Shimmer Effect Overlay */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-[#E947F5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-shimmer" />

                        {/* Image Container */}
                        <div className="relative w-full h-[230px] rounded-xl overflow-hidden bg-black/50 border border-[#2F4BA2]/30 shadow-inner group-hover:shadow-[0_0_20px_rgba(233,71,245,0.2)] transition-all duration-500 z-10">
                            {/* Replace with actual image if available */}
                            {image ? (
                                <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-900 to-black">
                                    <span className="text-secondary text-lg">Project Preview</span>
                                </div>
                            )}
                        </div>

                        <div className="mt-5 relative z-10">
                            <h3 className="text-white font-bold text-[24px] leading-tight drop-shadow-md group-hover:text-[#E947F5] transition-colors transform group-hover:translate-x-2 duration-300">{name}</h3>
                            {subtitle && <p className="text-[#a0a0a0] text-[14px] font-semibold mt-1 tracking-wide group-hover:text-[#2F4BA2] transition-colors">{subtitle}</p>}
                            <p className="mt-2 text-gray-300 text-[14px] line-clamp-3 leading-relaxed">
                                Hover to reveal details...
                            </p>
                        </div>

                        {/* Decorative Neon Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F4BA2] via-[#E947F5] to-[#2F4BA2] opacity-70" />
                    </div>

                    {/* Back Face: Frosted Info Panel */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 rotate-y-180 flex flex-col justify-between bg-[#050505]/95 backdrop-blur-xl border border-[#E947F5]/30 shadow-[0_0_30px_rgba(233,71,245,0.15)] text-left overflow-y-auto custom-scrollbar">
                        <div>
                            <h3 className="text-white font-bold text-[20px] leading-tight mb-1">{name}</h3>
                            {subtitle && <p className="text-[#E947F5] text-[12px] font-semibold mb-3 uppercase tracking-wider">{subtitle}</p>}

                            {Array.isArray(description) ? (
                                <ul className="list-disc ml-4 space-y-2">
                                    {description.map((point, i) => (
                                        <li key={i} className="text-gray-300 text-[13px] leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-300 text-[14px] leading-relaxed">
                                    {description}
                                </p>
                            )}

                            <div className="mt-4 flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <p key={tag.name} className={`text-[12px] ${tag.color} px-2 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-[#E947F5]/50 transition-colors`}>
                                        #{tag.name}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                            <div
                                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 border border-[#2F4BA2]/50 hover:bg-[#2F4BA2] hover:border-[#2F4BA2] transition-all duration-300 group/icon hover:scale-110 shadow-[0_0_10px_rgba(47,75,162,0.4)]"
                            >
                                <Github className="w-1/2 h-1/2 object-contain text-white" />
                            </div>
                            {live_link && (
                                <div
                                    onClick={(e) => { e.stopPropagation(); window.open(live_link, "_blank"); }}
                                    className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 border border-[#E947F5]/50 hover:bg-[#E947F5] hover:border-[#E947F5] transition-all duration-300 group/icon hover:scale-110 shadow-[0_0_10px_rgba(233,71,245,0.4)]"
                                >
                                    <ExternalLink className="w-1/2 h-1/2 object-contain text-white" />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-20 w-full relative z-0" id="projects">
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto padding-x flex flex-col items-center"
            >
                <motion.div variants={textVariant()} className="text-center mb-16">
                    <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] uppercase tracking-wider">
                        My Works
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Projects
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
