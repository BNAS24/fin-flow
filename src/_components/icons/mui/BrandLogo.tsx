import { SvgIcon, SvgIconProps } from "@mui/material";

export const BrandLogo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="#4FD6A6"
        />

        <path
          d="M7 14.5L10 11.5L12 13.5L17 8.5"
          stroke="#111111"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M14.7 8.5H17V10.8"
          stroke="#111111"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
