import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Transition } from "@headlessui/react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

    return ( 
    <div>
      <nav className="flex items-center flex-wrap bg-teal-500 p-6 justify-between z-50">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
            <Link href="/">
              <a  className="font-semibold text-xl tracking-tight">Valentina Forero</a>
            </Link>
         </div>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="#about">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-lg font-medium">
                      About me
                    </a>
                  </Link>
                  <Link href="#projects">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-lg font-medium">
                      Projects
                    </a>
                  </Link>
                  <Link href="#skills">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-lg font-medium">
                      Skills
                    </a>
                  </Link>
                  {/* <Link href="#resources">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-lg font-medium">
                      Spanish
                    </a>
                  </Link> */}
                  <Link href="#contact">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-lg font-medium">
                      Contact
                    </a>
                  </Link>
                  <Link href="https://github.com/ValentinaForeroConde/Portfolio">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-lg font-medium">
                    Source <FontAwesomeIcon classNameName="text-black" icon={faGithub} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-pink-300 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-400"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
       

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="#about">
                  <a className="hover:bg-pink-200 text-black block px-3 py-2 rounded-md text-base font-medium">
                  About me
                </a>
                </Link>
                <Link href="#projects">
                  <a className="hover:bg-pink-200 text-black block px-3 py-2 rounded-md text-base font-medium">
                  Projects
                </a>
                </Link>
                <Link href="#skills">
                  <a className="hover:bg-pink-200 text-black block px-3 py-2 rounded-md text-base font-medium">
                  Skills
                </a>
                </Link>
                {/* <Link href="#resources">
                    <a className=" hover:bg-pink-200 text-black px-3 py-2 rounded-md text-base font-medium">
                      Spanish
                    </a>
                </Link>     */}
                <Link href="#contact">
                  <a className="hover:bg-pink-200 text-black block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
                </Link>
                <Link href="https://github.com/ValentinaForeroConde/Portfolio">
                  <a className="hover:bg-pink-200 text-black block px-3 py-2 rounded-md text-base font-medium">
                  Source <FontAwesomeIcon classNameName="text-black" icon={faGithub} />
                </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Header;
