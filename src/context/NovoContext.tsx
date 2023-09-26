import { useRouter } from "next/router";
import { createContext, useEffect } from "react";

export interface INovoContext {
  Logout: () => Promise<void>;
}

export const CreateContext = createContext({} as INovoContext);

export const NovoProvider = ({ children }: any) => {
  const router = useRouter();

  async function Logout() {
    localStorage.removeItem("@token");
    router.reload();
  }

  return (
    <CreateContext.Provider value={{ Logout }}>
      {children}
    </CreateContext.Provider>
  );
};
