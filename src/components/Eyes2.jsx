import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Eyes2 = () => {


    const [rotate, setRotate] = useState(0)


    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);


        })
    })

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='eyes w-full h-[70vw] rounded-tl-2xl bg-[#CDEA68] rounded-tr-2xl overflow-hidden'>
            <div className='relative h-full w-full bg-cover text-zinc-800 uppercase  font-[font3] text-[20vw]'>
                <div className=' leading-[15vw] text-center mt-50'>
                    <h1>Ready</h1>
                    <h1>to start</h1>
                    <h1>the project?</h1>
                </div>
                <div data-scroll data-scroll-section data-scroll-speed="-.4 "  className=''>
                    <div className=' absolute  flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: ` rotate(${rotate}deg) ` }} className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full font-[font1]'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'> </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: ` rotate(${rotate}deg) ` }} className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full font-[font1]'>
                                <div className='w-6 h-6 rounded-full bg-zinc-100'> </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes2