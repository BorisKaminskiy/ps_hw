import type { Metadata } from 'next'
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./_layoutComponents/Header/Header";
import cn from "classnames";
import styles from "./layout.module.scss";
import { Portal } from "@/components/Portal/Portal";

const openSans = Open_Sans({ subsets: ["cyrillic"], display: "swap" });

// export const metadata: Metadata = {
//   title: "1-start",
//   description: "Generated by create next app",
// };

export const generateMetadata = async (): Promise<Metadata> => {
  //fetch на бэк для получения meta

  return {
    title: "1-start",
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='ru'>
      <body className={cn(openSans.className)}>
        <div className={cn(styles.wrapper)}>
          <Header />
          {children}
        </div>
        <Portal />
      </body>
    </html>
  );
}
