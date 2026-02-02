import { getPostBySlug, urlFor, Post } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
    return [];
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post: Post | null = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Estimate reading time (average 200 words per minute)
    const readingTime = Math.ceil(JSON.stringify(post.body || []).split(' ').length / 200);

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end">
                <div className="absolute inset-0">
                    {post.mainImage ? (
                        <Image
                            src={urlFor(post.mainImage).width(1920).height(1080).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 pb-16">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={18} /> Back to Blog
                    </Link>

                    {post.categories && post.categories[0] && (
                        <span className="inline-block bg-primary text-white text-sm font-bold uppercase py-2 px-4 rounded-full mb-4">
                            {post.categories[0].title}
                        </span>
                    )}

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/80">
                        {post.author && (
                            <div className="flex items-center gap-3">
                                {post.author.image && (
                                    <Image
                                        src={urlFor(post.author.image).width(80).height(80).url()}
                                        alt={post.author.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                                <span className="font-medium">{post.author.name}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            {readingTime} min read
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {post.excerpt && (
                            <p className="text-xl text-gray-600 dark:text-gray-400 italic border-l-4 border-primary pl-6 mb-12">
                                {post.excerpt}
                            </p>
                        )}

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-500">
                                Full article content will be rendered here once Sanity is configured with PortableText.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-16 p-8 bg-secondary rounded-3xl text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Trucking Business?</h3>
                            <p className="text-white/80 mb-6">Let AXE Dispatch handle your loads while you focus on driving.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all"
                            >
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
