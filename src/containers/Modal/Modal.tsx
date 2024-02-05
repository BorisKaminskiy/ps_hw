"use client";
import { FC, ReactNode, useState } from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";
import Image from "next/image";
import image from "../../assets/img/Frame 24.png";
import { MODAL_STATUS_MAP } from "@/constants/constants";

interface IModalProps {
  variant: "success" | "error";
}

const Modal: FC<IModalProps> = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className={cn(styles.root)} role='alert'>
          <div className={cn(styles.modal)}>
            <span className={cn(styles.message)} role='alert'>
              {MODAL_STATUS_MAP[variant]}
            </span>
            <Image
              width={550}
              height={300}
              src={image}
              alt='modal window'
              className={cn(styles.background)}
            />
            <button
              className={cn(styles.button)}
              onClick={() => setIsOpen(false)}
              aria-label='Закрыть модальное окно'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
              >
                <path
                  d='M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z'
                  fill='black'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
