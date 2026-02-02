const DigitalGridBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-black overflow-hidden perspective-grid-container">
            {/* Moving Grid Floor */}
            <div className="absolute inset-0 w-full h-[200%] top-[-50%] bg-grid-gold animate-grid-move transform-3d-grid opacity-30" />

            {/* Horizon Fade Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none" />
        </div>
    );
};

export default DigitalGridBackground;
