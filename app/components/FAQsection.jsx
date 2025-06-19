import {useState} from 'react';

const faqContent = {
  title: 'Your Questions, Answered',
  faqs: [
    {
      question: 'Does the Waggle Smart AI Bowl require Wi-Fi?',
      answer:
        'Yes, Wi-Fi is essential for connecting to the Waggle App, allowing you to track pet food and nutrition and adjust schedules remotely.',
    },
    {
      question: 'Can I customize my pet’s feeding schedule?',
      answer:
        'Absolutely! The Waggle App lets you set precise meal times and portion control, ensuring your pet gets the right food for pets at the right time.',
    },
    {
      question: 'How does AI-powered nutrition tracking work?',
      answer:
        'The built-in sensors analyze your pet’s eating habits, track pet dietary requirements, and help prevent overfeeding. Over time, the AI learns patterns and offers insights into good food for pets.',
    },
    {
      question: 'Is the bowl dishwasher safe?',
      answer:
        'Yes! The removable stainless steel bowl is completely dishwasher-safe, making cleanup easy and keeping your pet’s meals hygienic.',
    },
    {
      question: 'Will it notify me when food is running low?',
      answer:
        'Yes, real-time alerts are sent straight to your phone when pet food products are running low, so you never have to worry about missing a meal.',
    },
    {
      question: 'Can multiple pets use the same AI Bowl?',
      answer:
        'While multiple pets can share a bowl, for the most accurate nutrition pet food tracking, it’s best if each pet has their own. This ensures portion control and better health insights.',
    },
  ],
};

export default function FAQsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto md:px-[112px] px-[16px] py-[48px]">
      <h2 className="lexend font-[500] text-[22px] leading-[100%] tracking-[-0.36px] md:text-center mb-[26px] md:mb-[24px] md:text-[36px] md:leading-[130%]">
        {faqContent.title}
      </h2>
      <div className="space-y-4 flex flex-col items-center max-w-[1216px] mx-auto">
        {faqContent.faqs.map((faq, index) => (
          <div
            key={index}
            className="p-[16px] w-full rounded-lg waggle-blue-bg cursor-pointer md:px-[24px]"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="lato  font-[500] text-[18px] leading-[124%] tracking-[0] text-dark-gray md:text-[20px] md:leading-[124%]">
                {faq.question}
              </h3>
              <span className="h-[30px] w-[30px] flex text-[24px]  text-dark-gray">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="md:mt-[28px] mt-[8px] max-w-[49rem] text-gray-700 lato font-normal text-[16px] leading-[144%] tracking-[0] md:text-[18px] md:leading-[144%]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
