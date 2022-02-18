import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

const projects = () => {
  return (
    <div className="flex min-h-screen justify-center">
    <div className="grid grid-cols-12 grid-rows-6 w-screen bg-zinc-800">

      <Nav />

      <div className="bg-stone-500 p-2 row-start-2 row-span-2 col-start-2 col-span-10 rounded flex justify-center">
        <div className="bg-stone-500 grid grid-cols-2 gap-2 grid-rows-6 w-screen">
          <div className="bg-white p-2 items-stretch col-span-1 row-span-4 rounded">
            <h2>Projetos</h2>
          </div>
          <div className="bg-white p-2 items-stretch col-span-1 row-span-4 rounded">02</div>
          <div className="bg-white p-2 items-stretch col-span-2 row-span-2 rounded">03</div>
        </div>
      </div>

      <Footer />

    </div>
  </div>
  )
}

export default projects;