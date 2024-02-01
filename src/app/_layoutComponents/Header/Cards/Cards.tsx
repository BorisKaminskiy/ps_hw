"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./Cards.module.scss";
import { items } from "@/mocks/items";
import Card from "@/components/Card/Card";
import { motion } from "framer-motion";

export const Cards: FC = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.ul
      initial='hidden'
      animate='visible'
      variants={variants}
      className={cn(styles.root)}
    >
      {items.map((item) => (
        <motion.li variants={variants} key={item.id}>
          <Card {...item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
