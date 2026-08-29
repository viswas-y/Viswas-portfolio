import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-accent-cyan/30 selection:text-white">
      {/* Interactive Background Grid Layer */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none z-0" />
      
      {/* Sticky Navigation bar */}
      <Navbar />

      <main className="flex-1 w-full relative z-10">
        {/* About & Hero Section */}
        <Hero />

        {/* Impact strip */}
        <Stats />

        {/* Skills Section */}
        <Skills />

        {/* Featured Projects Grid */}
        <Projects />

        {/* Experience Timeline */}
        <Experience />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
