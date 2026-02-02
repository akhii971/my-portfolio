import { useEffect, useRef } from "react";

const GalacticSilverBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Star configuration
        const stars = [];
        const shootingStars = [];
        const starCount = 350; // Increased density for premium feel

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 0.5; // Depth factor
                this.size = Math.random() * 1.5;
                // Pure Silver/White colors only
                this.opacity = Math.random() * 0.5 + 0.3;
                this.velocity = Math.random() * 0.2 + 0.05;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleDir = 1;
            }

            update() {
                this.y -= this.velocity * this.z; // Move upwards

                // Twinkle effect
                this.opacity += this.twinkleSpeed * this.twinkleDir;
                if (this.opacity > 0.9 || this.opacity < 0.2) {
                    this.twinkleDir *= -1;
                }

                // Reset if out of bounds
                if (this.y < 0) {
                    this.y = height;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                ctx.beginPath();
                // Silver color: C0C0C0 => RGB(192, 192, 192)
                ctx.fillStyle = `rgba(220, 220, 220, ${this.opacity})`; // Brighter silver/white
                ctx.arc(this.x, this.y, this.size * this.z, 0, Math.PI * 2);
                // Premium Glow
                ctx.shadowBlur = 8;
                ctx.shadowColor = "rgba(192, 192, 192, 0.5)";
                ctx.fill();
                ctx.shadowBlur = 0; // Reset
            }
        }

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * (height / 2);
                this.length = Math.random() * 100 + 50; // Longer, more elegant
                this.speed = Math.random() * 10 + 8; // Faster
                this.angle = Math.PI / 4;
                this.active = false;
                this.timer = Math.random() * 300;
                this.opacity = 0;
            }

            update() {
                if (!this.active) {
                    if (this.timer-- <= 0) {
                        this.active = true;
                        this.x = Math.random() * width;
                        this.y = Math.random() * (height / 3);
                        this.opacity = 1;
                    }
                } else {
                    this.x += this.speed;
                    this.y += this.speed;
                    this.opacity -= 0.015;

                    if (this.opacity <= 0 || this.x > width || this.y > height) {
                        this.active = false;
                        this.timer = Math.random() * 600 + 200;
                    }
                }
            }

            draw() {
                if (!this.active) return;

                const endX = this.x - this.length * Math.cos(this.angle);
                const endY = this.y - this.length * Math.sin(this.angle);

                // Silver-White Gradient for Shooting Star
                const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
                gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
                gradient.addColorStop(0.5, "rgba(192, 192, 192, 0.8)");
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                ctx.stroke();
            }
        }

        // Initialize stars
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        // Initialize shooting stars
        for (let i = 0; i < 4; i++) {
            shootingStars.push(new ShootingStar());
        }

        const animate = () => {
            // Create trailing effect with pure black fade
            ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
            ctx.fillRect(0, 0, width, height);

            stars.forEach((star) => {
                star.update();
                star.draw();
            });

            shootingStars.forEach((star) => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

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
        <div className="fixed inset-0 z-[-1] w-full h-full bg-[#050505] overflow-hidden pointer-events-none">
            {/* Premium Grade Radial Gradient (Vignette) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)] opacity-80"></div>

            {/* Subtle Noise Texture for Realism */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* Silver Nebula Accents */}
            <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-[#C0C0C0] opacity-[0.05] blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-[#E5E5E5] opacity-[0.05] blur-[120px] rounded-full"></div>

            {/* Canvas for Animations */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen" />
        </div>
    );
};

export default GalacticSilverBackground;
