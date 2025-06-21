export const siteConfig = {
  name: "FlowBizCRM",
  description: "The ultimate CRM solution for managing leads, deals, and customer relationships.",
  url: "https://info.flowbiz.com",
  flowbizUrl: "https://flowbiz.com",
  social: {
    twitter: "https://twitter.com/flowbiz",
    facebook: "https://facebook.com/flowbiz",
    instagram: "https://instagram.com/flowbiz",
    tiktok: "https://tiktok.com/@flowbiz",
    linkedin: "https://linkedin.com/company/flowbiz",
  },
} as const



export const navigationItems = {
    features: { name: "Features", href: "#features", id: "features" },
    pricing: { name: "Pricing", href: "#pricing", id: "pricing" },
    resources: { name: "Resources", href: "#resources", id: "resources" },
    about: { name: "About", href: "#about", id: "about" },
} as const;

// Helper function to convert to array if needed
export const getNavigationArray = () => Object.values(navigationItems);

export const pageSections = getNavigationArray();
