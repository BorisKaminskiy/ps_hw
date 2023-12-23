import { FC } from "react";
import styles from "./page.module.scss";
import { Cards } from "./_layoutComponents/Header/Cards/Cards";

const Home: FC = () => {
  return <main className={styles.main}>{<Cards />}</main>;
};

export default Home;
