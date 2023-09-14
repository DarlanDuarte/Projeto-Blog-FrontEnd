import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className={`flex items-center justify-between bg-[#93a7a6]
    ] h-[8vh] w-screen px-10 shadow-3xl  `}
    >
      <div>
        <h1
          className={`text-3xl font-semibold text-[#455060] tracking-[-0.15rem] `}
        >
          Blog
          <span className={`text-[#e0e5e6] tracking-[-0.20rem]`}>Pessoal</span>
        </h1>
      </div>
      <div>
        <ul className={`flex`}>
          <li
            className={`mx-8 text-lg font-semibold cursor-pointer  text-[#455060] hover:border-b-[3px]`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`mx-8 text-lg font-semibold cursor-pointer  text-[#455060] hover:border-b-[3px]`}
          >
            <Link href={"/about"}>Sobre</Link>
          </li>
          <li
            className={`mx-8 text-lg font-semibold cursor-pointer  text-[#455060] hover:border-b-[3px]`}
          >
            <Link href={"/about"}>NovoPost</Link>
          </li>
          <li
            className={`mx-8 text-lg font-semibold cursor-pointer  text-[#455060] hover:border-b-[3px]`}
          >
            Portfolio
          </li>
          <li
            className={`mx-8 text-lg font-semibold cursor-pointer  text-[#455060] hover:border-b-[3px]`}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
