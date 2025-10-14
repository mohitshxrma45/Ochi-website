import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen py-10 rounded-tl-4xl rounded-tr-4xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 overflow-hidden mb-20 mt-20 border-gray-500 flex whitespace-nowrap'>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:8}} className='uppercase leading-none font-[font2] -mb-[3vw] -mt-[6vw] font-semibold pr-20 text-[27vw]'>we are ochi
        </motion.h1>
        <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:8}} className='uppercase leading-none font-[font2] -mb-[3vw] -mt-[6vw] font-semibold pr-20 text-[27vw]'>we are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee