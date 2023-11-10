"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }) => {
  return <SessionProvider basePath="https://tkach-pro-admin.vercel.app/api/auth">{children}</SessionProvider>;
};
