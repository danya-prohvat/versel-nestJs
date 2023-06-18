import { ICars } from "@/types/car.types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.scss";

export const Home: FC<ICars> = ({ cars }) => {
  return (
    <div className={styles.container}>
      {cars.map((car) => (
        <div className={styles.item}>
          <Image src={car.picture} alt="car" width={250} height={200} />
          <div className={styles.text}>
            <span>{car.title}</span>
            <span>{car.cost}$</span>
            <Link href={`/car/${car.id}`}>more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
