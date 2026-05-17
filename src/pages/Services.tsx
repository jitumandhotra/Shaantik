import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { servicePages } from "@/data/servicePages";
import {
  Smartphone, Megaphone, Palette, Monitor,
  CheckCircle, ArrowRight, Code2, Globe,
  TrendingUp, Search, Layers, Zap, Database,
  Server, ShoppingBag, Layout, Flame, Shield,
  BrainCircuit, Bot, Workflow, CloudCog,
  ChartScatter, TableProperties, DatabaseZap, PlugZap,
  Sparkles, MessageSquare, ChartNetwork, CloudCheck, GitBranch,
} from "lucide-react";

import imgAppDesign         from "@/assets/images/03-app-design.svg";
import imgDigitalConsulting from "@/assets/images/01-digital-consulting.svg";
import imgMarketingCampaign from "@/assets/images/05-marketing-campaign.svg";
import imgBrandStrategy     from "@/assets/images/02-brand-strategy.svg";
import imgWebDevelopment    from "@/assets/images/04-web-development.svg";
import hww01 from "@/assets/images/hww-01-discovery-strategy.svg";
import hww02 from "@/assets/images/hww-02-design-prototype.svg";
import hww03 from "@/assets/images/hww-03-build-test.svg";
import hww04 from "@/assets/images/hww-04-launch-grow.svg";

const services = [
  {
    id: "web",
    icon: Monitor,
    color: "primary",
    title: "Website Development",
    subtitle: "Fast. Responsive. Built to Convert.",
    desc: "We engineer websites that don't just look great — they perform. From landing pages to full-scale e-commerce platforms, every build is optimized for speed, SEO, and conversion.",
    image: imgWebDevelopment,
    features: [
      "Custom design & development",
      "Mobile-first, fully responsive",
      "SEO-ready architecture",
      "CMS integration (WordPress, Webflow, Headless)",
      "E-commerce & payment gateway setup",
      "Post-launch support & maintenance",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "WordPress", "Shopify"],
  },
  {
    id: "app",
    icon: Smartphone,
    color: "secondary",
    title: "Mobile App Development",
    subtitle: "Native Quality. Cross-Platform Reach.",
    desc: "We build mobile apps that users love — intuitive, polished, and performant. Whether iOS, Android, or cross-platform, we deliver apps that scale with your business.",
    image: imgAppDesign,
    features: [
      "iOS & Android native apps",
      "React Native cross-platform builds",
      "UI/UX design & prototyping",
      "Backend API integration",
      "App Store & Google Play deployment",
      "Analytics & crash reporting setup",
    ],
    tags: ["React Native", "Swift", "Kotlin", "Firebase", "REST APIs", "Expo"],
  },
  {
    id: "marketing",
    icon: Megaphone,
    color: "accent",
    title: "Digital Marketing",
    subtitle: "Paid Growth. Clean Funnels. Clear ROI.",
    desc: "We run marketing that actually works — not just pretty dashboards. From performance ads to lifecycle campaigns, every campaign is built around measurable results.",
    image: imgMarketingCampaign,
    features: [
      "Google & Meta PPC advertising",
      "Campaign strategy and audience planning",
      "Social media management",
      "Email marketing automation",
      "Conversion rate optimization",
      "Monthly analytics & reporting",
    ],
    tags: ["Google Ads", "Meta Ads", "Email", "Analytics", "CRO", "Funnels"],
  },
  {
    id: "seo",
    icon: Search,
    color: "primary",
    title: "SEO Strategy",
    subtitle: "Technical. Content-Led. Built to Compound.",
    desc: "We improve how search engines discover, understand, and rank your business through technical SEO, content planning, metadata, schema, internal linking, and performance improvements.",
    image: imgDigitalConsulting,
    features: [
      "Technical SEO audits and crawl fixes",
      "Keyword research and search intent mapping",
      "On-page optimisation for service pages",
      "Content clusters and blog briefs",
      "Schema markup and metadata improvements",
      "Search Console and ranking reports",
    ],
    tags: ["Technical SEO", "Content SEO", "Schema", "Search Console", "Core Web Vitals", "Analytics"],
  },
  {
    id: "design",
    icon: Palette,
    color: "blue",
    title: "Graphics & Brand Design",
    subtitle: "Bold Visuals. Unforgettable Identity.",
    desc: "Your brand is more than a logo. We craft complete visual identities — from brand strategy to motion graphics — that make you impossible to ignore.",
    image: imgBrandStrategy,
    features: [
      "Brand identity & logo design",
      "Brand guidelines & style systems",
      "Social media graphics & templates",
      "Print & packaging design",
      "Motion graphics & animation",
      "Pitch decks & presentation design",
    ],
    tags: ["Figma", "Illustrator", "After Effects", "Photoshop", "Brand Strategy"],
  },
  {
    id: "devops",
    icon: GitBranch,
    color: "primary",
    title: "DevOps & Cloud",
    subtitle: "Reliable. Automated. Built to Scale.",
    desc: "We set up deployment pipelines, cloud infrastructure, monitoring, and release workflows so your product ships faster and runs with confidence.",
    image: imgWebDevelopment,
    features: [
      "CI/CD pipeline setup",
      "Cloud deployment on AWS, Vercel, or Cloudflare",
      "Docker and environment configuration",
      "Monitoring, logging, and uptime alerts",
      "Performance and security hardening",
      "Backup and rollback planning",
    ],
    tags: ["CI/CD", "AWS", "Docker", "Vercel", "Cloudflare", "Monitoring"],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    color: "accent",
    title: "AI Automation",
    subtitle: "Smart Workflows. Human Control.",
    desc: "We build practical AI assistants, automations, and data workflows that reduce repetitive work and help teams move faster without losing oversight.",
    image: imgDigitalConsulting,
    features: [
      "AI chatbots and internal assistants",
      "Workflow automation for operations",
      "Knowledge-base search and document processing",
      "CRM and tool integrations",
      "Prompt design and guardrails",
      "Analytics and reporting automation",
    ],
    tags: ["OpenAI", "LangChain", "Vector DBs", "n8n", "Zapier", "Automation"],
  },
  {
    id: "salesforce",
    icon: CloudCheck,
    color: "blue",
    title: "Salesforce Consulting",
    subtitle: "Cleaner CRM. Better Pipeline Visibility.",
    desc: "We configure Salesforce, automate CRM workflows, connect data, and build dashboards that help sales and service teams work with confidence.",
    image: imgDigitalConsulting,
    features: [
      "Sales Cloud and Service Cloud setup",
      "Lead and opportunity automation",
      "Custom objects, fields, and layouts",
      "Apex, Flow, and integration support",
      "Dashboards and CRM reporting",
      "User training and CRM optimisation",
    ],
    tags: ["Sales Cloud", "Service Cloud", "Apex", "Flow", "Einstein AI", "CRM"],
  },
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
const borderMap: Record<string, string> = {
  primary: "border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.15)]",
  secondary: "border-secondary/30 shadow-[0_0_30px_rgba(var(--secondary),0.15)]",
  accent: "border-accent/30",
  blue: "border-blue-500/30",
};

const techGroups = [
  {
    category: "Full Stack",
    color: "primary",
    items: [
      { label: "MongoDB",   icon: <Database className="w-5 h-5" /> },
      { label: "Express.js", icon: <Server className="w-5 h-5" /> },
      { label: "React / Next.js", icon: <Code2 className="w-5 h-5" /> },
      { label: "Node.js",   icon: <Zap className="w-5 h-5" /> },
    ],
  },
  {
    category: "Languages",
    color: "secondary",
    items: [
      { label: "PHP",        icon: <Code2 className="w-5 h-5" /> },
      { label: "Python",     icon: <Layers className="w-5 h-5" /> },
      { label: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
      { label: "React Native", icon: <Smartphone className="w-5 h-5" /> },
    ],
  },
  {
    category: "CMS",
    color: "accent",
    items: [
      { label: "WordPress",   icon: <Layout className="w-5 h-5" /> },
      { label: "Shopify",     icon: <ShoppingBag className="w-5 h-5" /> },
      { label: "Webflow",     icon: <Globe className="w-5 h-5" /> },
      { label: "Strapi",      icon: <Layers className="w-5 h-5" /> },
    ],
  },
  {
    category: "Frameworks",
    color: "blue",
    items: [
      { label: "Laravel",     icon: <Flame className="w-5 h-5" /> },
      { label: "Django",      icon: <Shield className="w-5 h-5" /> },
      { label: "Vue.js",      icon: <Code2 className="w-5 h-5" /> },
      { label: "Flask",       icon: <Server className="w-5 h-5" /> },
    ],
  },
  {
    category: "Marketing & Design",
    color: "primary",
    items: [
      { label: "Google Ads", icon: <Search className="w-5 h-5" /> },
      { label: "Meta Ads",   icon: <TrendingUp className="w-5 h-5" /> },
      { label: "Figma",      icon: <Palette className="w-5 h-5" /> },
      { label: "Firebase",   icon: <Globe className="w-5 h-5" /> },
    ],
  },
  {
    category: "Data Science",
    color: "secondary",
    items: [
      { label: "Pandas", icon: <TableProperties className="w-5 h-5" /> },
      { label: "NumPy", icon: <DatabaseZap className="w-5 h-5" /> },
      { label: "TensorFlow", icon: <BrainCircuit className="w-5 h-5" /> },
      { label: "Power BI", icon: <ChartScatter className="w-5 h-5" /> },
    ],
  },
  {
    category: "AI & ML",
    color: "accent",
    items: [
      { label: "OpenAI", icon: <Sparkles className="w-5 h-5" /> },
      { label: "LangChain", icon: <Workflow className="w-5 h-5" /> },
      { label: "Chatbots", icon: <Bot className="w-5 h-5" /> },
      { label: "Vector DBs", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    category: "Automation",
    color: "blue",
    items: [
      { label: "Zapier", icon: <Zap className="w-5 h-5" /> },
      { label: "Make", icon: <Workflow className="w-5 h-5" /> },
      { label: "n8n", icon: <PlugZap className="w-5 h-5" /> },
      { label: "CRM Workflows", icon: <ChartNetwork className="w-5 h-5" /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "secondary",
    items: [
      { label: "AWS", icon: <CloudCog className="w-5 h-5" /> },
      { label: "Docker", icon: <Server className="w-5 h-5" /> },
      { label: "CI/CD", icon: <GitBranch className="w-5 h-5" /> },
      { label: "Cloudflare", icon: <CloudCheck className="w-5 h-5" /> },
    ],
  },
  {
    category: "Salesforce",
    color: "primary",
    items: [
      { label: "Sales Cloud", icon: <CloudCheck className="w-5 h-5" /> },
      { label: "Service Cloud", icon: <CloudCog className="w-5 h-5" /> },
      { label: "Apex", icon: <Code2 className="w-5 h-5" /> },
      { label: "Einstein AI", icon: <MessageSquare className="w-5 h-5" /> },
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Strategy", img: hww01, desc: "We dig into your goals, audience, and competitive landscape to build a roadmap for success." },
  { step: "02", title: "Design & Prototype", img: hww02, desc: "Wireframes and high-fidelity designs reviewed and approved before a single line of code." },
  { step: "03", title: "Build & Test", img: hww03, desc: "Rigorous development sprints with continuous QA to ensure everything works flawlessly." },
  { step: "04", title: "Launch & Grow", img: hww04, desc: "We don't disappear at launch — we stay on to optimize, iterate, and drive ongoing growth." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#110b17] pt-0">

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Home <span className="mx-2 text-white/50">»</span> Services
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mobile-page-hero-title text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Digital Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-white/70 max-w-3xl mx-auto mb-10"
          >
            Websites, mobile apps, SEO strategy, digital marketing, brand design,
            DevOps, AI automation, and Salesforce services built around measurable results.
          </motion.p>

          {/* Service nav pills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {services.map((s) => {
              const Icon = s.icon;
              const servicePage = servicePages.find((page) => page.id === s.id);
              return (
                <Link
                  key={s.id}
                  href={servicePage ? `/services/${servicePage.slug}` : `/services#${s.id}`}
                  className={`px-5 py-2 rounded-full bg-white/10 border border-white/20 font-bold uppercase tracking-wider text-sm flex items-center gap-2 text-white hover:bg-white/20 transition-colors`}
                >
                  <Icon className={`w-4 h-4 ${colorMap[s.color]}`} />
                  {s.title}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isReverse = i % 2 !== 0;
        return (
          <section
            key={service.id}
            id={service.id}
          className={`py-16 md:py-24 ${i % 2 === 0 ? "" : "bg-black/30"} border-t border-white/5`}
          >
            <div className="container mx-auto px-4 max-w-7xl">
              <div className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border ${borderMap[service.color]} group`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110b17]/80 via-[#110b17]/20 to-transparent" />
                    <div className={`absolute top-6 left-6 w-14 h-14 rounded-2xl ${bgMap[service.color]} backdrop-blur flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${colorMap[service.color]}`} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                className="w-full max-w-xl space-y-6 text-center lg:w-1/2 lg:max-w-none lg:text-left"
                >
                  <p className={`font-black uppercase tracking-[0.3em] text-sm ${colorMap[service.color]}`}>
                    {service.subtitle}
                  </p>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="text-lg text-white/70 font-bold leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="mx-auto max-w-md space-y-3 text-left lg:mx-0 lg:max-w-none">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/80 font-bold">
                        <CheckCircle className={`w-5 h-5 shrink-0 ${colorMap[service.color]}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2 pt-2 lg:mx-0 lg:max-w-none lg:justify-start">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-black uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`mx-auto rounded-full h-14 px-8 text-lg font-black uppercase tracking-widest text-white hover:scale-105 transition-all lg:mx-0 ${
                      service.color === "primary" ? "bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.4)]" :
                      service.color === "secondary" ? "bg-secondary hover:bg-secondary/90 shadow-[0_0_30px_rgba(var(--secondary),0.4)]" :
                      service.color === "accent" ? "bg-accent hover:bg-accent/90" :
                      "bg-blue-600 hover:bg-blue-500"
                    }`}
                  >
                    <Link href={`/services/${servicePages.find((page) => page.id === service.id)?.slug ?? ""}`}>
                      View Details <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── TECH STACK ── */}
      <section className="py-24 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            >
              Our Tech <span className="text-primary">Stack</span>
            </motion.h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Industry-leading tools and frameworks across every layer of the stack.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {techGroups.map((group, gi) => {
              const iconColor =
                group.color === "primary"   ? "text-primary" :
                group.color === "secondary" ? "text-secondary" :
                group.color === "accent"    ? "text-accent" :
                "text-blue-400";
              const borderHover =
                group.color === "primary"   ? "hover:border-primary/40 hover:bg-primary/5" :
                group.color === "secondary" ? "hover:border-secondary/40 hover:bg-secondary/5" :
                group.color === "accent"    ? "hover:border-accent/40 hover:bg-accent/5" :
                "hover:border-blue-400/40 hover:bg-blue-400/5";
              return (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 }}
                >
                  <p className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${iconColor}`}>
                    {group.category}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {group.items.map((tech, i) => (
                      <div
                        key={i}
                        className={`bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 transition-all group cursor-default ${borderHover}`}
                      >
                        <div className={`shrink-0 ${iconColor} group-hover:scale-110 transition-transform`}>
                          {tech.icon}
                        </div>
                        <span className="text-white font-black uppercase tracking-widest text-sm">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            >
              How We <span className="text-secondary">Work</span>
            </motion.h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A proven process that takes you from idea to launched product — without the guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-primary/30 transition-all group"
              >
                <div className="text-6xl font-black text-white/10 absolute top-6 right-6">{step.step}</div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 bg-white/10 border border-white/10">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]"
          >
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Your Next Win
            </span>
          </motion.h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto font-bold">
            Get a free consultation and scope estimate. No obligation, no pressure.
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
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
