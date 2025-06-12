'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-24 w-full h-auto text-center'>
      <Image
        src='/logopr.svg'
        alt='Logo PR'
        width={1200}
        height={600}
        className='object-cover w-full h-auto'
      />
      <a className='text-black font-extrabold'>Estamos em desenvolvimento</a>
    </div>
  );
}
