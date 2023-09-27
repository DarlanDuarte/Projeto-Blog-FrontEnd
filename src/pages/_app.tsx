import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/router";
import Link from "next/link";
import { NovoProvider } from "@/context/NovoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const login = async () => {
      try {
        const token = localStorage.getItem("@token");
        if (token) {
          router.push("/");
        } else {
          router.push("/login");
        }
      } catch (e: any) {
        console.log(`Error no Carregamento da Página`, e.message);
      }
    };

    login();
  }, []);

  useEffect(() => {
    function handleCompleteRouter() {
      setLoading(false);
    }

    router.events.on("routeChangeComplete", handleCompleteRouter);

    return () => {
      router.events.off("routeChangeComplete", handleCompleteRouter);
    };
  }, [router]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <NovoProvider>
        <ToastContainer autoClose={3000} />
        <Component {...pageProps} />
      </NovoProvider>
    </>
  );
}
