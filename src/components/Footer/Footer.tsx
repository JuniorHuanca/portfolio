import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
type Props = {};
const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-64 pt-10 bg-blue-950 dark:bg-purple-800 text-white">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl">JUNIOR HUANCA</p>
          <p className="font-playfair text-md">
            ©{year} JuniorHuanca. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
