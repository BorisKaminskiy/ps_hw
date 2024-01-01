"use client";

import cn from "classnames";
import { FC, ReactNode } from "react";
import styles from "./portal.module.scss";
import { usePortal } from "@/store/portal";

export const Portal: FC = () => {
  const isPortal = usePortal((state) => state.isPortal);

  return (
    <>
      {isPortal && (
        <div className={cn(styles.root)}>
          <div className={cn(styles.loader)}></div>
        </div>
      )}
    </>
  );
};
