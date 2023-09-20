import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiUser, BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const Login = () => {
  const [login, setLogin] = useState<"login" | "cadastro">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setLogin(login === "login" ? "cadastro" : "login");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className={` flex w-screen h-screen bg-[#6b7377]`}>
      <div className="flex">
        <Image
          src={"/img/background.jpg"}
          width={2000}
          height={600}
          alt="Background-Image"
          className={`w-screen h-screen bg-cover`}
        />
      </div>
      {login === "login" ? (
        <div className={`relative w-1/3`}>
          <div
            className={`absolute mt-[28%] w-96 h-[44rem] -left-48 bg-white shadow-4xl`}
          >
            <form className={`mt-[15rem]`}>
              <div
                className={`flex justify-center items-center mx-10 border-b-2 pb-1 mb-4`}
              >
                <HiOutlineMail size={26} color={"#000"} />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`outline-none  p-1 w-full `}
                />
              </div>
              <div
                className={`flex justify-center items-center mx-10 border-b-2 pb-1 `}
              >
                <BiLock size={26} color={"#000"} />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite seu Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`outline-none  p-1 w-full  `}
                />
              </div>
              <button
                className={`flex justify-center items-center w-36 mt-10 p-1 bg-red-500 text-white mx-auto shadow-xl
                hover:bg-green-500 duration-700
              `}
              >
                Login
              </button>
            </form>
            <div className={`mt-32 w-full border-[1px]`}></div>
            <button
              onClick={(e) => handleLogin(e)}
              className={`flex justify-center items-center w-36 mt-10 p-1 bg-white text-black mx-auto border-[2px] border-red-500
              hover:bg-black hover:text-white duration-700 hover:border-black
            `}
            >
              Cadastrar
            </button>
          </div>
        </div>
      ) : (
        <div className={`relative w-1/3`}>
          <div
            className={`absolute mt-[28%] w-96 h-[44rem] -left-48 bg-white shadow-4xl`}
          >
            <form className={`mt-[15rem]`}>
              <div
                className={`flex justify-center items-center mx-10 border-b-2 pb-1 mb-4`}
              >
                <BiUser size={26} color={"#000"} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`outline-none  p-1 w-full `}
                />
              </div>
              <div
                className={`flex justify-center items-center mx-10 border-b-2 pb-1 mb-4`}
              >
                <HiOutlineMail size={26} color={"#000"} />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`outline-none  p-1 w-full `}
                />
              </div>
              <div
                className={`flex justify-center items-center mx-10 border-b-2 pb-1 `}
              >
                <BiLock size={26} color={"#000"} />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite seu Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`outline-none  p-1 w-full  `}
                />
              </div>
              <button
                className={`flex justify-center items-center w-36 mt-10 p-1 bg-red-500 text-white mx-auto shadow-xl
                hover:bg-green-500 duration-700
              `}
              >
                Cadastrar
              </button>
            </form>
            <div className={`mt-32 w-full border-[1px]`}></div>
            <button
              onClick={(e) => handleLogin(e)}
              className={`flex justify-center items-center w-36 mt-10 p-1 bg-white text-black mx-auto border-[2px] border-red-500
              hover:bg-black hover:text-white duration-700 hover:border-black
            `}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
