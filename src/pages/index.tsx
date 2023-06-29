import Home from "@/components/Home/Home";
import LenguageSelector from "@/components/LenguageSelector";
import Navbar from "@/components/Navbar/Navbar";
import { INavbar } from "@/shared/types";
import { useEffect, useState } from "react";

type Props = {
  home: any;
  navbar: INavbar;
};
export default function App({ home, navbar }: Props) {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        // setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="dark:bg-deep-blue dark:text-white">
      <Navbar isTopOfPage={isTopOfPage} navbar={navbar} />
      <Home />
      <h1>{home.welcome}</h1>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`@/lang/${locale}.json`);
  return {
    props: {
      home: response.default.home,
      navbar: response.default.navbar,
    },
  };
}
