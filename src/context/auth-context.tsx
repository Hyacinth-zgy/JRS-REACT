import React, { useState, createContext, useContext, ReactNode } from "react";
import { User } from "utils/interface";
import * as auth from "auth-provider";
import { http } from "utils/http";
import { useMount } from "utils";

interface AuthForm {
  username: string;
  password: string;
}

// 使用react自带的context
export const AuthContext = createContext<
  | {
      user: User | null;
      login: (params: AuthForm) => Promise<void>;
      register: (params: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

// context传递的数据
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => {
    return auth.login(form).then(setUser); // point free
  };
  const register = (form: AuthForm) => {
    return auth.register(form).then((user) => setUser(user));
  };
  const logout = () => {
    return auth.logout().then(() => {
      setUser(null);
    });
  };
  useMount(() => {
    initUser().then(setUser);
  });
  const state = {
    user,
    login,
    register,
    logout,
  };
  return <AuthContext.Provider children={children} value={state} />;
};

// 检测context的可使用性
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};

const initUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};
