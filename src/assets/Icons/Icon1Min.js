import React from "react";

const SvgIcon1Min = props => (
  <svg width={56} height={56} viewBox="0 0 42 42" {...props}>
    <defs>
      <clipPath id="Icon-1-min_svg__a">
        <path d="M0 0h42v42H0z" />
      </clipPath>
      <pattern
        id="Icon-1-min_svg__d"
        patternUnits="userSpaceOnUse"
        width={42}
        height={42}
      >
        <use xlinkHref="#Icon-1-min_svg__c" />
      </pattern>
      <image
        id="Icon-1-min_svg__b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
      <g id="Icon-1-min_svg__c" clipPath="url(#Icon-1-min_svg__a)">
        <use xlinkHref="#Icon-1-min_svg__b" transform="scale(.08203)" />
      </g>
    </defs>
    <path fill="url(#Icon-1-min_svg__d)" d="M0 0h42v42H0z" />
  </svg>
);

export default SvgIcon1Min;
