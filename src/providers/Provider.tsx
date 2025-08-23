import { SessionProvider } from "next-auth/react";
import React from "react";
import MenuContextProvider from "./MenuContextProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MenuContextProvider>{children}</MenuContextProvider>
    </SessionProvider>
  );
}
