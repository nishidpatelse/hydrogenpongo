import {useState} from 'react';
const faqContent = {
    title: 'Your Questions, Answered',
    faqs: [
      {
        question: 'How does the Waggle Pet Monitor work without Wi-Fi?',
        answer:
          "Waggle comes with a built-in 4G cellular connection, so you'll receive real-time alerts no matter where you are. Whether you're camping in the woods, traveling in your RV, or parked in a remote area, your pet’s safety is always covered with the Waggle pet monitor.",
      },
      {
        question: 'How often does the device update temperature readings?',
        answer:
          "The pet temperature monitor updates readings every 10 minutes, ensuring that you always have up-to-date data. If there's a sudden spike or drop in temperature, you'll get an instant alert so you can take action before it becomes dangerous.",
      },
      {
        question: 'What happens if my pet is in danger?',
        answer:
          "If Waggle detects unsafe temperature conditions, you'll receive an immediate SMS, email, and app notification. This way, you can act quickly—whether that means heading back to your RV, adjusting the thermostat, or calling for help.",
      },
      {
        question: 'Can Waggle detect power loss?',
        answer:
          "Yes! If your shore power or generator fails, Waggle will instantly alert you so you're not caught off guard. This ensures you have time to take action before your pet is exposed to dangerous conditions due to power loss.",
      },
      {
        question: 'What is the battery backup if my power goes out?',
        answer:
          "Waggle’s 120-hour battery backup ensures your pet temperature monitor for RV continues working even in extended power outages. Even if you’re away, you’ll keep receiving updates on your pet’s environment.",
      },
      {
        question: 'Is the device waterproof?',
        answer:
          "Waggle is spill-resistant but not fully waterproof. It’s designed for indoor use, so for the best performance, place it in a secure, dry location where it won’t be exposed to rain or water.",
      },
      {
        question: 'Does the Waggle Pet Monitor track my pet’s location?',
        answer:
          "No, Waggle focuses on temperature and environmental safety rather than GPS tracking. It’s built to alert you to dangerous climate conditions, power failures, and humidity changes—not to track your pet’s movements.",
      },
      {
        question: 'What’s the return policy and warranty?',
        answer:
          "We stand by our product! Waggle offers a hassle-free return policy and a standard manufacturer’s warranty, so you can purchase with confidence. If you have any issues, our team is here to help.",
      },
      {
        question: 'Can I monitor multiple locations with one app?',
        answer:
          "Yes! You can sync multiple Waggle temperature monitor devices to a single app, allowing you to monitor all your pets and locations from one place. Whether you have an RV, a home, or a second vehicle, Waggle keeps you connected.",
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
      <div className="space-y-4">
        {faqContent.faqs.map((faq, index) => (
          <div
            key={index}
            className="p-[16px] rounded-lg waggle-blue-bg cursor-pointer md:px-[24px]"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="lato font-[500] text-[18px] leading-[124%] tracking-[0] text-dark-gray md:text-[20px] md:leading-[124%]">
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
