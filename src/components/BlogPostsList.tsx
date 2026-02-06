"use client";

import { useState, useMemo } from "react";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor, Post } from "@/lib/sanity";

interface BlogPostsListProps {
    initialPosts: Post[];
}

export default function BlogPostsList({ initialPosts }: BlogPostsListProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = useMemo(() => {
        if (!searchTerm.trim()) return initialPosts;

        const term = searchTerm.toLowerCase();
        return initialPosts.filter(post =>
            post.title.toLowerCase().includes(term) ||
            post.excerpt?.toLowerCase().includes(term) ||
            post.categories?.some(cat => cat.title.toLowerCase().includes(term))
        );
    }, [searchTerm, initialPosts]);

    return (
        <>
            {/* Search Bar */}
            <div className="bg-secondary pb-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-12 focus:bg-white focus:text-secondary outline-none transition-all placeholder:text-gray-500 text-white"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
            </div>

            {/* Posts Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">🔍</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4">No Matches Found</h2>
                                <p className="text-gray-500 mb-6">We couldn&apos;t find any articles matching &quot;{searchTerm}&quot;. Try different keywords.</p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Clear Search
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {filteredPosts.map((post, idx) => (
                                <article
                                    key={post._id}
                                    className="group cursor-pointer"
                                    style={{
                                        animation: `fadeSlideRight 0.5s ease-out ${idx * 0.1}s both`
                                    }}
                                >
                                    <Link href={`/blog/${post.slug.current}`}>
                                        <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                                            {post.mainImage ? (
                                                <Image
                                                    src={urlFor(post.mainImage).width(800).height(600).url()}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                                    <span className="text-6xl">📄</span>
                                                </div>
                                            )}
                                            {post.categories && post.categories[0] && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary text-white text-xs font-bold uppercase py-2 px-4 rounded-full">
                                                        {post.categories[0].title}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                            {post.author && (
                                                <div className="flex items-center gap-1">
                                                    <User size={14} />
                                                    {post.author.name}
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight text-secondary">
                                            {post.title}
                                        </h3>
                                        {post.excerpt && (
                                            <p className="text-gray-600 mb-6 line-clamp-2 italic">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        <span className="inline-flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all group-hover:text-primary">
                                            Read Full Article <ArrowRight size={18} className="text-primary" />
                                        </span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
