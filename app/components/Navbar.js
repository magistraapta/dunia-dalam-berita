import React from 'react'

export default function Navbar() {
  return (
    
    <div className='flex justify-center'>
        <div className='flex justify-between  w-11/12 p-4 items-center'>
        <div className=''>
            <h1 className=' font-bold text-xl'>Dunia Dalam Berita</h1>
        </div>
        <div className=' w-3/12'>
            <ul className=' flex justify-between  '>
                <li>
                    <a href="/detail">CNN</a>
                </li>
                <li>
                    <a href="/detail">Detik</a>
                </li>
                <li>
                    <a href="/detail">Antara</a>
                </li>
                <li>
                    <a href="/detail">Tribun</a>
                </li>
                
            </ul>
        </div>
        <div className=' w-4/12'>
            <input type="text" placeholder='Search...' className='px-2 py-1 w-full border border-black rounded-md'/>
        </div>
    </div>
    </div>
  )
}
