import { Link } from "wouter";
import { useState } from "react";
import logo from "@assets/shaantik_logo.png";
import { Instagram, Facebook, Twitter, Youtube, Music2, X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { servicePages } from "@/data/servicePages";

export default function Footer() {
  const [comingSoonModal, setComingSoonModal] = useState(false);
  const [comingSoonPlatform, setComingSoonPlatform] = useState("");
  const [email, setEmail] = useState("");

  const handleComingSoon = (platform: string) => {
    setComingSoonPlatform(platform);
    setComingSoonModal(true);
  };

  return (
    <footer className="relative bg-[#0a0610] text-white overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px] pointer-events-none -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[140px] pointer-events-none translate-x-1/2" />

      {/* ── CTA BAND ── */}
      <div className="relative border-b border-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="mx-auto md:mx-0">
            <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3">Ready to grow?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] mx-auto md:mx-0">
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Great Together
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-full shadow-[0_0_30px_rgba(var(--primary),0.35)] hover:scale-105 transition-all"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="container mx-auto px-6 pt-12 pb-9 md:pt-16 md:pb-10 lg:px-12">

        {/* Logo + 4 columns in one row */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-5 md:gap-10 mb-10 md:mb-14">

          {/* Logo column */}
          <div className="col-span-2 flex flex-col items-center text-center md:col-span-1 md:items-start md:text-left">
            {/* footer-logo: edit size here → h-40 w-auto */}
            <img
              src={logo}
              alt="Shaantik Logo"
              className="footer-logo h-24 w-auto object-contain md:h-[200px]"              
            />
            <p className="-mt-3 max-w-[19rem] text-white/50 text-sm leading-relaxed md:mt-0 md:max-w-none md:text-xs">
              Crafting memorable brands, high-performance websites, and growth-driven marketing.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center md:col-span-1 md:border-0 md:bg-transparent md:p-0 md:text-left">
            <h4 className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/45 md:mb-4 md:text-[10px] md:tracking-[0.34em] md:text-white/35">Contact</h4>
            <div className="mx-auto grid max-w-[19rem] gap-3 md:mx-0 md:max-w-none">
              <a href="tel:+917986306280" className="flex items-center gap-3 text-left text-white/60 hover:text-primary transition-colors text-sm group">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all mt-0.5">
                  <Phone className="w-3 h-3" />
                </span>
                +91 79863 06280
              </a>
              <a href="mailto:shaantik01@gmail.com" className="flex items-center gap-3 text-left text-white/60 hover:text-primary transition-colors text-sm group">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all mt-0.5">
                  <Mail className="w-3 h-3" />
                </span>
                shaantik01@gmail.com
              </a>
              <div className="flex items-center gap-3 text-left text-white/60 text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </span>
                Digital-first agency<br />Remote &amp; worldwide
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center md:col-span-1 md:border-0 md:bg-transparent md:p-0 md:text-left">
            <h4 className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/45 md:mb-4 md:text-[10px] md:tracking-[0.34em] md:text-white/35">Navigation</h4>
            <ul className="flex flex-col items-center gap-2.5 md:items-start md:gap-3">
              {[
                { href: "/services",  label: "Services"  },
                { href: "/projects",  label: "Projects"  },
                { href: "/about",     label: "About Us"  },
                { href: "/blog",      label: "Blog"      },
                { href: "/pricing",   label: "Pricing"   },
                { href: "/contact",   label: "Contact"   },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-primary font-medium text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-primary transition-all duration-300 shrink-0" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center md:col-span-1 md:border-0 md:bg-transparent md:p-0 md:text-left">
            <h4 className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/45 md:mb-4 md:text-[10px] md:tracking-[0.34em] md:text-white/35">Services</h4>
            <ul className="flex flex-col items-center gap-2.5 md:items-start md:gap-3">
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-white/55 hover:text-primary font-medium text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-primary transition-all duration-300 shrink-0" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 text-center md:col-span-1 md:text-left">
            <h4 className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/45 md:mb-4 md:text-[10px] md:tracking-[0.34em] md:text-white/35">Newsletter</h4>
            <p className="mx-auto max-w-xs text-white/45 text-sm mb-4 leading-relaxed md:mx-0 md:max-w-none">
              Monthly insights on design, dev &amp; growth. No spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs py-3 rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(var(--primary),0.25)]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-5 pt-6 text-center text-[11px] text-white/25 font-bold uppercase tracking-widest md:flex-row md:justify-between md:text-left">

          {/* Copyright — left */}
          <p className="shrink-0">© {new Date().getFullYear()} Shaantik. All Rights Reserved.</p>

          {/* Social icons — center */}
          <div className="flex items-center gap-2">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook,  label: "Facebook"  },
              { icon: Twitter,   label: "X"         },
            ].map(({ icon: Icon, label }) => (
              <button key={label} type="button" onClick={() => handleComingSoon(label)} aria-label={label}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
            <button onClick={() => handleComingSoon("TikTok")} aria-label="TikTok"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Music2 className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => handleComingSoon("YouTube")} aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
              <Youtube className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Legal links — right */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 shrink-0 md:gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>

        </div>

      </div>

      {/* ── COMING SOON MODAL ── */}
      <AnimatePresence>
        {comingSoonModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setComingSoonModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#110b17] border border-white/10 p-8 rounded-3xl max-w-sm w-full text-center overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.2),transparent_50%)] pointer-events-none" />
              <button onClick={() => setComingSoonModal(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                {comingSoonPlatform === "TikTok" ? <Music2 className="w-8 h-8 text-primary" /> : <Youtube className="w-8 h-8 text-primary" />}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">{comingSoonPlatform}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-black text-xl uppercase tracking-widest mb-4">Coming Soon!</p>
              <p className="text-white/60 text-sm">We're building amazing content for our {comingSoonPlatform} channel. Stay tuned!</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
