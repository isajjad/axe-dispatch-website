import { getPosts, Post } from "@/lib/sanity";
import PageHeader from "@/components/PageHeader";
import BlogPostsList from "@/components/BlogPostsList";

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

    return (
        <div className="min-h-screen">
            <PageHeader
                title="The Carrier's Edge Blog"
                description="Expert insights, market analysis, and tips for professional carriers."
            />

            {error ? (
                <div className="container mx-auto px-4 py-24">
                    <div className="text-center py-20">
                        <div className="max-w-md mx-auto">
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">⚠️</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Connection Error</h2>
                            <p className="text-gray-500">Unable to load blog posts. Please check your Sanity configuration.</p>
                        </div>
                    </div>
                </div>
            ) : (
                <BlogPostsList initialPosts={posts} />
            )}

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
