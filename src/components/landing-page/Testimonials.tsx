import { GrNext, GrPrevious } from "react-icons/gr";
export function Testimonials() {
  const testimonials = [
    {
      quote:
        "FlowBizCRM has transformed how we manage our sales pipeline. We've increased our conversion rate by 37% in just three months.",
      author: "Sarah Johnson",
      role: "Sales Director, TechCorp",
      avatar: "/testimonial/one.png",
    },
    {
      quote:
        "The lead distribution feature alone has saved our team hours every week. This is the best CRM we've ever used.",
      author: "Michael Chen",
      role: "Founder, GrowthAgency",
      avatar: "/testimonial/two.png",
    },
    {
      quote:
        "As a small business owner, I needed something simple yet powerful. FlowBizCRM is exactly that - easy to use but with all the features I need.",
      author: "Jessica Williams",
      role: "CEO, Boutique Consulting",
      avatar: "/testimonial/three.png",
    },
  ];

  return (
    <div className="w-full py-16 bg-base-200 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-7xl font-bold text-center mb-12">
          See what our trusted users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex gap-8 flex-col bg-[#4F9CF9] text-white shadow-lg shadow-base-content/50 justify-between py-10 px-6 rounded-lg ">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
              </div>
              <p className="mb-6 text-lg">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="font-semibold">{testimonial.author}</span>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
                <div className="rating">
                  <div
                    className="mask mask-star bg-[#FFE492] size-[15px]"
                    aria-label="1 star"></div>
                  <div
                    className="mask mask-star bg-[#FFE492] size-[15px]"
                    aria-label="2 star"></div>
                  <div
                    className="mask mask-star bg-[#FFE492] size-[15px]"
                    aria-label="3 star"></div>
                  <div
                    className="mask mask-star bg-[#FFE492] size-[15px]"
                    aria-label="4 star"></div>
                  <div
                    className="mask mask-star bg-[#FFE492] size-[15px]"
                    aria-label="5 star"
                    aria-current="true"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:mt-20 md:flex justify-center gap-10">
        <button className="btn btn=-ghost bg-[#E6F1FE] btn-circle p-2 size-[75px]">
          <GrPrevious className="text-2xl text-[#4F9CF9] cursor-pointer size-10" />
        </button>
        <button className="btn btn=-ghost bg-[#E6F1FE] btn-circle p-2 size-[75px] ">
          <GrNext className="text-2xl text-[#4F9CF9] cursor-pointer size-10" />
        </button>
      </div>
    </div>
  );
}
