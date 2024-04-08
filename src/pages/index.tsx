import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import LineGradient from "@/components/LineGradient/LineGradient";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import SoftSkills from "@/components/SoftSkills/SoftSkills";
import TechSkills from "@/components/TechSkills/TechSkills";
import {
  IAboutme,
  IContacme,
  IFooter,
  IHome,
  INavbar,
  IProjects,
  ISoftskills,
  ITechskills,
  SelectedPage,
} from "@/shared/types";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
type Props = {
  home: IHome;
  navbar: INavbar;
  aboutme: IAboutme;
  softskills: ISoftskills;
  techskills: ITechskills;
  projects: IProjects;
  contactme: IContacme;
  footer: IFooter;
};
export default function App({
  home,
  navbar,
  aboutme,
  softskills,
  techskills,
  projects,
  contactme,
  footer,
}: Props) {
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
          content="Soy un desarrollador web full-stack con experiencia en React y Next.js. Construyo soluciones web escalables y modernas, abarcando frontend y backend."
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
          className="fixed bg-blue-950 dark:bg-purple-800 left-0 top-16 right-0 h-1 origin-left z-[1]"
          style={{ scaleX }}
        />
        <Home setSelectedPage={setSelectedPage} home={home} />
        <LineGradient />
        <AboutMe setSelectedPage={setSelectedPage} aboutme={aboutme} />
        <LineGradient />
        <SoftSkills setSelectedPage={setSelectedPage} softskills={softskills} />
        <LineGradient />
        <TechSkills setSelectedPage={setSelectedPage} techskills={techskills} />
        <LineGradient />
        <Projects setSelectedPage={setSelectedPage} projects={projects} />
        <LineGradient />
        <ContactMe setSelectedPage={setSelectedPage} contactme={contactme} />
        <Footer footer={footer} />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const [response, projects] = await Promise.all([
    import(`@/lang/${locale}.json`),
    import(`@/lang/${locale}/projects.json`),
  ]);
  return {
    props: {
      navbar: { ...response.default.navbar, locale },
      home: response.default.home,
      aboutme: response.default.aboutme,
      softskills: response.default.softskills,
      techskills: response.default.techskills,
      projects: {
        ...projects.default,
        data: projects.default.data.slice(0, 3),
      },
      contactme: response.default.contactme,
      footer: response.default.footer,
    },
  };
}
