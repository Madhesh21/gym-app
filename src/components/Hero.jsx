import React from 'react'
import Button from './Button';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-10 max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          IT'S TIME TO GET
        </p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-lg font-light">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="font-medium text-blue-400">mass montrosity</span>
        ,afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <Button text={"Accept & Begin"}></Button>
    </div>
  );
}
