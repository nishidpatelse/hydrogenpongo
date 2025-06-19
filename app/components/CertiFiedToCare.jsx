import React, { useState, useEffect } from 'react';
import heroImageDesktop from '../assets/CTA.webp';
import heroImageMobile from '../assets/CTA(1).webp';

const data = {
  images: {
    hero: {
      desktop: heroImageDesktop,
      mobile: heroImageMobile,
    },
  },
  textContent: {
    title: "Certified\nto Care",
    buttonText: "Partner with Us",
  },
};

const Certifiedtocare = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const titleLines = data.textContent.title.split('\n');

  return (
    <div className="w-full px-[20px] md:px-[0px] py-[36px] md:py-[63px] relative overflow-hidden rounded-[40px] max-w-[1216px] mx-auto">
      <img
        src={isMobile ? data.images.hero.mobile : data.images.hero.desktop}
        alt="Hero"
        className="w-full h-auto object-cover rounded-[40px]"
        loading="lazy"
      />
      <div className="justify-end px-[36px] py-[20px] bottom-[36px] md:pl-[104px] absolute inset-0 max-w-md flex flex-col  md:justify-center md:text-center md:text-left">
        <span className="text-[28px] md:text-[48px] font-medium white-text-element lexend md:leading-[60px] leading-[139%] mb-[10px] md:mb-[17px]">
          {titleLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </span>
        <button className="w-[190px] button2 button-hover2 light-cream p-4 md:pt-[19px] pr-[32px] md:pb-[22px] pl-[32px] pt-[16px] pb-[13px] rounded-[100px] text-base lato font-bold text-[18px] leading-[100%] tracking-[0]">
          {data.textContent.buttonText}
        </button>
      </div>
    </div>  
  );
};

export default Certifiedtocare;