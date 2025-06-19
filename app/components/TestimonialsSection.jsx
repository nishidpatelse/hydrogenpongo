import React, {useRef, useState, useEffect} from 'react';
import step1 from '../assets/step1image.webp';
import step2 from '../assets/step2image.webp';
import step3 from '../assets/step3image.webp';
import leftArrow from '../assets/leftarrow.webp';
import rightArrow from '../assets/rightarrow.webp';
import starIcon from '../assets/star1.webp';
import starRating from '../assets/starRating.webp';

const textData = {
  sectionTitle: '80,000+ Happy Tails & Counting!',
  rating: '4.5/5',
  testimonials: [
    {
      text: 'Easy to install, works perfectly, and the app is so user-friendly. Highly recommend for pet parents.',
      username: '',
    },
    {
      quote: 'WaggleCam Pro is a life-saver!',
      text: 'Easy to install, works perfectly, and the app is so user-friendly. Highly recommend for pet parents.',
      username: '@LifeOnPaws',
    },
    {
      text: 'Best purchase ever! Real-time alerts mean I know my pet is safe. Love the cellular connection for remote areas!',
      username: '',
    },
    {
      text: 'Keeps me connected with my pets instantly. Love this app!',
      username: '',
    },
  ],
  altTexts: {
    star: 'star',
    starRating: 'star rating',
    leftArrow: 'Previous',
    rightArrow: 'Next',
    petReview: 'Pet review',
  },
};

const testimonials = [
  {
    img: step1,
    text: textData.testimonials[0].text,
    username: textData.testimonials[0].username,
  },
  {
    quote: textData.testimonials[1].quote,
    text: textData.testimonials[1].text,
    username: textData.testimonials[1].username,
  },
  {
    img: step2,
    text: textData.testimonials[2].text,
    username: textData.testimonials[2].username,
  },
  {
    img: step3,
    text: textData.testimonials[3].text,
    username: textData.testimonials[3].username,
  },
];

const StarRating = () => (
  <div className="flex mb-4">
    <img src={starIcon} alt={textData.altTexts.star} />
  </div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideWidth = 415;

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === 'left' ? -slideWidth : slideWidth,
      behavior: 'smooth',
    });
  };
  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', onScroll, {passive: true});
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="mx-auto md:py-[60px] md:px-[112px] py-[37px] px-[16px]">
      <div className="text-center relative">
        <h2 className="lexend font-medium md:text-[36px] text-[17px] leading-[100%] tracking-[-0.36px] md:tracking-[0] md:mb-[28px] mb-[16px]">
          {textData.sectionTitle}
        </h2>
        <div className="flex justify-center items-center bg-gray-light rounded-[6.58px] pt-[10.97px] pr-[13.16px] pb-[10.97px] pl-[13.16px] mb-[16px] md:mb-[23px] w-fit mx-auto">
          <img
            src={starRating}
            alt={textData.altTexts.starRating}
            className="mr-2"
            loading="lazy"
          />
          <span className="gray-medium-text font-medium text-[15.36px] leading-[21.94px] md:text-base ml-[5px] mt-[2px]">
            {textData.rating}
          </span>
        </div>
        <div className="absolute top-[-5px] right-0 space-x-2 hidden md:flex">
          <button
            onClick={() => scroll('left')}
            className="rounded-full flex items-center justify-center cursor-pointer"
          >
            <img
              src={leftArrow}
              alt={textData.altTexts.leftArrow}
              loading="lazy"
            />
          </button>
          <button
            onClick={() => scroll('right')}
            className="rounded-full flex items-center justify-center cursor-pointer"
          >
            <img
              src={rightArrow}
              alt={textData.altTexts.rightArrow}
              loading="lazy"
            />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-[26px]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 bg-light rounded-3xl border light-black-transparent p-[19px] md:py-[36px] md:px-[34px] w-96 ${
                index === 1 ? 'h-72 mt-3' : 'h-90'
              } ${index === 2 ? 'mt-9' : ''} ${index === 3 ? 'mt-1' : ''}`}
            >
              <div className="flex flex-col h-full">
                {testimonial.img && (
                  <div className="mb-4">
                    <img
                      src={testimonial.img}
                      alt={textData.altTexts.petReview}
                      loading="lazy"
                      className={`object-cover rounded-2xl w-full ${
                        index === testimonials.length - 1
                          ? 'h-[162px]'
                          : 'h-auto'
                      }`}
                    />
                  </div>
                )}
                <StarRating />
                <div className="flex flex-col justify-between">
                  {testimonial.quote && (
                    <span className="inter font-bold text-[19.06px] leading-[34px] tracking-[0] mb-2">
                      "{testimonial.quote}"
                    </span>
                  )}
                  <p className="inter font-normal gray-medium-text text-[16px] md:text-[14.63px] leading-[164%] tracking-[0] md:mb-6">
                    {testimonial.text}
                  </p>
                  {testimonial.username && (
                    <p className="text-dark-gray inter font-medium text-[14.63px] leading-[27.2px] tracking-[0]">
                      {testimonial.username}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 md:hidden">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`w-[8px] h-[8px] mx-1 rounded-full focus:outline-none ${
              idx === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
