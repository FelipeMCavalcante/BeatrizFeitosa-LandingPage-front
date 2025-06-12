'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-24 w-full h-screen flex flex-col items-center justify-center gap-6 text-center px-4 bg-gradient-to-b from-white to-gray-100'>
      <Image
        src='/logopr.svg'
        alt='Logo PR'
        width={250}
        height={150}
        className='animate-fade-in-up'
        priority
      />

      <h1 className='text-3xl md:text-4xl font-bold text-gray-800 animate-fade-in-up delay-100'>
        Um novo conceito está chegando...
      </h1>

      <p className='text-lg text-gray-600 max-w-md animate-fade-in-up delay-200'>
        Estamos trabalhando para trazer uma experiência incrível para você.
      </p>

      <div className='mt-4 animate-pulse'>
        <span className='inline-block bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md'>
          Em desenvolvimento
        </span>
      </div>
    </div>
  );
}
