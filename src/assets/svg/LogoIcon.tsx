import { FC } from "react";
import { ISvgProps } from "@/types/svg";

const LogoIcon: FC<ISvgProps> = ({ width, height, stroke, ...props }) => {
  let viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='154'
      height='41'
      viewBox='0 0 154 41'
      fill='none'
    >
      <path
        d='M0.203125 29.6133C0.203125 29.0404 0.333333 28.6042 0.59375 28.3047C0.854167 27.9922 1.23828 27.8359 1.74609 27.8359C2.30599 27.8359 2.71615 27.9922 2.97656 28.3047C3.23698 28.6042 3.36719 29.0404 3.36719 29.6133C3.36719 30.1862 3.23698 30.6289 2.97656 30.9414C2.71615 31.2539 2.30599 31.4102 1.74609 31.4102C1.23828 31.4102 0.854167 31.2539 0.59375 30.9414C0.333333 30.6289 0.203125 30.1862 0.203125 29.6133ZM31.9609 9.35938C34.0052 9.35938 35.6198 9.95182 36.8047 11.1367C37.9896 12.3216 38.582 14.1901 38.582 16.7422V31H36.6484V16.8203C36.6484 14.8542 36.1992 13.4089 35.3008 12.4844C34.4023 11.5599 33.2174 11.0977 31.7461 11.0977C29.7279 11.0977 28.1458 11.6901 27 12.875C25.8672 14.0469 25.3008 15.8958 25.3008 18.4219V31H23.3477V16.8203C23.3477 15.5052 23.1393 14.431 22.7227 13.5977C22.319 12.7513 21.7526 12.1263 21.0234 11.7227C20.2943 11.306 19.4349 11.0977 18.4453 11.0977C17.1302 11.0977 15.9909 11.3711 15.0273 11.918C14.0638 12.4518 13.3216 13.2852 12.8008 14.418C12.2799 15.5378 12.0195 16.9635 12.0195 18.6953V31H10.0469V9.76953H11.6484L11.9414 13.2461H12.0586C12.4102 12.556 12.8789 11.918 13.4648 11.332C14.0508 10.7461 14.7734 10.2708 15.6328 9.90625C16.5052 9.54167 17.5273 9.35938 18.6992 9.35938C20.2227 9.35938 21.5117 9.70443 22.5664 10.3945C23.6341 11.0716 24.3763 12.0807 24.793 13.4219H24.9297C25.5026 12.1458 26.388 11.1497 27.5859 10.4336C28.7969 9.71745 30.2552 9.35938 31.9609 9.35938ZM41.9023 9.76953H43.9922L49.1484 23.2461C49.4609 24.0404 49.7344 24.776 49.9688 25.4531C50.2161 26.1172 50.431 26.7292 50.6133 27.2891C50.7956 27.8359 50.9453 28.3372 51.0625 28.793H51.1797C51.375 28.194 51.6354 27.4258 51.9609 26.4883C52.2865 25.5378 52.6576 24.4831 53.0742 23.3242L58.1719 9.76953H60.2812L50.5938 34.9844C50.125 36.2083 49.6107 37.2435 49.0508 38.0898C48.4909 38.9492 47.8333 39.5938 47.0781 40.0234C46.3229 40.4661 45.4115 40.6875 44.3438 40.6875C43.862 40.6875 43.4258 40.6484 43.0352 40.5703C42.6445 40.5052 42.2669 40.4141 41.9023 40.2969V38.5977C42.2409 38.7018 42.5859 38.7865 42.9375 38.8516C43.3021 38.9297 43.6992 38.9688 44.1289 38.9688C44.8711 38.9688 45.5091 38.8125 46.043 38.5C46.5898 38.2005 47.0781 37.7318 47.5078 37.0938C47.9375 36.4557 48.3411 35.6419 48.7188 34.6523L50.1641 30.8828L41.9023 9.76953ZM76.7461 36.2148H60.1641V34.6133H76.7461V36.2148ZM82.1562 0.609375V9.24219C82.1562 9.98438 82.1432 10.7982 82.1172 11.6836C82.0911 12.569 82.0651 13.3047 82.0391 13.8906H82.1562C82.6641 12.5755 83.5495 11.4883 84.8125 10.6289C86.0755 9.76953 87.651 9.33984 89.5391 9.33984C92.2995 9.33984 94.4284 10.2708 95.9258 12.1328C97.4362 13.9948 98.1914 16.7227 98.1914 20.3164C98.1914 22.5169 97.8529 24.4505 97.1758 26.1172C96.4987 27.7708 95.4896 29.0664 94.1484 30.0039C92.8203 30.9284 91.1536 31.3906 89.1484 31.3906C87.3385 31.3906 85.8607 31.013 84.7148 30.2578C83.569 29.4896 82.7357 28.5326 82.2148 27.3867H82.0586L81.6875 31H80.1836V0.609375H82.1562ZM89.3242 11.0586C87.6445 11.0586 86.2773 11.4232 85.2227 12.1523C84.168 12.8685 83.3932 13.9167 82.8984 15.2969C82.4036 16.6771 82.1562 18.3633 82.1562 20.3555V20.668C82.1562 23.5977 82.6901 25.8307 83.7578 27.3672C84.8255 28.9036 86.5573 29.6719 88.9531 29.6719C91.3229 29.6719 93.1133 28.8646 94.3242 27.25C95.5482 25.6224 96.1602 23.3112 96.1602 20.3164C96.1602 17.2565 95.5938 14.9518 94.4609 13.4023C93.3281 11.8398 91.6159 11.0586 89.3242 11.0586ZM106.043 31H104.051V0.609375H106.043V31ZM130.711 20.3555C130.711 21.9961 130.509 23.4935 130.105 24.8477C129.702 26.1888 129.103 27.3477 128.309 28.3242C127.514 29.3008 126.525 30.056 125.34 30.5898C124.168 31.1237 122.801 31.3906 121.238 31.3906C119.754 31.3906 118.432 31.1302 117.273 30.6094C116.115 30.0755 115.132 29.3203 114.324 28.3438C113.53 27.3672 112.924 26.2083 112.508 24.8672C112.091 23.513 111.883 22.0091 111.883 20.3555C111.883 18.0768 112.26 16.1172 113.016 14.4766C113.784 12.8229 114.878 11.5599 116.297 10.6875C117.729 9.80208 119.441 9.35938 121.434 9.35938C123.491 9.35938 125.203 9.82812 126.57 10.7656C127.951 11.6901 128.986 12.9792 129.676 14.6328C130.366 16.2865 130.711 18.194 130.711 20.3555ZM113.914 20.3555C113.914 22.2174 114.181 23.8451 114.715 25.2383C115.249 26.6315 116.056 27.7188 117.137 28.5C118.23 29.2812 119.611 29.6719 121.277 29.6719C122.983 29.6719 124.383 29.2812 125.477 28.5C126.57 27.7188 127.378 26.625 127.898 25.2188C128.419 23.8125 128.68 22.1914 128.68 20.3555C128.68 18.5716 128.432 16.9831 127.938 15.5898C127.443 14.1966 126.661 13.1029 125.594 12.3086C124.526 11.5013 123.133 11.0977 121.414 11.0977C118.953 11.0977 117.085 11.918 115.809 13.5586C114.546 15.1992 113.914 17.4648 113.914 20.3555ZM142.195 40.6094C139.526 40.6094 137.449 40.0951 135.965 39.0664C134.493 38.0378 133.758 36.599 133.758 34.75C133.758 33.3177 134.207 32.0807 135.105 31.0391C136.004 30.0104 137.221 29.3919 138.758 29.1836C138.146 28.8971 137.645 28.5065 137.254 28.0117C136.876 27.5169 136.688 26.944 136.688 26.293C136.688 25.5638 136.915 24.8867 137.371 24.2617C137.827 23.6237 138.51 23.0378 139.422 22.5039C138.198 22.0612 137.234 21.3125 136.531 20.2578C135.828 19.1901 135.477 17.9076 135.477 16.4102C135.477 14.9779 135.783 13.7344 136.395 12.6797C137.007 11.625 137.872 10.8112 138.992 10.2383C140.125 9.65234 141.46 9.35938 142.996 9.35938C143.465 9.35938 143.888 9.3724 144.266 9.39844C144.656 9.42448 145.014 9.47005 145.34 9.53516C145.665 9.58724 145.958 9.65885 146.219 9.75H153.074V11.1562L148.699 11.4492C149.272 12.1393 149.702 12.888 149.988 13.6953C150.275 14.4896 150.418 15.3294 150.418 16.2148C150.418 18.3242 149.754 19.9974 148.426 21.2344C147.098 22.4714 145.249 23.0898 142.879 23.0898C142.228 23.0898 141.59 23.0312 140.965 22.9141C140.171 23.3828 139.565 23.8581 139.148 24.3398C138.732 24.8086 138.523 25.3945 138.523 26.0977C138.523 26.5404 138.654 26.9049 138.914 27.1914C139.174 27.4648 139.552 27.6797 140.047 27.8359C140.542 27.9792 141.147 28.0508 141.863 28.0508H145.594C147.898 28.0508 149.663 28.5195 150.887 29.457C152.111 30.3945 152.723 31.7747 152.723 33.5977C152.723 35.8242 151.805 37.5495 149.969 38.7734C148.146 39.9974 145.555 40.6094 142.195 40.6094ZM142.332 38.9492C144.194 38.9492 145.743 38.7474 146.98 38.3438C148.23 37.9401 149.168 37.3411 149.793 36.5469C150.418 35.7656 150.73 34.7956 150.73 33.6367C150.73 32.6862 150.503 31.9505 150.047 31.4297C149.591 30.9089 148.947 30.5508 148.113 30.3555C147.28 30.1471 146.297 30.043 145.164 30.043H141.609C140.477 30.043 139.467 30.1992 138.582 30.5117C137.697 30.8112 137.007 31.293 136.512 31.957C136.03 32.6211 135.789 33.5065 135.789 34.6133C135.789 36.0326 136.342 37.1068 137.449 37.8359C138.569 38.5781 140.197 38.9492 142.332 38.9492ZM142.957 21.5078C144.715 21.5078 146.062 21.0651 147 20.1797C147.938 19.2943 148.406 18.0117 148.406 16.332C148.406 14.5352 147.924 13.1875 146.961 12.2891C145.997 11.3906 144.65 10.9414 142.918 10.9414C141.238 10.9414 139.917 11.4232 138.953 12.3867C138.003 13.3372 137.527 14.6784 137.527 16.4102C137.527 18.0247 137.983 19.2812 138.895 20.1797C139.806 21.0651 141.16 21.5078 142.957 21.5078Z'
        fill='black'
      />
    </svg>
  );
};

export default LogoIcon;