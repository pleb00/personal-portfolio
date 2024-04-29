"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'
const HeroSection = () => {
    return (
        <section id='home'>
            <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-16 md:flex-row md:space-x-4 md:text-left md:py-32 '>
                <div className='md:w-1/2 md:mt-2'>
                    <Image className='rounded-full shadow-2xl' src="/hero-picture.png" alt='' width={300} height={300}></Image>
                </div>
                <div className='md:mt-2 md:w-3/5 '>
                    <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hi, I am Nuriel!</h1>
                    <p className='text-lg mt-4 mb-6 md:text-xl'>
                        I am a passionate {" "}
                        <span className='font-semibold'>Software Engineer</span>

                        {" "}based in Tangerang, dedicated to JavaScript and constantly inspired to learn and grow.
                    </p>

                    <a
                        href='https://drive.google.com/file/d/1K3EhwbmVFTqzXUDXQmp_7xDbWSJEBEEY/view?usp=drive_link'
                        className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-lg shadow hover:bg-teal-700 md:mr-2'
                    >
                        Resume
                    </a>
                    <Link
                        to='projects'
                        className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded-lg shadow hover:bg-teal-700 md:ml-2'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Projects
                    </Link>
                </div>

            </div>
            <div className='flex flex-row justify-center'>
                <Link
                    to='about'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce mb-10" />
                </Link>
            </div>

        </section>
    )
}

export default HeroSection