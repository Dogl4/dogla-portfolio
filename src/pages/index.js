import React from 'react';
import Nav from '../components/Nav';

{/* <Nav /> */ }
const Home = () => {
  return (
    <>
      {/* <div className="bg-blue-400 min-h-screen flex justify-center"> */}
      <div className="bg-blue-400 flex justify-center">
        <div className="grid grid-cols-12 min-h-screen w-screen bg-gray-800">
          {/* <div className="bg-white flex items-center min-h-[6px] col-span-12 rounded"> */}

          <Nav />

          {/* <div className="bg-sky-600 p-2 row-end-4 col-start-2 col-span-10 rounded"> */}
          <div className="bg-sky-600 p-2 row-end-3 col-start-2 col-span-10 rounded flex justify-center">
            <div className="grid grid-cols-2 gap-3 w-screen bg-gray-300">
              <div className="bg-white p-2 items-stretch col-span-1 rounded">
                <h1>Olá,</h1>
                <h2>Eu sou Pedro Barreto!</h2>
              </div>
              <div className="bg-white p-2 items-stretch col-span-1 rounded">02</div>
              {/* <div className="bg-white p-2 rounded">01</div> */}
              {/* <div className="bg-white p-2 rounded">02</div> */}
            </div>
          </div>


          <div className="bg-fuchsia-900 row-end-7 col-span-12 flex items-end">
              <footer className='bg-pink-300 w-screen flex justify-center'>
                Footer
              </footer>
          </div>

        </div>
      </div>
    </>
  )
}

module.exports = Home;