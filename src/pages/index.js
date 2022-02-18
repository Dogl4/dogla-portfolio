import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import profileImg from '../public/image/coding.png';
import octcat from '../public/image/octcat.png';
import linkedin from '../public/image/in.png';

const Home = () => {

  return (
    <>
      <div className="flex min-h-screen justify-center overflow-x-hidden">
        <div className="grid grid-cols-12 grid-rows-6 w-screen bg-zinc-800">

          <Nav />

          <div className="p-2 row-start-2 row-span-4 col-start-2 col-span-10 rounded flex justify-center">
            <div className="grid grid-cols-2 gap-2 grid-rows-6 w-screen">
              <div className={`text-white p-2 md:col-span-1 col-span-2 row-span-full rounded flex justify-center`}>
                <div className={styles.card}>
                  <h2 className={styles.title}>Olá,</h2>
                  <h2>Eu sou Pedro Barreto!</h2>
                  <p>Desenvolvedor Junior FullStack</p>
                  <Link href="/about" className={styles.link}>Conheça me</Link>
                </div>
              </div>
              <div className="md:col-span-1 hidden row-span-6 rounded md:flex justify-center">
                <div className={styles.card}>

                  <Image src={profileImg} alt='TEst' width="350px" height="350px" />
                </div>
              </div>
            </div>
          </div>

          <div className="row-start-7 row-span-1 col-span-12 flex items-end">
            <footer className={`${styles.footer} bg-stone-900 bg-opacity-40 text-white w-screen grid grid-cols-3 grid-rows-1 justify-items-stretch`}>
              <div className='row-start-1 flex ml-[8rem]'>
                <Link href="https://linkedin.com/in/dogl4/">
                  <a target="_blank">
                    <Image src={linkedin} alt='TEst' width="20px" height="20px" />
                  </a>
                </Link>
                <Link href="https://github.com/Dogl4">
                  <a target="_blank">
                    <Image src={octcat} alt='TEst' width="24px" height="24px" />
                  </a>
                </Link>
              </div>
              <div className='row-start-1 col-start-2 justify-self-center'>
                <p>
                  &#169; 2022
                </p>
              </div>
            </footer>
          </div>

        </div>
      </div>
    </>
  )
}

module.exports = Home;