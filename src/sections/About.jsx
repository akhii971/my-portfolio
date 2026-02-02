import { Suspense } from "react";
import { motion } from "framer-motion";


const About = () => {
    return (
        <section className="py-20 w-full relative z-0" id="about">
            <div className="max-w-7xl mx-auto padding-x flex flex-col items-center justify-center gap-10 overflow-hidden text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl"
                >
                    <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] uppercase tracking-wider">
                        Introduction
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-8">
                        Overview
                    </h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="show"
                        className="mt-4 text-gray-300 text-[18px] leading-[32px] mx-auto bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(47,75,162,0.1)] hover:border-[#2F4BA2]/30 transition-colors"
                    >
                        MERN Stack fresher with hands-on experience in developing full-stack web applications using <span className="text-[#E947F5] font-bold">MongoDB, Express.js, React.js, and Node.js</span>. Skilled in <span className="text-[#2F4BA2] font-bold">REST APIs, Redux Toolkit, and JWT authentication</span>. I am a quick learner who collaborates closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
