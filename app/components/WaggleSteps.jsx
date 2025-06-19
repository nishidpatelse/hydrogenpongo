import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import step1 from '../assets/step1-setup-bowl.webp';
import step2 from '../assets/step2-connect-app.webp';
import step3 from '../assets/step3-monitor-nutrition.webp';

const content = {
  header: {
    title1: "Takes 2 Minutes.",
    title2: "Saves a Lifetime of Stress."
  },
  steps: [
    {
      number: "01",
      title: "Install the Waggle pet temperature monitoring system",
      fullTitle: "Set Up the Smart AI Bowl",
      image: step1,
      box2: { number: "02", text: "Connect" },
      box3: { number: "03", text: "Monitor" }
    },
    {
      title: "Connect to the Waggle App",
      image: step2,
      box1: { number: "01", text: "Install" },
      number: "02",
      box3: { number: "03", text: "Monitor" }
    },
    {
      title: "Stay Informed, Stay Safe",
      fullTitle: "Monitor Pet Food and Nutrition",
      image: step3,
      box1: { number: "01", text: "Install" },
      box2: { number: "02", text: "Connect" },
      number: "03"
    }
  ]
};

export default function WaggleSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedStep, setExpandedStep] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % content.steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const toggleStep = (stepIndex) => {
    setExpandedStep(expandedStep === stepIndex ? -1 : stepIndex);
  };

  const Box = ({ box, stepIndex }) => (
    <div className="flex justify-center items-center lg:flex-shrink-0">
      <div
        className={`cursor-pointer waggle-blue-bg w-full max-w-[150px] rounded-[20px] border border-transparent pt-[52px] px-[47px] pb-[71px] h-full flex flex-col items-center justify-between 
        ${activeStep === stepIndex ? 'bg-blue-600 text-white' : ''}`}
        onClick={() => {
          setActiveStep(stepIndex);
          setAutoRotate(false);
        }}
      >
        <span className="lato font-[400] text-[48px] leading-[100%] tracking-[0] dark-overlay mb-4">{box.number}</span>
        <span className="lexend font-[400] text-[20px] leading-[100%] tracking-[0] dark-overlay">{box.text}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1440px] w-full mx-auto bg-[#D6EAFF] md:bg-blue-50">
      <div className="lg:px-4 px-[20px]">
        <div className="text-center pt-[48px] lg:pt-18 mb-[14px] lg:mb-[28px]">
          <span className="lexend font-medium md:text-[36px] leading-[100%] text-[20px] tracking-[-0.36px] text-gray-800 ">
            {content.header.title1} 
          </span>
          <h2 className="lexend font-medium md:text-[36px] text-[20px] tracking-[-0.36px] text-gray-800">
            {content.header.title2} 
          </h2>
        </div>  

        <div className="space-y-5 lg:space-y-0 lg:pb-[64px] pb-[48px]">
          {content.steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row">
              <div
                className="lg:hidden w-full text-left bg-white rounded-xl p-[20px]"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between mb-[16px]">
                  <span className="custom-dark lexend font-normal text-[20px] leading-[100%] tracking-[0]">
                    {step.title}
                  </span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${expandedStep === index ? 'rotate-180' : ''}`}
                  />
                </div>
                {expandedStep === index && (
                  <div className="flex justify-center items-center">
                    <img
                      src={step.image}
                      alt={step.fullTitle || step.title}
                      className="rounded-[12px]"
                    />
                  </div>
                )}
              </div>
              {typeof window !== 'undefined' && window.innerWidth >= 1024 && activeStep === index && (
                <div className="flex flex-col lg:flex-row gap-5 w-full transition-all duration-300">
                  {index === 1 && (
                    <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                      <Box box={content.steps[1].box1} stepIndex={0} />
                    </div>
                  )}
                  {index === 2 && (
                    <>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[2].box1} stepIndex={0} />
                      </div>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[2].box2} stepIndex={1} />
                      </div>
                    </>
                  )}
                  <div
                    className="waggle-blue-bg w-full max-w-full lg:max-w-[876px] border border-transparent flex rounded-[20px] flex-col lg:flex-row gap-[27px]"
                    onClick={() => {
                      setActiveStep(index);
                      setAutoRotate(false);
                    }}
                  >
                    <div className="pt-5 pb-5 pl-5">
                      <img
                        src={step.image}
                        alt={step.fullTitle || step.title}
                        className="max-w-none rounded-[23px]"
                      />
                    </div>
                    <div className="hidden lg:flex flex-col pt-[60px] lg:pt-[232px] pr-6">
                      <span className="lato font-normal text-5xl leading-none tracking-normal dark-overlay mb-[40px]">
                        {step.number}
                      </span>
                      <h3 className="lexend font-normal text-[24px] lg:text-[39px] leading-none tracking-normal text-dark-gray mb-[58px]">
                        {step.fullTitle || step.title}
                      </h3>
                      <div className="w-50 h-1 blue-400 rounded"></div>
                    </div>
                  </div>
                  {index === 0 && (
                    <>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[0].box2} stepIndex={1} />
                      </div>
                      <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                        <Box box={content.steps[0].box3} stepIndex={2} />
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <div className="hidden lg:flex justify-center lg:flex-shrink-0">
                      <Box box={content.steps[1].box3} stepIndex={2} />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
}
