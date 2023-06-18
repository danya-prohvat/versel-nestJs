import { FC } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { getServerSession } from "next-auth";
import { authConfig } from "@/config/auth/auth.config";

export const Layout: FC = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authConfig);

  return (
    <div className={styles.container}>
      <Header session={session} />
      {children}
    </div>
  );
};
