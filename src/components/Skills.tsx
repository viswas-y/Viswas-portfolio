"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Database, Wrench, CheckCircle } from "lucide-react";

interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Experienced";
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend & Languages",
    icon: <Monitor className="w-4 h-4" />,
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Intermediate" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: <Server className="w-4 h-4" />,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
    ],
  },
  {
    id: "database",
    label: "Databases & CMS",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "SQLite", level: "Intermediate" },
      { name: "Sanity CMS", level: "Advanced" },
    ],
  },
  {
    id: "tools",
    label: "Dev Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-emerald/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-emerald bg-clip-text text-transparent">
              Arsenal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base"
          >
            A curated selection of languages, frameworks, databases, and design systems I build web apps with.
          </motion.p>
        </div>

        {/* Tabs Control */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-r from-accent-cyan/10 to-accent-emerald/10 border-accent-cyan text-white shadow-lg shadow-accent-cyan/5"
                    : "bg-zinc-900/40 border-white/5 text-zinc-400 hover:text-white hover:border-white/10"
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Grid */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {activeCategory?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle inner grid glow on card hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle className="w-4 h-4 text-accent-emerald opacity-60" />
                  </div>

                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
