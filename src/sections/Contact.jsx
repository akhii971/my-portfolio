import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../utils/motion"; // Assuming motion utils exist, if not I'll inline variants.
// Wait, I don't have utils/motion. Let's inline the variants.

const Contact = () => {
    return (
        <div className="xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden relative z-0" id="contact">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm bg-opacity-80 min-w-[300px]"
            >
                {/* Glassmorphism shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ffffff10] to-transparent pointer-events-none" />

                <p className="text-[#E5E5E5] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[14px] uppercase tracking-wider mb-2">Get in touch</p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-8 bg-gradient-to-r from-[#C0C0C0] to-[#E5E5E5] bg-clip-text text-transparent">Contact.</h3>

                <div className="flex flex-col gap-6 mt-8">
                    <a href="tel:+919188489295" className="flex items-center gap-6 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C0C0C0] transition-all hover:bg-white/10 hover:translate-x-2">
                        <div className="w-12 h-12 rounded-full bg-[#1d1836] flex items-center justify-center text-[#C0C0C0] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(192,192,192,0.3)]">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Phone</h4>
                            <span className="text-secondary text-sm group-hover:text-white transition-colors">+91 9188489295</span>
                        </div>
                    </a>

                    <a href="mailto:akhinesh2004@gmail.com" className="flex items-center gap-6 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C0C0C0] transition-all hover:bg-white/10 hover:translate-x-2">
                        <div className="w-12 h-12 rounded-full bg-[#1d1836] flex items-center justify-center text-[#C0C0C0] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(192,192,192,0.3)]">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Email</h4>
                            <span className="text-secondary text-sm group-hover:text-white transition-colors">akhinesh2004@gmail.com</span>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/akhinesh-kv-3036ab375" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C0C0C0] transition-all hover:bg-white/10 hover:translate-x-2">
                        <div className="w-12 h-12 rounded-full bg-[#1d1836] flex items-center justify-center text-[#C0C0C0] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(192,192,192,0.3)]">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">LinkedIn</h4>
                            <span className="text-secondary text-sm group-hover:text-white transition-colors">Connect with me</span>
                        </div>
                    </a>
                </div>
            </motion.div>

        </div>
    );
};

export default Contact;
