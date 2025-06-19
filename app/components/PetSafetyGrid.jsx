import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import dogImage1 from "../assets/pet_Guide_one.png";
import dogImage2 from "../assets/pet_Guide_two.png";
import dogImage3 from "../assets/pet_Guide_three.png";

const petSafetyContent = {
  title: "The Ultimate Pet Parent Guide",
  articles: [
    {
      title: "Watch Over Your Pet Anytime:",
      description:
        "Remote monitoring lets you check in on your pet, no matter where you are",
      date: "February 1, 2025",
      image: dogImage1,
      alt: "Husky dog with owner",
    },
    {
      title: "Watch Over Your Pet Anytime:",
      description:
        "Remote monitoring lets you check in on your pet, no matter where you are",
      date: "February 1, 2025",
      image: dogImage2,
      alt: "White dog with owner",
    },
    {
      title: "Watch Over Your Pet Anytime:",
      description:
        "Remote monitoring lets you check in on your pet, no matter where you are",
      date: "February 1, 2025",
      image: dogImage3,
      alt: "Golden retriever with owner",
    },
  ],
};

const PetSafetyGrid = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 366;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex) setActiveIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 366;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleResize = () => {
      setIsScrollable(window.innerWidth < 1250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  return (
    <div className="py-[48px] px-[16px] sm:px-6 md:px-[30px] [@media(min-width:1416px)]:px-[112px] [@media(min-width:1416px)]:py-[55px]">
      <div className="max-w-[1216px] w-full mx-auto">
        <p className="lexend font-[400] text-[17px] leading-[100%] tracking-[-0.36px] md:font-medium md:text-[36px] md:leading-[100%] md:tracking-[0] text-center text-dark-gray mb-[28px]">
          {petSafetyContent.title}
        </p>
        <div
          ref={scrollRef}
          className={`
            mb-[16px] transition-all scrollbar-hide
            ${
              isScrollable
                ? "flex flex-row gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                : "grid grid-cols-1 md:grid-cols-3 md:gap-8 overflow-visible"
            }
          `}
        >
          {petSafetyContent.articles.map((item, idx) => (
            <div
              key={idx}
              className={`
                rounded-[40px] overflow-hidden shadow-lg relative mx-auto group
                ${isScrollable ? "flex-shrink-0 w-[360px] h-[380px] snap-start" : ""}
                md:w-auto md:h-auto
              `}
            >
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  className="px-[14px] py-[20px] absolute bottom-[10px] left-[10px] cursor-pointer
                  md:w-[360px] md:h-[200px] rounded-[30px] shadow-md
                  md:px-[30px] md:py-[30px] bg-white transition-all duration-300
                  transform origin-bottom-left group-hover:bg-blue-500
                  group-hover:w-[380px] group-hover:left-0
                  group-hover:bottom-0 group-hover:rounded-b-none"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="lato font-[700] md:font-bold text-[18px] md:text-[20px] leading-[100%] tracking-[0] group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="max-w-[17rem] lato font-medium text-[14px] md:text-[16px] leading-[100%] md:leading-[130%] tracking-[0] mt-[11px] text-[#6C6F73] group-hover:text-white group-hover:text-opacity-90">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-[39px]">
                      <span className="lato font-normal text-[16px] leading-[100%] tracking-[0] text-[#20212470] group-hover:text-white group-hover:text-opacity-70">
                        {item.date}
                      </span>
                      <button className="absolute right-[47px] bottom-[32px] flex items-center justify-center w-[40px] h-[40px] bg-blue-500 rounded-full text-white group-hover:bg-white group-hover:text-blue-500">
                        <ArrowRight className="h-5 w-5 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isScrollable && (
          <div className="flex justify-center gap-4 mb-[24px]">
            {petSafetyContent.articles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === activeIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Scroll to item ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="text-center">
          <button className="inline-flex py-[15.01px] px-[26.69px] lato text-[14px] md:text-[18px] leading-[100%] tracking-[0] items-center md:px-[32px] md:py-[18px] blue-400 white-text-element font-semibold rounded-[100px] button-hover2">
            View All
            <ArrowRight className="ml-2 h-5 w-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetSafetyGrid;
