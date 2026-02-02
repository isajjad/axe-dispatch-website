"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MoveLeft, Truck } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-secondary flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative inline-block mb-8">
                        <motion.h1
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="text-[12rem] md:text-[15rem] font-black text-white/5 leading-none select-none"
                        >
                            404
                        </motion.h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    x: [-20, 20, -20],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Truck size={80} className="text-primary" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Oops! Route Not Found
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
                        It looks like this load went off-route. The page you are looking for might have been moved or doesn&apos;t exist.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/"
                            className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                        >
                            <Home size={20} />
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-semibold group"
                        >
                            <MoveLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                            Go Back
                        </button>
                    </div>
                </motion.div>

                {/* Road Line Decoration */}
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent flex justify-around">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-8 h-[2px] bg-white/20" />
                    ))}
                </div>
            </div>
        </div>
    );
}
