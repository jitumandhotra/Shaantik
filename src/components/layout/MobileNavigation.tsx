import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  Cloud,
  Code2,
  LayoutGrid,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  Search,
  Smartphone,
  X,
} from "lucide-react";
import logo from "@assets/shaantik_logo.png";
import { servicePages } from "@/data/servicePages";
import { blogPosts } from "@/data/blogPosts";

const phoneHref = "tel:+917986306280";
const whatsappHref = "https://wa.me/917986306280";
const emailHref = "mailto:shaantik01@gmail.com";

const serviceIcons = {
  web: Code2,
  app: Smartphone,
  marketing: Search,
  seo: Search,
  design: Palette,
  devops: Cloud,
  ai: Bot,
  salesforce: BriefcaseBusiness,
};

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNavigation() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuServicesOpen, setMenuServicesOpen] = useState(false);
  const [menuBlogOpen, setMenuBlogOpen] = useState(false);

  const featuredServices = useMemo(() => servicePages.slice(0, 5), []);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMenuServicesOpen(false);
    setMenuBlogOpen(false);
  };

  useEffect(() => {
    closeAll();
  }, [location]);

  useEffect(() => {
    const shouldLock = menuOpen || servicesOpen;
    document.body.style.overflow = shouldLock ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, servicesOpen]);

  const toggleServices = () => {
    setServicesOpen((open) => !open);
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
    setServicesOpen(false);
  };

  return (
    <div className="lg:hidden">
      <div
        className="shaantik-mobile-fixed fixed left-0 top-0 z-[70] overflow-hidden border-b border-white/10 bg-[#0b0611]/95 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        style={{ width: "100vw", maxWidth: "100vw" }}
      >
        <div className="shaantik-mobile-header-grid grid grid-cols-[74px_minmax(0,1fr)_40px] items-center gap-2 px-3 py-2">
          <Link href="/" onClick={closeAll} className="flex min-w-0 items-center" aria-label="Shaantik home">
            <img src={logo} alt="Shaantik Logo" className="shaantik-mobile-logo h-12 w-[70px] object-contain object-left" />
          </Link>

          <div className="flex min-w-0 flex-col gap-1.5">
            <a
              href={phoneHref}
              className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-primary/50 bg-white/[0.06] px-2.5 py-1 text-[9px] font-black uppercase tracking-normal text-white"
            >
              <Phone className="h-3 w-3 shrink-0 text-primary" />
              <span className="shrink-0 text-white/55">Call</span>
              <span className="min-w-0 truncate text-primary">+91 79863 06280</span>
            </a>
            <a
              href={emailHref}
              className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-secondary/45 bg-white/[0.06] px-2.5 py-1 text-[9px] font-black uppercase tracking-normal text-white"
            >
              <Mail className="h-3 w-3 shrink-0 text-secondary" />
              <span className="shrink-0 text-white/55">Email</span>
              <span className="min-w-0 truncate text-secondary">shaantik01@gmail.com</span>
            </a>
          </div>

          <button
            type="button"
            onClick={openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary shadow-[0_0_16px_rgba(255,0,128,0.18)]"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto border-t border-white/10 bg-gradient-to-r from-primary via-[#7a00ff] to-secondary px-4 py-2 text-[11px] font-black uppercase tracking-wider text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
          <span className="shrink-0">Remote</span>
          <span className="text-white/60">|</span>
          <span className="shrink-0">India</span>
          <span className="text-white/60">|</span>
          <span className="shrink-0">USA</span>
          <span className="text-white/60">|</span>
          <span className="shrink-0">UK</span>
          <span className="text-white/60">|</span>
          <span className="shrink-0">Worldwide</span>
        </div>
      </div>

      <div
        className={`shaantik-mobile-fixed shaantik-mobile-bottom-width fixed left-0 bottom-[76px] z-[65] border-t border-white/10 bg-[#100919]/95 px-3 py-4 shadow-[0_-18px_45px_rgba(0,0,0,0.45)] transition-all duration-200 ${
          servicesOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
        style={{ width: "100vw", maxWidth: "100vw" }}
      >
        <div className="flex justify-between gap-2">
          {featuredServices.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || LayoutGrid;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex min-w-0 flex-1 flex-col items-center gap-1.5 rounded-xl p-1.5 text-center text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_16px_rgba(255,0,128,0.35)]">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="line-clamp-2 text-[9px] font-black uppercase leading-tight tracking-normal">
                  {service.title.replace(" Development", "").replace(" Consulting", "")}
                </span>
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setServicesOpen(false)}
          className="absolute right-2 top-2 rounded-full bg-black/40 p-1 text-white/60"
          aria-label="Close services"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[80] bg-black/65 transition-opacity duration-200 ${
          servicesOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setServicesOpen(false)}
      >
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[78vh] overflow-y-auto rounded-t-3xl border border-white/10 bg-[#110b17] px-4 pb-28 pt-5 shadow-2xl transition-transform duration-200 ${
            servicesOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary">Explore</p>
              <h3 className="text-xl font-black uppercase tracking-normal text-white">Our Services</h3>
            </div>
            <button
              type="button"
              onClick={() => setServicesOpen(false)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white"
              aria-label="Close services"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {servicePages.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || LayoutGrid;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-black uppercase leading-tight tracking-normal text-white">{service.title}</h4>
                  <p className="mt-2 line-clamp-2 text-[11px] font-semibold leading-snug text-white/55">{service.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[75] bg-black/65 transition-opacity duration-200 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeAll}
      />
      <aside
        className={`fixed right-0 top-0 z-[85] h-dvh w-[82vw] max-w-[330px] overflow-y-auto border-l border-white/10 bg-[#100919] shadow-2xl transition-transform duration-200 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary px-5 py-5 text-white">
          <h3 className="text-xl font-black uppercase tracking-normal">Menu</h3>
          <button type="button" onClick={closeAll} aria-label="Close menu" className="rounded-full bg-black/20 p-1.5">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="divide-y divide-white/10">
          {mainLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMenuServicesOpen((open) => !open)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-black uppercase tracking-wider text-white"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${menuServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`${menuServicesOpen ? "block" : "hidden"} bg-black/20 px-5 pb-4`}>
                    <Link href="/services" className="block py-2 text-sm font-bold text-primary">
                      View All Services
                    </Link>
                    {servicePages.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-sm font-semibold text-white/65"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (link.href === "/blog") {
              return (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMenuBlogOpen((open) => !open)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-black uppercase tracking-wider text-white"
                  >
                    Blog
                    <ChevronDown className={`h-4 w-4 transition-transform ${menuBlogOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`${menuBlogOpen ? "block" : "hidden"} max-h-72 overflow-y-auto bg-black/20 px-5 pb-4`}>
                    <Link href="/blog" className="block py-2 text-sm font-bold text-primary">
                      View All Blog
                    </Link>
                    {blogPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="block py-2 text-sm font-semibold leading-snug text-white/65">
                        {post.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href} className="block px-5 py-4 text-sm font-black uppercase tracking-wider text-white">
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="space-y-3 px-5 py-5">
          <Link
            href="/contact#contact-form"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-black uppercase tracking-wider text-white"
          >
            <Rocket className="h-4 w-4" />
            Start Project
          </Link>
          <a href={phoneHref} className="flex items-center gap-3 text-sm font-bold text-white/70">
            <Phone className="h-4 w-4 text-primary" />
            +91 79863 06280
          </a>
          <a href={emailHref} className="flex items-center gap-3 text-sm font-bold text-white/70">
            <Mail className="h-4 w-4 text-secondary" />
            shaantik01@gmail.com
          </a>
        </div>
      </aside>

      <div
        className="shaantik-mobile-fixed fixed left-0 bottom-0 z-[90] overflow-hidden border-t border-white/10 bg-[#0b0611] pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.55)]"
        style={{ width: "100vw", maxWidth: "100vw" }}
      >
        <div className="grid h-[76px] w-full items-stretch" style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
          <Link href="/contact#contact-form" className="flex min-w-0 flex-col items-center justify-center gap-1 text-[8px] font-black uppercase tracking-normal text-white/65">
            <Rocket className="h-5 w-5" />
            <span className="truncate">Book Now</span>
          </Link>
          <button
            type="button"
            onClick={toggleServices}
            className={`flex min-w-0 flex-col items-center justify-center gap-1 text-[8px] font-black uppercase tracking-normal ${
              servicesOpen ? "text-primary" : "text-white/65"
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
            <span className="truncate">Services</span>
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-0.5 my-2 flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl bg-[#25D366] text-[8px] font-black uppercase tracking-normal text-white shadow-[0_0_18px_rgba(37,211,102,0.35)]"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="truncate">WhatsApp</span>
          </a>
          <a href={phoneHref} className="flex min-w-0 flex-col items-center justify-center gap-1 text-[8px] font-black uppercase tracking-normal text-white/65">
            <Phone className="h-5 w-5" />
            <span className="truncate">Call Us</span>
          </a>
          <button type="button" onClick={openMenu} className="flex min-w-0 flex-col items-center justify-center gap-1 text-[8px] font-black uppercase tracking-normal text-primary">
            <Menu className="h-5 w-5" />
            <span className="truncate">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
