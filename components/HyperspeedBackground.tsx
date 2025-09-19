"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Interface for the particles drawn on the canvas
interface CanvasParticle {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
  color: string;
}

// Interface for the animated motion.div particles
interface MotionParticle {
  id: number;
  x: number;
  y: number;
}

const HyperspeedBackground: React.FC = () => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Ref to store the canvas particles' data
  const particlesRef = useRef<CanvasParticle[]>([]);
  // Ref to store the animation frame ID
  const animationRef = useRef<number>();

  // State to hold the positions of the animated motion.div particles
  const [motionParticles, setMotionParticles] = useState<MotionParticle[]>([]);

  useEffect(() => {
    // --- CANVAS ANIMATION LOGIC ---
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

    // --- MOTION.DIV PARTICLES SETUP ---
    // This function is called on the client side to safely use `window`
    const createMotionParticles = () => {
      const count = 20;
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setMotionParticles(newParticles);
    };

    // Initial setup on component mount
    resizeCanvas();
    createParticles();
    createMotionParticles();
    animate();

    // Event listeners for window resize
    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createMotionParticles();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function for when the component unmounts
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

      {/* This section now maps over the state-managed particles,
          which are created safely on the client side. */}
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

// "use client"

// import type React from "react"
// import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"

// interface Particle {
//   x: number
//   y: number
//   z: number
//   speed: number
//   size: number
//   color: string
// }

// const HyperspeedBackground: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const particlesRef = useRef<Particle[]>([])
//   const animationRef = useRef<number>()

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     const createParticles = () => {
//       const particles: Particle[] = []
//       const particleCount = 150

//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           z: Math.random() * 1000,
//           speed: Math.random() * 2 + 0.5,
//           size: Math.random() * 2 + 1,
//           color: Math.random() > 0.7 ? "#FF0000" : "#FFC107",
//         })
//       }

//       particlesRef.current = particles
//     }

//     const animate = () => {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       particlesRef.current.forEach((particle, index) => {
//         // Move particle towards camera
//         particle.z -= particle.speed * 10

//         // Reset particle if it's too close
//         if (particle.z <= 0) {
//           particle.z = 1000
//           particle.x = Math.random() * canvas.width
//           particle.y = Math.random() * canvas.height
//         }

//         // Calculate 3D projection
//         const scale = 1000 / particle.z
//         const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2
//         const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2
//         const size2d = particle.size * scale

//         // Create trail effect
//         const prevScale = 1000 / (particle.z + particle.speed * 10)
//         const prevX = (particle.x - canvas.width / 2) * prevScale + canvas.width / 2
//         const prevY = (particle.y - canvas.height / 2) * prevScale + canvas.height / 2

//         // Draw trail
//         ctx.strokeStyle = particle.color
//         ctx.lineWidth = size2d
//         ctx.globalAlpha = 0.8
//         ctx.beginPath()
//         ctx.moveTo(prevX, prevY)
//         ctx.lineTo(x2d, y2d)
//         ctx.stroke()

//         // Draw particle
//         ctx.fillStyle = particle.color
//         ctx.globalAlpha = 1
//         ctx.beginPath()
//         ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2)
//         ctx.fill()
//       })

//       animationRef.current = requestAnimationFrame(animate)
//     }

//     resizeCanvas()
//     createParticles()
//     animate()

//     window.addEventListener("resize", () => {
//       resizeCanvas()
//       createParticles()
//     })

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current)
//       }
//       window.removeEventListener("resize", resizeCanvas)
//     }
//   }, [])

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       className="fixed inset-0 z-0 overflow-hidden"
//       style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)" }}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />

//       {/* Additional gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

//       {/* Animated particles for extra effect */}
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-primary rounded-full"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             scale: 0,
//           }}
//           animate={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//             scale: [0, 1, 0],
//           }}
//           transition={{
//             duration: Math.random() * 3 + 2,
//             repeat: Number.POSITIVE_INFINITY,
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}
//     </motion.div>
//   )
// }

// export default HyperspeedBackground
