import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
import React from "react";
// children 代表子节点
// return <AuthProvider children={children}></AuthProvider>; children属性和在内部写children是一致的
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
