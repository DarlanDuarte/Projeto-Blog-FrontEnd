import Header from "@/components/Header";
import React from "react";

const Painel = () => {
  return (
    <div className={` w-screen h-screen`}>
      <Header />
      <div className={`flex justify-center  w-screen h-screen bg-[#bec9ca]  `}>
        <div className={`w-2/3 h-2/3 mt-20 bg-white shadow-4xl overflow-auto`}>
          <h2 className={`text-3xl text-center mt-2 font-semibold`}>
            Painel Admistrativo do Usuário
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Painel;
