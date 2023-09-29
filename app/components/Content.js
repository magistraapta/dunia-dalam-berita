import React from 'react'
import NewsCard from './NewsCard'
import { list } from 'postcss'
import { error } from 'console'

const news = [
    {
        title: 'title here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
    },
    {
        title: 'title here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
    },
    {
        title: 'title here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
    },
    {
        title: 'title here',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.'
    },
    
    
    
]



export default async function Content({category}) {
    const data = await getData()
  return (
    <div className='flex justify-center my-4 '>
        <div className='h-[400px] w-11/12   p-4 '>
            <h1 className=' font-bold text-2xl'>{category}</h1>
            
            <div className='mt-2 flex w-full flex-row gap-4 justify-between overflow-x-scroll'>
                {
                    news.map((item, index) => (
                        <NewsCard key={index} title={item.title} desc={item.desc}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
