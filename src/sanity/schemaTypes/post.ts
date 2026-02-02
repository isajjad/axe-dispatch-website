import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        {
            name: 'main',
            title: 'Main Content & SEO',
        },
        {
            name: 'advanced',
            title: 'Advanced & Keywords',
        },
        {
            name: 'insights',
            title: 'AI & Insights',
        },
        {
            name: 'social',
            title: 'Social Share',
        },
    ],
    fields: [
        // --- Main Content & SEO ---
        defineField({
            name: 'title',
            title: 'H1 Post Title',
            type: 'string',
            description: 'The primary title of your article (displayed as H1).',
            group: 'main',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: 'The unique web address for this post.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            group: 'main',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'metaTitle',
            title: 'Meta Title (SEO Title)',
            type: 'string',
            description: 'Separate title for Google search results. Recommended: 50-60 characters.',
            group: 'main',
            validation: (Rule) => Rule.max(60).warning('Optimal length is 50-60 characters.'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'The snippet shown in search results. Recommended: 150-160 characters.',
            group: 'main',
            validation: (Rule) => Rule.max(160).warning('Optimal length is 150-160 characters.'),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }], // References the author schema
            group: 'main',
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            group: 'main',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Description for accessibility and SEO.',
                }
            ],
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            group: 'main',
        }),
        defineField({
            name: 'body',
            title: 'Article Body',
            type: 'array',
            group: 'main',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Post Excerpt',
            type: 'text',
            rows: 4,
            description: 'Short summary for the blog list view.',
            group: 'main',
        }),

        // --- Advanced & Keywords ---
        defineField({
            name: 'primaryKeyword',
            title: 'Primary Keyword',
            type: 'string',
            description: 'The main term you want to rank for.',
            group: 'advanced',
        }),
        defineField({
            name: 'secondaryKeywords',
            title: 'Secondary Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'advanced',
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            description: 'Point to the original source if this is cross-posted content.',
            group: 'advanced',
        }),
        defineField({
            name: 'noIndex',
            title: 'Hide from Search (No Index)',
            type: 'boolean',
            initialValue: false,
            group: 'advanced',
        }),

        // --- AI & Insights (Metadata) ---
        defineField({
            name: 'publishedAt',
            title: 'Publish Date',
            type: 'datetime',
            group: 'insights',
        }),
        defineField({
            name: 'lastUpdated',
            title: 'Last Updated Override',
            type: 'datetime',
            group: 'insights',
        }),
        defineField({
            name: 'enableTOC',
            title: 'Enable Table of Contents',
            type: 'boolean',
            initialValue: true,
            group: 'insights',
        }),
        defineField({
            name: 'readingTime',
            title: 'Reading Time (Mins)',
            type: 'number',
            group: 'insights',
        }),
        defineField({
            name: 'searchIntent',
            title: 'Search Intent',
            type: 'string',
            options: {
                list: [
                    { title: 'Informational', value: 'informational' },
                    { title: 'Commercial', value: 'commercial' },
                    { title: 'Transactional', value: 'transactional' },
                    { title: 'Navigational', value: 'navigational' },
                ],
            },
            group: 'insights',
        }),
        defineField({
            name: 'contentFormat',
            title: 'Content Format',
            type: 'string',
            options: {
                list: [
                    { title: 'Standard Article', value: 'standard' },
                    { title: 'How-to Guide', value: 'guide' },
                    { title: 'Listicle', value: 'listicle' },
                    { title: 'Video Post', value: 'video' },
                ],
            },
            group: 'insights',
        }),

        // --- Social Share ---
        defineField({
            name: 'ogImage',
            title: 'Social Share Image (OG Image)',
            type: 'image',
            description: 'Custom image for social media (Facebook, Twitter, LinkedIn). Defaults to Featured Image.',
            group: 'social',
        }),
        defineField({
            name: 'ogTitle',
            title: 'Social Share Title',
            type: 'string',
            description: 'Custom title for social cards. Defaults to Meta Title.',
            group: 'social',
        }),
    ],
})
