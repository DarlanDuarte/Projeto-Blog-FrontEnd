import { CreateContext } from "@/context/NovoContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { Logout } = useContext(CreateContext);

  return (
    <div
      className={` relative bg-[#93a7a6]
    ] h-14 w-screen px-10 shadow-3xl  `}
    >
      <div>
        <Link
          href={"/"}
          className={`text-3xl font-semibold text-[#455060] tracking-[-0.15rem] absolute top-2 `}
        >
          Blog
          <span className={`text-[#e0e5e6] tracking-[-0.20rem]`}>Pessoal</span>
        </Link>
      </div>

      <button onClick={() => setOpen(!open)} className={` absolute right-16`}>
        <Image
          src={`/img/avatar.png`}
          width={49}
          height={49}
          alt="user_Avatar"
          className={`rounded-full w-14 h-14 cursor-pointer`}
        />
      </button>
      {open && (
        <div
          className={`bg-[#93a7a6] w-[9.5rem] h-[13.5rem] absolute right-1 top-14`}
        >
          <ul className={`mx-2 mt-1`}>
            <li
              className={`text-[#455060] font-semibold mb-3 hover:bg-slate-100 p-1 w-14 cursor-pointer rounded-sm`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`text-[#455060] font-semibold mb-3 hover:bg-slate-100 p-1 w-14 rounded-sm cursor-pointer`}
            >
              <Link href={"/about"}>Sobre</Link>
            </li>
            <li
              className={`text-[#455060] font-semibold mb-3 hover:bg-slate-100 p-1 w-[5.2rem] rounded-sm cursor-pointer`}
            >
              <Link href={"/newPost"}>NovoPost</Link>
            </li>
            <li
              className={`text-[#455060] font-semibold mb-3 hover:bg-slate-100 p-1 rounded-sm cursor-pointer`}
            >
              <Link href={"/painel"}>Painel do Usuário</Link>
            </li>
            <li
              onClick={Logout}
              className={`text-[#455060] font-semibold mb-3 hover:bg-slate-100 p-1 w-10 rounded-sm cursor-pointer`}
            >
              Sair
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
