import React from 'react'

export default function Navbar() {
  return (
    
    <header className='flex justify-center shadow-md sticky top-0 bg-white'>
        <div className='flex justify-between  w-11/12 p-6 items-center'>
        <div className=''>
            <h1 className=' font-bold text-xl'><a href="/">Dunia Dalam Berita</a></h1>
        </div>
        <div className=' w-3/12'>
            <ul className=' flex justify-between  '>
                <li>
                    <a href="/category">CNN</a>
                </li>
                <li>
                    <a href="/category">Detik</a>
                </li>
                <li>
                    <a href="/category">Antara</a>
                </li>
                <li>
                    <a href="/category">Tribun</a>
                </li>
                
            </ul>
        </div>
        <div className=' w-4/12'>
            <input type="text" placeholder='Search...' className='px-2 py-1 w-full border border-black rounded-md'/>
        </div>
    </div>
    </header>
  )
}
