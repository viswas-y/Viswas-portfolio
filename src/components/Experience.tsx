"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  points?: string[];
}

const workExperience: TimelineItem[] = [
  {
    title: "Freelance Full-Stack Developer",
    subtitle: "Self-Employed / Remote",
    date: "2023 – Present",
    description: "Architecting, developing, and deploying full-stack web applications for clients across tourism, services, and scheduling domains.",
    points: [
      "Custom integration of Sanity CMS to facilitate customer self-management portals",
      "Designing responsive interfaces and fluid animations using React, Next.js, and Tailwind CSS",
      "Deploying scalable, reliable RESTful APIs, securing databases, and managing domains"
    ],
  },
];

const educationItems: TimelineItem[] = [
  {
    title: "Diploma in Computer Engineering",
    subtitle: "State Board of Technical Education, Kerala",
    date: "Graduated",
    description: "Core technical curriculum covering algorithms, data structures, database engines, computer architectures, and software design principles.",
  },
];

const certificationItems: TimelineItem[] = [
  {
    title: "Python Full-Stack Engineering",
    subtitle: "Professional Certificate",
    date: "Credentialed",
  },
  {
    title: "PHP & Laravel Development",
    subtitle: "Professional Certificate",
    date: "Credentialed",
  },
  {
    title: "Modern Next.js & Node.js Development",
    subtitle: "Professional Certificate",
    date: "Credentialed",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background soft lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-emerald/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
          >
            Experience &{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-accent-emerald bg-clip-text text-transparent">
              Background
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base"
          >
            My professional history, academic foundation, and technical milestones.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20">
                <Briefcase className="w-5 h-5 text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-zinc-800 relative">
              {workExperience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Glowing Node */}
                  <span className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-accent-cyan border-4 border-zinc-950 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />

                  <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-accent-cyan">
                          {item.title}
                        </h4>
                        <span className="text-sm text-zinc-400 font-medium">
                          {item.subtitle}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded-full font-mono border border-accent-cyan/10">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    {item.description && (
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                    )}

                    {item.points && (
                      <ul className="space-y-2">
                        {item.points.map((pt, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-zinc-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-1.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="flex flex-col gap-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20">
                  <GraduationCap className="w-5 h-5 text-accent-emerald" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8 pl-4 border-l-2 border-zinc-800 relative">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Glowing Node */}
                    <span className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-accent-emerald border-4 border-zinc-950 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />

                    <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-zinc-400 font-medium">
                            {item.subtitle}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-accent-emerald bg-accent-emerald/10 px-2.5 py-1 rounded-full font-mono border border-accent-emerald/10">
                          {item.date}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {certificationItems.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass-card p-4 rounded-xl flex items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white">
                        {cert.title}
                      </h4>
                      <span className="text-xs text-zinc-400">{cert.subtitle}</span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/10 px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
