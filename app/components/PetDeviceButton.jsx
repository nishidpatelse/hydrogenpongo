import React from 'react';

import product1 from '../assets/product1.webp';
import product2 from '../assets/product2.webp';
import product3 from '../assets/product3.webp';
import checkIcon from '../assets/check.webp';
import crossIcon from '../assets/cross.webp';

const cameras = [
  {
    id: 1,
    name: "Waggle RV 4G Camera",
    price: 59,
    originalPrice: 79,
    image: product1,
    bestFor: "RV owners needing reliable, Wi-Fi-free monitoring",
    connectivity: "4G LTE (No Wi-Fi needed)",
    videoQuality: "2K HD",
    storage: "128GB SD card (included)",
    treatTosser: false,
    batteryLife: "Up to 15 days (solar-powered)",
    twoWayAudio: true,
    motionAlerts: true,
    nightVision: true
  },
  {
    id: 2,
    name: "WaggleCam Mini (64GB)",
    price: 59,
    originalPrice: 79,
    image: product2,
    bestFor: "Owners seeking compact, Wi-Fi-enabled monitoring with moderate storage",
    connectivity: "Wi-Fi",
    videoQuality: "1080p HD",
    storage: "64GB local storage",
    treatTosser: false,
    batteryLife: "Requires continuous power",
    twoWayAudio: true,
    motionAlerts: true,
    nightVision: true
  },
  {
    id: 3,
    name: "WaggleCam Mini (128GB)",
    price: 69,
    originalPrice: 99,
    image: product3,
    bestFor: "Owners needing compact, Wi-Fi-enabled monitoring with extended storage",
    connectivity: "Wi-Fi",
    videoQuality: "1080p HD",
    storage: "128GB local storage",
    treatTosser: false,
    batteryLife: "Requires continuous power",
    twoWayAudio: true,
    motionAlerts: true,
    nightVision: true
  },
  {
    id: 4,
    name: "WaggleCam Pro",
    price: 80,
    originalPrice: 149,
    image: product3, // ✅ reusing product3 image
    bestFor: "Pet owners desiring advanced features like treat dispensing and environmental monitoring",
    connectivity: "Wi-Fi",
    videoQuality: "1080p HD",
    storage: "Local storage",
    treatTosser: true,
    batteryLife: "Built-in battery backup (1000mAh)",
    twoWayAudio: true,
    motionAlerts: true,
    nightVision: true
  }
];

const features = [
  { label: "Best For", key: "bestFor" },
  { label: "Connectivity", key: "connectivity" },
  { label: "Video Quality", key: "videoQuality" },
  { label: "Two-Way Audio", key: "twoWayAudio", isFeature: true },
  { label: "Motion Alerts", key: "motionAlerts", isFeature: true },
  { label: "Night Vision", key: "nightVision", isFeature: true },
  { label: "Storage", key: "storage" },
  { label: "Treat Tosser", key: "treatTosser", isBoolean: true },
  { label: "Battery Life", key: "batteryLife" }
];

export default function PetDeviceButton() {
    return (
      <div className="mx-auto p-[10px] md:px-[111px] md:pr-[118px] pt-[56px] pb-[56px]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left pt-[115px] pb-[24px] px-[30px] align-top">
                  <h1 className="max-w-[10rem] lato font-bold text-[23px] leading-[144%] tracking-[-0.36px] text-gray-900">
                    Watch, Treat, Track—Which Waggle Cam Is Right For You?
                  </h1>
                </th>
                {cameras.map((camera) => (
                  <th key={camera.id} className="px-[16px] py-[25px] text-center align-top">
                   <div className="flex flex-col justify-between h-[280px]">    
                  <div>
                    <div className="flex justify-center items-center mb-[20px]">
                  <img src={camera.image} alt={camera.name} className="object-contain" />
                     </div>
                    <h3 className="lexend font-medium text-[20px] leading-[124%] tracking-[-0.07px] text-gray-900 text-center">
                      {camera.name}
                   </h3>
                  </div>
                  <div className="text-lg font-bold text-gray-900 text-center">
              <span className="text-sm text-gray-500 line-through mr-2">
                ${camera.originalPrice}
                     </span>
                ${camera.price}
                      </div>
                       </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.key}
                  className={index === 0 ? "" : "border-t"}
                  style={index === 0 ? {} : { borderTop: "1px solid #ECECEC" }}
                >
                  <td className="lato p-[20px] w-[234px] h-[80px] font-semibold text-gray-900">
                    {feature.label}
                  </td> 
                  {cameras.map((camera) => (
                    <td
                      key={camera.id}
                      className="p-[20px] w-[244px] h-[80px] text-center font-normal text-[16px] lato leading-[124%] tracking-[0] text-gray-700"
                    >
                      {feature.isFeature || feature.isBoolean ? (
                        <div className="flex justify-center">
                          <img
                            src={camera[feature.key] ? checkIcon : crossIcon}
                            alt={camera[feature.key] ? "Check" : "Cross"}
                            
                          />
                        </div>
                      ) : (
                        <span
                        className={`block mx-auto ${
                          ['connectivity', 'videoQuality', 'storage'].includes(feature.key)
                            ? 'text-center'
                            : 'text-left'
                        }`}
                      >
                        {camera[feature.key]}
                      </span>
                      
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-white" style={{ borderTop: "1px solid #ECECEC" }}>
                <td className="p-4"></td>
                {cameras.map((camera) => (
                  <td key={camera.id} className="p-4">
                    <div className="space-y-3">
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white  py-[14px] px-[60px] rounded-[100px] lato font-bold text-[18px] leading-[100%] tracking-[0]">
                        Buy Now
                      </button>
                      <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-[14px] rounded-[100px] lato font-bold text-[16px] leading-[20px] tracking-[0]">
                        Add to Cart
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  