import React from 'react';
import { MdFace } from 'react-icons/md';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

export const SvgIcons: Record<string, React.FC<IconProps>> = {
  tiktokk: ({ size = 10, color = "currentColor", ...props }) => (
    <MdFace size={size} color={color} {...props} />
  ),
  tiktok: ({ size = 10, color = "currentColor", ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height= {size}
      viewBox="0 0 40 40"
      {...props}
      >
      <path
        id="SVGRepo_iconCarrier"
        d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291-.76-.344-1.468-.787-2.161-1.24-.009 3.896.016 7.787-.025 11.667-.104 1.864-.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22 22 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297.027 1.975-.052 3.948-.052 5.923-1.323-.428-2.869-.308-4.025.495a4.62 4.62 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145.317 2.188 2.421 4.027 4.667 3.828 1.489-.016 2.916-.88 3.692-2.145.251-.443.532-.896.547-1.417.131-2.385.079-4.76.095-7.145.011-5.375-.016-10.735.025-16.093z"></path>
    </svg>
  ),
  // You can add more icons here following the same pattern
};


