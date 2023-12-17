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

const Card: FC = (): JSX.Element => {
  const item = {
    id: 1,
    image: "../../assets/img/Safari (Catalina) - Dark 1.png",
    section: "Front-end",
    period: 1,
    likes: 4,
    title: "Как работать с CSS Grid",
    hrefText: "Грид-раскладка (CSS Grid Layout)",
    href: "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout",

    article:
      "представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и небольших элементов пользовательского интерфейса. Эта статья даёт общее представление о грид-раскладке и новой терминологии, которая является частью спецификации CSS Grid Layout Level 1. Более подробно показанные возможности будут описаны описаны далее в руководстве.",
    subtitle: "Что такое грид?",
    subarticle:
      "Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки. Элементы могут быть помещены в грид в пределах линий этих колонок и строк. Грид имеет следующие особенности:",
    time: 1,
  } as ItemProps;

  return (
    <div className={cn(styles.root)}>
      <div className={cn(styles.card_image)}>
        <Image src={cardImage} width={300} height={192} alt='card-image' />
      </div>
      <div className={cn(styles.card_info__wrapper)}>
        <div className={cn(styles.card_header)}>
          <div className={cn(styles.card_header__breadcrumbs)}>
            <Typography variant='t1' color='black-30'>
              {item.section}
            </Typography>
            <Divider variant='point' size='small' color='black-20' />
            <Typography variant='t1' color='black-20'>
              {item.period} <span> месяц назад </span>
            </Typography>
          </div>
          <Likes quantity={item.likes} quantityColor='black-20' />
        </div>
        <div className={cn(styles.card_body)}>
          <Htag tag='h3'>{item.title}</Htag>
          <div className={cn(styles.card_article)}>
            <Paragraph variant='p1'>
              {item.href && (
                <Atag variant='a1' href={item.href}>
                  {item.hrefText}
                </Atag>
              )}
              {item.article}
            </Paragraph>
          </div>
        </div>
      </div>

      <div className={cn(styles.card_footer)}>
        <Typography variant='t1' color='black-20'>
          {item.time} <span> минута</span>
        </Typography>
        <CardLink textColor='primary' props={item}>
          Читать
        </CardLink>
      </div>
    </div>
  );
};

export default Card;
