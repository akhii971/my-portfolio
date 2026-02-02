import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import logo from "../assets/logo-new.png";
import akhinesh from "../assets/akhinesh-hero-v3.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 3D Tilt Variant for Links
    const linkVariant = {
        hover: {
            scale: 1.1,
            rotateX: 10,
            rotateY: -10,
            color: "#E947F5",
            textShadow: "0 0 8px rgb(233, 71, 245)",
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-transparent backdrop-blur-sm" : "py-5 bg-transparent"
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
                <Link
                    to="/"
                    className="flex items-center gap-3 perspective-1000 group sm:flex-1"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {/* Profile Photo as Logo */}
                    <div className="relative w-12 h-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E947F5] to-[#2F4BA2] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <img src={akhinesh} alt="logo" className="relative w-full h-full object-cover rounded-full border border-white/20 grayscale hover:grayscale-0 brightness-110 contrast-110 group-hover:scale-105 transition-all duration-300" />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white text-[18px] font-bold cursor-pointer flex"
                    >
                        Akhinesh kv &nbsp;
                        <span className="sm:block hidden text-[#E947F5] drop-shadow-[0_0_5px_rgba(233,71,245,0.8)]">| Portfolio</span>
                    </motion.p>
                </Link>

                {/* Desktop Navigation */}
                {/* Desktop Navigation */}
                <ul className="list-none hidden sm:flex flex-row gap-8 items-center bg-transparent backdrop-blur-sm px-10 py-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(47,75,162,0.1)]">
                    {navLinks.map((nav, index) => (
                        <motion.li
                            key={nav.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            variants={linkVariant}
                            whileHover="hover"
                            className={`${active === nav.title ? "text-[#E947F5] font-bold" : "text-gray-300"
                                } text-[18px] font-medium cursor-pointer relative perspective-500`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                            {active === nav.title && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#E947F5] shadow-[0_0_10px_#E947F5]"
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <div className="hidden sm:flex flex-1 justify-end items-center">
                    <motion.div
                        whileHover={{ scale: 1.05, stroke: "#E947F5", rotateX: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="perspective-500"
                    >
                        <a href="https://wa.me/919188489295" target="_blank" rel="noopener noreferrer">
                            <button className="bg-transparent border border-[#E947F5] text-[#E947F5] hover:bg-[#E947F5] hover:text-white text-[14px] font-bold px-6 py-2 rounded-full shadow-[0_0_15px_rgba(233,71,245,0.3)] hover:shadow-[0_0_25px_rgba(233,71,245,0.6)] transition-all duration-300 relative overflow-hidden group">
                                <span className="relative z-10">Let's Connect</span>
                                <div className="absolute inset-0 bg-[#E947F5] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                            </button>
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <motion.div
                        whileTap={{ scale: 0.8, rotate: 90 }}
                        className={`w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <div className="relative w-6 h-4">
                            <span className={`absolute bg-[#E947F5] h-[2px] w-full rounded-full transition-all duration-300 ${toggle ? "top-1/2 -translate-y-1/2 rotate-45 shadow-[0_0_10px_#E947F5]" : "top-0"}`} />
                            <span className={`absolute bg-white h-[2px] w-full rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 ${toggle ? "opacity-0" : "opacity-100"}`} />
                            <span className={`absolute bg-[#2F4BA2] h-[2px] w-full rounded-full transition-all duration-300 ${toggle ? "top-1/2 -translate-y-1/2 -rotate-45 shadow-[0_0_10px_#2F4BA2]" : "bottom-0"}`} />
                        </div>
                    </motion.div>

                    {/* 3D Mobile Menu */}
                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ x: 100, opacity: 0, rotateY: -90 }}
                                animate={{ x: 0, opacity: 1, rotateY: 0 }}
                                exit={{ x: 100, opacity: 0, rotateY: -90 }}
                                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                className="p-6 bg-black/90 backdrop-blur-2xl absolute top-20 right-4 mx-4 my-2 min-w-[200px] z-50 rounded-2xl border border-[#E947F5]/30 shadow-[0_0_50px_rgba(233,71,245,0.2)] perspective-1000"
                            >
                                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-6">
                                    {navLinks.map((nav, index) => (
                                        <motion.li
                                            key={nav.id}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`font-poppins font-medium cursor-pointer text-[18px] w-full ${active === nav.title ? "text-[#E947F5] drop-shadow-[0_0_5px_#E947F5]" : "text-gray-300"
                                                }`}
                                            onClick={() => {
                                                setToggle(!toggle);
                                                setActive(nav.title);
                                            }}
                                        >
                                            <a href={`#${nav.id}`} className="block w-full hover:translate-x-2 transition-transform duration-300">{nav.title}</a>
                                        </motion.li>
                                    ))}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-1"
                                    />
                                    <a href="https://wa.me/919188489295" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <button className="w-full bg-[#1a1a1a] text-white text-[14px] font-bold px-4 py-3 rounded-xl border border-[#2F4BA2] shadow-[0_0_15px_rgba(47,75,162,0.3)] active:scale-95 transition-all">
                                            Contact Me
                                        </button>
                                    </a>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav >
    );
};

export default Navbar;
