import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, X, ArrowRight, Zap, Shield, Star,
  ChevronDown, ChevronUp, Clock,
} from "lucide-react";

type BillingCycle = "monthly" | "yearly";

interface PlanFeature {
  label: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

const features: PlanFeature[] = [
  { label: "Custom Pages",           starter: "Up to 5",    growth: "Up to 15",   enterprise: "Unlimited"   },
  { label: "Mobile Responsive",      starter: true,         growth: true,         enterprise: true          },
  { label: "SEO Optimisation",       starter: "Basic",      growth: "Advanced",   enterprise: "Full Suite"  },
  { label: "CMS Integration",        starter: false,        growth: true,         enterprise: true          },
  { label: "E-commerce",             starter: false,        growth: true,         enterprise: true          },
  { label: "Custom Animations",      starter: false,        growth: true,         enterprise: true          },
  { label: "Performance Audit",      starter: false,        growth: true,         enterprise: true          },
  { label: "A/B Testing",            starter: false,        growth: false,        enterprise: true          },
  { label: "Dedicated Dev Manager",  starter: false,        growth: false,        enterprise: true          },
  { label: "Priority Support",       starter: false,        growth: false,        enterprise: true          },
  { label: "Monthly Revisions",      starter: "1",          growth: "3",          enterprise: "Unlimited"   },
  { label: "Delivery Time",          starter: "2 weeks",    growth: "4 weeks",    enterprise: "Custom"      },
];

const plans = [
  {
    id: "starter",
    icon: Zap,
    name: "Starter",
    tagline: "Perfect for new businesses",
    color: "primary",
    monthlyPrice: 799,
    yearlyPrice: 699,
    cta: "Get Started",
    highlight: false,
    description:
      "Everything you need to launch a clean, professional web presence that gets you found online.",
  },
  {
    id: "growth",
    icon: Star,
    name: "Growth",
    tagline: "Most popular for scaling brands",
    color: "secondary",
    monthlyPrice: 1799,
    yearlyPrice: 1499,
    cta: "Start Growing",
    highlight: true,
    description:
      "Advanced features, e-commerce capability, and deeper SEO to accelerate your digital growth.",
  },
  {
    id: "enterprise",
    icon: Shield,
    name: "Enterprise",
    tagline: "For ambitious, high-scale projects",
    color: "accent",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Get a Custom Quote",
    highlight: false,
    description:
      "Full-custom strategy, dedicated team, and white-glove delivery for complex, high-stakes builds.",
  },
];

const hourlyRates = [
  { role: "Strategy & Consulting", rate: "$75/hr", note: "Discovery, planning, audits, roadmaps" },
  { role: "UI/UX & Brand Design", rate: "$65/hr", note: "Interfaces, brand systems, design assets" },
  { role: "Web Development", rate: "$85/hr", note: "Frontend, CMS, e-commerce, integrations" },
  { role: "Mobile App Development", rate: "$95/hr", note: "React Native, iOS/Android builds, APIs" },
  { role: "Digital Marketing", rate: "$70/hr", note: "Paid ads, funnels, analytics, CRO" },
  { role: "SEO Strategy", rate: "$80/hr", note: "Technical SEO, content strategy, schema, reporting" },
  { role: "DevOps & Cloud", rate: "$110/hr", note: "CI/CD, cloud deployment, monitoring" },
  { role: "AI Automation", rate: "$125/hr", note: "AI workflows, agents, automation systems" },
  { role: "Salesforce Consulting", rate: "$130/hr", note: "Sales Cloud, Service Cloud, Flow, Apex" },
];

const servicePackages = [
  { service: "Website Development", starter: "$799+", growth: "$1,799+", advanced: "$4,500+" },
  { service: "Mobile App Development", starter: "$2,500+", growth: "$6,500+", advanced: "$15,000+" },
  { service: "Digital Marketing", starter: "$699/mo", growth: "$1,499/mo", advanced: "$3,500/mo+" },
  { service: "SEO Strategy", starter: "$599/mo", growth: "$1,299/mo", advanced: "$3,000/mo+" },
  { service: "Graphics & Brand Design", starter: "$499+", growth: "$1,299+", advanced: "$3,000+" },
  { service: "DevOps & Cloud", starter: "$900+", growth: "$2,500+", advanced: "$6,000+" },
  { service: "AI Automation", starter: "$1,200+", growth: "$3,500+", advanced: "$8,000+" },
  { service: "Salesforce Consulting", starter: "$1,500+", growth: "$4,000+", advanced: "$10,000+" },
];

const faqs = [
  {
    q: "Do prices include design and development?",
    a: "Yes — every plan covers full UI/UX design, development, testing, and launch. There are no hidden fees for standard deliverables.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade to a higher tier at any point and we'll credit any unused portion of your current plan.",
  },
  {
    q: "What does 'Unlimited Revisions' mean?",
    a: "On the Enterprise plan we work iteratively with you in review sprints until the product matches your vision — no capped rounds.",
  },
  {
    q: "Is hosting included?",
    a: "We can recommend and set up hosting on your preferred provider (Vercel, AWS, Cloudflare Pages, etc.). Hosting costs are billed separately by the provider.",
  },
  {
    q: "How does the yearly billing discount work?",
    a: "Choosing annual billing gives you 2 months free — the discounted rate is applied upfront when you pay for a 12-month engagement.",
  },
  {
    q: "What if my project doesn't fit a plan?",
    a: "Select the Enterprise tier and we'll scope a custom engagement around your exact requirements, timeline, and budget.",
  },
];

const colorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};
const bgMap: Record<string, string> = {
  primary: "bg-primary/20",
  secondary: "bg-secondary/20",
  accent: "bg-accent/20",
};
const btnMap: Record<string, string> = {
  primary:
    "bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)]",
  secondary:
    "bg-secondary hover:bg-secondary/90 text-white shadow-[0_0_30px_rgba(var(--secondary),0.4)]",
  accent: "bg-accent hover:bg-accent/90 text-white",
};

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true)
    return <CheckCircle className="w-5 h-5 text-primary mx-auto" />;
  if (value === false)
    return <X className="w-5 h-5 text-white/20 mx-auto" />;
  return (
    <span className="text-white/80 font-bold text-sm">{value}</span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-white font-black uppercase tracking-wide text-sm">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/40 shrink-0" />
        )}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 pb-5 text-white/60 font-medium leading-relaxed text-sm border-t border-white/10 pt-4"
        >
          {a}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <div className="min-h-screen bg-[#110b17] pt-0">

      {/* ── HERO ── */}
      <section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        </div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-black uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Home <span className="mx-2 text-white/50">»</span> Pricing
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mobile-page-hero-title text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Website Design & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Marketing Pricing
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-white/70 max-w-3xl mx-auto mb-10"
          >
            Transparent pricing for website development, SEO optimisation, and
            digital growth packages that can scale with your business.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-2 py-2"
          >
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm transition-all ${
                billing === "monthly"
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.4)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm transition-all flex items-center gap-2 ${
                billing === "yearly"
                  ? "bg-secondary text-white shadow-[0_0_20px_rgba(var(--secondary),0.4)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              Yearly
              <span className="bg-green-500/20 text-green-400 text-xs font-black px-2 py-0.5 rounded-full border border-green-500/30">
                2 months free
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── PLAN CARDS ── */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const price =
                billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-[2.5rem] border p-8 flex flex-col gap-6 ${
                    plan.highlight
                      ? "border-secondary/50 bg-secondary/10 shadow-[0_0_60px_rgba(var(--secondary),0.2)] scale-[1.03]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(var(--secondary),0.5)]">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${bgMap[plan.color]} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colorMap[plan.color]}`} />
                    </div>
                    <div>
                      <p className={`font-black uppercase tracking-widest text-xs ${colorMap[plan.color]}`}>
                        {plan.tagline}
                      </p>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    {price !== null ? (
                      <div className="flex items-end gap-1">
                        <span className="text-5xl font-black text-white">${price.toLocaleString()}</span>
                        <span className="text-white/40 font-bold mb-1">
                          /{billing === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-black text-white">Custom</div>
                    )}
                    <p className="text-white/60 text-sm font-medium mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`rounded-full h-12 font-black uppercase tracking-widest text-sm hover:scale-105 transition-all ${btnMap[plan.color]}`}
                  >
                    <Link href="/contact">
                      {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOURLY + SERVICE PRICING ── */}
      <section className="py-24 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-primary font-black uppercase tracking-widest text-xs mb-5">
              <Clock className="h-4 w-4" />
              Flexible Engagements
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Hourly Rates & <span className="text-primary">Service Plans</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Use hourly support for focused tasks, or choose a package when the scope is clear.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 md:p-8"
            >
              <h3 className="text-2xl font-black uppercase tracking-normal text-white mb-6">
                Hourly Pricing
              </h3>
              <div className="space-y-4">
                {hourlyRates.map((item) => (
                  <div key={item.role} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-black uppercase tracking-wider text-white">{item.role}</p>
                        <p className="text-sm text-white/50 font-medium mt-1">{item.note}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary/15 border border-primary/25 px-4 py-2 text-primary font-black">
                        {item.rate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="overflow-x-auto rounded-[2rem] border border-white/10 bg-white/[0.05]"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th className="text-left py-5 px-6 text-white/50 font-black uppercase tracking-widest text-xs">Service</th>
                    <th className="py-5 px-6 text-center text-primary font-black uppercase tracking-widest text-xs">Starter</th>
                    <th className="py-5 px-6 text-center text-secondary font-black uppercase tracking-widest text-xs">Growth</th>
                    <th className="py-5 px-6 text-center text-accent font-black uppercase tracking-widest text-xs">Advanced</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePackages.map((item, i) => (
                    <tr key={item.service} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}`}>
                      <td className="py-5 px-6 text-white font-bold">{item.service}</td>
                      <td className="py-5 px-6 text-center text-white/75 font-black">{item.starter}</td>
                      <td className="py-5 px-6 text-center text-white/75 font-black">{item.growth}</td>
                      <td className="py-5 px-6 text-center text-white/75 font-black">{item.advanced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Compare <span className="text-primary">Plans</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Full feature breakdown so you can pick what's right for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-[2rem] border border-white/10"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="text-left py-5 px-6 text-white/50 font-black uppercase tracking-widest text-xs">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className={`py-5 px-6 text-center font-black uppercase tracking-widest text-xs ${colorMap[p.color]}`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feat, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 ${
                      i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                    } hover:bg-white/[0.05] transition-colors`}
                  >
                    <td className="py-4 px-6 text-white/70 font-bold">
                      {feat.label}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <FeatureCell value={feat.starter} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <FeatureCell value={feat.growth} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <FeatureCell value={feat.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Got <span className="text-secondary">Questions?</span>
            </h2>
            <p className="text-white/60 text-lg">
              Answers to the most common things people ask before getting started.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FaqItem q={faq.q} a={faq.a} />
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
            Still Not Sure? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Let's Talk
            </span>
          </motion.h2>
          <p className="text-white/60 text-xl mb-10 max-w-2xl mx-auto font-bold">
            Book a free 30-minute strategy call. We'll walk you through which
            plan fits your goals — no sales pressure, just honest advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105 transition-all"
            >
              <Link href="/contact">
                Book a Free Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full h-16 px-10 text-xl font-black uppercase tracking-widest border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
