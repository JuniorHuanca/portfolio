import { IHome, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Github from "@/assets/96/github.png";
import Linkedin from "@/assets/96/linkedin.png";
import Person from "@/assets/me.png";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motionDivProps } from "@/shared/config";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  home: IHome;
};

const Home = ({ setSelectedPage, home }: Props) => {
  const socialNetworksProps = {
    initial: { scale: 0 },
    animate: { rotate: 360, scale: 1 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 80,
    },
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };
  return (
    <section id="home" className="flex items-center md:min-h-screen">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center flex-col sm:flex md:flex-row md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div className="flex-1 md:flex-[3_3_0%]" {...motionDivProps}>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
              <span className="invisible w-6 text-sm md:visible md:w-[850px] absolute md:-left-20 md:-top-12 sm:text-8xl font-bold text-black opacity-10 dark:text-white">
                JUNIOR HUANCA
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                JUNIOR HUANCA
              </h2>
              <h1 className="text-2xl xs:text-3xl">{home.career}</h1>
            </div>
          </div>
          <p className="my-8 text-xl">{home.introduction}</p>
          <AnchorLink
            className="text-xl rounded-md bg-indigo-900/50 px-10 py-2 hover:bg-indigo-900/70 hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactMe)}
            href={`#${SelectedPage.ContactMe}`}
          >
            {home.contactMe}
          </AnchorLink>
        </motion.div>
        <motion.div
          className="my-10 md:m-0 relative flex-1 md:flex-[2_2_0%] flex border border-gray-500 rounded-tl-[150px] rounded-tr-[150px] dark:border-white max-w-[500px]"
          {...motionDivProps}
        >
          <Image alt="home-pageGraphic" src={Person} priority />
          <a
            href="/Junior Huanca CV.pdf"
            download
            target="_blank"
            className="absolute bottom-0"
          >
            <button
              type="button"
              className="m-2 bg-indigo-900 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative text-xl">{home.donwload}</span>
            </button>
          </a>
          <motion.div
            className="absolute top-[0%] right-[15%] sm:right-[5%] md:-top-[5%] md:right-[5%]"
            {...socialNetworksProps}
          >
            <Link
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/JuniorHuanca"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="text-5xl sm:text-7xl md:text-8xl" />
            </Link>
          </motion.div>
          <motion.div
            className="absolute top-[20%] right-0 sm:-right-[5%] md:top-[25%] md:-right-[10%]"
            {...socialNetworksProps}
          >
            <Link
              className="hover:opacity-50 transition duration-500"
              href="https://www.linkedin.com/in/junior-huanca-697582254/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="text-5xl sm:text-7xl md:text-8xl" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
