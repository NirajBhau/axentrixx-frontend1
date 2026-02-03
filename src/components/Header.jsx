import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Products", href: "/products" }, // Hidden - Coming Soon
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Logo - Fully Responsive (Auto-fit all mobile sizes) */}
      <div className="fixed top-3 sm:top-6 left-3 sm:left-6 z-50">
        <a href="/" className="group flex items-center space-x-2 sm:space-x-3">
          {/* Logo - fluid size */}
          <div className="relative rounded-full group-hover:bg-white/10 transition-all duration-200 flex items-center justify-center" style={{ width: 'clamp(38px, 10vw, 58px)', height: 'clamp(38px, 10vw, 58px)' }}>
            <img
              src="/logo.png"
              alt="Axentrixx"
              className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          {/* Text - Hidden on mobile (< 640px) */}
          <span
            className="hidden sm:inline-block font-bold tracking-[0.15em] text-[#D1D5DB] dark:text-[#D1D5DB] transition-colors duration-200 group-hover:text-[#2563EB]"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 'clamp(20px, 2.5vw, 30px)'
            }}
          >
            AXENTRIXX
          </span>
        </a>
      </div>

      {/* Mobile: Hamburger Menu | Desktop: Book Button */}
      <div className="fixed top-3 sm:top-6 right-3 sm:right-6 z-50 flex items-center gap-2">
        {/* Hamburger Menu - Mobile Only (< 640px) */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="sm:hidden p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#60A5FA] hover:bg-white/20 transition-all duration-200 active:scale-90"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Book Button - Desktop Only (640px+) */}
        <a
          href="/book-consultation"
          className="hidden sm:inline-flex items-center font-semibold rounded-full shadow-lg transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] hover:shadow-xl active:scale-95 bg-[#2563EB] text-white"
          style={{
            fontFamily: '"Inter", sans-serif',
            padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
            fontSize: 'clamp(12px, 1.5vw, 14px)'
          }}
        >
          BOOK CONSULTATION
        </a>
      </div>

      {/* Desktop Navbar - Hidden on Mobile (< 640px) */}
      <header className="hidden sm:block fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <nav className="bg-white/10 dark:bg-white/10 backdrop-blur-xl rounded-full border-2 border-[#60A5FA]/30">
          <div className="flex items-center justify-center" style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)', gap: 'clamp(1rem, 2vw, 2rem)' }}>
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-[#60A5FA] hover:text-[#2563EB] transition-all duration-150 ease-in-out active:scale-95 whitespace-nowrap"
                style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Popup Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
