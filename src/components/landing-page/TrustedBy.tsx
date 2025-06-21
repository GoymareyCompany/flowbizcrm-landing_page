import { navigationItems } from "@/utils/site-config";

export function TrustedBy() {
  return (
    <div id={navigationItems.about.id} className="w-full h-full py-4">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm md:text-3xl lg:text-4xl text-center text-base-content/40 mb-6">
          Trusted by sales teams, agencies, and growing businesses worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="w-36 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="/companies/goymarye.png" alt="Goymarye" className="h-16 object-contain" />
          </div>
          <div className="w-36 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="/companies/ujamaa.png" alt="Ujamaa" className="h-24 object-contain" />
          </div>
          <div className=" flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img src="/companies/shule-hub.png " alt="Shule Hub" className="h-16 object-contain" />
          </div>

          <div className=" flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img
              src="/companies/sdm-auto-dealer.png"
              alt="SDM Auto Dealer"
              className="size-40 object-contain"
            />
          </div>
          <div className="w-fit h-16 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <img
              src="/companies/satiago-tailoring.png"
              alt="Santiago Tailoring"
              className="h-16 object-contain"
            />
            <span className="text-2xl text-[#0a680a] font-bold">Santiago Tailoring</span>
          </div>
        </div>
        <p className="w-full text-center text-base-content/70 mt-8 text-2xl">
          Over 50+ businesses use Flowbizcrm to manage and grow their sales
        </p>
      </div>
    </div>
  );
}
