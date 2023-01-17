import * as React from "react";
const SvgLineHeight = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#LineHeight_svg__a)">
      <path
        d="M8 13h8v2H6l2-2ZM6 5h10v2H6zM6 9h10v2H6zM6 1h10v2H8L6 1Z"
        fill="#AAB2BB"
      />
      <path
        d="m3 1.5-.5.5h1L3 1.5Zm0 0v13m0 0 .5-.5h-1l.5.5Z"
        stroke="#AAB2BB"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="LineHeight_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineHeight;
