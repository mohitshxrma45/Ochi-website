import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Eyes2 from './components/Eyes2'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Screen size check
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Resize pe bhi check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-100 text-center p-4">
        <div className="">
          <h1 className="text-3xl font-extrabold mb-4">📵 NOT RESPONSIVE YET </h1>
          <img src="" alt="" />
          <p className="text-lg">📢🍿🎉 WORK ON PROGRESS</p>
        </div>
      </div>
    );
  }


  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900  text-white '>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      {/* <Cards/> */}
      <Eyes2 />
      <Footer />

    </div>
  )
}

export default App