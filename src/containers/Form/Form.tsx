"use client";

import { FC, useEffect } from "react";
import cn from "classnames";
import styles from "./Form.module.scss";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Typography from "@/components/Typography/Typography";
import Modal from "../Modal/Modal";
import { useFetch } from "@/hooks/useFetch";
import { endpoints } from "@/api/endPoints";

interface IFormProps {
  id: string | number;
}

interface IForm {
  name: string;
  comment: string;
}

export const Form: FC<IFormProps> = ({ id }) => {
  const { response, loading, error, isSuccess, changeParams } = useFetch()

  useEffect(() => { isSuccess && reset() }, [isSuccess])

  const schema = yup
    .object({
      name: yup.string().required("Поле имя обязательно для заполнения"),
      comment: yup
        .string()
        .required("Поле комментарий обязательно для заполнения")
        .min(20, "Минимум 20 символов"),
    })
    .required();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data: IForm) => {
    changeParams(endpoints.posts.putPost + id,
      {
        method: 'PUT',
        body: JSON.stringify(data)
      })
  };

  return (
    <>
      {loading && (
        <div className={cn(styles.root)}>
          <div className={cn(styles.loader)}></div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.reviewForm)}>
        <Input
          {...register("name")}
          placeholder='Имя'
          errors={errors.name?.message}
          aria-invalid={errors.name ? true : false}
          disabled={isSuccess}
        />

        <Textarea
          {...register("comment")}
          placeholder='Комментарий'
          rows={3}
          errors={errors.comment?.message}
          aria-invalid={errors.comment ? true : false}
          disabled={isSuccess}
        />
        <Button disabled={isSuccess}>Отправить</Button>
      </form>
      {isSuccess === true && <Modal variant='success'>Спасибо за Ваш отзыв</Modal>}
      {isSuccess === false && <Modal variant='error'>Ошибка </Modal>}
    </>
  );
};
