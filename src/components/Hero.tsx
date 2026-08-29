"use client";

import { useState, useEffect } from "react";
import { motion, Variants, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Mail, ArrowRight, Play, Terminal } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const targetText = "npm run dev";
  
  // Typewriter effect simulation for terminal prompt
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < targetText.length) {
        setTypedText((prev) => prev + targetText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // 3D Tilt motion tracking variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);
  
  const springX = useSpring(rotateX, { damping: 20, stiffness: 150 });
  const springY = useSpring(rotateY, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative min-h-screen pt-28 md:pt-36 flex items-center justify-center overflow-hidden bg-dot-pattern">
      {/* Animated glowing bubbles in background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-cyan/15 rounded-full filter blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-accent-emerald/10 rounded-full filter blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Headline and actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 mb-6 hover:border-white/10 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-zinc-300 tracking-wide uppercase">
              Available for Full-Time & Remote Roles
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6"
          >
            Building Scalable{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-cyan-400 to-accent-emerald bg-clip-text text-transparent">
              Web Apps
            </span>{" "}
            & Digital Experiences
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8"
          >
            Hey, I'm <strong className="text-white font-semibold">Viswas Y</strong>, a Full-Stack Developer specializing in Next.js, TypeScript, Node.js, and Python. Turning complex ideas into responsive, production-ready web platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 text-sm font-semibold rounded-xl text-zinc-950 bg-gradient-to-r from-accent-cyan to-accent-emerald hover:opacity-95 shadow-lg shadow-accent-cyan/15 hover:shadow-accent-cyan/25 hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 text-sm font-semibold rounded-xl text-white glass hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/viswas-y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white hover:scale-115 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white hover:scale-115 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:ambadyviswas7@gmail.com"
              className="text-zinc-500 hover:text-white hover:scale-115 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Code Terminal Graphic with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          className="lg:col-span-5 relative perspective-1000"
        >
          {/* Glowing backplate glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/15 to-accent-emerald/5 rounded-2xl filter blur-xl opacity-60 -z-10 animate-pulse" />
          
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
            className="w-full glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative cursor-default"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                profile.ts
              </span>
              <div className="w-12" />
            </div>

            {/* Content */}
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="p-6 font-mono text-sm leading-relaxed text-zinc-300 overflow-x-auto bg-zinc-950/40"
            >
              <div>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-zinc-400">=</span>{" "}
                <span className="text-zinc-100">&#123;</span>
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">name:</span>{" "}
                <span className="text-emerald-400">"Viswas Y"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">role:</span>{" "}
                <span className="text-emerald-400">"Full-Stack Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">location:</span>{" "}
                <span className="text-emerald-400">"Kerala, India"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">stack:</span>{" "}
                <span className="text-zinc-100">[</span>
              </div>
              <div className="pl-8">
                <span className="text-emerald-400">"Next.js"</span>,{" "}
                <span className="text-emerald-400">"TypeScript"</span>,
              </div>
              <div className="pl-8">
                <span className="text-emerald-400">"Node.js"</span>,{" "}
                <span className="text-emerald-400">"Python"</span>
              </div>
              <div className="pl-4">
                <span className="text-zinc-100">]</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">focus:</span>{" "}
                <span className="text-emerald-400">"High performance & clean UX"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">hireable:</span>{" "}
                <span className="text-amber-500">true</span>
              </div>
              <div>
                <span className="text-zinc-100">&#125;;</span>
              </div>
              
              {/* Typewriter Prompt */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-zinc-500">
                <Play className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-accent-cyan">~</span>
                <span className="text-zinc-200">
                  {typedText}
                  <span className="animate-ping ml-0.5 font-bold">|</span>
                </span>
              </div>
              
              <div className="text-xs text-zinc-500 mt-1">
                - ready in 45ms
                <br />- local: http://localhost:3000
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
