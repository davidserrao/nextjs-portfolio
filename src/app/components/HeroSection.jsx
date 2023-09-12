"use client";
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';


 

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:mt-10">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-50">Hello, I'm {""}</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'David',
                            1500, 
                            'a CS student',
                            1000,
                            'a developer',
                            1000,
                            'a designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div>
                    <a href="https://www.linkedin.com/in/davidserrao-/" target="_blank">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-blue-500 hover:bg-slate-200 hover:text-black hover:border  text-white">
                            LinkedIn
                        </button>
                    </a>
                    <a href="/assets/DavidSerraoResume.pdf" download>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 to-blue-50 hover:bg-slate-800 text-white mt-3">
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 sm:mt-0'>
                <div className="rounded-full bg-[#212121] w-[250px] h-[250px] lg:w-[325px] lg:h-[325px] relative">
                    <Image
                        src="/images/hero-image.PNG"
                        alt="picture-of-me-:)"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={325}
                        height={325}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection