"use client";
import { ParseContext } from "@/servises/context";
import { useSession, signOut } from "next-auth/react";
import DashboardToggle from "./dashboardToggle";
import Parse from "@/servises/parse";

const Dashboard = () => {
  const session = useSession();
  if (session?.data?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL && session?.status === "authenticated") {
    // console.log(session);
    // signOut({
    //   callbackUrl: "/",
    // });
  }

  return (
    <ParseContext.Provider value={Parse}>
      <div className="min-h-screen flex flex-col px-4">
        <h1 className="my-10 self-center">Welcome to TkachPro Admin dashboard</h1>
        <DashboardToggle />
      </div>
    </ParseContext.Provider>
  );
};

export default Dashboard;
