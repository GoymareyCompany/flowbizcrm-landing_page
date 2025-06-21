import { navigationItems } from "@/utils/site-config";

export function Features() {
  const features = [
    {
      title: "Visual Lead Pipeline",
      description:
        "Customize stages, drag-and-drop leads, and track progress with intuitive visual boards.",
      icon: "/features-cards-icons/visual-leads-pipeline.png",
      bgColor: "bg-[#DBEAFE]",
    },
    {
      title: "AI-powered Sentiment Analysis",
      description:
        "Automatically assign leads to your sales team based on custom rules and territories.",
      icon: "/features-cards-icons/ai-sentimental-analysis.png",
      bgColor: "bg-[#F3E8FF]",
    },
    {
      title: "Real-Time Alerts",
      description:
        "Get notified instantly when leads engage with your content or respond to messages.",
      icon: "/features-cards-icons/real-time-notifications.png",
      bgColor: "bg-[#FFEDD5]",
    },
    {
      title: "Employee Productivity Monitoring",
      description:
        "Sign in with Google or Facebook. Two-factor authentication supported for security.",
      icon: "/features-cards-icons/employee-productivity-tools.png",
      bgColor: "bg-[#4F9CF97A]",
    },
    {
      title: "Conversion Insights",
      description: "Track your win rate, analyze performance, and optimize your sales process.",
      icon: "/features-cards-icons/conversion-insights.png",
      bgColor: "bg-[#E0E7FF]",
    },
    {
      title: "Customer Support Ticketings",
      description:
        "Manage customer issues with built-in ticketing — create, assign, and resolve support requests directly in your CRM.",
      icon: "/features-cards-icons/customer-support-ticketing.png",
      bgColor: "bg-[#DCFCE7]",
    },
  ];

  return (
    <div id={navigationItems.features.id} className="w-full py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Everything You Need to Convert Leads Into Customers
        </h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Powerful features designed to streamline your sales process
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card shadow-md shadow-base-content hover:shadow-md transition-shadow">
              <div className="card-body">
                <div className={`text-3xl mb-4 size-12 p-1  ${feature.bgColor}`}>
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="card-title text-lg font-semibold">{feature.title}</h3>
                <p className="text-base-content/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
