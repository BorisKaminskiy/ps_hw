"use client";

import { FC, useState, useEffect } from "react";
import { usePortal } from "@/store/portal";
import { getData } from "@/api/getBlog";
import { ItemProps } from "@/types/item";
import { items } from "@/mocks/items";
import cn from "classnames";
import styles from "./Blog.module.scss";
import Htag from "@/components/Htag/Htag";
import Atag from "@/components/Atag/Atag";
import Typography from "@/components/Typography/Typography";
import Divider from "@/components/Divider/Divider";
import Likes from "@/components/Likes/Likes";
import { LikeContainer } from "@/containers/LikeContainer/LikeContainer";
import Paragraph from "@/components/Paragraph/Paragraph";
import Image from "next/image";
import blogImage from "../../../../assets/img/Safari (Catalina) - Dark 2.png";

interface IBlogProps {
  id: string;
}

export const Blog: FC<IBlogProps> = ({ id }) => {
  const [blog, setBlog] = useState<ItemProps | null>(null);
  const setPortal = usePortal((state) => state.setPortal);
  const data = items.find(
    (item) => String(item.id) === String(id)
  ) as ItemProps;

  useEffect(() => {
    setPortal(true);
    getData()
      .then(() => setBlog(data))
      .catch((error) => console.error(error))
      .finally(() => setPortal(false));
  }, []);

  return (
    <div className={cn(styles.root)}>
      {data && (
        <>
          <Htag tag='h1' color='black'>
            {data.title}
          </Htag>
          <div className={cn(styles.breadcrumbs)}>
            <Typography variant='t1' color='black-20'>
              {data.section}
            </Typography>
            <Divider variant='point' size='small' color='black-20' />
            <Typography variant='t1' color='black-20'>
              {data.period} <span> месяц назад </span>
            </Typography>
            <Divider variant='point' size='small' color='black-20' />
            <Typography variant='t1' color='black-20'>
              {data.time} <span> минута</span>
            </Typography>
            <Divider variant='point' size='small' color='black-20' />
            <Likes quantity={data.likes} quantityColor='black-20' />
          </div>
          <Image src={blogImage} width={687} height={440} alt='blog image' />
          <div className={cn(styles.paragraph_wrapper)}>
            <Paragraph variant='p2'>
              {data.href && (
                <Atag variant='a2' href={data.href}>
                  {data.hrefText}
                </Atag>
              )}
              {data.article}
            </Paragraph>
          </div>
          <div className={cn(styles.subtitle)}>
            <Htag tag='h2' color='black'>
              {data.subtitle}
            </Htag>
          </div>
          <div className={cn(styles.paragraph_wrapper)}>
            <Paragraph variant='p2'>{data.subarticle}</Paragraph>
          </div>
          <div className={cn(styles.subtitle)}></div>
          <LikeContainer blogId={String(data.id)} />
        </>
      )}
    </div>
  );
};
