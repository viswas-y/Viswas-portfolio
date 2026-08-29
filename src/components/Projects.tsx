"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Layers, Lock, ShieldCheck } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    title: "Kerala Houseboats Booking Platform",
    category: "Commercial Tourism Portal",
    description: "A production tourism booking portal simplifying reservations and client onboarding for houseboat operators in Kerala.",
    highlights: [
      "Dynamic reservation & date allocation funnel",
      "Interactive WhatsApp-integrated lead capture system",
      "100% Core Web Vitals optimization & lightning-fast loading speeds"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    liveUrl: "https://keralahouseboats.co.in",
    githubUrl: "https://github.com/viswas-y",
    isPrivate: true,
  },
  {
    title: "Master Pool Showcase Portal",
    category: "Commercial Showcase Website",
    description: "An elegant, high-conversion engineering portfolio and catalog showcasing premium swimming pool constructions.",
    highlights: [
      "Custom responsive media galleries and filterable projects catalog",
      "Direct inquiry collection form that boosts customer inquiries by 40%",
      "Structured SEO architecture with localized search optimizations"
    ],
    techStack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    liveUrl: "https://masterpool.in",
    githubUrl: "https://github.com/viswas-y",
    isPrivate: true,
  },
  {
    title: "Hospital Management & Appointment Engine",
    category: "Full-Stack System",
    description: "A conflict-free backend system and web scheduler built to coordinate patient slot bookings and doctor schedules.",
    highlights: [
      "Intelligent reservation engine preventing overlapping appointments",
      "Secure patient profiles database and visit record keeping",
      "Interactive RESTful APIs mapping slots to medical rosters"
    ],
    techStack: ["Python", "SQLite", "RESTful APIs", "Flask"],
    githubUrl: "https://github.com/viswas-y",
  },
  {
    title: "Hostel Dining & Meal Booking Tracker",
    category: "Full-Stack System",
    description: "An automated food booking manager for campus residences designed to map out meals and control resources.",
    highlights: [
      "Interactive meal pre-booking calendar and QR/account check-in",
      "Substantial decrease in food waste by mapping daily quantities",
      "Robust CRUD engine managing active student registers"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    githubUrl: "https://github.com/viswas-y",
  },
  {
    title: "AURA — Curated Tech & Lifestyle Essentials",
    category: "Commercial E-Commerce Storefront",
    description: "A premium shopping platform configured for high-performance product sorting, slick modern checkouts, and seamless UX transitions.",
    highlights: [
      "Dynamic catalog filters and reactive shopping cart flows",
      "Stunning, fluid product display grids optimized for mobile retention",
      "Robust client-side state mapping ensuring zero-delay actions"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://aura-7ucazow73-viswas-dev.vercel.app/",
    githubUrl: "https://github.com/viswas-y",
    isPrivate: true,
  },
  {
    title: "NOVARA — Premium Designer Essentials",
    category: "Luxury E-Commerce Platform",
    description: "A minimal, luxury brand showroom and designer merchandise portal built to prioritize premium visual aesthetics and high conversions.",
    highlights: [
      "Ultra-slick transitions and immersive card animations",
      "Seamless checkout funnel integration boosting sales capture",
      "Stunning layout adapter ensuring premium visual feel"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ecommerce-sale-gamma.vercel.app/",
    githubUrl: "https://github.com/viswas-y",
    isPrivate: true,
  },
  {
    title: "Ambalapuzha Temple Information Guide",
    category: "Cultural Blog & Guide",
    description: "An authentic, media-rich cultural portal and informational blog repository dedicated to the heritage archives of the Ambalapuzha Sree Krishna Temple.",
    highlights: [
      "Dynamic event timetable scheduler and notifications bulletin",
      "Optimized SEO performance with high localized search rankings",
      "Integrated asset pipeline loading rich imagery with zero visual lag"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://amabalapuzha.vercel.app/",
    githubUrl: "https://github.com/viswas-y",
    isPrivate: true,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Motion values to track mouse coordinate tilt offsets
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [7, -7]);
  const rotateY = useTransform(mouseX, [-300, 300], [-7, 7]);

  const springX = useSpring(rotateX, { damping: 25, stiffness: 200 });
  const springY = useSpring(rotateY, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden perspective-1000 cursor-default"
    >
      {/* Top light glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/15 to-transparent group-hover:via-accent-cyan/60 transition-all duration-500" />
      
      {/* Light glow aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div style={{ transform: "translateZ(20px)" }} className="transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-accent-cyan tracking-wider uppercase bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/10">
            {project.category}
          </span>
          
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              <Lock className="w-3 h-3" /> Private Repo
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-accent-emerald flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ transform: "translateZ(10px)" }}>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-400 bg-zinc-900/60 px-2.5 py-1 rounded-md border border-white/5 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-zinc-950 bg-gradient-to-r from-accent-cyan to-accent-emerald px-4 py-2 rounded-lg hover:opacity-90 transition-all hover:scale-102"
            >
              Live Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs md:text-sm font-semibold px-4 py-2 rounded-lg border transition-all ${
                project.isPrivate
                  ? "text-zinc-500 border-white/5 cursor-not-allowed hover:bg-transparent"
                  : "text-white border-white/10 hover:border-white/20 hover:bg-white/5 hover:scale-102"
              }`}
              onClick={(e) => project.isPrivate && e.preventDefault()}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              {project.isPrivate ? "Closed Source" : "Source Code"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-emerald/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-emerald bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base"
          >
            A showcase of production commercial platforms and full-stack software architectures deployed to solve real-world problems.
          </motion.p>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
