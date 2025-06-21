import { FooterBrand } from "./footer/FooterBrand";
import { FooterSection } from "./footer/FooterSection";
import { footerLinks } from "./footer/footerData";

export function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl w-full mx-auto px-6 py-10">
        {/* Desktop Layout - 4 columns */}
        <div className="hidden lg:flex gap-8 justify-evenly w-full *:w-full">
          <div className="mr-10">
            <FooterBrand />
          </div>
          <FooterSection title="Product" links={footerLinks.product} />
          <FooterSection title="Company" links={footerLinks.company} />
          <FooterSection title="Support" links={footerLinks.support} />
        </div>

        {/* Tablet Layout - 2x2 Grid */}
        <div className="hidden md:block lg:hidden space-y-20">
          <div className="flex justify-between px-4 *:min-w-[20%]">
            <FooterBrand />
            <FooterSection title="Product" links={footerLinks.product} />
          </div>
          <div className="flex justify-between px-4 *:min-w-[20%]">
            <FooterSection title="Company" links={footerLinks.company} />
            <FooterSection title="Support" links={footerLinks.support} />
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden space-y-8 *:w-full">
          <div>
            <FooterBrand centered />
          </div>
          <FooterSection title="Product" links={footerLinks.product} centered />
          <FooterSection title="Company" links={footerLinks.company} centered />
          <FooterSection title="Support" links={footerLinks.support} centered />
        </div>
      </div>
    </footer>
  );
}
