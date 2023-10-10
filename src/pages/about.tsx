import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <div className={`w-screen h-screen overflow-hidden bg-[#bec9ca]`}>
      <Header />

      <div className={`flex justify-center items-center  w-screen h-screen`}>
        <div className={`flex w-2/3 h-2/3 bg-white rounded-xl`}>
          <div
            className={`w-1/3 h-full bg-[#5b627e] rounded-s-xl overflow-hidden`}
          >
            <div>
              <Image
                src={"/img/FotoDeDarlan.jpg"}
                width={400}
                height={400}
                alt="avatar"
              />
            </div>
            <h3 className={`text-white text-3xl text-center font-semibold`}>
              Olá, Eu sou Darlan
            </h3>
            <p className={`text-white text-xl text-center mt-4 font-medium `}>
              Programador FullStack a procura de oportunidades para entrar no
              mercado de trabalho da Programação
            </p>
          </div>
          <div className={`w-2/3 h-full overflow-hidden`}>
            <h3 className={`text-center text-4xl font-bold mt-24 `}>
              Sobre mim
            </h3>
            <p className={`text-2xl text-left p-4 mt-6`}>
              Sou apaixonado por tecnologia e desenvolvimento de software. Estou
              no início da minha carreira como desenvolvedor e estou em busca da
              minha primeira oportunidade de emprego na área. Fui cativado pelo
              mundo da programação e das soluções tecnológicas que podem
              transformar ideias em realidade. Ao longo do tempo, tenho me
              dedicado a aprender e aprimorar minhas habilidades em diversas
              linguagens de programação e tecnologias relevantes. Estou sempre
              em busca de novos desafios que me permitam crescer como
              profissional e contribuir para projetos inovadores.`
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
