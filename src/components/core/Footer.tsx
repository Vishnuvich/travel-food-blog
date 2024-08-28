import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className='flex flex-col justify-center px-36 py-10 min-h-24 bg-slate-900 text-white shadow-2xl'>
            <div className='flex items-center justify-between pb-5 border-b border-b-slate-600'>
                <Link href="/">
                    <h1 className='text-2xl font-bold'>Food & Travel Blogs</h1>
                </Link>
                <div className='flex items-center gap-16'>
                    <ul className='flex items-center gap-16'>
                        <Link href='/'>
                            <li className='hover:text-slate-700 transition-all ease-in-out duration-200'>Home</li>
                        </Link>
                        <Link href='/food'>
                            <li className='hover:text-slate-700 transition-all ease-in-out duration-200'>Food</li>
                        </Link>
                        <Link href="/travel">
                            <li className='hover:text-slate-700 transition-all ease-in-out duration-200'>Travel</li>
                        </Link>
                        <Link href="/contact">
                            <li className='hover:text-slate-700 transition-all ease-in-out duration-200'>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-center gap-7 py-5'>
                <Link href="https://github.com/shadcn/food-travel-blogs">
                    <FaInstagram className='transition hover:scale-125 duration-300' size={25} />
                </Link>
                <Link href="https://twitter.com/shadcn">
                    <FaTwitter className='transition hover:scale-125 duration-300' size={25} />
                </Link>
                <Link href="https://www.facebook.com/shadcn">
                    <FaFacebook className='transition hover:scale-125 duration-300' size={25} />
                </Link>
                <Link href="https://www.youtube.com/shadcn">
                    <FaYoutube className='transition hover:scale-125 duration-300' size={25} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer