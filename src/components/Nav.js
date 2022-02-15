import React, { useState } from "react";
import { useRouter } from 'next/router'
import { Transition } from "@headlessui/react";
import Link from 'next/link';
import ActiveLink from './ActiveLink';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onSetActive, setOnSetActive] = useState(false);

  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-[120px] w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-1">
                <h1 className="font-bold text-xl cursor-pointer">
                  <span className="text-black-800">[</span><span className="text-blue-500">dogla</span><span className="text-black-800">]</span> Pedro Barreto
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <ActiveLink href="/">
                    Home
                  </ActiveLink>
                  <ActiveLink href="/about">
                    Sobre mim
                  </ActiveLink>
                  <ActiveLink href="/projects">
                    Projetos
                  </ActiveLink>
                  <ActiveLink href="/contact">
                    Contato
                  </ActiveLink>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:black focus: outline-none focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="nane"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="nane"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      d="M6 18h18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opaity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white pr-5 pl-1 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <div className="flex flex-now flex-nowarp h-auto items-center">
                  <ul className="w-full list-none">
                    <li className="mb-[8px] mr-12 h-full">
                      <ActiveLink href="/" mobile={true} >
                        Home
                      </ActiveLink>
                    </li>
                    <li className="mb-[8px] mr-12 h-full">
                      <ActiveLink href="/about" mobile={true}>
                        Sobre min
                      </ActiveLink>
                    </li>
                    <li className="mb-[8px] mr-12 h-full">
                      <ActiveLink href="/projects" mobile={true}>
                        Projetos
                      </ActiveLink>
                    </li>
                    <li className="mb-[8px] mr-12 h-full">
                      <ActiveLink href="/contact" mobile={true}>
                        Contato
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
