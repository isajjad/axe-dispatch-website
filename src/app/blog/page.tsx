"use client";

import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const dummyPosts = [
    {
        id: 1,
        title: "Market Trends: Predicting Freight Rates for 2026",
        excerpt: "What leading analytical data tells us about the upcoming seasonal shifts in the trucking industry.",
        category: "Market Insights",
        author: "Alex Johnson",
        date: "Feb 01, 2026",
        image: "https://images.unsplash.com/photo-1519003722824-192d9978736b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "5 Tips to Improve Your Fuel Efficiency This Winter",
        excerpt: "Practical advice for owner-operators to maintain their equipment and reduce fuel costs during extreme weather.",
        category: "Driver Tips",
        author: "Sara Mills",
        date: "Jan 28, 2026",
        image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Navigating Broker Credit: A Carrier's Guide",
        excerpt: "How to read credit reports and identify 'red flags' before accepting a load from a new broker.",
        category: "Safety",
        author: "Marcus Reed",
        date: "Jan 15, 2026",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    }
];

const BlogPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Search Header */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-8">The Carrier's Edge Blog</h1>
                        <p className="text-xl text-gray-400 mb-12">Expert insights, market analysis, and tips for professional carriers.</p>

                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-12 focus:bg-white focus:text-secondary outline-none transition-all placeholder:text-gray-500"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {dummyPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-xs font-bold uppercase py-2 px-4 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        {post.author}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 mb-6 line-clamp-2 italic">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all"
                                >
                                    Read Full Article <ArrowRight size={18} className="text-primary" />
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="bg-gray-100 hover:bg-gray-200 dark:bg-secondary dark:hover:bg-gray-800 py-4 px-10 rounded-2xl font-bold transition-all">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-accent/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl font-bold mb-6">Never miss a market update.</h2>
                                <p className="text-white/80 text-lg">Join 5,000+ drivers receiving our weekly market wrap-up and load strategies directly in their inbox.</p>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow bg-white/20 border border-white/30 rounded-2xl py-5 px-8 outline-none placeholder:text-white/60 focus:bg-white focus:text-secondary transition-all"
                                    />
                                    <button className="bg-secondary text-white font-bold py-5 px-10 rounded-2xl hover:bg-black transition-all">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
