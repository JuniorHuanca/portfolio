import Link from "next/link";
import LenguageSelector from "../LenguageSelector";
import { INavbar, SelectedPage } from "@/shared/types";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ModeSelector from "../ModeSelector";

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
    ? "text-blue-900 dark:text-white"
    : "bg-blue-950 dark:bg-purple-800 text-white";

  const { links, mode, languages, locale } = navbar;
  return (
    <nav className={`${navbarBackground} sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-between items-center">
            <div className="flex-shrink-0">
              <span className="text-4xl font-bold lg:text-5xl xl:text-5xl">
                JH
              </span>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center">
                {Object.keys(links).map((key, index) => {
                  const lowerCasePage = key
                    .toLowerCase()
                    .replace(/ /g, "") as SelectedPage;
                  return (
                    <AnchorLink
                      href={`#${lowerCasePage}`}
                      key={index}
                      className={`${
                        selectedPage === lowerCasePage
                          ? "text-blue-500 dark:text-blue-500"
                          : ""
                      } px-3 py-2 transition duration-500 hover:text-blue-500 dark:hover:text-blue-500 text-lg font-bold`}
                      onClick={() => {
                        setSelectedPage(lowerCasePage);
                      }}
                    >
                      {links[key]}
                    </AnchorLink>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center lg:ml-6">
              <ModeSelector mode={mode} />
              <LenguageSelector languages={languages} locale={locale} />
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              className="bg-blue-950 inline-flex items-center justify-center p-2 rounded-md hover:text-gray-400 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
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
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(links).map((key, index) => {
            const lowerCasePage = key
              .toLowerCase()
              .replace(/ /g, "") as SelectedPage;
            return (
              <AnchorLink
                href={`#${lowerCasePage}`}
                key={index}
                className={`${
                  selectedPage === lowerCasePage
                    ? "text-blue-500 dark:text-blue-500"
                    : ""
                } block px-3 py-2 rounded-md text-lg font-bold transition duration-500 hover:text-blue-500 dark:hover:text-blue-500`}
                onClick={() => {
                  setSelectedPage(lowerCasePage);
                }}
              >
                {links[key]}
              </AnchorLink>
            );
          })}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center justify-center px-5 sm:px-6">
            <LenguageSelector languages={languages} locale={locale} />
            <ModeSelector mode={mode} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
