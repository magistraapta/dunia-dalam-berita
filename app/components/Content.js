import React from 'react'
import NewsCard from './NewsCard'

async function getData(category){
    try {
      const res = await fetch(`https://api-berita-indonesia.vercel.app/antara/${category}/`)
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }

export default async function Content({category}) {
  const data = await getData(category)
  const news = data.data.posts
  console.log(news)
    
  return (
    <div className='flex justify-center my-4 '>

        <div className=' w-11/12 px-4   '>

            <h1 className=' font-bold text-2xl'>{category}</h1>
            
            <div className=' flex flex-row gap-2 overflow-x-scroll w-full no-scrollbar  justify-between'>
                {
                    news.map((item, index) => (
                        <NewsCard key={index} title={item.title} desc={item.description} thumbnail={item.thumbnail}/>
                    ))
                }
            </div>
        </div>

    </div>
  )
}
