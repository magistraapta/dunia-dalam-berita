import React from 'react';
import Image from 'next/image';
import newsCover from './image-example.webp';

export default function NewsCard({title, desc}) {
  return (
    <div className=' border my-4 min-w-[400px] p-2 rounded-md '>
      <a href='/detail'>
        <div className='w-full rounded-lg flex justify-center items-center'>
          <Image
            alt='news-image'
            src={newsCover}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
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
