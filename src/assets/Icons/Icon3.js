import React from "react";

const SvgIcon3 = props => (
  <svg width={83} height={83} {...props}>
    <defs>
      <clipPath id="Icon-3_svg__a">
        <path fill="none" d="M0 0h83v83H0z" />
      </clipPath>
      <pattern
        id="Icon-3_svg__b"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <image
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <g
      stroke="rgba(0,0,0,0)"
      fill="url(#Icon-3_svg__b)"
      clipPath="url(#Icon-3_svg__a)"
    >
      <path stroke="none" d="M0 0h83v83H0z" />
      <path fill="none" d="M.5.5h82v82H.5z" />
    </g>
  </svg>
);

export default SvgIcon3;
