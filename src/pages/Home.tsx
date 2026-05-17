import { motion, useScroll, useTransform, animate, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useRef, useEffect } from "react";
import {
  Star, Flame, Handshake,
  Shield, Settings, MapPin, CheckCircle, Instagram, Facebook,
  Twitter, Youtube, Bell, ArrowRight, Smartphone, Megaphone,
  Palette, Monitor, Code2, Lightbulb, Rocket, Users, Search
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { servicePages } from "@/data/servicePages";

// Asset Imports
import hqImage from "@/assets/images/shaantik-expertise.svg";

import logo from "@assets/shaantik_logo.png";

// Social / Work Images
import imgDigitalConsulting from "@/assets/images/01-digital-consulting.svg";
import imgBrandStrategy from "@/assets/images/02-brand-strategy.svg";
import imgAppDesign from "@/assets/images/03-app-design.svg";
import imgWebDevelopment from "@/assets/images/04-web-development.svg";
import imgMarketingCampaign from "@/assets/images/05-marketing-campaign.svg";
import imgProductDesign from "@/assets/images/06-product-design.svg";
// How We Work Images
import hww01 from "@/assets/images/hww-01-discovery-strategy.svg";
import hww02 from "@/assets/images/hww-02-design-prototype.svg";
import hww03 from "@/assets/images/hww-03-build-test.svg";
import hww04 from "@/assets/images/hww-04-launch-grow.svg";
// Marquee gallery images
const social1 = imgDigitalConsulting;
const social2 = imgBrandStrategy;
const social3 = imgAppDesign;
const social4 = imgWebDevelopment;
const social5 = imgMarketingCampaign;
const social6 = imgProductDesign;


const serviceIconMap = {
  web: Monitor,
  app: Smartphone,
  marketing: Megaphone,
  seo: Search,
  design: Palette,
  devops: Code2,
  ai: Rocket,
  salesforce: Users,
};

const services = servicePages.map((service) => ({
  id: service.id,
  slug: service.slug,
  name: service.title,
  desc: service.subtitle,
  icon: serviceIconMap[service.id as keyof typeof serviceIconMap] ?? Monitor,
}));

const clientReviews = [
  { name: "Sarah K.", title: "Best agency we've worked with!", text: "Shaantik transformed our digital presence completely. Our website traffic tripled within 3 months and conversions are through the roof.", rating: 5, date: "Jan 12, 2025" },
  { name: "David R.", title: "Exceptional mobile app delivery", text: "The team delivered our app ahead of schedule with zero bugs. Communication was flawless throughout. Highly recommend!", rating: 5, date: "Feb 24, 2025" },
  { name: "Priya M.", title: "Outstanding brand redesign", text: "Our rebrand felt scary, but Shaantik made it seamless. The new identity perfectly captures who we are. Clients love it.", rating: 5, date: "Mar 05, 2025" },
  { name: "James L.", title: "ROI we didn't expect this fast", text: "We hit our 6-month marketing targets in just 8 weeks. The strategy they built was sharp, targeted, and executed perfectly.", rating: 5, date: "Jan 30, 2025" },
  { name: "Aisha B.", title: "Creative & reliable team", text: "Every design they produce is stunning. They understand brand voice better than any agency I've worked with in 10 years.", rating: 5, date: "Feb 10, 2025" },
  { name: "Carlos T.", title: "Web dev that actually converts", text: "Not just a beautiful site — it's a sales machine. Bounce rate dropped 40%, leads up 65%. That's Shaantik's work.", rating: 5, date: "Mar 15, 2025" },
  { name: "Emma W.", title: "Top-tier digital partner", text: "What sets Shaantik apart is their strategic thinking. They don't just execute — they help you think bigger.", rating: 5, date: "Feb 02, 2025" },
  { name: "Raj P.", title: "On-time, on-budget, beyond expectations", text: "Three projects in a row, delivered perfectly. They're now our go-to agency for everything digital.", rating: 5, date: "Jan 20, 2025" },
];


const NumberRollup = ({ endValue, suffix }: { endValue: number; suffix: string }) => {
  const [value, setValue] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(0, endValue, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate: (latest) => setValue(Math.floor(latest)),
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <span ref={nodeRef} className="flex items-center">
      {value}{suffix}
    </span>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Project Estimator State
  const [projectType, setProjectType] = useState(3);
  const [teamSize, setTeamSize] = useState(3);
  const [timeline, setTimeline] = useState(3);
  const [budget, setBudget] = useState(5);

  const baseRate = 2000;
  const projectMultiplier = projectType / 5;
  const teamMultiplier = teamSize / 5;
  const budgetMultiplier = budget / 5;

  const estimatedCost = Math.round(baseRate * projectMultiplier * teamMultiplier * timeline * budgetMultiplier * 10);
  const monthlyValue = Math.round(estimatedCost * 1.4);
  const yearlyValue = Math.round(estimatedCost * 8);
  const roiMultiplier = (budgetMultiplier * 3 + 1).toFixed(1);

  const chartData = [
    { name: "Month 1", Value: Math.floor(estimatedCost * 0.8) },
    { name: "Month 3", Value: Math.floor(estimatedCost * 2.2) },
    { name: "Month 6", Value: Math.floor(monthlyValue * 3) },
    { name: "Year 1", Value: Math.floor(yearlyValue) },
  ];

  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're in!",
      description: "We'll send you our latest insights and project updates.",
    });
    setEmail("");
  };

  const SERVICE_COLORS: Record<string, string> = {
    web: "rgba(99, 102, 241, 0.35)",
    app: "rgba(249, 115, 22, 0.35)",
    marketing: "rgba(236, 72, 153, 0.35)",
    design: "rgba(132, 204, 22, 0.3)",
    devops: "rgba(56, 189, 248, 0.3)",
    ai: "rgba(34, 197, 94, 0.28)",
    salesforce: "rgba(59, 130, 246, 0.3)",
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen w-full overflow-hidden bg-background">

      {/* ── SECTION 1: HERO ── */}
      <section className="shaantik-home-hero relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="absolute inset-0 z-0 bg-black">
          <video autoPlay loop muted playsInline src="/home-hero.mp4" className="w-full h-full object-cover" />
        </div>

        <motion.div
          className="shaantik-home-hero-content relative z-20 container mx-auto px-4 flex flex-col items-start text-left justify-end pb-32 h-full"
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="mb-4 inline-flex items-center rounded-full border-2 border-white/30 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-bold text-white uppercase tracking-widest"
          >
            <Flame className="w-4 h-4 mr-2 text-secondary animate-pulse" />
            Creative Digital Agency
          </motion.div>

          <h1 className="text-5xl md:text-[6rem] font-black text-white leading-[0.85] tracking-tighter uppercase">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">Creative</span><br />
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-muted to-primary text-glow">Agency</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 font-bold max-w-2xl">
            We craft high-performance websites, engaging brands, and growth marketing that drives measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-start">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-black bg-primary hover:bg-primary/80 text-white border-0 transition-colors">
              <Link href="/#projects">View Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-black border-2 border-white text-white hover:bg-white hover:text-foreground transition-colors">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Scrolling Ticker */}
        <div
          className="absolute bottom-0 w-full overflow-hidden py-4 border-y-4 border-white/30 z-30 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, #ff0018, #ffa52c, #ffff41, #008018, #0000f9, #86007d, #ff0018)", backgroundSize: "200% auto" }}
        >
          <motion.div
            className="whitespace-nowrap flex gap-8 text-2xl md:text-3xl font-black text-white uppercase tracking-widest"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center">
                <span className="text-yellow-300 mr-8">✦</span>
                CREATIVE STRATEGY
                <span className="text-yellow-300 mx-8">✦</span>
                PIXEL-PERFECT DESIGN
                <span className="text-yellow-300 mx-8">✦</span>
                SCALABLE DEVELOPMENT
                <span className="text-yellow-300 mx-8">✦</span>
                RESULTS-DRIVEN MARKETING
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES ── */}
      <section id="services" className="relative py-32 bg-[#F8F5F1] overflow-hidden transition-colors duration-700">
        <div className="absolute top-0 inset-x-0 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAsMCBWNDZDMjAwLDM5LjYgNDAwLDQwLjQgNjAwLDQ4QzgwMCw1NS42IDEwMDAsNzAuNCAxMjAwLDgwaDRDMTIwMCw4MCAxMjAwLDAgMTIwMCwwWiIgZmlsbD0iIzAwMCI+PC9wYXRoPjwvc3ZnPg==')] bg-[#F8F5F1] bg-repeat-x -mt-16 z-20 w-[200%] animate-[wave_10s_linear_infinite] opacity-20" style={{ backgroundSize: "1200px 100%" }} />

        <AnimatePresence>
          {hoveredService && (
            <motion.div
              key="service-hover-bg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply"
              style={{ background: `radial-gradient(circle at 50% 50%, ${SERVICE_COLORS[hoveredService]} 0%, transparent 70%)` }}
            />
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-3">What We Provide</div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
              We Always Deliver Best<br className="hidden md:block" /> Service For Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="w-full"
                >
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="relative p-8 rounded-3xl border shadow-xl transition-all duration-300 bg-white text-foreground border-black/10 hover:-translate-y-1 group">
                      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-300 to-pink-400 mix-blend-normal" />
                      <div className="relative">
                        <div className="mx-auto -mt-16 mb-6 w-20 h-20 rounded-full grid place-items-center shadow-lg bg-gradient-to-br from-orange-400 to-pink-500 text-white group-hover:bg-white/20 relative z-10">
                          <Icon className="w-9 h-9 text-white" />
                        </div>
                        <div className="relative z-10 text-center font-black text-lg text-foreground group-hover:text-white">
                          {service.name.split(" ").length > 1 ? (
                            <><div>{service.name.split(" ").slice(0, -1).join(" ")}</div><div>{service.name.split(" ").slice(-1)}</div></>
                          ) : (
                            <div>{service.name}</div>
                          )}
                        </div>
                        <p className="relative z-10 mt-4 text-center text-sm leading-relaxed text-foreground/70 group-hover:text-white/90">{service.desc}</p>
                        <div className="relative z-10 mt-6 flex justify-center">
                          <div className="w-8 h-8 rounded-full grid place-items-center bg-foreground/5 text-foreground group-hover:bg-white/25 group-hover:text-white">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BUILT WITH REAL EXPERTISE ── */}
      <section className="relative py-32 overflow-hidden bg-background">
        <div
          className="absolute inset-0 z-0 opacity-15 pointer-events-none animate-bg-scroll"
          style={{ backgroundImage: `url(${logo})`, backgroundSize: "400px auto", backgroundRepeat: "repeat" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[80vh]"
            >
              <img src={hqImage} alt="Shaantik Studio" className="w-full h-full object-cover" />
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase leading-[0.9]">
                  Built With <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Real</span> Expertise
                </h2>
                <p className="text-lg md:text-xl text-foreground/70 font-bold border-l-4 border-primary pl-4 py-1">
                  Since day one, Shaantik has blended strategy and creativity. From conversion-focused websites to full-scale brand identities, every project delivers authentic, measurable impact.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Strategic Thinking", desc: "Every project starts with deep research and a clear strategy aligned to your business goals.", icon: Lightbulb, color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20", textColor: "text-pink-500", borderColor: "border-pink-500/50" },
                  { title: "Rapid Execution", desc: "We move fast without cutting corners — delivering quality work on time, every time.", icon: Rocket, color: "from-orange-400 to-red-500", shadow: "shadow-orange-500/20", textColor: "text-orange-500", borderColor: "border-orange-500/50" },
                  { title: "Scalable Solutions", desc: "Everything we build is engineered to grow with your business, not hold it back.", icon: Code2, color: "from-green-400 to-emerald-600", shadow: "shadow-green-500/20", textColor: "text-green-500", borderColor: "border-green-500/50" },
                  { title: "Dedicated Support", desc: "24/7 support and ongoing collaboration — we're your long-term digital partner.", icon: Handshake, color: "from-purple-500 to-indigo-600", shadow: "shadow-purple-500/20", textColor: "text-purple-500", borderColor: "border-purple-500/50" },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                    className="group relative p-6 rounded-[1.5rem] bg-zinc-950 overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <feature.icon className={`absolute -right-2 -bottom-2 w-24 h-24 ${feature.textColor} opacity-5 group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500 group-hover:scale-110`} />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 transition-all duration-300 shadow-lg`}>
                        <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-black uppercase mb-2 ${feature.textColor} drop-shadow-md tracking-wide`}>{feature.title}</h3>
                      <p className="text-white/70 font-medium text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors">{feature.desc}</p>
                    </div>
                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${feature.color} opacity-50 group-hover:opacity-100 shadow-[0_0_15px_currentColor]`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: STATS ── */}
      <section className="py-40 relative overflow-hidden perspective-1000 bg-lime-600">
        <div className="absolute inset-0 z-0 bg-lime-400 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#110b17]/40 via-transparent to-[#110b17]/40 z-10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            {[
              { value: 8, suffix: "+", label: "Years of Excellence", color: "text-primary", desc: "Over eight years building digital products that move markets and grow businesses globally." },
              { value: 200, suffix: "+", label: "Projects Delivered", color: "text-secondary", desc: "From MVPs to enterprise platforms — 200+ successful launches across every major industry." },
              { value: 50, suffix: "+", label: "Happy Clients", color: "text-accent", desc: "Long-term partnerships with startups and Fortune 500s who keep coming back for more." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 50, duration: 1.5 }}
                className="relative group p-10 rounded-[3rem] bg-black/60 border border-white/20 hover:bg-black/80 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center"
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
                  className="text-7xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 text-glow group-hover:scale-110 transition-transform duration-500 flex"
                >
                  <NumberRollup endValue={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className={`mt-6 mb-4 text-2xl md:text-3xl font-bold ${stat.color} uppercase tracking-widest group-hover:text-white transition-colors duration-300`}>{stat.label}</div>
                <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm mx-auto group-hover:text-white/90 transition-colors duration-300">{stat.desc}</p>
                <div className={`absolute inset-0 rounded-[3rem] border-2 border-transparent group-hover:border-white/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PROJECTS ── */}
      <section id="projects" className="py-32 bg-[#0c0812] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-3">Our Work</p>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Check Our Latest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Projects
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/60 font-black uppercase tracking-widest text-sm hover:text-primary transition-colors group"
              >
                View All Projects
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 grid-rows-[280px_280px] gap-4">

            {/* Card 1 — large, spans 5 cols 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="col-span-12 md:col-span-5 row-span-2 group relative rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
            >
              <img
                src={imgDigitalConsulting}
                alt="Digital Consulting"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-orange-500/0 group-hover:ring-orange-500/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-widest mb-3">
                  Strategy
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                  Digital Consulting
                </h3>
                <p className="text-white/50 text-sm font-medium mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  Data-driven strategy to unlock your brand's digital potential.
                </p>
              </div>
            </motion.div>

            {/* Card 2 — top-right medium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-4 row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
            >
              <img
                src={imgBrandStrategy}
                alt="Brand Strategy"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-cyan-500/0 group-hover:ring-cyan-500/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-2">
                  Branding
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Brand Strategy</h3>
              </div>
            </motion.div>

            {/* Card 3 — top far-right narrow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-12 md:col-span-3 row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
            >
              <img
                src={imgAppDesign}
                alt="App Design"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-pink-500/0 group-hover:ring-pink-500/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-xs font-black uppercase tracking-widest mb-2">
                  Mobile
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">App Design</h3>
              </div>
            </motion.div>

            {/* Card 4 — bottom middle wide */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-4 row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
            >
              <img
                src={imgWebDevelopment}
                alt="Web Development"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-emerald-500/0 group-hover:ring-emerald-500/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest mb-2">
                  Web
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Web Development</h3>
              </div>
            </motion.div>

            {/* Card 5 — bottom far-right narrow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="col-span-12 md:col-span-3 row-span-1 group relative rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
            >
              <img
                src={imgMarketingCampaign}
                alt="Marketing Campaign"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-yellow-500/0 group-hover:ring-yellow-500/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-2">
                  Marketing
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Marketing Campaign</h3>
              </div>
            </motion.div>

          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { num: "120+", label: "Projects Delivered" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "40+", label: "Industry Sectors" },
              { num: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 flex flex-col gap-1 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <span className="text-3xl font-black text-white">{stat.num}</span>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 6: CLIENT REVIEWS ── */}
      <section className="py-24 bg-[#110b17] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        {/* Floating Edge Reviews */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {([
            { name: "Sarah K.", text: "Traffic tripled in 3 months!", top: "5%", left: "-2%", delay: 0 },
            { name: "Raj P.", text: "On-time, every single time.", top: "75%", left: "3%", delay: 2.5 },
            { name: "Emma W.", text: "Strategic, creative, reliable.", top: "20%", right: "-1%", delay: 1 },
            { name: "James L.", text: "Hit targets in 8 weeks!", top: "85%", right: "2%", delay: 3.5 },
            { name: "Carlos T.", text: "Bounce rate down 40%.", top: "40%", left: "8%", delay: 4 },
            { name: "Aisha B.", text: "Best design work, period.", top: "65%", right: "8%", delay: 1.5 },
            { name: "David R.", text: "Zero bugs at launch.", top: "35%", right: "12%", delay: 5 },
            { name: "Priya M.", text: "Seamless rebrand!", top: "55%", left: "14%", delay: 2 },
          ] as { name: string; text: string; top: string; left?: string; right?: string; delay: number }[]).map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0, y: 50, rotateX: 90 }}
              animate={{
                opacity: [0, 1, 1, 1, 0],
                scale: [0, 1.2, 1, 1, 0],
                y: [50, -20, 0, 0, -50],
                rotateX: [90, -10, 0, 0, 90]
              }}
              transition={{
                duration: 8,
                times: [0, 0.1, 0.15, 0.85, 1],
                repeat: Infinity,
                delay: review.delay,
                ease: "easeInOut"
              }}
              className="absolute bg-gradient-to-br from-black/80 to-zinc-900/90 backdrop-blur-xl border-t border-l border-white/30 border-b border-r border-black/50 p-5 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_2px_20px_rgba(255,255,255,0.1)] w-60 z-10"
              style={{ top: review.top, left: review.left, right: review.right, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl opacity-50" />
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-3 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white text-sm italic mb-3 leading-relaxed font-bold drop-shadow-md">"{review.text}"</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-green-400 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-wider">- {review.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-16 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 border border-yellow-500/30 mb-6 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />)}
              </div>
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">Client Reviews</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />)}
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight text-center leading-tight">
              What Our Clients{" "}
              <span className="text-primary">Say</span>{" "}
              About Working With Us
            </h2>
            <p className="text-white/60 text-lg mt-5 max-w-2xl text-center leading-relaxed">
              We build lasting partnerships by delivering results that matter. Every project is a commitment to quality, clarity, and measurable impact.
            </p>
          </div>

          {/* Infinite Carousel */}
          <div className="relative w-full overflow-hidden flex flex-col gap-6 py-8">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#110b17] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#110b17] to-transparent z-20 pointer-events-none" />

            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {[...clientReviews, ...clientReviews].map((review, i) => (
                <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] transition-all duration-300 flex flex-col h-[280px]">
                  <div className="flex text-yellow-400 mb-4 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 leading-tight line-clamp-2">{review.title}</h3>
                  <p className="text-white/70 mb-6 text-sm italic leading-relaxed line-clamp-4 flex-grow">"{review.text}"</p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs">
                        {review.name.charAt(0)}
                      </div>
                      <span className="font-bold text-white/90 text-sm">{review.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-green-400 text-xs font-bold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                      <span className="text-white/40 text-[10px]">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PACKAGES ── */}
      <section className="py-32 bg-[#F8F5F1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-[#F8F5F1] to-[#F8F5F1]" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
              Our Packages
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-bold text-foreground/70 max-w-3xl mx-auto">
              Choose the right engagement model for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Starter Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
              <div className="relative p-10 md:p-12">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest text-foreground/50">One-time Project</div>
                    <div className="mt-2 text-4xl md:text-5xl font-black text-foreground">Starter</div>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-black/5 flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <p className="mt-6 text-foreground/70 font-bold">Perfect for businesses launching a new product, brand, or digital channel.</p>
                <Button asChild className="mt-10 w-full h-14 rounded-full text-lg font-black uppercase tracking-widest bg-secondary hover:bg-secondary/90 text-white shadow-lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </motion.div>

            {/* Retainer Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-[0_25px_80px_rgba(var(--primary),0.12)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
              <div className="relative p-10 md:p-12">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest text-white/50">Monthly Retainer</div>
                    <div className="mt-2 text-4xl md:text-5xl font-black text-white">Growth</div>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <p className="mt-6 text-white/70 font-bold">Full-service partnership — strategy, design, dev & marketing working together every month.</p>
                <Button asChild className="mt-10 w-full h-14 rounded-full text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.45)]">
                  <Link href="/contact">Start Partnership</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <div className="mt-14 rounded-[2.5rem] overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
            <div className="grid grid-cols-3">
              <div className="p-6 md:p-8 bg-black text-white font-black uppercase tracking-widest">Features</div>
              <div className="p-6 md:p-8 bg-[#FFF1DB] text-foreground font-black uppercase tracking-widest text-center">Starter</div>
              <div className="p-6 md:p-8 bg-gradient-to-r from-primary to-secondary text-white font-black uppercase tracking-widest text-center">Growth</div>
              {[
                { label: "Dedicated Manager", starter: "No", growth: "Yes" },
                { label: "Monthly Strategy Calls", starter: "None", growth: "Weekly" },
                { label: "Revisions", starter: "2 rounds", growth: "Unlimited" },
                { label: "Priority Support", starter: "Email only", growth: "24/7 direct" },
              ].map((row, idx) => (
                <div key={idx} className="contents">
                  <div className="p-6 md:p-8 border-t border-black/10 font-bold text-foreground">{row.label}</div>
                  <div className="p-6 md:p-8 border-t border-black/10 text-center font-black text-foreground/70">{row.starter}</div>
                  <div className="p-6 md:p-8 border-t border-black/10 text-center font-black text-foreground">{row.growth}</div>
                </div>
              ))}
              <div className="contents">
                <div className="p-6 md:p-8 border-t border-black/10 font-black text-foreground bg-gray-50 flex items-center">Get Started</div>
                <div className="p-6 md:p-8 border-t border-black/10 text-center bg-[#FFF1DB]/50 flex justify-center items-center">
                  <Button asChild className="w-full h-12 rounded-full text-sm md:text-base font-black uppercase tracking-widest bg-secondary hover:bg-secondary/90 text-white shadow-md">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
                <div className="p-6 md:p-8 border-t border-black/10 text-center bg-primary/5 flex justify-center items-center">
                  <Button asChild className="w-full h-12 rounded-full text-sm md:text-base font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-md">
                    <Link href="/contact">Start Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHY SHAANTIK ── */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ background: "radial-gradient(ellipse at 20% 50%, #1a0030 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, #1a0800 0%, transparent 55%), radial-gradient(ellipse at 50% 80%, #001a0a 0%, transparent 50%), #0a0a0a" }}>
          {/* Blobs */}
          <div className="why-blob why-blob-1" />
          <div className="why-blob why-blob-2" />
          <div className="why-blob why-blob-3" />
          <div className="why-blob why-blob-4" />
          <div className="why-blob why-blob-5" />
          {/* SVG tendrils + droplets */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <path className="why-tendril-path why-t1" d="M -20,400 C 80,380 120,200 200,160 C 280,120 260,300 320,280 C 380,260 340,100 420,80 C 500,60 480,200 520,180" />
            <path className="why-tendril-path why-t2" d="M 1460,300 C 1360,320 1300,150 1220,130 C 1140,110 1160,280 1080,260 C 1000,240 1040,80 960,60 C 880,40 900,200 840,180" />
            <path className="why-tendril-path why-t3" d="M 300,920 C 340,820 280,760 360,700 C 440,640 480,740 540,680 C 600,620 560,520 640,500 C 720,480 700,600 780,580" />
            <path className="why-tendril-path why-t4" d="M 1100,-20 C 1080,80 1160,140 1100,200 C 1040,260 980,180 960,260 C 940,340 1020,380 980,440" />
            <circle className="why-drop" cx="180" cy="220" r="6" fill="#9B00FF" style={{ animationDuration: "7s", animationDelay: "0s" }} />
            <circle className="why-drop" cx="240" cy="160" r="4" fill="#9B00FF" style={{ animationDuration: "9s", animationDelay: "1s" }} />
            <circle className="why-drop" cx="140" cy="300" r="8" fill="#7700CC" style={{ animationDuration: "11s", animationDelay: "2s" }} />
            <circle className="why-drop" cx="1260" cy="180" r="6" fill="#FF5500" style={{ animationDuration: "8s", animationDelay: "0.5s" }} />
            <circle className="why-drop" cx="1320" cy="120" r="4" fill="#FF7700" style={{ animationDuration: "6s", animationDelay: "2.5s" }} />
            <circle className="why-drop" cx="1200" cy="250" r="7" fill="#CC3300" style={{ animationDuration: "10s", animationDelay: "1.5s" }} />
            <circle className="why-drop" cx="500" cy="780" r="5" fill="#00AA44" style={{ animationDuration: "8s", animationDelay: "3s" }} />
            <circle className="why-drop" cx="580" cy="820" r="7" fill="#006622" style={{ animationDuration: "12s", animationDelay: "0.8s" }} />
            <circle className="why-drop" cx="420" cy="730" r="4" fill="#44DD00" style={{ animationDuration: "9s", animationDelay: "4s" }} />
            <circle className="why-drop" cx="1020" cy="320" r="5" fill="#CC0022" style={{ animationDuration: "7s", animationDelay: "2s" }} />
            <circle className="why-drop" cx="960" cy="380" r="3" fill="#FF0044" style={{ animationDuration: "10s", animationDelay: "0.3s" }} />
          </svg>
          {/* Vignette */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%), linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.7) 100%)" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Shaantik</span>
            </motion.h2>
            <p className="mt-6 text-xl md:text-3xl font-bold text-white/90 max-w-4xl mx-auto drop-shadow-md">
              THE PILLARS OF OUR SUCCESS. YOUR FOUNDATION FOR EXPLOSIVE GROWTH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Results-First Culture", icon: Shield, desc: "Every decision we make is tied to your KPIs. We measure success by your ROI, not our output.", color: "from-primary to-rose-600" },
              { title: "End-to-End Capability", icon: Settings, desc: "Strategy, design, development, and marketing — all under one roof, working as one team.", color: "from-secondary to-orange-600" },
              { title: "Nationwide & Remote Ready", icon: MapPin, desc: "We work with clients globally with async-first communication and on-demand availability.", color: "from-accent to-emerald-600" },
              { title: "Custom-Built Solutions", icon: Code2, desc: "No templates, no shortcuts. Everything we build is tailored specifically to your brand and goals.", color: "from-blue-500 to-indigo-600" },
              { title: "Transparent Process", icon: CheckCircle, desc: "Weekly updates, real-time dashboards, and clear reporting so you're always in the loop.", color: "from-purple-500 to-pink-600" },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.35, ease: "easeOut" }}
                className={`relative group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden ${i === 3 ? "lg:col-start-1 lg:ml-auto lg:w-full lg:max-w-md" : ""} ${i === 4 ? "lg:col-start-2 lg:mr-auto lg:w-full lg:max-w-md" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-black/40 flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4 tracking-wide">{pillar.title}</h3>
                  <p className="text-lg text-white/70 font-medium group-hover:text-white/90 transition-colors">{pillar.desc}</p>
                </div>
                <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${pillar.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: PROJECT ESTIMATOR ── */}
      <section className="py-32 bg-gradient-to-b from-foreground to-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase drop-shadow-xl">
              Estimate Your <span className="text-accent">Project</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto font-bold">
              Get an instant ballpark for how Shaantik can grow your business value.
            </p>
          </div>

          <Card className="max-w-6xl mx-auto bg-zinc-900 border-2 border-white/20 rounded-[3rem] overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 space-y-8 bg-white/5 border-r border-white/10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm md:text-base font-bold text-white uppercase tracking-wider">Project Complexity</label>
                    <span className="text-xl font-black text-accent">{["", "Simple", "Basic", "Standard", "Complex", "Enterprise"][projectType]}</span>
                  </div>
                  <input type="range" min="1" max="5" step="1" value={projectType} onChange={(e) => setProjectType(Number(e.target.value))} className="w-full accent-accent h-3 bg-white/20 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm md:text-base font-bold text-white uppercase tracking-wider">Team Size Needed</label>
                    <span className="text-xl font-black text-accent">{teamSize} devs</span>
                  </div>
                  <input type="range" min="1" max="10" step="1" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} className="w-full accent-accent h-3 bg-white/20 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm md:text-base font-bold text-white uppercase tracking-wider">Timeline (Months)</label>
                    <span className="text-xl font-black text-secondary">{timeline} months</span>
                  </div>
                  <input type="range" min="1" max="12" step="1" value={timeline} onChange={(e) => setTimeline(Number(e.target.value))} className="w-full accent-secondary h-3 bg-white/20 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm md:text-base font-bold text-white uppercase tracking-wider">Marketing Budget ($k)</label>
                    <span className="text-xl font-black text-secondary">${budget}k/mo</span>
                  </div>
                  <input type="range" min="1" max="20" step="1" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full accent-secondary h-3 bg-white/20 rounded-lg appearance-none cursor-pointer" />
                </div>
              </div>

              <div className="p-8 md:p-12 bg-zinc-950/80 flex flex-col justify-center">
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest text-center border-b border-white/20 pb-4">Your Estimate</h3>

                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                    <div className="text-white/50 text-xs md:text-sm font-bold uppercase mb-1">Project Type</div>
                    <div className="text-xl md:text-2xl font-black text-white">{["", "Simple", "Basic", "Standard", "Complex", "Enterprise"][projectType]}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                    <div className="text-white/50 text-xs md:text-sm font-bold uppercase mb-1">Team Size</div>
                    <div className="text-xl md:text-2xl font-black text-white">{teamSize} devs</div>
                  </div>
                  <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30 text-center col-span-2">
                    <div className="text-primary text-xs md:text-sm font-bold uppercase mb-1">Estimated Investment</div>
                    <div className="text-3xl md:text-4xl font-black text-white">${estimatedCost.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                    <div className="text-white/50 text-xs md:text-sm font-bold uppercase mb-1">Projected Value</div>
                    <div className="text-xl md:text-2xl font-black text-accent">${monthlyValue.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                    <div className="text-white/50 text-xs md:text-sm font-bold uppercase mb-1">ROI Multiplier</div>
                    <div className="text-xl md:text-2xl font-black text-secondary">{roiMultiplier}x</div>
                  </div>
                </div>

                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip contentStyle={{ background: "#18122b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1rem", color: "#fff", fontWeight: 700 }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Value"]} />
                      <Bar dataKey="Value" fill="hsl(90 100% 40%)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <Button asChild className="mt-6 w-full h-14 rounded-full font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white text-lg">
                  <Link href="/contact">Let's Build This Together</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── SECTION 10: HOW WE WORK ── */}
      <section className="relative py-32 overflow-hidden bg-[#0a0510]">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-bold">
              A proven process designed to maximise results at every stage of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Step Cards — collage layout matching reference */}
            <div className="grid grid-cols-2 gap-3">
              {/* 01 — full width top */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden bg-[#1a0030] border border-primary/20 p-6 flex flex-col justify-between min-h-[140px] group hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-7 rounded-md bg-primary text-white text-xs font-black">01</span>
                  <span className="text-white font-black uppercase tracking-widest text-sm">Discovery & Strategy</span>
                </div>
                <div className="flex items-end justify-between mt-4">
                  <p className="text-white/40 text-xs font-medium max-w-[60%]">Research, audience mapping & data-backed roadmap.</p>
                  <Lightbulb className="w-10 h-10 text-primary/30 group-hover:text-primary/60 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 02 — left */}
              <div className="relative rounded-2xl overflow-hidden bg-[#00201a] border border-accent/20 p-6 flex flex-col justify-between min-h-[160px] group hover:border-accent/50 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-9 h-7 rounded-md bg-accent text-white text-xs font-black">02</span>
                </div>
                <div>
                  <Palette className="w-8 h-8 text-accent/40 group-hover:text-accent/70 transition-colors duration-300 mb-3" />
                  <p className="text-white font-black uppercase tracking-wide text-sm">Design & Prototype</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 03 — right */}
              <div className="relative rounded-2xl overflow-hidden bg-[#001a2e] border border-blue-500/20 p-6 flex flex-col justify-between min-h-[160px] group hover:border-blue-500/50 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-9 h-7 rounded-md bg-blue-500 text-white text-xs font-black">03</span>
                </div>
                <div>
                  <Code2 className="w-8 h-8 text-blue-400/40 group-hover:text-blue-400/70 transition-colors duration-300 mb-3" />
                  <p className="text-white font-black uppercase tracking-wide text-sm">Build & Test</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 04 — full width bottom */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden bg-[#1a0a00] border border-secondary/20 p-6 flex flex-col justify-between min-h-[140px] group hover:border-secondary/50 transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-7 rounded-md bg-secondary text-white text-xs font-black">04</span>
                  <span className="text-white font-black uppercase tracking-widest text-sm">Launch & Grow</span>
                </div>
                <div className="flex items-end justify-between mt-4">
                  <p className="text-white/40 text-xs font-medium max-w-[60%]">Post-launch support, analytics & ongoing optimisation.</p>
                  <Rocket className="w-10 h-10 text-secondary/30 group-hover:text-secondary/60 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              {[
                { num: "01", title: "Discovery & Strategy", desc: "We deep-dive into your business, audience, and goals to build a data-backed roadmap." },
                { num: "02", title: "Design & Prototype", desc: "Pixel-perfect wireframes and high-fidelity prototypes reviewed and approved before a single line of code." },
                { num: "03", title: "Build & Test", desc: "Agile sprints with continuous QA. We ship fast and fix faster — zero nasty surprises at launch." },
                { num: "04", title: "Launch & Grow", desc: "Post-launch support, analytics monitoring, and ongoing optimisation to keep growing your results." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.35, ease: "easeOut" }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">{step.title}</h3>
                    <p className="text-white/60 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}

              <Button asChild size="lg" className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all hover:scale-[1.05] mt-4">
                <Link href="/contact">Become A Client</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: NEWSLETTER ── */}
      <section className="relative py-32 overflow-hidden bg-[#F8F5F1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-[#F8F5F1] to-[#F8F5F1]" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8"
          >
            <Bell className="w-5 h-5 text-primary animate-bounce" />
            <span className="font-black uppercase tracking-widest text-primary text-sm">Stay In The Loop</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter mb-6">
            Get Agency<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-foreground/70 max-w-2xl mx-auto mb-12">
            Join 2,000+ founders and marketers who get our best tips on design, development, and growth every week.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-16 rounded-full px-6 text-lg font-bold bg-white border-2 border-black/10 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
            />
            <Button type="submit" size="lg" className="rounded-full h-16 px-8 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-sm text-foreground/50 font-bold">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ── SECTION 12: SOCIAL FEED ── */}
      <section id="blog" className="py-40 bg-[#110b17] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-accent/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-20 mb-24">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_30px_rgba(var(--primary),0.5)]">
              Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-bold text-white/70 max-w-3xl mx-auto drop-shadow-md">
              See our latest projects, team moments, and behind-the-scenes creativity.
            </p>
          </div>
        </div>

        {/* Staggered Marquee Montage */}
        <div className="relative w-full h-[500px] md:h-[600px] mb-32 z-10 overflow-hidden">
          {/* Row 1 — moves left */}
          <div className="absolute top-0 left-0 w-max flex gap-6 md:gap-8 items-center animate-marquee-left">
            {[social1, social2, social3, social4, social5, social6, hww01, hww02, social1, social2, social3, social4, social5, social6, hww01, hww02].map((img, i) => (
              <div
                key={`top-${i}`}
                className={`relative shrink-0 w-[280px] md:w-[380px] h-[340px] md:h-[430px] rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(255,0,80,0.3)] border-4 border-white/10 group hover:z-30 hover:scale-110 hover:rotate-0 transition-all duration-500 ${i % 2 === 0 ? 'mt-12 rotate-3' : '-mt-8 -rotate-3'}`}
              >
                <img src={img} alt={`Work ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — moves right, offset down */}
          <div className="absolute top-20 md:top-32 -left-[600px] w-max flex gap-6 md:gap-8 items-center animate-marquee-right">
            {[social3, social5, hww03, social6, social2, hww04, social4, social3, social5, hww03, social6, social2, hww04, social4].map((img, i) => (
              <div
                key={`bottom-${i}`}
                className={`relative shrink-0 w-[250px] md:w-[340px] h-[300px] md:h-[390px] rounded-[2rem] overflow-hidden shadow-[0_0_40px_rgba(0,242,254,0.2)] border-4 border-white/10 group hover:z-30 hover:scale-110 hover:rotate-0 transition-all duration-500 ${i % 2 === 0 ? '-mt-16 -rotate-2' : 'mt-10 rotate-2'}`}
              >
                <img src={img} alt={`Work ${i + 7}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edge fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#110b17] via-transparent to-[#110b17] pointer-events-none z-20" />
        </div>

        {/* Social Platform Cards */}
        <div className="container mx-auto px-4 relative z-30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <button
              type="button"
              onClick={() => toast({ title: "Instagram coming soon", description: "Follow our work through the project gallery for now." })}
              className="block group text-left"
            >
              <div className="p-8 rounded-[2rem] bg-white/10 border border-white/20 hover:shadow-[0_0_50px_rgba(255,0,128,0.3)] hover:-translate-y-4 transition-all duration-500 flex flex-col items-center justify-center gap-6 group-hover:border-pink-500/50">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-black text-lg text-white uppercase tracking-widest">Instagram</div>
                  <div className="text-white/60 font-bold text-sm mt-1">@shaantik</div>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => toast({ title: "Facebook coming soon", description: "Follow our work through the project gallery for now." })}
              className="block group text-left"
            >
              <div className="p-8 rounded-[2rem] bg-white/10 border border-white/20 hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:-translate-y-4 transition-all duration-500 flex flex-col items-center justify-center gap-6 group-hover:border-blue-500/50">
                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                  <Facebook className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-black text-lg text-white uppercase tracking-widest">Facebook</div>
                  <div className="text-white/60 font-bold text-sm mt-1">/shaantik</div>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => toast({ title: "X profile coming soon", description: "Read our latest thinking on the blog for now." })}
              className="block group text-left"
            >
              <div className="p-8 rounded-[2rem] bg-white/10 border border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:-translate-y-4 transition-all duration-500 flex flex-col items-center justify-center gap-6 group-hover:border-white/50">
                <div className="w-20 h-20 rounded-2xl bg-black border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Twitter className="w-10 h-10 text-white fill-current" />
                </div>
                <div className="text-center">
                  <div className="font-black text-lg text-white uppercase tracking-widest">X / Twitter</div>
                  <div className="text-white/60 font-bold text-sm mt-1">@shaantik</div>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => toast({ title: "YouTube coming soon", description: "Video content is planned after the next project drops." })}
              className="block group text-left"
            >
              <div className="p-8 rounded-[2rem] bg-white/10 border border-white/20 hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] hover:-translate-y-4 transition-all duration-500 flex flex-col items-center justify-center gap-6 group-hover:border-red-500/50">
                <div className="w-20 h-20 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-black text-lg text-white uppercase tracking-widest">YouTube</div>
                  <div className="text-white/60 font-bold text-sm mt-1">Shaantik TV</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
