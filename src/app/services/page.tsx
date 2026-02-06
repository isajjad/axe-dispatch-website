"use client";

import { motion } from "framer-motion";
import {
    Truck,
    Map,
    FileText,
    ShieldCheck,
    Headphones,
    TrendingUp,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

const serviceDetails = [
    {
        icon: <Truck size={48} />,
        title: "Truck Dispatching",
        description: "Our core service. We find the best loads for Dry Van, Reefer, Flatbed, and Box Trucks across the USA.",
        features: ["Load search & matching", "Rate negotiation", "Carrier direct booking", "Dedicated dispatchers"],
        color: "bg-blue-500/10 text-blue-500"
    },
    {
        icon: <Map size={48} />,
        title: "Route Optimization",
        description: "Intelligent trip planning to maximize your fuel efficiency and minimize deadhead miles.",
        features: ["Traffic-aware routing", "Fuel stop optimization", "Multi-stop planning", "Back-haul matching"],
        color: "bg-green-500/10 text-green-500"
    },
    {
        icon: <FileText size={48} />,
        title: "Paperwork & Admin",
        description: "We handle all the boring stuff so you can stay focused on driving and safety.",
        features: ["Broker setup setup", "Rate confirmations", "BOL management", "Invoicing & Factoring support"],
        color: "bg-purple-500/10 text-purple-500"
    },
    {
        icon: <ShieldCheck size={48} />,
        title: "Broker Credit Checks",
        description: "Every broker we work with is vetted to ensure you get paid on time, every time.",
        features: ["Real-time credit scoring", "Payment history reports", "Broker vetting", "Zero-risk dispatching"],
        color: "bg-red-500/10 text-red-500"
    },
    {
        icon: <Headphones size={48} />,
        title: "24/7 Support",
        description: "Reliable assistance whenever you're on the road. We are your eyes and ears in the office.",
        features: ["Breakdown coordination", "Driver advocacy", "Detention collection", "Lumper scheduling"],
        color: "bg-yellow-500/10 text-yellow-500"
    },
    {
        icon: <TrendingUp size={48} />,
        title: "Performance Analytics",
        description: "Data-driven insights into your fleet's profitability and market performance.",
        features: ["Monthly RPM reports", "Market rate tracking", "Profit margins analysis", "Growth consulting"],
        color: "bg-teal-500/10 text-teal-500"
    }
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Our Premium Dispatch Services"
                description="Professional, transparent, and results-driven logistics support for modern carriers."
            />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-secondary">
                        {serviceDetails.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-secondary/40 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all h-full flex flex-col"
                            >
                                <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-8`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 ">{service.title}</h3>
                                <p className="text-gray-500 mb-8 flex-grow">{service.description}</p>
                                <ul className="space-y-4 mb-10">
                                    {service.features.map((item, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-between group font-bold text-primary"
                                >
                                    Get Started
                                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                                        <ArrowRight size={20} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialty Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">We Specialize in Every Equipment Type</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {["Dry Van", "Reefer", "Flatbed", "Box Truck", "Step Deck", "Power Only"].map((type) => (
                                    <div key={type} className="bg-white/10 p-4 rounded-xl flex items-center gap-3">
                                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                                        <span className="font-medium">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 border-l-4 border-white/20 pl-12">
                            <p className="text-2xl italic mb-8">
                                "Our technology-first approach means we see market trends before they happen. We move your trucks where the rates are rising."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold">AXE</div>
                                <div>
                                    <p className="font-bold">Operations Team</p>
                                    <p className="text-white/60 text-sm">AXE Dispatch LLC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
