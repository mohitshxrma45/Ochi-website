import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Features = () => {
  // Refs for all cards
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const textRefs = useRef([]);
  textRefs.current = [];
  const addTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // Card names (order = left1, right1, left2, right2, ...)
  const cardNames = [
    "PHOTOGRAPHY",
    "SONGS",
    "ALL THINGS GO",
    "CARD SPACESHIP",
    "SOFT START",
    "FYDE",
    "AH2 & MATT HORN",
    "VISE",
  ];

  useEffect(() => {
    // Set initial text hidden
    gsap.set(textRefs.current, { opacity: 0, y: 50 });

    refs.current.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.03, duration: 0.4, ease: "power2.out" });
        gsap.to(textRefs.current[index], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.inOut" });
        gsap.to(textRefs.current[index], {
          opacity: 0,
          y: 50,
          duration: 0.4,
          ease: "power2.in",
        });
      });
    });
  }, []);

  // Images for each card
  const cardImages = [
   "https://images.unsplash.com/photo-1759800805660-8bc4595568ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
   "https://plus.unsplash.com/premium_photo-1760269682838-4f7a3d586ad3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
   "https://plus.unsplash.com/premium_photo-1760346161631-6b50290d631f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
   "https://images.unsplash.com/photo-1760340641889-7d215d84bda3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
   "https://plus.unsplash.com/premium_photo-1708589337428-fa10197b5016?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
   "https://plus.unsplash.com/premium_photo-1708589337907-a08302e6ec3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
   "https://images.unsplash.com/photo-1760048388294-44199828d4bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
   "https://images.unsplash.com/photo-1760340641750-e7b9166ef171?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
  ];

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 border-zinc-700 pb-20">
        <h1 className="text-8xl font-[font4]">Featured Projects</h1>
      </div>

      <div data-scroll data-scroll-section data-scroll-speed=".2" className="px-6 space-y-20">
        {/* Loop over rows (2 cards per row) */}
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="relative w-full flex gap-10">
            {/* Left Card */}
            <div
              ref={addToRefs}
              className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer overflow-hidden rounded-4xl flex items-center justify-center"
            >
              <h1
                ref={addTextRefs}
                className="absolute text-[#c7e45c] text-8xl font-[font2] opacity-0"
              >
                {cardNames[row * 2]}
              </h1>
              <div className="card w-full h-full overflow-hidden rounded-4xl">
                <img
                  className="h-full w-full object-cover"
                  src={cardImages[row * 2]}
                  alt={cardNames[row * 2]}
                />
              </div>
            </div>

            {/* Right Card */}
            <div
              ref={addToRefs}
              className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer overflow-hidden rounded-4xl flex items-center justify-center"
            >
              <h1
                ref={addTextRefs}
                className="absolute text-[#c7e45c] text-8xl font-[font2] opacity-0"
              >
                {cardNames[row * 2 + 1]}
              </h1>
              <div className="card w-full h-full overflow-hidden rounded-4xl">
                <img
                  className="h-full w-full object-cover"
                  src={cardImages[row * 2 + 1]}
                  alt={cardNames[row * 2 + 1]}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;