import { FC } from "react";
import { ISvgProps } from "@/types/svg";

const ArrowIcon: FC<ISvgProps> = ({ width, height, stroke, ...props }) => {
  let viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1173_88)'>
        <path
          d='M4.16666 10H15.8333'
          stroke={stroke}
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.5 13.3333L15.8333 10'
          stroke={stroke}
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.5 6.66667L15.8333 10'
          stroke={stroke}
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1173_88'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowIcon;
