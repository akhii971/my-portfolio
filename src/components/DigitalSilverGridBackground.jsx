import { useEffect, useRef } from "react";

const DigitalSilverGridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let offset = 0;
        const speed = 0.5;
        const gridSize = 40; // Size of grid squares

        const drawGrid = () => {
            ctx.fillStyle = "#000000"; // Pure black background
            ctx.fillRect(0, 0, width, height);

            // Create fading mask (vignette + horizon fade)
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "rgba(0,0,0,1)"); // Fade out at top (horizon)
            gradient.addColorStop(0.3, "rgba(0,0,0,0.8)");
            gradient.addColorStop(0.6, "rgba(0,0,0,0)"); // Visible grid in middle/bottom
            gradient.addColorStop(1, "rgba(0,0,0,0.3)"); // Slight fade at very bottom

            ctx.lineWidth = 1;
            // Silver color for lines with varying opacity based on depth
            // We will draw lines with perspective

            const horizonY = height * 0.3; // Horizon line height
            const bottomY = height;
            const fov = 300; // Field of view equivalent

            ctx.beginPath();

            // Vertical Lines (Perspective)
            // They converge to a vanishing point at center horizon
            const centerX = width / 2;
            const vanishingY = horizonY;

            // Number of vertical lines
            const numVLines = 40;
            const spacing = width / numVLines * 4; // Spread out at bottom

            for (let i = -numVLines; i <= numVLines; i++) {
                // Simple perspective: lines radiate from vanishing point
                // But we want a floor grid effect.
                // x at bottom = centerX + i * spacing
                // x at horizon = centerX

                ctx.strokeStyle = "rgba(192, 192, 192, 0.15)"; // Faint silver
                ctx.moveTo(centerX, vanishingY);
                ctx.lineTo(centerX + i * spacing * 10, bottomY);
            }
            ctx.stroke();

            // Horizontal Lines (Moving towards viewer)
            // y position increases exponentially to simulate depth

            offset = (offset + speed) % gridSize;

            for (let i = 0; i < 40; i++) {
                // Calculate y based on perspective (inverse z)
                // Simple approximation: linear steps in 3D space map to 1/z in 2D
                // scale = fov / (z + offset)

                const z = i * gridSize - offset;
                if (z < 1) continue;

                const scale = fov / z;
                const y = vanishingY + scale * 200; // 200 is arbitrary height scaling

                if (y > height) break;

                const alpha = Math.min(1, (y - vanishingY) / (height - vanishingY)); // Fade in as it gets closer

                ctx.beginPath();
                ctx.strokeStyle = `rgba(192, 192, 192, ${alpha * 0.3})`; // Silver
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Apply fade mask over the top to hide the vanishing point mess
            ctx.fillStyle = gradient;
            // We can't use fillStyle gradient for masking easily in 2D context like this without destination-in
            // Instead, we just draw a black overlay gradient
            const overlayGrad = ctx.createLinearGradient(0, 0, 0, height);
            overlayGrad.addColorStop(0, "#000000");
            overlayGrad.addColorStop(0.3, "rgba(0,0,0,0.9)");
            overlayGrad.addColorStop(0.5, "rgba(0,0,0,0)");

            ctx.fillStyle = overlayGrad;
            ctx.fillRect(0, 0, width, height);

            requestAnimationFrame(drawGrid);
        };

        const animate = () => {
            drawGrid();
        };

        requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] w-full h-full bg-black overflow-hidden pointer-events-none">
            {/* Subtle Silver Glow at top center (Vanishing Point) */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C0C0C0] opacity-[0.05] blur-[100px] rounded-full sm:w-[300px]" />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};

export default DigitalSilverGridBackground;
