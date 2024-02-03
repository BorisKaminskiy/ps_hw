import { FC } from "react";
import cn from "classnames";
import styles from "./GitLink.module.scss";
import Link from "next/link";
import GitIcon from "@/assets/svg/GitIcon";
import { constants } from "@/constants/constants";

export const GitLink: FC = () => {
  return (
    <Link
      href={constants.githubLink}
      target='_blank'
      tabIndex={0}
      aria-label={"Переход на GitHub"}
    >
      <GitIcon width={24} height={24} />
    </Link>
  );
};
