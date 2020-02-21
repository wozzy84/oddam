import React from "react";

const SvgIcon3Min = props => (
  <svg width={56} height={56} viewBox="0 0 42 42" {...props}>
    <defs>
      <clipPath id="Icon-3-min_svg__a">
        <path d="M0 0h42v42H0z" />
      </clipPath>
      <pattern
        id="Icon-3-min_svg__d"
        patternUnits="userSpaceOnUse"
        width={42}
        height={42}
      >
        <use xlinkHref="#Icon-3-min_svg__c" />
      </pattern>
      <image
        id="Icon-3-min_svg__b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
      <g id="Icon-3-min_svg__c" clipPath="url(#Icon-3-min_svg__a)">
        <use xlinkHref="#Icon-3-min_svg__b" transform="scale(.08203)" />
      </g>
    </defs>
    <path fill="url(#Icon-3-min_svg__d)" d="M0 0h42v42H0z" />
  </svg>
);

export default SvgIcon3Min;