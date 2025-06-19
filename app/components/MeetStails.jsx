import { useState, useRef, useEffect } from 'react';
import pawActive from '../assets/dogleg1.webp';
import pawRegular from '../assets/dogleg2.webp';
import arrowLeft from '../assets/leftarrow.webp';
import arrowRight from '../assets/rightarrow.webp';
import rotateArrow1 from '../assets/rotateArrow1.webp';
import rotateArrow2 from '../assets/rotateArrow2.webp';

const data = {
  images: {
    pawActive,
    pawRegular,
    arrowLeft,
    arrowRight,
    rotateArrow1,
    rotateArrow2,
  },
  timelineData: [
    {
      year: "2006",
      description: "Nimble US is founded in San Diego, <br />focused on wireless design.",
    },
    {
      year: "2007-2008",
      description: "Developed the world's smallest <br />CDMA 1x wireless module.",
    },
    {
      year: "2015-2017",
      description: "Launched our first pet safety product:<br /> the RV Pet Safety Monitor.",
    },
    {
      year: "2018",
      description: "Introduced the first 4G Pet Temperature <br />Monitor in the U.S. Waggle is born.",
    },
    {
      year: "2021-2022",
      description: "10,000+ monitors shipped <br />Launched Vet Chat—25,000+ pet parents helped",
    },
    {
      year: "2023-2024",
      description:
        "Rolled out Pet Camera with Treat Tosser <br />Launched Pet Safety Monitor with Air Quality Sensor <br />80,000+ pet parents trust Waggle across the U.S., Canada, and Australia",
    },
  ],
  textContent: {
    title: "Where Tech Meets Tails",
    paragraph:
      "We didn't start in pet tech—we started in wireless. But as pet parents ourselves, we saw something was missing. No easy way to check in on your pet when you're away. So, we built one.",
  },
};

export default function Meetstails() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevActiveSlide, setPrevActiveSlide] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const [leftArrowImg, setLeftArrowImg] = useState(arrowLeft);
  const [rightArrowImg, setRightArrowImg] = useState(arrowRight);

  const carouselRef = useRef(null);
  const buttonRefs = useRef([]);

  const handlePrevious = () => {
    setPrevActiveSlide(activeSlide);
    setActiveSlide((prev) => (prev === 0 ? data.timelineData.length - 1 : prev - 1));
    setLeftArrowImg(rotateArrow1);
    setRightArrowImg(rotateArrow2);
  };

  const handleNext = () => {
    setPrevActiveSlide(activeSlide);
    setActiveSlide((prev) => (prev === data.timelineData.length - 1 ? 0 : prev + 1));
  };

  const handlePawClick = (index) => {
    setPrevActiveSlide(activeSlide);
    setActiveSlide(index);
  };

  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, data.timelineData.length);
  }, []);

  useEffect(() => {
    if (carouselRef.current && window.innerWidth < 768) {
      const buttonWidth = buttonRefs.current[0]?.offsetWidth || 0;
      const gap = 60;
      const scrollPosition = activeSlide * (buttonWidth + gap);
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [activeSlide]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (leftArrowImg === rotateArrow1) setLeftArrowImg(arrowLeft);
      if (rightArrowImg === rotateArrow2) setRightArrowImg(arrowRight);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [leftArrowImg, rightArrowImg]);

  return (
    <div className="mx-auto md:pt-[41px] pt-[25px] pb-[38px] md:px-28 md:pb-28 w-full max-w-[1440px]">
      <div className="text-center">
        <h2 className="md:text-[47.37px] text-dark-gray text-[28px] font-medium leading-tight px-5 md:mt-4 mt-[15px] lexend">
          {data.textContent.title}
        </h2>
        <p
          className="mt-4 md:mt-5 lato font-normal md:leading-[144%] text-center gray-medium mx-auto md:text-[20.25px] text-[17px] tracking-[0] max-w-[495px] w-full px-[21px] md:px-0"
          dangerouslySetInnerHTML={{ __html: data.textContent.paragraph }}
        />
      </div>

      <div className="relative mt-[38px] md:mt-[38px] px-5 md:px-27">
        <div className="absolute top-1/2 left-0 w-full h-[2px] blue-400 z-0"></div>
        <div
          ref={carouselRef}
          className="flex md:justify-between md:items-center space-x-5 md:space-x-0 py-2 relative gap-[70px] md:gap-0 overflow-x-auto md:overflow-visible scrollbar-hide"
        >
          {data.timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePawClick(index)}
              className="relative flex-shrink-0 md:flex-shrink flex items-center justify-center"
              ref={(el) => (buttonRefs.current[index] = el)}
            >
              <div className="rounded-full flex items-center justify-center">
                <img
                  src={index === activeSlide ? data.images.pawActive : data.images.pawRegular}
                  alt={index === activeSlide ? 'Active Paw' : 'Regular Paw'}
                  loading="lazy"
                  className="cursor-pointer md:w-[48px] md:h-[48px]"
                  width="48"
                  height="48"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-6 px-5 md:px-0">
        <div className="flex flex-col md:flex-col-reverse text-left">
          <p
            className="text-dark-gray font-bold md:font-normal text-[17px] md:text-[23px] leading-[153%] mt-[17px] lato tracking-[0]"
            dangerouslySetInnerHTML={{ __html: data.timelineData[activeSlide].description }}
          />
          <span className="font-medium text-[63px] md:text-[112px] leading-[122%] md:leading-[100%] text-dark-gray lexend mt-[20px] md:mt-10">
            {data.timelineData[activeSlide].year}
          </span>
        </div>
      </div>

      <div className="hidden md:flex justify-end mt-[-53px] space-x-1">
        {['left', 'right'].map((dir) => (
          <button
            key={dir}
            onClick={dir === 'left' ? handlePrevious : handleNext}
            onMouseEnter={() => setHoveredArrow(dir)}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <div className="relative">
              <img
                src={dir === 'left' ? leftArrowImg : rightArrowImg}
                alt={`${dir === 'left' ? 'Left' : 'Right'} Arrow`}
                width="48"
                height="48"
                loading="lazy"
                className="cursor-pointer"
              />
              {hoveredArrow === dir && (
                <div className="absolute inset-0 blue-400 opacity-20 rounded-full"></div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
