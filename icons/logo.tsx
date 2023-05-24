import { chakra } from "@chakra-ui/react";

const Logo = (props: any) => (
  <chakra.svg
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_10_2)">
      <circle cx="260" cy="260" r="260" fill="#FFA500" />
      <rect x="219" y="124" width="67" height="25" fill="white" />
      <rect x="212" y="389" width="97" height="8" fill="white" />
      <rect
        x="286"
        y="124"
        width="265"
        height="25"
        transform="rotate(90 286 124)"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_2">
        <rect width="520" height="520" fill="white" />
      </clipPath>
    </defs>
  </chakra.svg>
);

export { Logo };
