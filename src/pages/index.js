import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import profileImg from '../public/image/coding.png';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Head from 'next/head';

const Home = () => {

  return (
    <>
      <Head >
        <title>dogla</title>
      </Head>
      <div className="flex justify-center min-h-screen overscroll-auto">
        <div className="grid grid-cols-12 grid-rows-6 md:h-screen bg-zinc-800">

          <Nav />

          <div className="md:row-start-2 row-start-2 row-span-2 col-start-2 col-span-10 rounded flex justify-center">
            <div className="grid grid-cols-2 gap-2">
              <div className={`text-white p-2 md:col-span-1 col-span-2 rounded flex justify-center`}>
                <div className={styles.card}>
                  <h2 className={styles.title}>Olá,</h2>
                  <h2>Eu sou Pedro Barreto!</h2>
                  <p>Desenvolvedor Junior FullStack</p>
                  <Link href="/about" className={styles.link}>Conheça me</Link>
                </div>
              </div>
              <div className="md:col-span-1 hidden rounded md:flex justify-center">
                <div>

                  <Image src={profileImg} alt='Arte: desenho de um programador' width="350px" height="350px" />
                </div>
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>
    </>
  )
}

module.exports = Home;