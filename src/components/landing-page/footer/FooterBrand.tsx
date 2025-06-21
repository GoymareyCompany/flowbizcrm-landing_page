import { FlowbizIcon } from "../../icons/FlowbizIcon";
import { SocialLinks } from "./SocialLinks";


interface FooterBrandProps {
  centered?: boolean;
}

export function FooterBrand({ centered = false }: FooterBrandProps) {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
      <div className={centered ? 'flex justify-center' : ''}>
        <FlowbizIcon />
      </div>
      <p className={`text-sm text-neutral-content/80 max-w-xs mx-auto`}>
        The CRM that connects leads, socials, and conversions for growing businesses.
      </p>
      <SocialLinks centered={centered} />
    </div>
  );
}
