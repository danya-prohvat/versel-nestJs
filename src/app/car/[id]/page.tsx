//@ts-check
import { authConfig } from "@/config/auth/auth.config";
import { Home } from "@/components/core/Home/Home";
import { getServerSession } from "next-auth";
import { Layout } from "@/components/layout/Layout/Layout";
import { redirect } from "next/navigation";
import { NextPage } from "next";
import { CarItem } from "@/components/common/CarItem/CarItem";

const Car: NextPage = async ({params}:any) => {
  const res = await fetch(`http://localhost:8080/api/getCar?id=${params.id}`);
  const car = await res.json();

  return (
    <Layout>
      <CarItem picture={car.picture} cost={car.cost} title={car.title} />
    </Layout>
  );
};

export default Car;
