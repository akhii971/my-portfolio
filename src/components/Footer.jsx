import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-20 relative z-10 bg-primary border-t border-[Silver]/20">
            <div className="max-w-7xl mx-auto padding-x flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start">
                    <p className="text-white font-bold text-lg">Akhinesh KV</p>
                    <p className="text-secondary text-sm mt-1">MERN Stack Developer</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/akhii971" target="_blank" className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center hover:bg-[Silver] transition-colors cursor-pointer group">
                        <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/akhinesh-kv-3036ab375" target="_blank" className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center hover:bg-[Silver] transition-colors cursor-pointer group">
                        <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                <div className="text-secondary text-sm text-center md:text-right">
                    <p>&copy; 2026. All rights reserved.</p>
                    <p className="text-xs mt-1">Designed & Built by Akhinesh KV</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
