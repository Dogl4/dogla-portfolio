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
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
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
                  <Link
                    activeClass="contact"
                    to="contact"
                    href="/contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-black hover:text-white px-3 py-2 hover:bg-black rounded-md text-sm font-medium"
                  >
                    Contato
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-black-600 text-black hover:text-white block px-2 py-3 w-11/12 -ml-3 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-2 py-3 w-11/12 -ml-3 rounded-md text-base font-medium"
                >
                  Sobre min
                </Link>
                <Link
                  href="/projects"
                  activeClass="projects"
                  to="projects"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-2 py-3 w-11/12 -ml-3 rounded-md text-base font-medium"
                >
                  Projetos
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
