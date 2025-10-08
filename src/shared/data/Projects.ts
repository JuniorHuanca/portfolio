import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { importarImagenes } from "../config";

const LaDionisia = importarImagenes("LaDionisia", [
  "LaDionisia",
  "Accessibility",
  "Cart",
  "Checkout",
  "Detail",
  "Landing",
  "NewsLetter",
  "Products",
  "Products01",
]);
const DigitalDreams = importarImagenes("DigitalDreams", [
  "Home",
  "Detail",
  "Login",
  "Products",
  "Profile",
  "Reviews",
  "Dashboard",
]);
const SmartEats = importarImagenes("SmartEats", [
  "Home",
  "Features",
  "Recipes",
  "Detail",
  "NewRecipe",
  "AboutMe",
]);
const Portafolio = importarImagenes("Portafolio", [
  "dark",
  "darkContactame",
  "light",
  "lightContactame",
]);
const Clothes = importarImagenes("Clothes", [
  "Home",
  "Home2",
  "Products",
  "Detail",
  "Cart",
  "Checkout",
]);

export const projectsData = [
  {
    images: Portafolio,
    title: "Portafolio",
    description: "",
    link: "https://juniorhuanca.vercel.app",
    repository: "https://github.com/JuniorHuanca/portfolio",
    tecnologies: [SiNextdotjs, SiTailwindcss, SiTypescript],
  },
  {
    images: Clothes,
    title: "Clothes",
    description: "",
    link: "https://clothesjh.vercel.app",
    repository: "https://github.com/JuniorHuanca/Clothes",
    tecnologies: [SiNextdotjs, SiTailwindcss, SiTypescript, BiLogoPostgresql, SiPrisma],
  },
  {
    images: SmartEats,
    title: "SmartEats",
    description: "",
    link: "https://smarteats.vercel.app",
    repository: "https://github.com/JuniorHuanca/Foods",
    tecnologies: [
      SiNextdotjs,
      SiRedux,
      SiTailwindcss,
      SiTypescript,
      SiNodedotjs,
      SiPrisma,
      BiLogoPostgresql,
    ],
  },
  {
    images: DigitalDreams,
    title: "DigitalDreams",
    description: "",
    link: "https://digitaldreams.vercel.app",
    repository: "https://github.com/JuniorHuanca/DigitalDreams",
    tecnologies: [
      SiNextdotjs,
      SiRedux,
      SiTailwindcss,
      SiTypescript,
      SiNodedotjs,
      SiPrisma,
      BiLogoPostgresql,
    ],
  },
  {
    images: LaDionisia,
    title: "LaDionisia",
    description: "",
    link: "https://la-dionisia-front.vercel.app",
    repository: "https://github.com/laura-e24/LaDionisiaFront",
    tecnologies: [
      SiNextdotjs,
      FaReact,
      SiRedux,
      SiCss3,
      SiTailwindcss,
      SiJavascript,
      SiTypescript,
      SiNodedotjs,
      SiSequelize,
      SiPhp,
      SiExpress,
      BiLogoPostgresql,
    ],
  },
];
