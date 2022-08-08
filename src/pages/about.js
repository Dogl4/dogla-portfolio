import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import perfil from "../../public/perfil.jpeg";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
    <Head >
      <title>dogla (About)</title>
    </Head>
      <div className="flex justify-center min-h-screen overscroll-auto">
        <div className="grid grid-rows-3 md:grid-rows-6 md:h-screen bg-zinc-800">
          <Nav />

          <div className="md:row-start-2 md:mt-[0] mt-[60px] row-start-1 row-span-2 col-start-2 col-span-10 rounded flex justify-center">
            <div className="grid grid-cols-2 gap-2">


              <div className="py-0 px-1 md:col-span-1 row-end-1 col-span-2 flex justify-center">
                <div className={styles.card}>
                  <Image src={perfil} alt='Douglas' className="rounded-2xl" width="300px" height="300px" />
                </div>
              </div>
              <div className="text-white md:col-span-1 col-span-2 rounded md:flex justify-center">
                <div className={styles.card}>
                  <p>
                    Olá, meu nome é <strong>Pedro</strong>. Nascido, criado e atualmente local onde moro em <strong>Taubaté</strong>.
                  </p>
                  <p>
                    Formado em técnico em <strong>informática</strong> pela{" "}
                    <strong>Etec</strong>. Sou apaixonado por tecnologia e
                    desenvolvimento de software, e atualmente estou cursando o curso
                    de <strong>web full-stack</strong> na <strong>Trybe</strong>.
                  </p>
                  <p></p>
                  <Link href="/projects">Confira alguns dos meus projetos.</Link>
                </div>
              </div>


            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default about;
