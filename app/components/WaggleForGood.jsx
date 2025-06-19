import React from 'react';
import whatWeBelieveImg from '../assets/WhatWeBelieve.webp';
import whatWeBelieveMobileImg from '../assets/Mobile.webp';
import visionImg from '../assets/Layer_1(1).webp';
import missionImg from '../assets/Layer_1.webp';
import waggleForGoodImg from '../assets/WaggleForGood.webp';
import arrowImg from '../assets/wagglearrow.webp';

const data = {
  title: "No More RUFF Days",
  images: {
    whatWeBelieve: whatWeBelieveImg,
    whatWeBelieveMobile: whatWeBelieveMobileImg,
    vision: visionImg,
    mission: missionImg,
    waggleForGood: waggleForGoodImg,
    arrow: arrowImg
  },
  sections: [
    {
      type: "WhatWeBelieveSection",
      header: { text: "What We Believe" },
      text: {
        content: "Taking care of real-life worries. Getting better at what we do. We're here to make life easier for you and your furry sidekick."
      }
    },
    {
      type: "GridSection",
      columns: [
        {
          type: "VisionPanel",
          header: {
            title: "Our Vision",
            subtitle: "A world where pets are safe, loved, and never left wondering when you'll be back."
          }
        },
        {
          header: {
            title: "Our Mission",
            subtitle: "We build smart, easy-to-use tech that helps you check in, stay connected, and worry less."
          }
        }
      ]
    },
    {
      type: "WaggleForGoodSection",
      title: "Waggle For Good",
      text: [
        "Caring doesn't stop with our products.",
        "Waggle for Good is how we give back through free safety resources, travel guides, emergency checklists, and community programs that have already reached over 100,000 pet parents.",
        "From teaching families how to road-trip safely with pets to sharing tips for weather emergencies, we're here to support pet parents beyond the tech."
      ],
      button: {
        text: "Join the Community",
        link: "#"
      }
    }
  ]
};
function GridCard({ title, subtitle, image, alt }) {
  return (
    <div className="md:rounded-[28px] rounded-[20px] border border-soft relative overflow-hidden bg-cream">
      <div className="pt-10 pb-9 pl-[18px] pr-5 md:pt-10 md:pb-10 md:pl-10 md:pr-[55px]">
        <h3 className="md:text-[16px] text-[14px] lexendPeta font-light leading-[16px] tracking-[0] text-dark-gray">
          {title}
        </h3>
        <h2 className="lexend font-medium md:text-[26.66px] md:leading-[40px] leading-[124%] tracking-[-0.5px] text-[20px] text-dark-gray mt-4">
          {subtitle}
        </h2>
      </div>
      <div className="relative mx-auto md:pb-[13px] pb-[7px]">
        <img src={image} alt={alt} className="w-full h-auto" loading="lazy" />
      </div>
    </div>
  );
}

export default function NoMoreRuffDays() {
  const [whatWeBelieveSection, gridSection, waggleForGoodSection] = data.sections;

  return (
    <div className="w-full max-w-[1216px] mx-auto p-5 md:p-0 mt-0 pt-[61px] md:pt-0">
      <h2 className="lexend text-dark-gray md:text-[47.37px] text-[28px] md:leading-[124%] leading-[100%] md:tracking-[0] font-medium text-center md:mb-7 md:pt-[67px] mb-4">
        {data.title}
      </h2>
      <div className="relative border border-soft !w-full h-auto md:h-[558px] overflow-hidden md:rounded-[28px] rounded-[20px] bg-cream">
        <div className="flex flex-col md:block">
          <div className="md:pt-10 pt-11 pb-[35px] md:pb-10 pl-5 pr-5 md:p-10 md:absolute md:top-0 md:left-0 md:max-w-xl">
            <h2 className="font-medium text-dark-gray md:text-[36px] text-[25px] leading-[40px] tracking-[-0.5px] lexend">
              {whatWeBelieveSection.header.text}
            </h2>
            <p className="mt-3 md:text-[20px] lato text-[17px] gray-medium max-w-[25rem] font-semibold leading-[27px] md:leading-[28.8px] tracking-[0px]">
              {whatWeBelieveSection.text.content}
            </p>
          </div>
          <div className="w-full">
            <picture>
              <source srcSet={data.images.whatWeBelieveMobile} media="(max-width: 768px)" />
              <img
                src={data.images.whatWeBelieve}
                alt="Dog relaxing on couch with Waggle products"
                loading="lazy"
                className="md:h-auto md:absolute md:bottom-0 w-full"
                width="1216"
                height="438"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 md:mt-10 mt-6">
        {gridSection.columns.map((column, index) => {
          const isVision = column.type === "VisionPanel";
          const image = isVision ? data.images.vision : data.images.mission;
          const alt = isVision ? "Woman with golden retriever" : "Person holding a small dog";
          return (
            <GridCard
              key={index}
              title={column.header.title}
              subtitle={column.header.subtitle}
              image={image}
              alt={alt}
            />
          );
        })}
      </div>
      <div className="justify-between flex flex-col md:flex-row md:mt-10 md:pb-16 pb-10 mt-[26px]">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="md:mb-7 text-dark-gray mb-4 font-medium md:text-[36px] leading-[40px] tracking-[-0.5px] text-[25px] lexend">
            {waggleForGoodSection.title}
          </h2>
          <div className="block md:hidden md:mb-8 mb-5">
            <img
              src={data.images.waggleForGood}
              alt="Person sitting with dogs looking at nature"
              loading="lazy"
              className="h-auto w-full md:rounded-[28px] rounded-[14px]"
            />
          </div>
          {waggleForGoodSection.text.map((paragraph, index) => {
            const baseClass =
              "mb-2 md:text-[20.25px] md:leading-[144%] tracking-[0] font-semibold gray-medium max-w-[33rem]";
            if (index === 1) {
              return (
                <p key={index} className={`${baseClass} leading-[160%]`}>
                  <span className="text-dark-gray font-semibold">Waggle for Good</span>{' '}
                  {paragraph.replace('Waggle for Good', '')}
                </p>
              );
            }
            return (
              <p key={index} className={`${baseClass} leading-[165%]`}>
                {paragraph}
              </p>
            );
          })}
          <button className="flex items-center border border-transparent button-hover button1 text-dark-gray md:pt-[9px] md:pb-[7px] md:pr-2.5 md:pl-7 pl-[27px] pr-[5px] pt-[5px] pb-[5px] rounded-[30px] w-max md:text-[16px] leading-[100%] tracking-[0px] font-bold lato md:mt-4 mt-[6px]">
            <span className="md:mr-[13px] mr-4 text-dark-gray">
              {waggleForGoodSection.button.text}
            </span>
            <img
              src={data.images.arrow}
              alt="Arrow icon"
              loading="lazy"
              className="cursor-pointer"
            />
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src={data.images.waggleForGood}
            alt="Person sitting with dogs looking at nature"
            loading="lazy"
            className="rounded-[28px]"
            width="584"
            height="404"
          />
        </div>
      </div>
    </div>
  );
}
