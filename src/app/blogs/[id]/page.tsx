import { FC } from "react";
import cn from "classnames";
import styles from "./page.module.scss";
import { Metadata } from "next";
import Htag from "@/components/Htag/Htag";
import Typography from "@/components/Typography/Typography";
import Divider from "@/components/Divider/Divider";
import Likes from "@/components/Likes/Likes";
import Paragraph from "@/components/Paragraph/Paragraph";
import Image from "next/image";
import Atag from "@/components/Atag/Atag";
import { LikeContainer } from "@/containers/LikeContainer/LikeContainer";
import blogImage from "../../../assets/img/Safari (Catalina) - Dark 2.png";
import { getBlog, getBlogs } from "@/api/getBlog";
import { notFound } from "next/navigation";
import { items } from "@/mocks/items";
import Comments from "@/containers/Comments/Comments";
import { Form } from "@/containers/Form/Form";
import MainParagraph from "@/containers/MainParagraph/MainParagraph";

export const metadata: Metadata = {
  title: `Блог`,
};

interface IBlogsProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = async () => {
  const blogs = await getBlogs();

  return blogs?.map((item) => {
    id: item.id;
  });
};

const Blogs: FC<IBlogsProps> = async ({ params }) => {
  const post = await getBlog(Number(params.id));
  const data = items.find((item) => Number(item.id) === Number(params.id));

  if (!post) {
    notFound();
  }

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
              {data.period}
              <span> месяц назад </span>
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
                <Atag variant='a2' href={data.href} tabIndex={0}>
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
          <MainParagraph paragraph={data.subarticle} />
          <div className={cn(styles.subtitle)}></div>
          <LikeContainer blogId={String(data.id)} />
          <Comments postId={Number(params.id)} />
          <Form id={params.id} />
        </>
      )}
    </div>
  );
};

export default Blogs;
