import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle,
  CloudCog,
  Megaphone,
  Monitor,
  Palette,
  Search,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, servicePages } from "@/data/servicePages";
import NotFound from "@/pages/NotFound";

const iconMap = {
  web: Monitor,
  app: Smartphone,
  marketing: Megaphone,
  seo: Search,
  design: Palette,
  devops: CloudCog,
  ai: BrainCircuit,
  salesforce: CloudCog,
};

const colorMap = {
  web: "text-primary border-primary/30 bg-primary/10",
  app: "text-secondary border-secondary/30 bg-secondary/10",
  marketing: "text-accent border-accent/30 bg-accent/10",
  seo: "text-primary border-primary/30 bg-primary/10",
  design: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  devops: "text-primary border-primary/30 bg-primary/10",
  ai: "text-accent border-accent/30 bg-accent/10",
  salesforce: "text-blue-400 border-blue-500/30 bg-blue-500/10",
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const Icon = iconMap[service.id as keyof typeof iconMap];
  const relatedServices = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#110b17] text-white">
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(var(--primary),0.18),transparent_60%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-primary font-black uppercase tracking-widest text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border ${colorMap[service.id as keyof typeof colorMap]}`}
          >
            <Icon className="h-8 w-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mobile-page-hero-title max-w-4xl text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-normal leading-[1.02] mb-6"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="max-w-3xl text-xl md:text-2xl font-bold text-white/72 leading-relaxed"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#171020] p-6 md:p-10 lg:p-12">
              <p className="text-lg md:text-xl leading-8 text-white/72 font-medium mb-10">
                {service.description}
              </p>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-normal mb-6">
                What We Handle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature) => (
                  <div key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-bold text-white/75">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-normal mb-6">
                Business Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4 font-black uppercase tracking-wider text-sm text-white">
                    {outcome}
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">Tech & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-primary/30 bg-primary p-6 text-white">
                <h2 className="text-2xl font-black uppercase tracking-normal mb-3">Ready to scope this?</h2>
                <p className="font-bold text-white/85 mb-6">
                  Send the goal, timeline, and must-haves. We will help you shape the right plan.
                </p>
                <Button asChild className="w-full rounded-full h-12 bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest">
                  <Link href="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-normal mb-8">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 hover:border-primary/40 hover:bg-white/10 transition-colors"
              >
                <p className="text-xl font-black uppercase tracking-normal text-white mb-2">{item.title}</p>
                <p className="text-white/55 font-medium leading-relaxed">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
