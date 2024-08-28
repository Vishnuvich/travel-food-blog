import React from 'react'
import { Input } from '../ui/input'
import Link from 'next/link'

function Header() {
    return (
        <nav className='flex fixed justify-between items-center w-full h-20 px-8 py-2 z-50 text-slate-200 shadow-md bg-black bg-opacity-40 backdrop-blur-sm'>
            <Link href="/">
                <h1 className='text-2xl font-bold'>Food & Travel Blogs</h1>
            </Link>
            <div className='flex items-center gap-16'>
                <div className='global-search'>
                    <Input placeholder='Search' className='rounded-2xl bg-transparent border-slate-300 text-slate-200 placeholder:text-slate-200' />
                </div>
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
        </nav>
    )
}

export default Header