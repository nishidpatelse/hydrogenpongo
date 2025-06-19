import React, { useState, useEffect, useCallback } from 'react';
import desktopImage from '../assets/product-showcase.webp';
import mobileImage from '../assets/product-showcase-mobile.webp';
import arrowRightIcon from '../assets/arrow-right-blue.webp';
import secondMobileImage from '../assets/second-mobile-image.webp';

const helpPetsData = {
  titleLines: [
    "Help pets stay safe.",
    "Earn perks while you're at it."
  ],
  description: "Become a Waggle Ambassador and help more pet parents keep their furry ones safe.",
  button: {
    text: "Join the Pack",
    iconAlt: "Arrow Right",
  },
  images: {
    desktop: desktopImage,
    mobile: mobileImage,
    arrowIcon: arrowRightIcon,
  },
};
                           
const HelpPets = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = '(max-width: 767px)';
    const mediaQuery = window.matchMedia(query);

    const handleChange = (e) => setIsMobile(e.matches);
    handleChange(mediaQuery); 
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const { titleLines, description, button, images } = helpPetsData;

  return (
    <div className="relative py-[28px] px-[20px] md:px-[112px] overflow-hidden">
      <img
        src={isMobile ? images.mobile : images.desktop}
        alt="Waggle Pet Products Background"
        className=" mx-auto !rounded-[26.34px] w-full max-w-[1216px]"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center pt-[40px]">
        <div className="text-center">
          <h2 className="font-tablet-title tablet-title max-w-[19rem] md:max-w-none font-medium mx-auto text-center text-[28.48px] md:text-[56px] pt-[27px] leading-[125%] tracking-[0] text-dark-gray lexend mb-[6px] md:mb-1">
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index !== titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="max-w-[18rem] font-tablet-desc md:max-w-none mx-auto text-center font-normal text-[14px] md:text-[20px] leading-[144%] tracking-[0] lato gray-medium mb-[15px] btn-image-text">
            {description}
          </p>
          <button className="button-hover text-dark-gray font-bold lato text-[16px] leading-[94%] md:leading-[100%] tracking-[0] button1 rounded-[30px] border border-transparent pt-[6px] pr-[6px] pb-[6px] md:pt-[9px] md:pr-[9px] md:pb-[8px] pl-[28px] inline-flex items-center">
            {button.text}
            <div className="ml-[16px] btn-image">
              <img
                src={images.arrowIcon}
                alt={button.iconAlt}
                className="cursor-pointer w-full"
                loading="lazy"
              />
            </div>
          </button>
        </div>
      </div>
      {isMobile && (
        <div className="absolute bottom-7 left-0 right-0 flex justify-center">
          <img
            src={secondMobileImage}
            alt="Second Mobile Image"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default HelpPets;
