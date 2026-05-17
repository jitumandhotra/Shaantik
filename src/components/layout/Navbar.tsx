import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { servicePages } from "@/data/servicePages";
import logo from "@assets/shaantik_logo.png";

const navLinks = [
  { href: "/services",  label: "Services"  },
  { href: "/projects",  label: "Projects"  },
  { href: "/about",     label: "About Us"  },
  { href: "/blog",      label: "Blog"      },
  { href: "/pricing",   label: "Pricing"   },
  { href: "/contact",   label: "Contact"   },
];

const serviceLinks = servicePages.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.title,
}));

const blogLinks = blogPosts.map((post) => ({
  href: `/blog/${post.slug}`,
  label: post.title,
}));

const contactDetails = [
  {
    href: "tel:+917986306280",
    label: "+91 79863 06280",
    icon: Phone,
  },
  {
    href: "mailto:shaantik01@gmail.com",
    label: "shaantik01@gmail.com",
    icon: Mail,
  },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [isActive] = useRoute(href);
  return (
    <Link
      href={href}
      className={`nav-text-depth text-base font-black transition-colors uppercase tracking-widest ${
        isActive ? "text-primary" : "text-white hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}

function NavMenu({ href, label, items }: { href: string; label: string; items: { href: string; label: string }[] }) {
  const [isActive] = useRoute(href);

  return (
    <div className="relative group">
      <Link
        href={href}
        className={`nav-text-depth inline-flex items-center gap-1.5 text-base font-black transition-colors uppercase tracking-widest ${
          isActive ? "text-primary" : "text-white hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 opacity-0 transition-all duration-150 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
        <div className="rounded-2xl border border-white/10 bg-[#110b17]/95 p-3 shadow-xl shadow-black/30">
          <Link
            href={href}
            className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-widest text-primary hover:bg-white/10 transition-colors"
          >
            View All {label}
          </Link>
          <div className="my-2 h-px bg-white/10" />
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm font-bold leading-snug text-white/75 hover:bg-white/10 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 z-50 hidden w-full bg-transparent lg:block">
      <div className="container mx-auto hidden justify-end gap-5 px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        {contactDetails.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="nav-text-depth inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/90 transition-colors hover:text-primary"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </a>
        ))}
      </div>

      <div className="container mx-auto flex h-28 items-center justify-between px-4 sm:px-6 lg:px-8 mt-8">

        {/* Left Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-10 pr-12 items-center">
          <NavMenu href="/services" label="Services" items={serviceLinks} />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/about"    label="About Us" />
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Link href="/" className="flex items-center">
            {/* navbar-logo: edit size here → h-28 md:h-36 */}
            <img
              src={logo}
              alt="Shaantik Logo"
              className="navbar-logo h-28 md:h-36 object-contain"              
            />
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex flex-1 justify-start gap-10 pl-12 items-center">
          <NavMenu href="/blog" label="Blog" items={blogLinks} />
          <NavLink href="/pricing" label="Pricing" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden flex-1 justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <div>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="nav-text-depth text-base font-black text-white uppercase tracking-widest hover:text-primary transition-colors"
            >
              Services
            </Link>
            <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-white/10 pl-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold text-white/65 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks
            .filter(({ href }) => href !== "/services" && href !== "/blog")
            .slice(0, 2)
            .map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="nav-text-depth text-base font-black text-white uppercase tracking-widest hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}

          <div>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="nav-text-depth text-base font-black text-white uppercase tracking-widest hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <div className="mt-3 ml-3 flex max-h-72 flex-col gap-3 overflow-y-auto border-l border-white/10 pl-4 pr-2">
              {blogLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold leading-snug text-white/65 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks
            .filter(({ href }) => href === "/pricing" || href === "/contact")
            .map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="nav-text-depth text-base font-black text-white uppercase tracking-widest hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}

          <div className="mt-2 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-3">
              {contactDetails.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-3 text-sm font-bold text-white/70 transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
