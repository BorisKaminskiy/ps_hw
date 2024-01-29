import { FC } from "react";
import cn from "classnames";
import styles from "./loading.module.scss";

const Loading: FC = () => {
  return (
    <div className={cn(styles.root)}>
      <div className={cn(styles.loader)}></div>
    </div>
  );
};

export default Loading;
