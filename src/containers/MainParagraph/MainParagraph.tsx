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

  const onAnchorKeydown = (key: KeyboardEvent) => {
    if (key.code === "Enter") {
      key.preventDefault();
      bodyRef.current?.focus();
      return;
    }
    setIsVisible(false);
  };

  return (
    <>
      <a
        onFocus={() => {
          setIsVisible(true);
        }}
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
