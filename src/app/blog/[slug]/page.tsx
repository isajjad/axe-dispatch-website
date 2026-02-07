import { getPostBySlug, urlFor, Post } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";

// Components for PortableText to render images and other types
const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) return null;
            return (
                <div className="relative w-full h-[450px] my-12 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={urlFor(value).width(1200).height(800).url()}
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        },
    },
    block: {
        h2: ({ children }: any) => <h2 className="text-4xl font-bold mt-16 mb-8 text-secondary border-b border-gray-100 pb-4">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-10 mb-5 text-secondary">{children}</h3>,
        normal: ({ children }: any) => <p className="text-gray-800 leading-relaxed mb-8 text-xl font-normal">{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-8 text-gray-800 space-y-3 text-lg font-normal">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside mb-8 text-gray-800 space-y-3 text-lg font-normal">{children}</ol>,
    },
};

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
        <div className="min-h-screen">
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

                <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
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
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {post.body ? (
                                <PortableText value={post.body} components={ptComponents} />
                            ) : (
                                <p className="text-gray-500 italic">No content found for this article.</p>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="mt-20 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center">
                            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Scale Your Trucking Business?</h3>
                            <p className="text-white/70 mb-8 text-lg">Let AXE Dispatch handle your loads while you focus on driving.</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
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
