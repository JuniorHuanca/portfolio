import AboutMe from "@/components/AboutMe/AboutMe";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import { INavbar, SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import LineGradient from "@/components/LineGradient/LineGradient";
import SoftSkills from "@/components/SoftSkills/SoftSkills";
import Footer from "@/components/Footer/Footer";
type Props = {
  home: any;
  navbar: INavbar;
};
export default function App({ home, navbar }: Props) {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>Junior Huanca</title>
        <meta
          name="description"
          content="Soy un desarrollador web full-stack con experiencia en el desarrollo de aplicaciones utilizando React y Next.js. Mi enfoque se centra en construir soluciones web escalables y modernas, aprovechando mis habilidades tanto en el desarrollo frontend como en el backend."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.png" />
      </Head>
      <div className="dark:bg-blue-950 text-blue-900 dark:text-white">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          navbar={navbar}
        />
        <motion.div
          className="fixed bg-blue-950 dark:bg-purple-800 left-0 top-16 right-0 h-1 origin-left"
          style={{ scaleX }}
        />
        <Home setSelectedPage={setSelectedPage} home={home} />
        <LineGradient />
        <AboutMe setSelectedPage={setSelectedPage} />
        <LineGradient />
        <SoftSkills setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`@/lang/${locale}.json`);
  return {
    props: {
      home: response.default.home,
      navbar: { ...response.default.navbar, locale },
    },
  };
}