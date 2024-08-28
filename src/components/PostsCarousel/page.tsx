import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import BlogCard from '../BlogCard/page'

interface PostsCarouselProps {
    menu: string,
    title: string,
    slug: string,
}

const blogs = [
    {
        title: 'Food Blog',
        slug: 'food-blog',
        author: 'John Doe',
        category: 'Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        publishedOn: '2023-01-01'
    },
    {
        title: 'Travel Blog',
        slug: 'travel-blog',
        author: 'Jane Doe',
        category: 'Travel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        publishedOn: '2023-01-02'
    },
    {
        title: 'Travel Blog',
        slug: 'travel-blog',
        author: 'John Doe',
        category: 'Travel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        publishedOn: '2023-01-03'
    },
    {
        title: 'Travel Blog',
        slug: 'travel-blog',
        author: 'John Doe',
        category: 'Travel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
        publishedOn: '2023-01-03'
    },
]

function PostsCarousel({ menu, title, slug }: PostsCarouselProps) {
    return (
        <div className='max-w-screen flex py-10 px-10 flex-col'>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-extrabold text-slate-900 mb-3'>{title}</h2>
                <Link href={`/${slug}`}>
                    <Button variant="link" className='text-red-600 rounded-2xl font-semibold'>View All</Button>
                </Link>
            </div>
            <div className='flex gap-3 w-full max-w-screen'>
                {blogs.map((blog) => (
                    <BlogCard key={blog.title} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default PostsCarousel