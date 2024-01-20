import LaDionisia from "@/assets/LaDionisia/LaDionisia.png";
import Accessibility from "@/assets/LaDionisia/Accessibility.png";
import Cart from "@/assets/LaDionisia/Cart.png";
import Checkout from "@/assets/LaDionisia/Checkout.png";
import Detail from "@/assets/LaDionisia/Detail.png";
import Landing from "@/assets/LaDionisia/Landing.png";
import NewsLetter from "@/assets/LaDionisia/NewsLetter.png";
import Products from "@/assets/LaDionisia/Products.png";
import Products01 from "@/assets/LaDionisia/Products01.png";
import DDHome from "@/assets/DigitalDreams/Home.png";
import DDDetail from "@/assets/DigitalDreams/Detail.png";
import DDLogin from "@/assets/DigitalDreams/Login.png";
import DDProducts from "@/assets/DigitalDreams/Products.png";
import DDProfile from "@/assets/DigitalDreams/Profile.png";
import DDReviews from "@/assets/DigitalDreams/Reviews.png";
import DDDashboard from "@/assets/DigitalDreams/Dashboard.png";
import SEAbout from "@/assets/SmartEats/AboutMe.png";
import SEDetail from "@/assets/SmartEats/Detail.png";
import SEFeatures from "@/assets/SmartEats/Features.png";
import SEHome from "@/assets/SmartEats/Home.png";
import SENewRecipe from "@/assets/SmartEats/NewRecipe.png";
import SERecipes from "@/assets/SmartEats/Recipes.png";
import {
  SiNextdotjs,
  SiRedux,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPrisma,
  SiPhp,
  SiExpress,
  SiSequelize,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
export const projectsData = [
  {
    images: [
      LaDionisia,
      Accessibility,
      Cart,
      Checkout,
      Detail,
      Landing,
      NewsLetter,
      Products,
      Products01,
    ],
    title: "LaDionisia",
    description:
      "La Dionisia es una vinoteca online que ofrece registro y acceso con email o cuenta de Google, permitiendo a los usuarios explorar, filtrar y ordenar una amplia variedad de vinos. El pago se realiza con tarjeta de crédito o PayPal, y se envía un mensaje de confirmación por email. Los usuarios pueden guardar productos en favoritos, y los administradores tienen acceso a un panel para editar y gestionar productos, así como ver estadísticas y usuarios registrados. Los usuarios pueden dejar reseñas y puntuaciones, que pueden ser reportadas y moderadas por los administradores.",
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
  {
    images: [SEHome, SEFeatures, SERecipes, SEDetail, SENewRecipe, SEAbout],
    title: "SmartEats",
    description: "",
    link: "https://smarteats.vercel.app",
    repository: "https://github.com/JuniorHuanca/Foods",
    tecnologies: [
      SiNextdotjs,
      FaReact,
      SiRedux,
      SiCss3,
      SiTailwindcss,
      SiTypescript,
      SiNodedotjs,
      SiPrisma,
      BiLogoPostgresql,
    ],
  },
  {
    images: [
      DDHome,
      DDDetail,
      DDLogin,
      DDProducts,
      DDProfile,
      DDReviews,
      DDDashboard,
    ],
    title: "DigitalDreams",
    description:
      "Un e-commerce electrónico que ofrece una variedad de productos relacionados con la tecnología y la informática. Creado con tecnologias como, NextJs, React, Redux, Prisma, PostgreSQL, NodeJs, Tailwind y otros.",
    link: "https://digitaldreams.vercel.app",
    repository: "https://github.com/JuniorHuanca/DigitalDreams",
    tecnologies: [
      SiNextdotjs,
      FaReact,
      SiRedux,
      SiCss3,
      SiTailwindcss,
      SiTypescript,
      SiNodedotjs,
      SiPrisma,
      BiLogoPostgresql,
    ],
  },
];
