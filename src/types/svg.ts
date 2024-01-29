import { DetailedHTMLProps, SVGLineElementAttributes } from "react";

export interface ISvgProps
  extends DetailedHTMLProps<
    SVGLineElementAttributes<HTMLOrSVGElement>,
    HTMLOrSVGElement
  > {
  width?: number | string
  height?: number | string
  }