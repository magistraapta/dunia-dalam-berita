import React from 'react'

const list = [
    {
        text: 'ekonomi'
    },
    {
        text: 'Sejarah'
    },
    {
        text: 'Technology'
    },
    {
        text: 'Technology'
    },
    {
        text: 'Technology'
    },
]

export default function page() {
  return (
    <div>
        <ul className='flex flex-row gap-4 overflow-x-auto w-[300px]'>
            {list.map((item, index) => (
                <li className='bg-blue-600 p-2 rounded-lg text-white' key={index}>{item.text}</li>
            ))}
        </ul>
    </div>
  )
}
