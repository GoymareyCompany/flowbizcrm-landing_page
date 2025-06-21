import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { BookADemoButton } from "../layout/BookADemoButton";
interface HeroSectionProps {}

export function HeroSection({}: HeroSectionProps) {
  return (
    <div
      id="#"
      className="w-full h-full min-h-fit py-4 mx-auto  md:px-4 flex flex-col justify-center items-center">
      <div className="flex lg:mt-14 h-full min-h-fit w-full xl:max-w-[90%] flex-col lg:flex-row items-center  gap-14 ">
        <div className="w-full  lg:w-1/3 xl:w-2/5 flex flex-col gap-10 justify-between items-center lg:items-start pt-10 xl:pt-0 ">
          <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-primary ">
            The CRM That Connects Leads, Socials, and Conversions
          </h1>
          <p className="text-md md:text-lg   text-base-content opacity-80 ">
            Close more deals, faster — with a CRM that streamlines your pipeline, automates your
            outreach, and turns social interactions into real revenue.
          </p>
          {/* <button className="btn btn-primary w-fit lg:py-8 px-10 rounded-lg">
            Try Flowbiz free <FaArrowRight className="inline-block ml-2" />
          </button> */}
          <BookADemoButton/>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 h-full">
          <Image
            width={800}
            height={600}
            src="/hero-image.png"
            alt="FlowBizCRM Dashboard"
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            priority
            quality={85}
          />
        </div>
      </div>
    </div>
  );
}
