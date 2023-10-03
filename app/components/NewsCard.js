import React from 'react';
import Image from 'next/image';
import newsCover from './image-example.webp';



export default async function NewsCard({title, desc, thumbnail, link}) {
  return (
    <div className=' my-4 min-w-[400px] p-2 rounded-md '>
      <a href={link}>
        <div className='w-full rounded-lg flex justify-center items-center'>
          <Image
            alt='news-image'
            src={thumbnail}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            width={400}
            height={400}
            className=' rounded-md'
          />
        </div>
        <div className='mt-2'>
          <h1 className='font-medium'>{title}</h1>
          <div className='mt-2'>
            <p className='font-regular text-xs'>
              {desc}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
