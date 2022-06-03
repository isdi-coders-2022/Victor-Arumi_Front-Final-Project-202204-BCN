import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef(null);
  return (
    <div>
      <nav className="bg-customblue">
        <div className="min-w-350 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="clubs"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Clubs
                  </a>
                  <a
                    href="login"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Inicia Sesión
                  </a>
                  <a
                    href="register"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Crear cuenta
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={buttonRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="clubs"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Clubs
                </a>
                <a
                  href="login"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Inicia Sesión
                </a>
                <a
                  href="register"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Crear cuenta
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>

    // <header className="bg-white shadow">
    //   <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    //     <h1 className="text-3xl font-bold text-gray-900">Titulo?</h1>
    //   </div>
    // </header>
    // <main>
    //   <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    //     <div className="px-4 py-6 sm:px-0">
    //       <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
    //         Aqui iria children
    //       </div>
    //     </div>
    //     {/* <!-- /End replace --> */}
    //   </div>
    // </main>
  );
}

export default NavBar;