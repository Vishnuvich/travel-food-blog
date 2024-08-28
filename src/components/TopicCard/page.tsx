import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'

interface TopicCardProps {
    title: string
    slug: string
    category: string,
}

function TopicCard({ title, slug, category }: TopicCardProps) {
    return (
        <Link href={`/topics/${slug}`}>
            <Card className='rounded-full hover:shadow-2xl transition duration-300 hover:scale-105 hover:bg-slate-200'>
                <CardHeader>
                    <CardTitle className='text-base'>#{title}</CardTitle>
                </CardHeader>
            </Card>
        </Link>
    )
}

export default TopicCard