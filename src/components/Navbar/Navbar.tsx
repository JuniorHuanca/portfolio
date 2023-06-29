import Link from "next/link";
import LenguageSelector from "../LenguageSelector";
import { INavbar } from "@/shared/types";

type Props = {
  isTopOfPage: boolean;
  navbar: INavbar;
};

const Navbar = ({ isTopOfPage, navbar }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = false
    ? ""
    : "bg-red-500 drop-shadow dark:bg-dark-grey";

  const { links } = navbar;

  return (
    <nav
      className={`${navbarBackground} ${flexBetween} sticky top-0 py-6 w-full`}
    >
      {Object.keys(links).map((key, index) => (
        <Link href={`#${key}`} key={index}>
          {links[key]}
        </Link>
      ))}
      <LenguageSelector languages={navbar.languages} />
    </nav>
  );
};

export default Navbar;
