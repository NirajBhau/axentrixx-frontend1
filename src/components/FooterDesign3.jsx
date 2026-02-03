import { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowUpRight,
} from "lucide-react";

// NETLIFY FORMS VERSION - No Backend Needed!
function NewsletterForm() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="mb-6">
            {!submitted ? (
                <form
                    name="newsletter"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={() => setTimeout(() => setSubmitted(true), 100)}
                >
                    <input type="hidden" name="form-name" value="newsletter" />
                    <p hidden>
                        <label>Don't fill this out: <input name="bot-field" /></label>
                    </p>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 text-[13px] focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-white text-[#2563EB] rounded-xl hover:bg-gray-100 transition-all font-semibold text-[13px] flex items-center justify-center"
                    >
                        Subscribe Now
                    </button>
                </form>
            ) : (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30 animate-in fade-in zoom-in duration-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-[#2563EB]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">Subscribed!</h4>
                    <p className="text-white/80 text-xs">Thank you for subscribing!</p>
                </div>
            )}
        </div>
    );
}

export default function FooterDesign3() {
    return (
        <footer className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full">
                            <h2 className="text-3xl font-black text-white mb-4 tracking-tight">AXENTRIXX</h2>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                Transforming businesses through innovative technology solutions. We build scalable, modern applications that drive growth.
                            </p>
                            <div className="flex gap-3">
                                <a href="#" className=" w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-[#2563EB] transition-all">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-[#2563EB] transition-all">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-[#2563EB] transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-[#2563EB] transition-all">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links & Services */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <h3 className="text-white font-bold mb-4 text-sm'>QUICK LINKS</h3>
              <ul className="space-y-2">
                            {['About', 'Services', 'Products', 'Case Studies', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white text-[13px] flex items-center group">
                                        <ArrowUpRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h3 className="text-white font-bold mb-4 text-sm">SERVICES</h3>
                        <ul className="space-y-2">
                            {[
                                'Web Development',
                                'Mobile Apps',
                                'Healthcare Systems',
                                'Business Intelligence',
                                'Data Analytics'
                            ].map((item) => (
                                <li key={item}>
                                    <a href="/services" className="text-white/80 hover:text-white text-[13px] flex items-center group">
                                        <ArrowUpRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="lg:col-span-3">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                        <h3 className="text-white font-bold mb-3 text-sm">STAY UPDATED</h3>
                        <p className="text-white/80 text-xs mb-4">Subscribe to get latest updates and insights.</p>
                        <NewsletterForm />
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-white/60 text-xs">Email</p>
                        <p className="text-white text-sm font-semibold">contact@axentrixx.com</p>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-white/60 text-xs">Phone</p>
                        <p className="text-white text-sm font-semibold">+91 1234567890</p>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-white/60 text-xs">Location</p>
                        <p className="text-white text-sm font-semibold">Mumbai, India</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-xs text-center md:text-left">
                    © 2024 Axentrixx. All rights reserved. Built with ❤️ in India.
                </p>
                <div className="flex gap-6 text-xs">
                    <a href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer >
  );
}
