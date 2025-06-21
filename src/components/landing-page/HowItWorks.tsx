import { navigationItems } from "@/utils/site-config";

export function HowItWorks() {
  const steps = [
    {
      title: "Signup for Free in 2 minutes",
      description: "Provide some basic information about you and your business",
      icon: "/how-it-works/signup-for-free.png",
      after: "/how-it-works/arrow-bend-down.png",
    },
    {
      title: "Set Up Your Pipeline",
      description: "Customize your lead stages, define workflows, and invite your team members.",
      icon: "/how-it-works/setup-your-pipeline.png",
      after: "/how-it-works/arrow-bend-up.png",
    },
    {
      title: "Connect Your Social Channels",
      description:
        "Easily link your Facebook and Instagram pages to start syncing leads and messages.",
      icon: "/how-it-works/connect-your-socials.png",
      after: "/how-it-works/arrow-bend-down.png",
    },
    {
      title: "Track Conversions",
      description:
        "Easily link your Facebook and Instagram pages to start syncing leads and messages.",
      icon: "/how-it-works/track-leads.png",
    },
  ];

  return (
    <div id={navigationItems.resources.id} className="w-full py-16 bg-[#C3DEFD6B]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-6xl font-bold text-center mb-12">How FlowBizCRM Works</h2>

        <div className="flex md:hidden lg:flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center text-center max-w-xs">
              <div className=" flex flex-col justify-center items-center mb-4">
                <div className=" flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="size-36" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-base-content/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <img
                  src={step.after}
                  alt={step.title + " pointer"}
                  className="size-24 rotate-90 lg:rotate-0"
                />
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:flex lg:hidden flex-col  justify-between items-center gap-8">
          <div className="flex  justify-evenly items-center">
            {steps.slice(0, 2).map((step, index) => (
              <div
                key={index}
                data-last={index > 0}
                className="flex data-[last=true]:flex-col items-center justify-center max-w-[40%]">
                <div className=" flex flex-col  justify-center items-center text-center mb-4">
                  <div className=" flex items-center justify-center">
                    <img src={step.icon} alt={step.title + " icon"} className="size-36" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </div>
                {step.after && (
                  <img
                    data-last={index > 0}
                    src={step.after}
                    alt={step.title + " pointer"}
                    className="size-24 data-[last=true]:rotate-95"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex  justify-evenly items-center">
            {steps
              .slice(2)
              .toReversed()
              .map((step, index) => (
                <div
                  key={index}
                  className="flex flex-row-reverse  items-center text-center  max-w-[40%] ">
                  <div className=" flex flex-col  justify-center items-center mb-4">
                    <div className=" flex items-center justify-center">
                      <img src={step.icon} alt={step.title + " icon"} className="size-36" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-base-content/70">{step.description}</p>
                  </div>
                  {step.after && <img src={step.after} alt={step.title + " pointer"}  className="size-24 rotate-180" />}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
