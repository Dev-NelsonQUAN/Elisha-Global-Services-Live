"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CanvasParticle {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
  color: string;
}

interface MotionParticle {
  id: number;
  x: number;
  y: number;
}

const HyperspeedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CanvasParticle[]>([]);
  const animationRef = useRef<number>();

  const [motionParticles, setMotionParticles] = useState<MotionParticle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: CanvasParticle[] = [];
      const particleCount = 150;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          speed: Math.random() * 2 + 0.5,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.7 ? "#FF0000" : "#FFC107",
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.z -= particle.speed * 10;

        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        const scale = 1000 / particle.z;
        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const size2d = particle.size * scale;

        const prevScale = 1000 / (particle.z + particle.speed * 10);
        const prevX = (particle.x - canvas.width / 2) * prevScale + canvas.width / 2;
        const prevY = (particle.y - canvas.height / 2) * prevScale + canvas.height / 2;

        ctx.strokeStyle = particle.color;
        ctx.lineWidth = size2d;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x2d, y2d);
        ctx.stroke();

        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const createMotionParticles = () => {
      const count = 20;
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setMotionParticles(newParticles);
    };

    resizeCanvas();
    createParticles();
    createMotionParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createMotionParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      {motionParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default HyperspeedBackground;