"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
    return (
        <section className="bg-secondary text-white pt-36 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed italic">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
