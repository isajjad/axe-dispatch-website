"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Send,
    Clock,
    ExternalLink
} from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Placeholder for Resend integration
        setTimeout(() => {
            alert("Thank you! Your message has been sent. (Simulation)");
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="pt-24 min-h-screen">
            <section className="py-20 bg-secondary text-white overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Let's Get You <span className="text-primary">Rolling.</span></h1>
                        <p className="text-xl text-gray-400 mb-10 italic">Ready to see the difference AXE Dispatch can make for your bottom line?</p>
                    </motion.div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Contact Information */}
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>

                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                                        <a href="tel:+13079982087" className="text-2xl font-bold hover:text-primary transition-colors">+1 (307) 998-2087</a>
                                        <p className="text-gray-400 mt-2 italic text-sm">Mon - Fri: 8am - 8pm EST</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                                        <a href="mailto:axedispatchllc@gmail.com" className="text-2xl font-bold hover:text-primary transition-colors">axedispatchllc@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Business Office</p>
                                        <p className="text-2xl font-bold italic">Wyoming, USA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-8 bg-accent/50 dark:bg-secondary rounded-[2rem] border border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-4 mb-6">
                                    <Clock className="text-primary" />
                                    <h4 className="font-bold text-lg leading-tight">Fast Response Guarantee</h4>
                                </div>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    We respond to all carrier inquiries within 30 minutes during business hours. Join the fastest-growing dispatch network in the country.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-white dark:bg-secondary shadow-2xl rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-gray-800">
                                <div className="mb-10 flex items-center gap-4">
                                    <MessageSquare className="text-primary" size={32} />
                                    <h3 className="text-3xl font-bold">Inquiry Form</h3>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="full-name">Full Name</label>
                                            <input
                                                required
                                                id="full-name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="phone-number">Phone Number</label>
                                            <input
                                                required
                                                id="phone-number"
                                                type="tel"
                                                placeholder="+1 (000) 000-0000"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="email">Email Address</label>
                                            <input
                                                required
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="truck-type">Truck Type</label>
                                            <select
                                                id="truck-type"
                                                title="Select your truck type"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none appearance-none transition-all italic"
                                            >
                                                <option>Dry Van</option>
                                                <option>Reefer</option>
                                                <option>Flatbed</option>
                                                <option>Step Deck</option>
                                                <option>Box Truck</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="message">Message</label>
                                        <textarea
                                            required
                                            id="message"
                                            placeholder="Tell us about your fleet..."
                                            rows={5}
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-3xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-6 rounded-3xl text-xl flex items-center justify-center gap-4 transition-all transform active:scale-[0.98] disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Message <Send size={24} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[500px] grayscale hover:grayscale-0 transition-all duration-1000 relative">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm border-t-8 border-primary">
                        <MapPin className="text-primary w-12 h-12 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold mb-2 text-secondary">Axe Dispatch LLC</h4>
                        <p className="text-gray-500 mb-4 font-medium italic">Operating Nationwide from Wyoming</p>
                        <Link href="#" className="text-primary font-bold flex items-center justify-center gap-2">
                            Open in Google Maps <ExternalLink size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
