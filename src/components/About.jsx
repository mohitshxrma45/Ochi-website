import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='w-full  bg-[#CDEA68] rounded-tr-2xl rounded-tl-2xl rounded-l-3xl'>
            <div className='w-full pt-25 pl-15'>
                <h1 className='font-[font5] text-6xl text-zinc-800'>We craft category-defining presentations,
                    brand identities, and digital experiences that drive funding, sales, and market
                    leadership
                </h1>
            </div>
            <div className='w-full mt-15 mb-20 border-t-2 border-zinc-500 '>
                <div className='all3text w-full pt-5 pl-15 text-zinc-700 flex'>
                    <div className='font-[font5] w-1/3 text-2xl'>What you can expect:</div>
                    <div className='w-1/3 flex flex-col gap-10'>
                        <div className='font-[font5] text-2xl'>We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"</div>
                        <div className='font-[font5] text-2xl'>Our clients make the world go round  from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants</div>
                        <div className='font-[font5] text-2xl'>Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo</div>
                    </div>
                    <div className='w-1/3 flex ml-30 flex-col items-center justify-end font-[font5] text-2xl '>
                        <h1>Instagram</h1>
                        <h1>Behance</h1>
                        <h1>Facebook</h1>
                        <h1>Linkdin</h1>
                    </div>

                </div>

            </div>
            <div className=' w-full flex  border-t-2 border-zinc-500 '>
                <div className='w-1/2 mt-5 text-gray-900 ml-15'>
                    <h1 className='font-[font4] text-6xl mb-5 '>How we can help:</h1>
                    <motion.button
                     animate={{text:"#CDEA68"}}
                    transition={{duration:1,repeat:Infinity,repeatType:"reverse"}}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.95}}
                    className='font-[font4] uppercase text-1xl border-2 flex items-center gap-5 bg-gray-900  border-gray-900 rounded-full p-4 text-white '>Read More
                        <div className='h-2 w-2 bg-white rounded-full'></div>
                    </motion.button>
                </div>

                <div className='  relative w-1/2 h-[60vh] mb-30 mt-6 ml-10 mr-20 rounded-3xl'>
                    <div className='absolute '>
                        <img className='object-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default About