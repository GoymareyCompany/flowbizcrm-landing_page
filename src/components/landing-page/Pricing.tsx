import { navigationItems } from "@/utils/site-config";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For individuals and small teams getting started",
      features: [
        "Up to 100 contacts",
        "Basic lead capture forms",
        "Email integration",
        "Mobile app access",
        "Standard support",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Standard",
      price: "$49",
      period: "/mo",
      description: "For growing teams that need more features",
      features: [
        "Unlimited contacts",
        "Advanced lead capture",
        "Custom sales pipeline",
        "Email automation",
        "Team collaboration",
        "API access",
        "Priority support",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99.99",
      period: "/mo",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Standard",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "User role management",
        "White-label options",
        "24/7 premium support",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div id={navigationItems.pricing.id} className="w-full py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full flex justify-center">
          <div className="text-2xl md:text-7xl flex font-bold text-center mb-4  ">
            Choose
            <div className="grid  h-full  items-center  justify-center md:ml-2">
              <span className="col-start-1 row-start-1 z-10"> Your Plan</span>
              <div className="col-start-1 row-start-1 h-full place-content-end translate-y-1 md:translate-y-4 ">
                <img
                  className="h-3 md:h-7 "
                  src="/pricing/choose-your-price.png"
                  alt="Choose Your Plan"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-lg text-base-content/70 mb-12 max-w-2xl mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace
          productivity, Evernote has the right plan for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-fit my-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={` ${
                plan.popular ? "pricing-card" : "border border-base-300"
              } ] bg-base-100 flex flex-col justify-between gap-6 h-full p-6 rounded-lg shadow-lg transition-transform md:hover:scale-105`}>
              <h3 className=" text-2xl font-bold">{plan.name}</h3>
              <div className="flex items-end gap-1 my-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="">{plan.period}</span>}
              </div>
              <p className=" ">{plan.description}</p>

              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-success flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className=" justify-center">
                <button className={`btn btn-outline w-full`}>{plan.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex gap-2  mt-16 justify-center items-center">
          <img className="size-[45]" src="/pricing-tick.png" alt="30-day money-back guarantee" />
          <div className="text-center text-[28px] text-base-content/60 ">
            30-day money-back guarantee • No credit card required for free trial
          </div>
        </div>
      </div>
    </div>
  );
}
