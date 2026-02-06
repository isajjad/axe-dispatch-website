"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Trigger entrance animation with a slight delay for better feel
    setTimeout(() => setVisible(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use scroll state for styling transitions locally
  const showSolidHeader = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
        ${visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
      `}
    >
      {/* Floating Container - Stay centered and floating on all pages */}
      <div className={`mx-auto transition-all duration-500 ease-out
        ${scrolled ? "max-w-6xl px-4 pt-2" : "max-w-7xl px-4 pt-4"}
      `}>
        <nav
          className={`relative transition-all duration-500 ease-out
            ${scrolled
              ? "rounded-3xl bg-white/95 shadow-2xl shadow-black/10"
              : "rounded-3xl bg-white/40 shadow-xl shadow-black/5"
            }
            backdrop-blur-xl border border-white/50
          `}
        >
          <div className="px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-500
              ${scrolled ? "h-16" : "h-20"}
            `}>
              {/* Logo */}
              <Link
                href="/"
                className={`flex items-center transition-all duration-500 hover:scale-105 active:scale-95
                  ${scrolled ? "scale-90" : "scale-100"}
                `}
              >
                <div className={`transition-all duration-500 rounded-2xl overflow-hidden
                  ${!showSolidHeader ? "bg-white px-3 py-1.5 shadow-xl" : ""}
                `}>
                  <Image
                    src="/logo.png"
                    alt="AXE Dispatch Logo"
                    width={160}
                    height={45}
                    className="h-8 w-auto"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 font-bold rounded-lg transition-all duration-300 group
                      ${showSolidHeader
                        ? "text-secondary hover:text-primary"
                        : "text-white hover:text-primary drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: visible ? `fadeSlideRight 0.5s ease-out ${index * 0.1}s both` : 'none'
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>

                    {/* Hover Background */}
                    <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />

                    {/* Underline */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-2/3 transition-all duration-300 ease-out rounded-full" />
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  href="tel:+13079982087"
                  className="ml-4 bg-gradient-to-r from-primary to-red-600 text-white px-6 py-2.5 rounded-full font-bold 
                    flex items-center gap-2 shadow-lg shadow-primary/25 
                    hover:shadow-xl hover:shadow-primary/40 hover:scale-105 hover:-translate-y-0.5
                    active:scale-95 transition-all duration-300 ease-out"
                  style={{
                    animation: visible ? 'fadeSlideDown 0.5s ease-out 0.6s both' : 'none'
                  }}
                >
                  <Phone size={16} className="animate-[wiggle_2s_ease-in-out_infinite]" />
                  <span className="hidden lg:inline">+1 (307) 998-2087</span>
                  <span className="lg:hidden">Call</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2.5 rounded-xl transition-all duration-300 
                  ${showSolidHeader
                    ? "text-secondary hover:bg-gray-100"
                    : "text-white bg-white/20 hover:bg-white/30"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ease-out
                    ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"}
                  `} />
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 block w-6 h-0.5 bg-current transition-all duration-300 ease-out
                    ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                  `} />
                  <span className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ease-out
                    ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"}
                  `} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}>
            <div className="px-6 py-4 border-t border-white/10 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-secondary 
                    hover:text-primary hover:bg-gray-50 
                    rounded-xl transition-all duration-300"
                  style={{
                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div
                className="pt-3"
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: isOpen ? '250ms' : '0ms',
                  transition: 'all 0.3s ease-out'
                }}
              >
                <Link
                  href="tel:+13079982087"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 
                    bg-gradient-to-r from-primary to-red-600 text-white font-bold 
                    rounded-xl shadow-lg shadow-primary/25 
                    hover:shadow-xl active:scale-[0.98] transition-all duration-300"
                >
                  <Phone size={20} />
                  +1 (307) 998-2087
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header >
  );
};

export default Navbar;
