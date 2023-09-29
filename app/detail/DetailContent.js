import React from 'react';
import Image from 'next/image';
import newsCover from '../components/image-example.webp';
export default function DetailContent() {
  return (
    <div className=' my-10 flex justify-center px-4'>
      <div className='  w-11/12'>
        <div className='w-[800px] bg-slate-800'>
          <Image src={newsCover} width={800} alt='news cover' />
        </div>
        <div className='py-4 w-10/12'>
            <h1 className='text-2xl font-bold'>title here</h1>
            <div className='mt-4'>
                <p className='font-regular text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
