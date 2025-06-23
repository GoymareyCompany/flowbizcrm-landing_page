export const siteConfig = {
  name: "FlowBizCRM",
  description: "The ultimate CRM solution for managing leads, deals, and customer relationships.",
  url: "https://info.flowbiz.com",
  flowbizUrl: "https://app.flowbizcrm.com",
  social: {
    twitter: "https://x.com/Goymarey",
    facebook: "https://www.facebook.com/profile.php?id=61569351266453",
    instagram: "https://www.instagram.com/goymarey",
    tiktok: "https://www.tiktok.com/@goymarey?_t=8rY9pWc1DlA&_r=1",
    linkedin: "https://www.linkedin.com/company/goymarey",
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
