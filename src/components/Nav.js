import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ActiveLink from './ActiveLink';
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-800 col-span-12 row-end-1 row-span-1">
      <nav className="shadow-sm md:flex my-6 w-screen">
        <div className="w-screen smo:flex smo:m-0 smo:justify-center">
          <div className="flex smo:flex-col items-center smm:ml-[-10px] w-full">
            <div className="flex items-center smo:flex smo:justify-center mx-20 smm:ml-[50px] smm:mr-[120px] smm:w-[140px] justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-1 sms:ml-[-10px]">
                <h1 className="font-bold text-cyan-700 text-xl smm:ml-[-15px] smm:mr-[-150px] smb:text-smb cursor-pointer">
                  <Link href="/">
                    <a className="smk:text-smm smk:mr-[34px]">
                      <span className=" text-stone-600">&lt;</span><span className="text-zinc-200">Dogla</span><span className="text-stone-600"> /&gt;</span>
                    </a>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="m-0 flex items-baseline space-x-0 space-y-0 mb-0 smb:[space-y-2 mb-2]">
                  <ActiveLink href="/">
                    Home
                  </ActiveLink>
                  <ActiveLink href="/about">
                    SobreMim
                  </ActiveLink>
                  <ActiveLink href="/projects">
                    Projetos
                  </ActiveLink>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden my-2 smo:mr-[-20px]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-sky-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:black focus:outline-none focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
        >
          {() => (
            <div className="md:hidden id=mobile-menu">
              <div
                className="absolute w-screen flex justify-center items-start bg-zinc-900 bg-opacity-90 z-10 py-[40px]"
              >
                <div className="flex justify items-center">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <ActiveLink href="/" mobile={true} >
                        Home
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/about" mobile={true}>
                        Sobre min
                      </ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/projects" mobile={true}>
                        Projetos
                      </ActiveLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
