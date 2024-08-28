import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import TopicCard from '../TopicCard/page'

interface TopicsCarouselProps {
    menu: string,
    title: string,
    slug: string,
}

const topics = [
    {
        title: 'Food',
        slug: 'food',
        category: 'Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
        title: 'Travel',
        slug: 'travel',
        category: 'Travel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
]

function TopicsCarousel({ menu, title, slug }: TopicsCarouselProps) {
    return (
        <div className='max-w-screen flex py-10 px-10 flex-col'>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-extrabold text-slate-900 mb-3'>{title}</h2>
                <Link href={`/${slug}`}>
                    <Button variant="link" className='text-red-600 rounded-2xl font-semibold'>View All</Button>
                </Link>
            </div>
            <div className='flex gap-3 w-full max-w-screen'>
                {topics.map((blog) => (
                    <TopicCard key={blog.title} {...blog} />
                ))}
            </div>
        </div>
    )
}

export default TopicsCarousel