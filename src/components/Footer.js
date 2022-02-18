import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import octcat from '../public/image/octcat.png';
import linkedin from '../public/image/in.png';
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div className="md:row-start-4 row-end-7 row-span-1 col-span-12 flex md:items-end">
      <footer className={`${styles.footer} bg-stone-900 bg-opacity-40 text-white w-screen grid md:grid-cols-3 grid-cols-12 grid-rows-1 md:flex md:justify-center`}>
        <div className='row-start-1 col-span-8 col-start-3 flex items-center'>
          <Link href="https://linkedin.com/in/dogl4/">
            <a target="_blank">
              <Image src={linkedin} alt='Link Linkedin' width="20px" height="20px" />
            </a>
          </Link>
          <Link href="https://github.com/Dogl4">
            <a target="_blank">
              <Image src={octcat} alt='Link Github' width="24px" height="24px" />
            </a>
          </Link>
          &#169; 2022
        </div>
      </footer>
    </div>
  )
}

export default Footer;
