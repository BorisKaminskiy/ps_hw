import { FC } from "react";
import cn from "classnames";
import styles from "./Cards.module.scss";
import { items } from "@/mocks/items";
import Card from "@/components/Card/Card";

export const Cards: FC = () => {
  return (
    <div className={cn(styles.root)}>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
