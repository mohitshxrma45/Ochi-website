import { motion } from 'framer-motion'
import React from 'react'

const Cards = () => {
        return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2"  className='w-full h-screen flex items-center px-14 gap-5 bg-zinc-100'>
            <div className='cardContainer h-[60vh] w-1/2 '>
                <div className='card relative rounded-2xl w-full h-full bg-[#164841] flex items-center justify-center'>
                    <img className='w-42' src="src/svg/logo001.svg" alt="" />
                    <motion.button animate={{y:[0,-4,0]}}
                    transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
                    whileHover={{scale:1.05}}  className='hover:bg-zinc-600 transiton-all ease-in-out absolute left-10 bottom-10 border-2 text-[#CDEA68]  px-5 rounded-full py-1'>&copy;2025-2026

                    </motion.button>
                </div>
            </div>
            <div className='cardContainer flex  gap-5 w-1/2 h-[60vh] '>
                <div className='card relative rounded-2xl w-1/2 h-full flex items-center justify-center bg-zinc-900'>
                    <img className='w-42' src="https://media.istockphoto.com/id/940386832/photo/customer-satisfaction-stars.webp?a=1&b=1&s=612x612&w=0&k=20&c=TptUb4IWkgALDMx-Uc_KfoATq-5SQ-EBb82lNvS70gA=" alt="" />
                    <motion.button animate={{y:[0,-4,0]}}
                    transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
                    whileHover={{scale:1.05}}  className='hover:bg-zinc-600 transiton-all ease-in-out absolute left-10 bottom-10 text-[#d6d9c9] border-2 px-5 rounded-full py-1'>RATING 5.0 ON CLUTCH

                    </motion.button>
                </div>
                <div className='card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-zinc-800'>
                    <img className='w-28' src="src/svg/logo003.png" alt="" />
                    <motion.button animate={{y:[0,-4,0]}}
                    transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
                    whileHover={{scale:1.05}}  className='hover:bg-zinc-600 transiton-all ease-in-out absolute left-10 bottom-10 text-[#d4d6ca] border-2 px-9 leading-none tracking-tighter rounded-full py-1'>BUSINESS BOOTCAMP <br /> ALUMNI
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default Cards