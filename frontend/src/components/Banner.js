import React from 'react';
import { Loader } from './Loader';

export const Banner = () => {
  const title = 'Oscar Estrada \n y construyo cosas\nen internet';
  return (
    <div className="w-full min-h-screen px-custom ">
      <Loader />
      <div className="pt-40 space-y-5">
        <p>> console.log('Hola mundo, me llamo') _</p>
        <h1 className="text-[100px] font-bold leading-custom whitespace-pre-line">
          {title}
          <span>_</span>
        </h1>
      </div>
    </div>
  );
};
