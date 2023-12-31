import { authConfig } from "@/config/auth/auth.config";
import { Home } from "@/components/core/Home/Home";
import { getServerSession } from "next-auth";
import { Layout } from "@/components/layout/Layout/Layout";
import { redirect } from "next/navigation";
import { NextPage } from "next";

const HomePage: NextPage = async () => {
  const session = await getServerSession(authConfig);

  if (!session) redirect("/api/auth/signin");

  const res = await fetch("http://localhost:8080/api/getCars");
  const cars = await res.json();

  return (
    <Layout>
      <Home cars={cars} />
    </Layout>
  );
};

export default HomePage;
