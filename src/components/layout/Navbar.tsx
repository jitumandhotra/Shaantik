import { useState } from "react";
import { Link, useRoute } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/shaantik_logo.png";

const navLinks = [
  { href: "/services",  label: "Services"  },
  { href: "/projects",  label: "Projects"  },
  { href: "/about",     label: "About Us"  },
  { href: "/blog",      label: "Blog"      },
  { href: "/pricing",   label: "Pricing"   },
  { href: "/contact",   label: "Contact"   },
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-28 items-center justify-between px-4 sm:px-6 lg:px-8 mt-8">

        {/* Left Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-10 pr-12 items-center">
          <NavLink href="/services" label="Services" />
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
          <NavLink href="/blog"    label="Blog"    />
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
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="nav-text-depth text-base font-black text-white uppercase tracking-widest hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
