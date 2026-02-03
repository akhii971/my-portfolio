import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const TypingText = ({ texts }) => {
    const [textIndex, setTextIndex] = useState(0);
    const baseText = useMotionValue("");
    const rounded = useTransform(baseText, (latest) => latest);
    const display = useTransform(rounded, (latest) => texts[textIndex].slice(0, Math.round(latest)));

    // This implementation is a bit tricky with just motion values for typing strings. 
    // A simpler useEffect approach works better for typing strings.

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        const speed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && displayedText === currentText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            } else {
                setDisplayedText(currentText.substring(0, displayedText.length + (isDeleting ? -1 : 1)));
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, texts]);

    return (
        <span
            className={`font-bold inline-block text-white `}
        >
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                className="inline-block w-[10px] h-[1em] bg-[#45caff] ml-1 align-middle rounded-sm"
            />
        </span>
    );
};

export default TypingText;
