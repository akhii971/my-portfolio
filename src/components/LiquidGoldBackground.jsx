const LiquidGoldBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden bg-black">
            <div className="absolute inset-0 w-full h-full opacity-60">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-liquid-flow bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-[#3a2e05]/40 to-black/80 blur-3xl rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] animate-liquid-flow-reverse bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8B6508]/20 via-[#1a1710]/40 to-black/80 blur-3xl rounded-full mix-blend-screen" />
            </div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
    );
};

export default LiquidGoldBackground;
