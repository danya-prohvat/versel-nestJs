import { FC } from "react";
import styles from "./Person.module.scss";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface IPerson {
  avatar: string;
  name: string;
  email: string;
}

export const Parson: FC<IPerson> = ({ avatar, name, email }) => {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <Image src={avatar} alt="person avatar" width={40} height={40} />
        <div className={styles.text}>
          <span>{email}</span>
          <span>{name}</span>
        </div>
      </div>
      <div className={styles.signOut}>
        <Image
          onClick={() => signOut()}
          src="https://www.svgrepo.com/show/67681/logout.svg"
          alt="sign out"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
