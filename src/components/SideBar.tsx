import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsPersonWorkspace,
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

const SideBar: React.FC = () => {
  return (
    <aside
      className={`w-2/12 h-full    bg-[#fbfcfd] p-5 shadow-3xl
    
    md:w-52
    sm:w-72
    `}
    >
      <div className={``}>
        <div className={``}>
          <Image
            src={"/img/blog-background.jpg"}
            alt="image"
            width={400}
            height={400}
            className={`w-[22rem] mx-auto mt-1 `}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h2
            className={`text-center mt-8 text-2xl font-semibold border-t-[3px] border-b-[3px] border-slate-400 p-1 mb-2`}
          >
            Blog
          </h2>
          <p
            className="text-justify px-2 font-medium
          lg:text-left
          md:text-left
          sm:text-left
          "
          >
            Às vezes, nos sentimos sobrecarregados pelos desafios da vida, e
            nossos sonhos podem parecer distantes. Mas lembre-se de que cada
            amanhecer traz consigo uma oportunidade renovada de avançar em
            direção aos nossos objetivos. Mesmo quando o caminho parece longo e
            árduo, a persistência e a determinação são nossos maiores aliados.
            Mantenha seus sonhos vivos, acredite na sua capacidade de superar
            obstáculos e lembre-se de que o sucesso é a jornada, não apenas o
            destino. Então, levante-se, siga em frente e faça cada passo contar
            em direção aos seus sonhos
          </p>
        </div>
        <div className={`FotoDeDarlan.jpg`}>
          <Image
            src={"/img/FotoDeDarlan.jpg"}
            alt="image"
            width={400}
            height={400}
            className={`w-[16rem] mx-auto mt-4 mb-4 rounded-full`}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h2
            className={`text-center  text-2xl font-semibold border-t-[3px] border-b-[3px] border-slate-400 p-1 mb-2`}
          >
            Sobre
          </h2>
          <p
            className="text-justify px-2 font-medium
          lg:text-left
          md:text-left
          sm:text-left
          "
          >
            Sou apaixonado por tecnologia e desenvolvimento de software. Estou
            no início da minha carreira como desenvolvedor e estou em busca da
            minha primeira oportunidade de emprego na área. Fui cativado pelo
            mundo da programação e das soluções tecnológicas que podem
            transformar ideias em realidade.
          </p>
        </div>

        <div className={`pb-[5.2rem]`}>
          <h2
            className={`text-center mt-8 text-2xl font-semibold border-t-[3px] border-b-[3px] border-slate-400 p-1`}
          >
            Contato
          </h2>
          <ul
            className={`flex justify-center items-center mt-8
            xl:flex-wrap 
            lg:flex-wrap
            md:flex-wrap
            sm:flex-wrap
          `}
          >
            <li
              className={`mx-5 
              xl:m-5
              lg:m-5
              md:m-5
              sm:m-5
            `}
            >
              <Link
                href={"https://portifolio-darlanduarte.netlify.app/"}
                target="_blank"
              >
                <BsPersonWorkspace size={32} color={"#93a7a6"} />
              </Link>
            </li>
            <li
              className={`mx-5
            xl:m-5
            lg:m-5
            md:m-5
            sm:m-5
            
            
            
            `}
            >
              <Link href={"https://github.com/DarlanDuarte"} target="_blank">
                <BsGithub size={32} color={"#93a7a6"} />
              </Link>
            </li>
            <li
              className={`mx-5
            xl:m-5
            lg:m-5
            md:m-5
            sm:m-5
            
            
            
            `}
            >
              <Link
                href={"https://www.linkedin.com/in/darlan-melo-492927288/"}
                target={`_blank`}
              >
                <BsLinkedin size={32} color={"#93a7a6"} />
              </Link>
            </li>
            <li
              className={`mx-5
            xl:m-5
            lg:m-5
            md:m-5
            sm:m-5
            
            
            `}
            >
              <Link
                href={
                  "https://wa.me/5585989304007?text=Ol%C3%A1%2C+tudo+bem%21+Meu+nome+%C3%A9+"
                }
                target="_blank"
              >
                <BsWhatsapp size={32} color={"#93a7a6"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
