import { FC } from "react";
import { ISvgProps } from "@/types/svg";

const LikeIcon: FC<ISvgProps> = ({ width, height, stroke, ...props }) => {
  let viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      fill='none'
    >
      <path
        d='M5.33332 6.66666H2.66666V13.3333H5.33332M5.33332 6.66666V13.3333M5.33332 6.66666L8.79704 2.62566C9.12571 2.24221 9.64281 2.07737 10.1328 2.19986L10.1645 2.20779C11.059 2.43141 11.462 3.47372 10.9505 4.24091L9.33332 6.66666H12.3736C13.215 6.66666 13.846 7.43643 13.681 8.26149L12.881 12.2615C12.7564 12.8847 12.2092 13.3333 11.5736 13.3333H5.33332'
        stroke={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LikeIcon;
