import * as React from "react";
const SvgArrowDropDown = (props) => (
  <svg
    width={9}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1 3.5 3L8 1"
      stroke="#AAB2BB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowDropDown;
