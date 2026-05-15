import { Link } from "wouter";
import { useState } from "react";
import logo from "@assets/shaantik_logo.png";
import { Instagram, Facebook, Twitter, Youtube, Music2, X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
        <div className="container mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3">Ready to grow?</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
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
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-10">

        {/* Logo + 4 columns in one row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">

          {/* Logo column */}
          <div className="flex flex-col gap-5 items-start">
            {/* footer-logo: edit size here → h-40 w-auto */}
            <img
              src={logo}
              alt="Shaantik Logo"
              className="footer-logo h-[200px] w-auto object-contain"              
            />
            <p className="text-white/40 text-xs leading-relaxed">
              Crafting memorable brands, high-performance websites, and growth-driven marketing.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+19993452577" className="flex items-start gap-3 text-white/50 hover:text-primary transition-colors text-sm group">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all mt-0.5">
                  <Phone className="w-3 h-3" />
                </span>
                +1 (999) 345 2577
              </a>
              <a href="mailto:shaantik01@gmail.com" className="flex items-start gap-3 text-white/50 hover:text-primary transition-colors text-sm group">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all mt-0.5">
                  <Mail className="w-3 h-3" />
                </span>
                shaantik01@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </span>
                301 Princes Street,<br />Digital District
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/services",  label: "Services"  },
                { href: "/projects",  label: "Projects"  },
                { href: "/about",     label: "About Us"  },
                { href: "/blog",      label: "Blog"      },
                { href: "/pricing",   label: "Pricing"   },
                { href: "/contact",   label: "Contact"   },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 hover:text-primary font-medium text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-primary transition-all duration-300 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {["Web Development", "Mobile Apps", "Digital Marketing", "Brand Design", "SEO Strategy", "UI/UX Design"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/50 hover:text-primary font-medium text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-primary transition-all duration-300 shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-5">Newsletter</h4>
            <p className="text-white/40 text-sm mb-4 leading-relaxed">
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
        <div className="flex items-center justify-between gap-4 pt-6 text-[11px] text-white/25 font-bold uppercase tracking-widest">

          {/* Copyright — left */}
          <p className="shrink-0">© {new Date().getFullYear()} Shaantik. All Rights Reserved.</p>

          {/* Social icons — center */}
          <div className="flex items-center gap-2">
            {[
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Facebook,  label: "Facebook",  href: "#" },
              { icon: Twitter,   label: "Twitter",   href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Icon className="w-3.5 h-3.5" />
              </a>
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
          <div className="flex items-center gap-6 shrink-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
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
