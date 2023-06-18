import { FC } from "react";
import styles from "./CarItem.module.scss";
import Image from "next/image";
import { ICar } from "@/types/car.types";

export const CarItem: FC<ICar> = ( car ) => {
  return (
    <div className={styles.container}>
      <Image src={car.picture} alt="" width={500} height={420} />
      <span className={styles.text}>{car.title} | {car.cost}$</span>
    </div>
  );
};
