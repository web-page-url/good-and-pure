"use client";

import React, { useState } from "react";
import { Section } from "./Section";
import { User, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

function InputField({ label, icon: Icon, type = "text" }: { label: string; icon: any; type?: string }) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="relative group">
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focused || value ? "text-primary scale-75 -translate-y-10 -translate-x-4" : "text-foreground/30"}`}>
                <Icon className="w-5 h-5" />
            </div>
            <input
                type={type}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-12 py-5 text-sm focus:outline-none focus:border-primary/50 transition-all"
                placeholder={focused ? "" : label}
            />
            {focused && (
                <label className="absolute left-12 top-0 -translate-y-1/2 bg-background px-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {label}
                </label>
            )}
        </div>
    );
}

export function ContactSection() {
    return (
        <Section id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Connect</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        Experience Purity <br /> <span className="text-primary italic">In Your Home</span>
                    </h2>
                    <p className="text-lg text-foreground/60 font-light leading-relaxed mb-10">
                        Have questions about our process or bulk orders? We'd love to hear from you.
                        Our team is dedicated to bringing traditional purity to modern kitchens.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-6 glass-card group">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold opacity-30 uppercase tracking-widest">Call Us</p>
                                <p className="text-lg font-bold">+91 9736211316</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 p-6 glass-card group">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold opacity-30 uppercase tracking-widest">Email Us</p>
                                <p className="text-lg font-bold">anubhavchaudhary458@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-10 md:p-16 border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full" />

                    <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <InputField label="Your Name" icon={User} />
                        <InputField label="Phone Number" icon={Phone} type="tel" />
                        <InputField label="Email Address" icon={Mail} type="email" />

                        <div className="relative group">
                            <div className="absolute left-4 top-6 text-foreground/30 group-focus-within:text-primary group-focus-within:scale-75 group-focus-within:-translate-y-8 group-focus-within:-translate-x-4 transition-all duration-300">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <textarea
                                placeholder="How can we help?"
                                rows={4}
                                className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl px-12 py-5 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                            />
                        </div>

                        <button className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all">
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
