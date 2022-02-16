import React from 'react'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

const about = () => {
  return (
    <div className="flex min-h-screen justify-center">
    <div className="grid grid-cols-12 grid-rows-6 w-screen bg-zinc-800">

      <Nav />

      <div className="bg-stone-500 p-2 row-start-3 row-span-3 col-start-2 col-span-10 rounded flex justify-center">
        <div className="bg-stone-500 grid grid-cols-2 gap-2 grid-rows-6 w-screen">
          <div className="bg-white p-2 items-stretch col-span-1 row-span-4 rounded">
            <h2>About</h2>
          </div>
          <div className="bg-white p-2 items-stretch col-span-1 row-span-4 rounded">02</div>
          <div className="bg-white p-2 items-stretch col-span-2 row-span-2 rounded">03</div>
        </div>
      </div>

      <div className="row-start-7 row-span-1 col-span-12 flex items-end">
          <footer className='bg-stone-900 bg-opacity-40 text-white w-screen flex justify-center'>
          &#169; 2022
          </footer>
      </div>

    </div>
  </div>
  )
}

export default about;