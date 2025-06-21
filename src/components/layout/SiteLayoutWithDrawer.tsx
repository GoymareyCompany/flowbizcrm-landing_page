import { FaArrowRight } from "react-icons/fa";
import { pageSections, siteConfig } from "@/utils/site-config";
import { FlowbizIcon } from "../icons/FlowbizIcon";
import { BookADemoButton } from "./BookADemoButton";
interface SiteLayoutWithDrawerProps {
  children: React.ReactNode;
}

export function SiteLayoutWithDrawer({ children }: SiteLayoutWithDrawerProps) {

  return (
    <div className="grid w-full">
      <div className="col-start-1 row-start-1 w-screen">
        <img
          height={1200}
          width={1200}
          src={"/landing/landing-spiral.png"}
          className="object-cover w-full"
        />
      <div className="relative md:hidden">
        <img
          height={200}
          width={200}
          src={"/landing/circles.png"}
          className="object-cover h-44 w-auto  ml-1 absolute top-0 -left-28 -z-10"
        />
      </div>
      </div>
      <div className="col-start-1 row-start-1 ">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-100 border-b border-base-200 justify-center w-full sticky top-0 z-30">
              <div className="w-full max-w-[90%] flex items-center gap-2">
                <div className="navbar-start">
                  <a href="#" className=" text-xl font-bold text-primary">
                    <FlowbizIcon />
                  </a>
                </div>
                <div className="hidden lg:flex navbar-start">
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                      {pageSections.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-[#4F9CF9] text-lg">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="navbar-end">
                    <div className="flex gap-5">
                      <a
                        href={siteConfig.flowbizUrl + "/login"}
                        className="btn bg-ghost bg-base-content/50 text-base-100">
                        Login
                      </a>
                      {/* <a href={siteConfig.flowbizUrl + "/signup"} className="btn btn-primary px-6">
                        Try Flowbiz Free <FaArrowRight className="mx-2" />
                      </a> */}
                      <BookADemoButton/>
                    </div>
                  </div>
                </div>
                <div className="navbar-end flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            {/* Page content here */}
            <div className="w-full px-4 md:px-2 xl:px-20">{children}</div>
          </div>
          <div className="drawer-side z-40">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu justify-between bg-base-200 min-h-full w-80 p-4">
              <li className=" mb-12">
                <a href="#" className=" text-xl font-bold text-primary">
                  <FlowbizIcon />
                </a>
              </li>
              <div className="flex flex-col gap-4 mb-6 ">
                {/* Sidebar content here */}
                {pageSections.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-[#4F9CF9] text-lg">
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>

              <div className="divider"></div>
              <li>
                <div className="flex flex-col gap-2 h-fit">
                  <a
                    href={siteConfig.flowbizUrl + "/login"}
                    className="btn bg-ghost bg-base-content/50 text-base-100 w-full">
                    Login
                  </a>
                  <a
                    href={siteConfig.flowbizUrl + "/signup"}
                    className="btn btn-primary px-6 w-full">
                    Try Flowbiz Free <FaArrowRight className="mx-2" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
