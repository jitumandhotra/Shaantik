import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { animate } from "framer-motion";
import {
  Award, Users, Rocket, Code2, Target, Lightbulb,
  Heart, Shield, CheckCircle, ArrowRight,
} from "lucide-react";

import hqImage from "@/assets/images/shaantik-expertise.svg";
import imgStrategyIllustration from "@/assets/images/strategy_illustration.png";
import imgDeliveryIllustration from "@/assets/images/delivery_illustration.png";

const stats = [
  { number: 200, suffix: "+", label: "Projects Delivered",  icon: <Rocket className="w-8 h-8 text-primary" />,   color: "#fb7185" },
  { number: 150, suffix: "+", label: "Happy Clients",       icon: <Users  className="w-8 h-8 text-secondary" />, color: "#fdba74" },
  { number: 8,   suffix: "+", label: "Years of Excellence", icon: <Award  className="w-8 h-8 text-accent" />,    color: "#bef264" },
  { number: 15,  suffix: "+", label: "Team Members",        icon: <Code2  className="w-8 h-8 text-blue-400" />, color: "#93c5fd" },
];

const values = [
  {
    icon: Target,
    title: "Results-First",
    desc: "Every decision is anchored in your business outcomes. We track metrics that matter — traffic, conversions, revenue, and growth.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of the curve so you don't have to. From cutting-edge frameworks to AI-powered marketing — we bring the future to your brand.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    desc: "We treat every project like our own business. The attention to detail, the polish, the care — it shows in everything we ship.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Transparency",
    desc: "No hidden fees. No vague timelines. You'll always know exactly where your project stands and why every decision was made.",
    color: "blue",
  },
];

const team = [
  { name: "Ahmad Hassan",    role: "Founder & CEO",         expertise: "Product Strategy & Vision",   initial: "A" },
  { name: "Sarah Chen",     role: "Lead Designer",          expertise: "UX/UI & Brand Identity",      initial: "S" },
  { name: "Marcus Rivera",  role: "Head of Engineering",    expertise: "Full-Stack & Mobile Dev",     initial: "M" },
  { name: "Priya Nair",     role: "Marketing Director",     expertise: "Growth & Performance",        initial: "P" },
  { name: "James Okoro",    role: "Project Manager",        expertise: "Delivery & Client Success",   initial: "J" },
  { name: "Layla Mahmoud",  role: "Creative Director",      expertise: "Motion & Visual Design",      initial: "L" },
];

const colorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  blue: "text-blue-400",
};
const bgMap: Record<string, string> = {
  primary: "bg-primary/20",
  secondary: "bg-secondary/20",
  accent: "bg-accent/20",
  blue: "bg-blue-500/20",
};

function NumberRollup({ endValue, suffix }: { endValue: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(0, endValue, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.floor(v)),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [endValue]);

  return <span ref={nodeRef}>{value}{suffix}</span>;
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#110b17] pt-0">

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img src={hqImage} alt="Background" className="w-full h-full object-cover opacity-10 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110b17]/80 via-[#110b17]/60 to-[#110b17]" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Home <span className="mx-2 text-white/50">»</span> About Us
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
          >
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Shaantik
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-white/70 max-w-3xl mx-auto"
          >
            A full-service digital agency on a mission to build powerful digital
            experiences that drive real business growth.
          </motion.p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8 text-lg md:text-xl text-white/80 font-medium leading-relaxed">
            <p>
              Shaantik was founded with a single conviction: great digital work should drive real
              business results, not just look impressive. Too many agencies deliver beautiful
              websites that don't convert, ad campaigns that burn budget, and apps that miss the
              mark. We built Shaantik to be different.
            </p>
            <p>
              From our earliest projects, we established a results-first culture — every design
              decision, every line of code, every marketing strategy is tied back to measurable
              business outcomes. Our clients don't pay for hours; they invest in growth.
            </p>
            <p>
              Today, we're a 15-member team of strategists, designers, engineers, and marketers
              who have shipped over 200 projects across four service lines: web development,
              mobile app development, digital marketing, and brand & graphic design. We work with
              startups, SMEs, and established brands across diverse industries — from healthcare
              and finance to retail and real estate.
            </p>
            <p>
              Whether you need a lightning-fast e-commerce platform, a cross-platform mobile app,
              a performance marketing engine, or a complete brand identity — Shaantik is built to
              deliver, on time and beyond expectation.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div
                  className="text-4xl md:text-5xl font-black tracking-tighter mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(to bottom right, #fff, ${stat.color})` }}
                >
                  <NumberRollup endValue={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 font-black uppercase tracking-[0.15em] text-xs flex items-center gap-1">
                  <span className="w-4 h-[2px] bg-white/20" />
                  {stat.label}
                  <span className="w-4 h-[2px] bg-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            >
              What We <span className="text-primary">Stand For</span>
            </motion.h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The principles that guide how we work, what we build, and how we show up for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${bgMap[val.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${colorMap[val.color]}`} />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">{val.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed text-sm">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURE ROWS ── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={imgStrategyIllustration}
                  alt="Strategy before execution"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110b17]/80 via-[#110b17]/30 to-transparent" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                Strategy Before <span className="text-primary">Execution</span>
              </h3>
              <p className="text-xl text-white/70 font-bold leading-relaxed">
                Every project starts with deep discovery. We learn your market, your competitors,
                and your audience before a single pixel is placed or a line of code is written.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  "Deep-dive discovery sessions",
                  "Competitive landscape analysis",
                  "User journey mapping",
                  "KPI framework definition",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-bold">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={imgDeliveryIllustration}
                  alt="Reliable delivery"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110b17]/80 via-[#110b17]/30 to-transparent" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                Delivery You Can <span className="text-secondary">Count On</span>
              </h3>
              <p className="text-xl text-white/70 font-bold leading-relaxed">
                No ghosting. No missed deadlines. We run structured sprints, keep you in the loop
                every step of the way, and ship when we say we will.
              </p>
              <ul className="space-y-3 text-left">
                {[
                  "Agile sprint cycles",
                  "Weekly progress updates",
                  "Dedicated project manager",
                  "Zero-surprise billing",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-bold">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-black/30 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            >
              Meet The <span className="text-accent">Team</span>
            </motion.h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The people behind every pixel, every campaign, and every breakthrough result.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-black mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                  {member.initial}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-1">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">{member.role}</p>
                <p className="text-white/50 text-sm font-medium">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]"
          >
            Ready To Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Something Great?
            </span>
          </motion.h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto font-bold">
            Let's talk about your project, your goals, and how we can get you there.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105 transition-all"
            >
              <Link href="/contact">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
