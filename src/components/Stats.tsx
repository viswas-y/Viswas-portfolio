"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Server, Star } from "lucide-react";

interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: "4+",
    label: "Production & Client Apps",
    description: "Deployed commercial portals and custom client systems.",
    icon: <Server className="w-5 h-5 text-accent-cyan" />,
  },
  {
    id: 2,
    value: "100%",
    label: "Mobile & SEO Optimization",
    description: "Built for speed, user-friendliness, and ranking signals.",
    icon: <CheckCircle2 className="w-5 h-5 text-accent-emerald" />,
  },
  {
    id: 3,
    value: "Next.js",
    label: "Core Architecture Focus",
    description: "Expertise in full-stack architecture & headless CMS systems.",
    icon: <Star className="w-5 h-5 text-amber-400" />,
  },
];

export default function Stats() {
  return (
    <section className="py-12 relative overflow-hidden bg-zinc-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 glass-card rounded-2xl relative overflow-hidden"
            >
              {/* Icon Holder */}
              <div className="p-3 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                {stat.icon}
              </div>

              {/* Text contents */}
              <div className="flex-1">
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
