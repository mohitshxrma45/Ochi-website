import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <motion.div initial={{scale:0.5,background:"#fff", opacity:0}}
        animate={{scale:1,background:"#18181b",opacity:1}} 
        transition={{duration:3,delay:0.5}} data-scroll data-scroll-section data-scroll-speed="-.8" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                <div className='masker font-[font3]  uppercase text-9xl'>
                    <h1 className='leading-none -mb-6'>we create</h1>
                </div>
                <div className='masker font-[font3]  flex uppercase gap-3 text-9xl'>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "8vw" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1,delay:3.2 }}  className='bg-center bg-cover bg-[url(https://i.pinimg.com/736x/9b/04/cf/9b04cf1d20ed70815f0f426eb8ca510f.jpg)] w-[8vw]  h-[6vw] mt-7 rounded-md '></motion.div>
                    <h1 className='leading-none -mb-6'>eye-opening</h1>
                </div>
                <div className='masker font-[font3]  uppercase text-9xl'>
                    <h1 className='leading-none'>presentations</h1>
                </div>
            </div>
            <div className='border-t-2 border-zinc-600 mt-16 flex justify-between items-center py-5 px-15'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p key={index} className='text-md font-[font5]  leading-none'>{item}</p>
                )}
                <div className='start flex items-center gap-8'>
                    <motion.div  animate={{y:[0,-4,0]}}
                    transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
                    whileHover={{scale:1.05}} className='cursor-pointer hover:bg-gray-500 shadow-md px-5 py-2 border-2 rounded-full font-[font5]  uppercase border-zinc-600'>Start the project
                    </motion.div >
                    <span className='rotate-[45deg]'>
                        <div className=' hover:bg-gray-500 w-10 flex items-center justify-center h-10 border-2 border-zinc-600 rounded-full'><FaArrowUpLong />
                        </div>
                    </span>

                </div>
            </div>

        </motion.div>
    )
}

export default LandingPage