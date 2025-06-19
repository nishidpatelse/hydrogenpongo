import React from 'react';
import heartIcon from '../assets/shield-icon.webp'; 
import toggleIcon from '../assets/toggle-icon.webp'; 
import shieldIcon from '../assets/heart-icon.webp'; 
import heroSectionDesktop from '../assets/hero-section2.webp'; 
import heroSectionMobile from '../assets/hero-section-mobile.webp';

const data = {
  images: { 
    heartIcon, 
    toggleIcon, 
    shieldIcon, 
    heroSectionDesktop,
    heroSectionMobile
  },
  textContent: {
    heading: "Partner with Waggle.",
    description: "Whether you're reselling, sharing it with your followers, or teaming up on something bigger—this is for folks who care about pets and want to do some real good."
  },
  features: [
    {
      id: "feature1",
      icon: "heartIcon",
      iconAlt: "Heart with checkmark",
      title: "Help More Pets Stay Safe",
      description: "Every recommendation helps keep more pets safe and parents worry-free."
    },
    {
      id: "feature2", 
      icon: "toggleIcon",
      iconAlt: "Toggle switches",
      title: "Do Good, Feel Good",
      description: "Our partners promote products that genuinely improve pets' lives."
    },
    {
      id: "feature3",
      icon: "shieldIcon",
      iconAlt: "Shield with checkmark", 
      title: "Earn More as You Grow",
      description: "Grow your reach, help more pets, and get rewarded along the way."
    }
  ],
  heroImage: {
    desktop: {
      src: "heroSectionDesktop",
      alt: "Partner with Waggle - People working with pets"
    },
    mobile: {
      src: "heroSectionMobile", 
      alt: "Partner with Waggle - People working with pets (Mobile)"
    }
  }
};

export default function PartnerwithWaggle() {
  return (
    <div className="main-bg-color md:py-[56px] md:pb-[77px] py-[37px] pb-[53px] w-full max-w-[1440px] mx-auto my-class rounded-tl-[28px] rounded-tr-[28px] flex flex-col items-center px-4">
      <img
        src={data.images.heroSectionMobile}
        alt={data.heroImage.mobile.alt}
        className="mx-auto w-full max-w-full mb-[15px] md:hidden"
        loading="lazy"
      />
      <span className="font-medium text-[28.48px] md:text-[63.15px] leading-[124%] tracking-normal lexend text-dark-gray mb-[8px] md:mb-[6px] text-center">
        {data.textContent.heading}
      </span>
      <p className="lato font-normal text-[14px] md:text-[20.25px] leading-[144%] tracking-normal max-w-[20rem] md:max-w-[41rem] mx-auto text-dark-gray mb-[20px] md:mb-[40px] text-center">
        {data.textContent.description}
      </p>
      <img
        src={data.images.heroSectionDesktop}
        alt={data.heroImage.desktop.alt}
        className="mx-auto mb-[39px] hidden md:block"
        loading="lazy"
      />
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] description-padding md:px-[245px]">
        {data.features.map((feature) => (
          <div key={feature.id} className="text-center group">
            <div className="mx-auto mb-[18px] md:mb-[28px] flex items-center justify-center">
              <img
                src={data.images[feature.icon]}
                alt={feature.iconAlt}
                loading="lazy"
                className='md:h-auto md:w-auto h-[27px] w-[27px]'
              />
            </div>
            <h3 className="lato richGray font-medium md:text-[22.43px] text-[20px] leading-[124%] tracking-[-0.04px] mb-[8px]">
              {feature.title}
            </h3>
            <p className="inline-block lato font-medium text-[15.75px] leading-[144%] tracking-[0] max-w-[15rem] md:max-w-[20rem] dark-slate">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
