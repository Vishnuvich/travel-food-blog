import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface BlogCardProps {
    title: string
    slug: string
    author: string
    category: string,
    description: string
    publishedOn: string
}

function BlogCard({ title, slug, author, category, description, publishedOn }: BlogCardProps) {

    const getDate = (val: string) => {
        const date = new Date(val)
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    return (
        <Card className='transition hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg'>
            <CardHeader className='p-0 relative space-y-0'>
                <Badge className='absolute top-0 right-0'>{category}</Badge>
                <Image src={'/images/Carousel3.jpg'} className='rounded-lg rounded-b-none overflow-hidden max-h-48 w-full' alt="food blog" width={400} height={200} style={{ objectFit: 'cover' }} />
                <div className='flex items-center justify-between px-3 pt-3 pb-2'>
                    <Link href={`/blog/${slug}`}>
                        <CardTitle className='text-base font-medium hover:underline'>{title}</CardTitle>
                    </Link>
                    <p className='text-[10px]'>5 min read</p>
                </div>
            </CardHeader>
            <CardContent className='px-3 pb-2'>
                <p className='line-clamp-2 text-xs'>{description}</p>
            </CardContent>
            <CardFooter className='flex items-center justify-between px-3 pt-2 pb-3'>
                <div className='flex items-center gap-2 text-[10px] italic'>
                    <Avatar className='w-7 h-7'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col leading-3 justify-center'>
                        <div>{author}</div>
                        <div>{getDate(publishedOn)}</div>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <CiHeart className='cursor-pointer' size={20} />
                    <CiShare2 className='cursor-pointer' size={20} />
                </div>
            </CardFooter>
        </Card>
    )
}

export default BlogCard