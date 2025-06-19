import React from "react";
// import wifiSmartBowlImg from "../assets/Wi-Fi-connectedsmartbowl.webp";
import portimage from "../assets/portImg.webp";
import bowlBaseImg from "../assets/bowlBaseImg.webp";
import aiTrackingIcon from "../assets/aiTrackingIcon.webp";
import bowl450gImg from "../assets/bowl450gImg.webp";
import dogWithBowlImg from "../assets/dogWithBowlImg.webp";
import scheduleIcon from "../assets/scheduleIcon.webp";
import alertsIcon from "../assets/alertsIcon.webp";
import petSafeIcon from "../assets/petSafeIcon.webp";
import weightSensorIcon from "../assets/weightSensorIcon.webp";
import bowlShadowImg from "../assets/bowlShadowImg.webp";
import sideNotificationImg from "../assets/sideNotificationImg.webp";


const SmartPetBowlShowcase = (ProductData) => {
  const metaobjectData = ProductData?.ProductData?.effortlessPetNeed?.effortlessPetNeeds?.metaobjects?.edges[0]?.node?.fields  || {};
  console.log(metaobjectData)

  // left part data...............
  const topLeftText = metaobjectData?.find(
    field => field.key === "pet_need_title_left_top"
  )?.value;
  const mainTitle = metaobjectData?.find(
    field => field.key === "top_main_title"
  )?.value;
  const wifiSmartBowlImg = metaobjectData?.find(
    field => field.key === "pet_need_image_left_top"
  )?.reference?.image?.url;
  const portimage = metaobjectData?.find(
    field => field.key === "mid_left_image"
  )?.reference?.image?.url;
  const bowlBaseImg = metaobjectData?.find(
    field => field.key === "pet_need_image_left_bottom"
  )?.reference?.image?.url;

  // mid part data................
  const aiTrackingIcon = metaobjectData?.find(
    field => field.key === "pet_need_image_mid_top"
  )?.reference?.image?.url;
  const midFirstCard = metaobjectData?.find(
    field => field.key === "pet_need_text_mid_top"
  )?.value;
  const midFirstCardArray = JSON.parse(midFirstCard);
  const bowlShadowImg = metaobjectData?.find(
    field => field.key === "pet_need_image_middle_top"
  )?.reference?.image?.url;
  const bowl450gImg = metaobjectData?.find(
    field => field.key === "pet_need_image_middle_bottom"
  )?.reference?.image?.url;
  

  const textContent = {
    title: mainTitle || "Smart. Effortless. Tailored to Your Pet's Needs.",
    leftColumn: {
      card1: {
        heading: topLeftText || "Wi-Fi-connected smart bowl",
        imageAlt: "Wi-Fi-connected smart bowl",
      },
      card2: {
        imageAlt: "Port image",
      },
      card3: {
        imageAlt: "Bowl base",
      },
    },
    middleColumn: {
      topCard: {
        iconAlt: "AI icon",
        heading: midFirstCardArray?.[0] || "AI-powered",
        paragraph: midFirstCardArray?.[1] || "nutrition pet food tracking",
      },
      bottomSection: {
        dogImageAlt: "Dog with bowl",
        scheduleCard: {
          iconAlt: "Schedule icon",
          heading: "Automatic pet feeding schedule",
        },
      },
      centerImage: {
        shadowAlt: "Shadow circle",
        bowlAlt: "450g Bowl",
      },
    },
    rightColumn: {
      topCard: {
        leftNotificationAlt: "Left notification",
        rightNotificationAlt: "Right notification",
        centerImageAlt: "Alert icon",
        paragraph: "Smart alerts & notifications",
      },
      middleCard: {
        iconAlt: "Pet safe icon",
        heading: "Pet-safe & easy to clean",
      },
      bottomCard: {
        iconAlt: "Sensor icon",
        paragraph: "Built-in weight sensor",
      },
    },
  };
  return (
    <div className="py-[48px] px-[20px] md:px-[215px] md:py-[56px]">
      <div className="text-center mb-8 md:mb-[32px]">
        <span className="lexend medium text-[20px] leading-[1.44] md:text-[36px] md:leading-[100%] text-dark-gray px-4 ">
          {textContent.title}
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-[16px] md:gap-[25px] justify-center">
        {/* left paert............. */}
        <div className="flex flex-row md:flex-col gap-[16px] md:gap-[25px] h-full max-w-full md:max-w-[246px] order-2 md:order-none">
          <div className="primary-gradient white-text-element rounded-[15px] md:rounded-[21px] flex flex-col w-1/2 md:w-full max-w-full md:max-w-[233px]">
            <h2 className="max-w-[13rem] lato pt-[16px] md:pt-[28px] px-[16px] md:px-[28px] font-semibold text-[18px] md:text-[28px] text-left white-text-element leading-tight">
              {textContent.leftColumn.card1.heading}
            </h2>
            <div className="pt-[10px] md:pt-[17px]">
              <img
                src={wifiSmartBowlImg}
                alt={textContent.leftColumn.card1.imageAlt}
                className="rounded-[15px] md:rounded-[21px] max-w-full md:max-w-[233px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] md:gap-[25px] w-1/2 md:w-full">
            <div className="bg-[#d1681d4b] rounded-[15px] md:rounded-[21px] max-w-full md:max-w-[233px] w-full overflow-hidden">
              <img
                src={portimage}
                alt={textContent.leftColumn.card2.imageAlt}
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-[#73a0b229] rounded-[15px] md:rounded-[21px] overflow-hidden max-w-full md:max-w-[233px] h-[95px] md:h-[145px]">
              <img
                src={bowlBaseImg}
                alt={textContent.leftColumn.card3.imageAlt}
                className="h-full object-contain w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* mid part................ */}
        <div className="flex flex-col gap-[16px] md:gap-[24px] h-full relative order-1 md:order-none">
          <div className="warm-radial-gradient md:max-w-[494.33px] h-[227px] md:h-[352.08px] pt-[15px] md:pt-[22px] px-[20px] md:px-[37px] pb-[50px] md:pb-[197px] white-text-element rounded-[20px] flex flex-col text-center md:mx-0">
            <img
              src={aiTrackingIcon}
              alt={textContent.middleColumn.topCard.iconAlt}
              className="mx-auto w-12 h-12 md:w-auto md:h-auto"
              loading="lazy"
            />
            <h2 className="lexend font-[400] md:font-normal text-[18px] md:text-[28px] leading-[100%] md:leading-[112%] white-text-element mt-[9px] md:mt-[14px]">
              {textContent.middleColumn.topCard.heading}
            </h2>
            <p className="white-text-element lexend font-normal text-[20px] md:text-[28px]">
              {textContent.middleColumn.topCard.paragraph}
            </p>
          </div>
          <div className="flex gap-[16px] md:gap-[24px]">
            <div className="rounded-[15px] md:rounded-[21px] overflow-hidden w-1/2 md:w-[234.55px] max-h-[237px] md:max-h-[370px]">
              <img
                src={dogWithBowlImg}
                alt={textContent.middleColumn.bottomSection.dogImageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="primary-gradient white-text-element rounded-[20px] flex-1 flex flex-col items-start justify-center text-left pl-[18px] md:pl-[28px] pr-[18px] md:pr-[46px] pt-[115px] md:pt-[165px] pb-[16px] md:pb-[24px] w-1/2 md:w-full max-h-[237px] md:max-h-[370px] max-w-full md:max-w-[234.55px]">
              <img
                src={scheduleIcon}
                alt={textContent.middleColumn.bottomSection.scheduleCard.iconAlt}
                className="mb-[15px] md:mb-[27px] w-8 h-8 md:w-auto md:h-auto"
                loading="lazy"
              />
              <h2 className="lato font-[600] md:font-semibold text-[18px] md:text-[28px] leading-[100%] md:leading-[124%] tracking-[-1%] md:tracking-[-0.01em] white-text-element ">
                {textContent.middleColumn.bottomSection.scheduleCard.heading}
              </h2>
            </div>
          </div>
          <div className="absolute top-[24%] top-[49%] left-[50%]">
            <div className="relative">
              <img
                src={bowlShadowImg}
                alt={textContent.middleColumn.centerImage.shadowAlt}
                className="absolute md:max-w-[421px] md:max-h-[396.75px] max-w-[250.52px] max-h-[220px]
                 object-contain transform -translate-x-1/2 -translate-y-1/2"
                loading="lazy"
              />
              <img
                src={bowl450gImg}
                alt={textContent.middleColumn.centerImage.bowlAlt}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:max-w-[421px] md:max-h-[396.75px] max-w-[250.52px] max-h-[254.74px]
                 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* right part................. */}
        <div className="flex flex-row md:flex-col gap-[16px] md:gap-[25px] order-3 md:order-none">
          <div className="flex flex-col gap-[16px] md:gap-[25px] w-1/2 md:w-full">
            <div className="brown-linear-radial-gradient white-text-element rounded-[15px] md:rounded-[21px] w-full max-w-full md:max-w-[232.94px] h-[147px] md:h-[272px] flex flex-col pt-[13px] md:pt-[24px] pl-[15px] md:pl-[28px] pr-[15px] md:pr-[28px] pb-[15px] md:pb-[28px]">
              <img
                src={petSafeIcon}
                alt={textContent.rightColumn.middleCard.iconAlt}
                className="mb-[20px] md:mb-[109px] w-8 h-8 md:w-[48px] md:h-[48px]"
              />
              <h2 className="lato font-[600] md:font-semibold text-[16px] md:text-[28px] leading-[100%] md:leading-[100%] tracking-[-1%] md:tracking-[-0.01em] white-text-element ">
                {textContent.rightColumn.middleCard.heading}
              </h2>
            </div>
            <div className="primary-gradient w-full max-w-full md:max-w-[232.94px] white-text-element rounded-[15px] md:rounded-[21px] h-[70px] md:h-[127px] flex md:pt-[45px] pl-[9px] md:pl-[30px] pr-[9px] md:pr-[30px] py-[21px] md:pb-[42px] gap-[12px] md:gap-[12px] items-center md:items-start">
              <img
                src={alertsIcon}
                alt={textContent.rightColumn.bottomCard.iconAlt}
                className="w-6 h-6 md:w-[40px] md:h-[40px]"
                loading="lazy"
              />
              <p className="lato font-[500] md:font-medium text-[12px] md:text-[18px] leading-[100%] md:leading-[100%] tracking-[0%] md:tracking-normal white-text-element">
                {textContent.rightColumn.bottomCard.paragraph}
              </p>
            </div>
          </div>
          <div className="primary-gradient white-text-element rounded-[20px] flex flex-col items-center justify-center text-center w-1/2 md:w-full h-[230px] md:h-[295px] max-w-full md:max-w-[232.94px] pl-[15px] md:pl-[14px] pr-[15px] md:pr-[14px] pt-[20px] md:pt-[46px] pb-[20px] md:pb-[88px] relative">
            <img
              src={sideNotificationImg}
              alt={textContent.rightColumn.topCard.leftNotificationAlt}
              className="absolute left-2 md:left-3  transform -translate-y-1/2  top-[60%] md:top-[59%]"
              loading="lazy"
            />
            <img
              src={sideNotificationImg}
              alt={textContent.rightColumn.topCard.rightNotificationAlt}
              className="absolute right-2 md:right-3 top-[60%] md:top-[59%] transform -translate-y-1/2"
              loading="lazy"
            />
            <img
              src={weightSensorIcon}
              alt={textContent.rightColumn.topCard.centerImageAlt}
              className="w-10 h-10 md:w-auto md:h-auto"
              loading="lazy"
            />
            <p className="lato pt-[16px] md:pt-[40px] font-bold text-[14px] md:text-[18px] leading-[100%] md:leading-[100%] tracking-[0] white-text-element">
              {textContent.rightColumn.topCard.paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPetBowlShowcase;