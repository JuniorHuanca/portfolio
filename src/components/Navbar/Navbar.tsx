import Link from "next/link";
import LenguageSelector from "../LenguageSelector";
import { INavbar, SelectedPage } from "@/shared/types";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  navbar: INavbar;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({
  isTopOfPage,
  navbar,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarBackground = isTopOfPage
    ? "text-blue-900"
    : "bg-blue-950 dark:bg-purple-800 text-white";

  const { links } = navbar;

  return (
    <nav className={`${navbarBackground} sticky top-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex-shrink-0">
              {/* <a href="#" className="font-bold text-lg">
                Mi Sitio
              </a> */}
              <span className="font-playfair text-4xl font-bold lg:text-5xl xl:text-5xl">
                JH
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                {Object.keys(links).map((key, index) => {
                  const lowerCasePage = key
                    .toLowerCase()
                    .replace(/ /g, "") as SelectedPage;
                  return (
                    <Link
                      href={`#${key}`}
                      key={index}
                      className={`${
                        selectedPage === lowerCasePage
                          ? "text-red-500 dark:text-red-700"
                          : ""
                      } px-5 py-2 rounded-md font-medium transition duration-500 hover:text-blue-300 dark:hover:text-blue-100 text-base`}
                      onClick={() => {
                        setSelectedPage(lowerCasePage);
                        // setIsMenuToggled(!isMenuToggled);
                      }}
                    >
                      {links[key]}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <LenguageSelector languages={navbar.languages} />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`block h-6 w-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(links).map((key, index) => (
            <Link
              href={`#${key}`}
              key={index}
              className="hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {links[key]}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5 sm:px-6">
            <div className="flex-shrink-0">Idioma</div>
            <div className="ml-3">
              <LenguageSelector languages={navbar.languages} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
