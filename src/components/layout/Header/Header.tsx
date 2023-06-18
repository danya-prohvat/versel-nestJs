"use client";
import { FC } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Parson } from "@/components/common/Person/Person";

export const Header: FC<{session:any}> = ({ session }) => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <Image src="/logo.png" alt="" width={200} height={60} />
      </Link>

      <Parson
        email={session.user.email}
        name={session.user.name}
        avatar={session.user.image}
      />
    </div>
  );
};
