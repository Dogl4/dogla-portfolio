import React from 'react';
import Nav from '../components/Nav';

{/* <Nav /> */ }
const Home = () => {
  return (
    <>
      {/* <div className="bg-blue-400 min-h-screen flex justify-center"> */}
      <div className="bg-blue-400 flex justify-center">
        <div className="grid grid-cols-12 min-h-screen w-screen bg-gray-300">
          {/* <div className="bg-white flex items-center min-h-[6px] col-span-12 rounded"> */}
          <div className="bg-white flex min-h-[6px] col-span-12 rounded">
            {/* <a href='/about' className='px-5 py-5 m-0 bg-pink-300'>About</a> */}
          </div>
          <div className="bg-sky-600 p-2 row-end-4 col-start-2 col-span-10 rounded">
            {/* <div className="grid grid-cols-6 gap-3 min-h-screen bg-gray-300"> */}
            <div className="grid grid-cols-2 gap-3 bg-gray-300">
              <div className="bg-white p-2 items-stretch col-span-1 rounded">01</div>
              <div className="bg-white p-2 items-stretch col-span-1 rounded">02</div>
            </div>
          </div>
          <div className="bg-fuchsia-900 row-end-7 col-span-12 p-2">
              <footer className='flex bg-pink-300 self-center'>
                Footer
              </footer>
          </div>
        </div>
      </div>
    </>
  )
}

module.exports = Home;