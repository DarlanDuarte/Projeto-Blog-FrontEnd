import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiUser, BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IDataCreateUser, IDataLogin } from "@/interfaces/interface";
import { useRouter } from "next/router";

const Login = () => {
  const baseURL = `http://localhost:8080`;
  const router = useRouter();

  const [login, setLogin] = useState<"login" | "cadastro">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState<string | null>(null);

  function ExibirError(msg: string, time = 5000) {
    setMsgError(msg);
    setTimeout(() => setMsgError(null), time);
  }

  function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setLogin(login === "login" ? "cadastro" : "login");
    setName("");
    setEmail("");
    setPassword("");
  }

  async function CreateUser(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        ExibirError(error);
        return;
      }

      const data: IDataCreateUser = await response.json();
      console.log(data);

      const { msg } = data;
      console.log(msg);

      setName("");
      setEmail("");
      setPassword("");
      setLogin("login");
    } catch (e: any) {
      console.log(`Ocorreu um erro na tentativa de Cadastro`, e.message);
    }
  }

  async function Login(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        ExibirError(error);
        return;
      }

      const data: IDataLogin = await response.json();

      const { token } = data;

      localStorage.setItem("@token", token);

      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e: any) {
      console.log(`Erro na tentativa de Login`, e.message);
    }
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
              {msgError && (
                <div
                  className={` mx-10 mt-5  border-2 border-red-700 bg-red-500 text-white font-bold`}
                >
                  {msgError}
                </div>
              )}
              <button
                onClick={(e) => Login(e)}
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
              {msgError && (
                <div
                  className={` mx-10 mt-5  border-2 border-red-700 bg-red-500 text-white font-bold text-center`}
                >
                  {msgError}
                </div>
              )}
              <button
                onClick={(e) => CreateUser(e)}
                className={`flex justify-center items-center w-36 mt-10 p-1 bg-red-500 text-white mx-auto shadow-xl
                hover:bg-green-500 duration-700
              `}
              >
                Cadastrar
              </button>
            </form>
            <div className={`mt-20 w-full border-[1px]`}></div>
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
