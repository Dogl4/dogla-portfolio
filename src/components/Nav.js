import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ActiveLink from './ActiveLink';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = React.useRef();

  return (
    <div className="bg-white col-span-12 rounded">
      {/* <nav className="shadow-sm flex bg-cyan-900 w-screen z-10"> */}
      <nav className="shadow-sm md:flex mt-6 pb-8 w-screen z-10">
        <div className="w-full smo:flex smo:m-0 smo:justify-center">
          <div className="flex smo:flex-col items-center smm:ml-[-10px] w-full">
            <div className="flex items-center smo:flex smo:justify-center mx-20 smm:ml-[50px] smm:mr-[120px] smm:w-[140px] justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-1 sms:ml-[-10px]">
                <h1 className="font-bold text-cyan-700 text-xl smm:ml-[-15px] smm:mr-[-150px] smb:text-smb cursor-pointer">
                  <div className="smk:text-smm smk:mr-[34px]">
                  <span className=" text-stone-700">[</span><span className="text-emerald-700">dogla</span><span className="text-stone-700">]</span>
                  </div>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="m-0 flex items-baseline space-x-0 space-y-0 mb-0 smb:[space-y-2 mb-2]">
                  <ActiveLink href="/">
                    Home
                  </ActiveLink>
                  <ActiveLink href="/about">
                    Sobre mim
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
                      strokeWidth="2"
                      d="M4 12M4 6l18 12M4 18l18-12"
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
                ref={divRef}
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
