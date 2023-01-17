import * as React from "react";
const SvgFontSize = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 4h4v10h2V4h4V2H0v2Z"
      fill="#AAB2BB"
    />
    <path d="M11 9H8V7h8v2h-3v5.038L11 14V9Z" fill="#AAB2BB" />
  </svg>
);
export default SvgFontSize;
