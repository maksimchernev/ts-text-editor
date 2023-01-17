import * as React from "react";
const SvgLetterSpacing = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#LetterSpacing_svg__a)">
      <path
        d="m8 0 .922-.388a1 1 0 0 0-1.844 0L8 0Zm2.8 8a1 1 0 1 0 0-2v2ZM4.922 9.888l4-9.5-1.844-.776-4 9.5 1.844.776Zm2.156-9.5 4 9.5 1.844-.776-4-9.5-1.844.776ZM5.2 8h5.6V6H5.2v2Z"
        fill="#AAB2BB"
      />
      <path
        d="m1.5 13 .5.5v-1l-.5.5Zm0 0h13m0 0-.5-.5v1l.5-.5Z"
        stroke="#AAB2BB"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="LetterSpacing_svg__a">
        <path fill="#fff" transform="rotate(-90 8 8)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterSpacing;
