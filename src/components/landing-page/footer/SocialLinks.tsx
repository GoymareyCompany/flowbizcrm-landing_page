import { SvgIcons } from "@/components/icons/svg-icons";
import { siteConfig } from "@/utils/site-config";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialLinksProps {
  centered?: boolean;
  mobile?: boolean;
}

export function SocialLinks({ centered = false, mobile = false }: SocialLinksProps) {
  const iconSize = mobile ? 24 : 20;
  const spacing = mobile ? "space-x-6" : "space-x-4";
  const containerClass = centered ? `flex justify-center ${spacing}` : `flex ${spacing}`;

  return (
    <div className={containerClass}>
      <a
        href={siteConfig.social.facebook}
        className="text-neutral-content/60 hover:text-neutral-content transition-colors">
        <FaFacebook size={iconSize} />
      </a>
      <a
        href={siteConfig.social.twitter}
        className="text-neutral-content/60 hover:text-neutral-content transition-colors">
        <FaTwitter size={iconSize} />
      </a>
      <a
        href={siteConfig.social.instagram}
        className="text-neutral-content/60 hover:text-neutral-content transition-colors">
        <FaInstagram size={iconSize} />
      </a>
      <a
        href={siteConfig.social.linkedin}
        className="text-neutral-content/60 hover:text-neutral-content transition-colors">
        <FaLinkedin size={iconSize} />
      </a>

      <a
        href={siteConfig.social.tiktok}
        className="text-neutral-content/60 hover:text-neutral-content transition-colors">
        <SvgIcons.tiktok
          size={iconSize}
          className="inline-block fill-neutral-content/60 hover:fill-neutral-content"
        />
      </a>
    </div>
  );
}
