import React from 'react'
import { Button } from '../ui/button'
import PostsCarousel from '../PostsCarousel/page'
import TopicsCarousel from '../TopicsCarousel/page'

function HomePage() {
    return (
        <div className='h-full max-w-screen z-10'>
            <div className='home-cover h-screen w-screen flex flex-col items-center justify-center shadow-lg'>
                <h1 className='text-6xl font-extrabold text-white'>Food & Travel Blogs</h1>
                <p className='text-slate-200 text-lg font-semibold text-center mb-3'>
                    A platform for posting food and travel blogs by a variety of users. <br />
                    Start by posting your food blog or travel blog.
                </p>
                <Button className='bg-slate-200 text-slate-900 rounded-2xl p-6 font-semibold transition ease-in-out duration-500 hover:text-slate-200 shadow-2xl'>Create Story</Button>
            </div>
            <div className='px-16'>
                <PostsCarousel menu='Latest Posts' title='Latest Posts' slug='latest-posts' />
                <PostsCarousel menu='Trending Posts' title='#Trending Posts' slug='trending-posts' />
                <TopicsCarousel menu='Trending Topics' title='#Trending Topics' slug='trending-topics' />
            </div>
        </div>
    )
}

export default HomePage