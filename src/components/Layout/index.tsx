import React, { useEffect, useState } from "react";
import { MetaTags } from "../MetaTags";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { IFooter, IMetaTags, SelectedPage, INavbar } from "@/shared/types";
import { useScroll, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  metaTags: IMetaTags;
  footer: IFooter;
  navbar: INavbar;
  initialSelectedPage: SelectedPage;
};

const Layout = ({
  children,
  metaTags,
  footer,
  navbar,
  initialSelectedPage,
}: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] =
    useState<SelectedPage>(initialSelectedPage);
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
        setSelectedPage(initialSelectedPage);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialSelectedPage]);

  useEffect(() => {
    setSelectedPage(initialSelectedPage);
  }, [initialSelectedPage, setSelectedPage]);

  return (
    <div>
      <MetaTags title={metaTags.title} description={metaTags.description} />
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
        {children}
        <Footer footer={footer} />
      </div>
    </div>
  );
};

export default Layout;
