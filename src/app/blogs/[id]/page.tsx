import { FC } from "react";
import styles from "./page.module.scss";
import { Metadata } from "next";
import { Blog } from "../_components/Blog/Blog";

export const metadata: Metadata = {
  title: `Блог`,
};

interface IBlogsProps {
  params: {
    id: string;
  };
}

const Blogs: FC<IBlogsProps> = ({ params }) => {
  return (
    <main className={styles.main}>
      <Blog id={params.id} />
    </main>
  );
};

export default Blogs;
