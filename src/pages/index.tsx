import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Posts from "@/components/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={` bg-[#bec9ca] w-screen h-auto `}>
      <header className={`sticky top-0 z-50`}>
        <Header />
      </header>

      <div className={`flex`}>
        <main className={`w-full`}>
          <Posts />
        </main>

        <div className={`w-2/12 h-[92vh]   bg-[#fbfcfd] p-5 shadow-3xl`}>
          <SideBar />
        </div>
      </div>
    </section>
  );
}
