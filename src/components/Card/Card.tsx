import { FC } from "react";
import cn from "classnames";
import styles from "./Card.module.scss";
import Image from "next/image";
import cardImage from "../../assets/img/Safari (Catalina) - Dark 1.png";
import Htag from "../Htag/Htag";
import Atag from "../Atag/Atag";
import Paragraph from "../Paragraph/Paragraph";
import Typography from "../Typography/Typography";
import Divider from "../Divider/Divider";
import Likes from "../Likes/Likes";
import { ItemProps } from "@/types/item";
import CardLink from "../CardLink/CardLink";

const Card: FC<ItemProps> = ({
  id,
  section,
  article,
  period,
  likes,
  title,
  time,
  hrefText,
  href,
  ...props
}): JSX.Element => {
  return (
    <div className={cn(styles.root)}>
      <div className={cn(styles.card_image)}>
        <Image src={cardImage} width={300} height={192} alt='card-image' />
      </div>
      <div className={cn(styles.card_info__wrapper)}>
        <div className={cn(styles.card_header)}>
          <div className={cn(styles.card_header__breadcrumbs)}>
            <Typography variant='t1' color='black-30'>
              {section}
            </Typography>
            <Divider variant='point' size='small' color='black-20' />
            <Typography variant='t1' color='black-20'>
              {period} <span> месяц назад </span>
            </Typography>
          </div>
          <Likes quantity={likes} quantityColor='black-20' />
        </div>
        <div className={cn(styles.card_body)}>
          <Htag tag='h3'>{title}</Htag>
          <div className={cn(styles.card_article)}>
            <Paragraph variant='p1'>
              {href && (
                <Atag variant='a1' href={href}>
                  {hrefText}
                </Atag>
              )}
              {article}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={cn(styles.card_footer)}>
        <Typography variant='t1' color='black-20'>
          {time} <span> минута</span>
        </Typography>
        <CardLink href={`/blogs/${id}`}>Читать</CardLink>
      </div>
    </div>
  );
};

export default Card;
