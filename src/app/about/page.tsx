"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Users, Target, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    { label: "Active Carriers", value: "250+" },
    { label: "Loads Dispatched", value: "10k+" },
    { label: "Carrier Retention", value: "95%" },
    { label: "Years Experience", value: "10+" }
];

const AboutPage = () => {
    return (
        <div className="flex flex-col">
            <PageHeader
                title="Empowering Carriers, One Load at a Time"
                description="AXE Dispatch was founded with a single mission: to provide owner-operators and small fleets with the professional logistical support they need to compete with industry giants."
            />

            {/* Stats Section */}
            <section className="py-12 bg-white -mt-10 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white shadow-2xl rounded-3xl p-10 border border-gray-100 dark:border-gray-800 dark:bg-secondary">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                                <h2 className="text-4xl font-bold mb-6 italic">Built by Truckers, for Truckers.</h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                    <p>
                                        We started as a small team with a background in logistics and trucking. We saw firsthand how difficult it was for independent drivers to manage both the road and the complex administrative requirements of modern freight.
                                    </p>
                                    <p>
                                        AXE Dispatch was born out of the need for a partner who cares as much about your profitability as you do. We don't just find loads; we build careers.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-accent/50 dark:bg-gray-900 rounded-2xl">
                                    <Target className="text-primary mb-4" size={32} />
                                    <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                                    <p className="text-sm text-gray-500">To simplify logistics for carriers through technology-driven dispatching and expert market analysis.</p>
                                </div>
                                <div className="p-6 bg-accent/50 dark:bg-gray-900 rounded-2xl">
                                    <Shield className="text-primary mb-4" size={32} />
                                    <h4 className="text-xl font-bold mb-2">Our Values</h4>
                                    <p className="text-sm text-gray-500">Integrity, transparency, and relentlessly pursuing the best rates for our clients.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                                    alt="Logistics team"
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -z-10 -top-10 -left-10 w-full h-full border-4 border-primary/20 rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Values */}
            <section className="py-24 bg-secondary text-white">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Dedicated to Your Success</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Our dispatchers are trained professionals who understand every aspect of the trucking industry.</p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="text-primary" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
                            <p className="text-gray-400">Single point of contact for all your dispatching needs. Your dispatcher knows your truck, your lanes, and your preferences.</p>
                        </div>
                        <div className="text-center p-8">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="text-primary" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
                            <p className="text-gray-400">Our team undergoes continuous training on market trends and compliance to keep you ahead of the competition.</p>
                        </div>
                        <div className="text-center p-8">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="text-primary" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Risk Management</h3>
                            <p className="text-gray-400">We handle the tough conversations and broker interactions, protecting you from unscrupulous players in the market.</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default AboutPage;
