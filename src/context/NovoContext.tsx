import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export interface INovoContext {
  Logout: () => Promise<void>;
  token: string | null;
  baseURL: string;
}

export const CreateContext = createContext({} as INovoContext);

export const NovoProvider = ({ children }: any) => {
  const router = useRouter();
  const baseURL = `http://localhost:8080`;

  const token = localStorage.getItem("@token");

  async function Logout() {
    localStorage.removeItem("@token");
    router.reload();
  }

  return (
    <CreateContext.Provider value={{ Logout, token, baseURL }}>
      {children}
    </CreateContext.Provider>
  );
};
