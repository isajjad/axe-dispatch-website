import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Define simplified type locally to avoid import issues
export type SanityImageSource = {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
} | any;

export const client = createClient({
    projectId: "2gwgfkkp",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Blog post type
export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    mainImage: SanityImageSource;
    author: {
        name: string;
        image?: SanityImageSource;
    };
    categories: { title: string }[];
    publishedAt: string;
    body?: any[];
}

// Queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  "author": author->{name, image},
  "categories": categories[]->{title},
  publishedAt
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  "author": author->{name, image},
  "categories": categories[]->{title},
  publishedAt,
  body
}`;

// Fetch functions
export async function getPosts(): Promise<Post[]> {
    return client.fetch(postsQuery);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    return client.fetch(postBySlugQuery, { slug });
}
