const CleanBlackBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-black">
            {/* Subtle Texture/Noise opacity */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* Premium Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] pointer-events-none" />

            {/* Very subtle top gold glow */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[50%] bg-[#D4AF37] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        </div>
    );
};

export default CleanBlackBackground;
