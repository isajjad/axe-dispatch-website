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
import { sendContactEmail } from "../actions";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const result = await sendContactEmail(formData);

        if (result.success) {
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen">
            <PageHeader
                title="Let's Get You Rolling."
                description="Ready to see the difference AXE Dispatch can make for your bottom line?"
            />

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
                                        <a href="mailto:info@axedispatch.com" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">info@axedispatch.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Business Office</p>
                                        <p className="text-xl md:text-2xl font-bold italic">30 N Gould St Ste R Sheridan, WY 82801, USA</p>
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
                                                name="name"
                                                id="full-name"
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="phone-number">Phone Number (Optional)</label>
                                            <input
                                                name="phone"
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
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500 ml-2" htmlFor="truck-type">Truck Type</label>
                                            <select
                                                name="truckType"
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
                                            name="message"
                                            id="message"
                                            placeholder="Tell us about your fleet..."
                                            rows={5}
                                            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-3xl py-5 px-8 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={status === "loading" || status === "success"}
                                        className={`w-full font-bold py-6 rounded-3xl text-xl flex items-center justify-center gap-4 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
                                            ${status === "success" ? "bg-green-600 text-white hover:bg-green-700" : "bg-primary hover:bg-red-700 text-white"}
                                        `}
                                    >
                                        {status === "loading" ? (
                                            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : status === "success" ? (
                                            <>Message Sent! <Send size={24} /></>
                                        ) : (
                                            <>Send Message <Send size={24} /></>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-red-500 text-center font-bold">Failed to send message. Please try again.</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="h-[500px] w-full relative">
                <iframe
                    title="Google Map Location of Axe Dispatch LLC"
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R%20Sheridan%2C%20WY%2082801%2C%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>

                {/* Overlay Card */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border-l-4 border-primary">
                    <MapPin className="text-primary w-8 h-8 mb-2" />
                    <h4 className="text-xl font-bold text-secondary">Axe Dispatch LLC</h4>
                    <p className="text-gray-500 text-sm mb-3">30 N Gould St Ste R<br />Sheridan, WY 82801</p>
                    <a
                        href="https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R%20Sheridan%2C%20WY%2082801%2C%20USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold text-sm flex items-center gap-2 hover:underline"
                    >
                        Get Directions <ExternalLink size={14} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
