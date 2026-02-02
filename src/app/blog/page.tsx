import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPosts, urlFor, Post } from "@/lib/sanity";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    let posts: Post[] = [];
    let error = false;

    try {
        posts = await getPosts();
    } catch (e) {
        console.error("Sanity Fetch Error:", e);
        error = true;
    }

    const hasPosts = posts && posts.length > 0;

    return (
        <div className="pt-24 min-h-screen">
            {/* Search Header */}
            <section className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-8">The Carrier&apos;s Edge Blog</h1>
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

            {/* Posts Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {error ? (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">⚠️</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Connection Error</h2>
                                <p className="text-gray-500">Unable to load blog posts. Please check your Sanity configuration.</p>
                            </div>
                        </div>
                    ) : !hasPosts ? (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-4xl">📝</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4">No Articles Yet</h2>
                                <p className="text-gray-500 mb-6">We&apos;re working on creating valuable content for you. Check back soon!</p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
                                >
                                    Contact Us <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {posts.map((post, idx) => (
                                    <article
                                        key={post._id}
                                        className="group cursor-pointer"
                                        style={{
                                            animation: `fadeSlideDown 0.5s ease-out ${idx * 0.1}s both`
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

                                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="text-gray-500 mb-6 line-clamp-2 italic">
                                                    {post.excerpt}
                                                </p>
                                            )}

                                            <span className="inline-flex items-center gap-2 font-bold text-secondary group-hover:gap-4 transition-all">
                                                Read Full Article <ArrowRight size={18} className="text-primary" />
                                            </span>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
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
}
