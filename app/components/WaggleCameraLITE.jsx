import React from 'react';
import CameraImage from '../assets/waggle-monitor.webp';
import SmartBowlImage from '../assets/waggle-camera.webp';
import PlusIcon from '../assets/plus-icon.webp';

const texts = {
  sectionTitle: "Frequently Bought Together",
  products: [
    {
      alt: "Waggle Pet Monitor",
      title: "Waggle Pet Monitor",
      originalPrice: "$199.00",
      discountedPrice: "$99.00"
    },
    {
      alt: "Waggle Camera LITE+",
      title: "Waggle Camera LITE+",
      originalPrice: "$120.00",
      discountedPrice: "$59.00"
    }
  ],
  totalPriceText: "Total price:",
  totalOriginalPrice: "$319.00",
  totalDiscountedPrice: "$158.00",
  buttonText: "Grab this now"
};

export default function WaggleCameraLITE() {
  return (
    <div className="dark-slate-bg extra-padding md:px-[182px] md:py-[56px] px-[20px] py-[48px]">
      <div className="hidden md:flex justify-between">
        <h2 className="white-text-element mt-[18px] lexend font-medium text-[36px] leading-[100%] tracking-[-0.36px] max-w-[13rem]">
          {texts.sectionTitle}
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <img src={CameraImage} alt={texts.products[0].alt} className="mb-[14px] object-contain" 
            loading="lazy"/>
            <h3 className="white-text-element lexend font-medium text-[20px] leading-[23.2px] tracking-[-0.07px] text-center mb-2">
              {texts.products[0].title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="gray-400 line-through text-sm">{texts.products[0].originalPrice}</span>
              <span className="white-text-element lexend font-medium text-[20px] leading-[28px] tracking-[0]">{texts.products[0].discountedPrice}</span>
            </div>
          </div>
          <div className="mb-16">
            <img src={PlusIcon} alt="plus" loading="lazy"/>
          </div>
          <div className="flex flex-col items-center">
            <img src={SmartBowlImage} alt={texts.products[1].alt} className="mb-[14px] object-contain" 
            loading="lazy"/>
            <h3 className="white-text-element lexend font-medium text-[20px] leading-[23.2px] tracking-[-0.07px] text-center mb-2">
              {texts.products[1].title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="gray-400 line-through text-sm">{texts.products[1].originalPrice}</span>
              <span className="white-text-element lexend font-medium text-[20px] leading-[28px] tracking-[0]">{texts.products[1].discountedPrice}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[49px]">
            <div className="white-text-element lato font-medium text-[20px] leading-[23.2px] tracking-[0] align-middle mb-2">
              {texts.totalPriceText}
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="gray-400 line-through text-lg">{texts.totalOriginalPrice}</span>
              <span className="white-text-element lexend font-medium text-[36px] leading-[28px] tracking-[0]">{texts.totalDiscountedPrice}</span>
            </div>
          </div>
          <button className="button2 button-hover2 mt-4 px-8 py-[18px] lato rounded-[100px] white-text-element font-bold text-[18px] leading-[100%] cursor-pointer tracking-[0]">
            {texts.buttonText}
          </button>
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <h2 className="white-text-element lexend font-medium text-[20px] leading-[144%] tracking-[-0.36px] text-center mb-[14px]">
          {texts.sectionTitle}
        </h2>
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex flex-col items-center">
            <img src={CameraImage} alt={texts.products[0].alt} className="mb-[14px] object-contain" 
            loading="lazy"/>
            <h3 className="white-text-element lexend font-medium text-[16px] leading-[124%] tracking-[-0.07px] text-center mb-2">
              {texts.products[0].title}
            </h3>   
            <div className="flex items-center gap-1">
              <span className="gray-400 line-through text-xs">{texts.products[0].originalPrice}</span>
              <span className="white-text-element lexend font-medium text-[16px] leading-[20px] tracking-[0]">{texts.products[0].discountedPrice}</span>
            </div>
          </div>
          <div>
            <img src={PlusIcon} alt="plus" loading="lazy"
            className='mb-20'/>
          </div>
          <div className="flex flex-col items-center">
            <img src={SmartBowlImage} alt={texts.products[1].alt} className="mb-[14px] object-contain" 
            loading="lazy"/>
            <h3 className="white-text-element lexend font-medium text-[16px] leading-[124%] tracking-[-0.07px] text-center mb-2">
              {texts.products[1].title}
            </h3>
            <div className="flex items-center gap-1">
              <span className="gray-400 line-through text-xs">{texts.products[1].originalPrice}</span>
              <span className="white-text-element lexend font-medium text-[16px] leading-[20px] tracking-[0]">{texts.products[1].discountedPrice}</span>
            </div>
          </div>                
        </div>
        <div className="w-full h-[1px] bg-gray-700 mb-2"></div>
        <div className="text-center">
          <div className="white-text-element lato font-medium text-[20px] leading-[23.2px] tracking-[0] mb-2">
            {texts.totalPriceText}
          </div>
          <div className="flex items-center justify-center gap-2 mb-[16px]">
            <span className="gray-400 line-through lexend font-light text-[14px] leading-[124%] tracking-[0]">{texts.totalOriginalPrice}</span>
            <span className="white-text-element lexend font-medium text-[28px] leading-[28px] tracking-[0]">{texts.totalDiscountedPrice}</span>
          </div>
          <button className="button2 button-hover2 lato rounded-[100px] py-[12px] px-[32px] white-text-element font-bold text-[18px] leading-[100%] cursor-pointer tracking-[0]">
            {texts.buttonText}
          </button> 
        </div>
      </div>
    </div>
  );
}
