"use client";

import React from "react";
import { Droplet, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-white">
                        <Droplet className="w-8 h-8 text-primary fill-primary" />
                        <span className="text-2xl font-bold tracking-tighter">Good & Pure</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Golden Drops of Tradition. We bring you the purest cold-pressed mustard oil, extracted using time-honored wooden ghani methods.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Youtube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        {["Home", "Our Oil", "Benefits", "Process", "Shop", "Privacy Policy"].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-primary transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>[anubhavchaudhary458@gmail.com]</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+91 9736211316</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Traditional Farm, Rajasthan, India</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Stay Pure</h4>
                    <p className="text-sm mb-4">Subscribe for health tips and exclusive offers.</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="absolute right-1 top-1 bottom-1 bg-primary text-primary-foreground px-4 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2026 Good & Pure. All rights reserved.</p>
                <p className="flex items-center gap-1">
                    Created with <span className="text-primary">♥</span> by Anubhav
                </p>
            </div>
        </footer>
    );
}
