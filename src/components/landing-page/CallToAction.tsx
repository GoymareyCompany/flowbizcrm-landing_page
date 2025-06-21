import { siteConfig } from "@/utils/site-config";
import { ScheduleADemoButton } from "../layout/BookADemoButton";

export function CallToAction() {
  return (
    <div className="w-full py-16 bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Closing More Deals Today
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that use FlowBizCRM to manage their sales process and grow their revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={siteConfig.flowbizUrl + "/signup"} className="btn bg-white text-primary hover:bg-white/90">
            Get Started Free
          </a>
          {/* <button className="btn btn-outline border-white text-white hover:bg-white/20">
            Schedule a Demo
          </button> */}
          <ScheduleADemoButton/>
        </div>
      </div>
    </div>
  );
}
