import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navigationItems = [
        { name: "Home", href: "/", icon: "🏠" },
        { name: "About", href: "/about", icon: "ℹ️" },
        { name: "Services", href: "/services", icon: "⚙️" },
        { name: "Careers", href: "/careers", icon: "💼" },
        { name: "Contact", href: "/contact", icon: "📧" },
    ];

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-gradient-to-br from-slate-900 to-slate-800 z-[70] shadow-2xl animate-in slide-in-from-right duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Axentrixx" className="w-10 h-10" />
                        <span className="text-white font-bold text-lg tracking-wide">
                            AXENTRIXX
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={24} className="text-white" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="p-6 space-y-2">
                    {navigationItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            style={{
                                animationDelay: `${index * 50}ms`,
                            }}
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <span className="text-lg font-medium">{item.name}</span>
                        </a>
                    ))}
                </nav>

                {/* Book Consultation CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-black/20">
                    <a
                        href="/book-consultation"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 active:scale-95"
                    >
                        <span>📅</span>
                        <span>Book Consultation</span>
                    </a>
                </div>
            </div>
        </>
    );
}
