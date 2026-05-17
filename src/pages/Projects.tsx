import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Smartphone, Monitor, Palette, Megaphone } from "lucide-react";

import imgDigitalConsulting  from "@/assets/images/01-digital-consulting.svg";
import imgBrandStrategy      from "@/assets/images/02-brand-strategy.svg";
import imgAppDesign          from "@/assets/images/03-app-design.svg";
import imgWebDevelopment     from "@/assets/images/04-web-development.svg";
import imgMarketingCampaign  from "@/assets/images/05-marketing-campaign.svg";
import imgProductDesign      from "@/assets/images/06-product-design.svg";

type Category = "All" | "Web" | "Mobile" | "Design" | "Marketing";

interface Project {
  id: number;
  title: string;
  client: string;
  category: Exclude<Category, "All">;
  desc: string;
  image: string;
  tags: string[];
  result: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "FinEdge Dashboard",
    client: "FinEdge Corp",
    category: "Web",
    desc: "A full-scale SaaS financial analytics platform with real-time data, custom dashboards, and role-based access control.",
    image: imgDigitalConsulting,
    tags: ["React", "TypeScript", "REST API"],
    result: "+180% user engagement in Q1",
  },
  {
    id: 2,
    title: "Pulse Fitness App",
    client: "Pulse Health",
    category: "Mobile",
    desc: "Cross-platform fitness tracking app with AI-powered workout plans, wearable sync, and social challenges.",
    image: imgAppDesign,
    tags: ["React Native", "Firebase", "ML Kit"],
    result: "50K+ downloads in 3 months",
  },
  {
    id: 3,
    title: "Arcana Brand Identity",
    client: "Arcana Studios",
    category: "Design",
    desc: "Complete rebrand for a creative production studio — logo, typography, motion guidelines, and full brand book.",
    image: imgBrandStrategy,
    tags: ["Figma", "Illustrator", "After Effects"],
    result: "Brand recognition up 65%",
  },
  {
    id: 4,
    title: "NovaMart E-Commerce",
    client: "NovaMart",
    category: "Web",
    desc: "High-performance e-commerce platform with product configurator, multi-currency support, and headless CMS.",
    image: imgWebDevelopment,
    tags: ["Next.js", "Shopify", "Tailwind"],
    result: "Revenue +240% in 6 months",
  },
  {
    id: 5,
    title: "GreenGrow Ad Campaign",
    client: "GreenGrow Foods",
    category: "Marketing",
    desc: "Multi-channel performance marketing campaign across Google, Meta, and email that tripled organic reach and cut CPL by 40%.",
    image: imgMarketingCampaign,
    tags: ["Google Ads", "Meta Ads", "Email"],
    result: "CPL reduced by 40%",
  },
  {
    id: 6,
    title: "Velora Product Design",
    client: "Velora Cosmetics",
    category: "Design",
    desc: "Packaging design, product photography direction, and social media visual system for a luxury cosmetics launch.",
    image: imgProductDesign,
    tags: ["Photoshop", "Illustrator", "Brand System"],
    result: "Launch sold out in 48 hrs",
  },
  {
    id: 7,
    title: "MedConnect Patient Portal",
    client: "MedConnect",
    category: "Web",
    desc: "HIPAA-compliant patient management portal with appointment scheduling, teleconsult, and medical records access.",
    image: imgDigitalConsulting,
    tags: ["React", "Node.js", "PostgreSQL"],
    result: "35% reduction in no-shows",
  },
  {
    id: 8,
    title: "RideShare Driver App",
    client: "QuickRide",
    category: "Mobile",
    desc: "Real-time driver companion app with earnings tracking, route optimization, and in-app support — built in 10 weeks.",
    image: imgAppDesign,
    tags: ["React Native", "Google Maps API", "WebSocket"],
    result: "4.8★ rating on App Store",
  },
];

const categories: Category[] = ["All", "Web", "Mobile", "Design", "Marketing"];

const categoryIcons: Partial<Record<Category, React.ReactNode>> = {
  Web: <Monitor className="w-4 h-4" />,
  Mobile: <Smartphone className="w-4 h-4" />,
  Design: <Palette className="w-4 h-4" />,
  Marketing: <Megaphone className="w-4 h-4" />,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#110b17] pt-0">

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-black uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Home <span className="mx-2 text-white/50">»</span> Projects
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mobile-page-hero-title text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Projects & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Case Studies
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-white/70 max-w-3xl mx-auto"
          >
            Explore website, mobile app, branding, and marketing projects built to
            improve traffic, conversions, product adoption, and revenue.
          </motion.p>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.4)] scale-105"
                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(var(--primary),0.15)] transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110b17] via-[#110b17]/50 to-transparent" />

                    {/* Category badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/20 text-white text-xs font-black uppercase tracking-wider">
                      {project.category}
                    </span>

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-primary font-black uppercase tracking-widest text-xs mb-2">{project.client}</p>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3 leading-tight">{project.title}</h3>
                    <p className="text-white/60 text-sm font-medium leading-relaxed mb-5">{project.desc}</p>

                    {/* Result badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-black uppercase tracking-wider mb-5">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      {project.result}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 rounded-lg bg-white/10 text-white/50 text-xs font-black uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-16 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { num: "200+", label: "Projects Shipped" },
              { num: "150+", label: "Happy Clients" },
              { num: "4.9★", label: "Average Rating" },
              { num: "98%", label: "On-Time Delivery" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.num}</div>
                <div className="text-white/50 font-black uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]"
          >
            Your Project <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Could Be Next
            </span>
          </motion.h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto font-bold">
            Let's talk about what you want to build and how we can make it happen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105 transition-all"
            >
              <Link href="/contact">Start a Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
