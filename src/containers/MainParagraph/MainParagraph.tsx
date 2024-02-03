"use client";

import { FC, useState, KeyboardEvent, useRef } from "react";
import cn from "classnames";
import styles from "./MainParagraph.module.scss";
import Paragraph from "@/components/Paragraph/Paragraph";

interface IMainParagraph {
  paragraph?: string;
}

const MainParagraph: FC<IMainParagraph> = ({ paragraph }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const onAnchorKeydown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      e.preventDefault();
      bodyRef.current?.focus();
      return;
    }
    setIsVisible(false);
  };

  const onAnchorFocus = () => {
    setIsVisible(true);
  };

  return (
    <>
      <a
        onFocus={onAnchorFocus}
        onKeyDown={onAnchorKeydown}
        tabIndex={2}
        className={cn(styles.anchor, isVisible && styles.visible)}
      >
        К главному тексту
      </a>
      <div className={cn(styles.paragraph_wrapper)} ref={bodyRef} tabIndex={0}>
        <Paragraph variant='p2'>{paragraph}</Paragraph>
      </div>
    </>
  );
};

export default MainParagraph;
