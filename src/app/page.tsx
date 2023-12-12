import { FC } from "react";
import styles from "./page.module.scss";

import Card from "@/components/Card/Card";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <Card />
    </main>
  );
};

export default Home;
