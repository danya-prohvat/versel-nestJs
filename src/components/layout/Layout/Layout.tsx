import { FC } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth/auth.config";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};


export const Layout = async (props: ContainerProps) => {
  const session = await getServerSession(authConfig);

  return (
    <div className={styles.container}>
      <Header session={session} />
      {props.children}  //👈 Access children
    </div>
  );
};
