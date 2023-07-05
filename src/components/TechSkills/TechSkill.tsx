import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { motionDivProps } from "@/shared/config";

type Props = {
  name: string;
  image: StaticImageData;
  url: string;
};
const TechSkill = (props: Props) => {
  return (
    <motion.div
      className="w-[40%] sm:w-[30%] md:w-[20%] bg-indigo-900/20 p-4 flex flex-col items-center"
      {...motionDivProps}
    >
      <div className="hover:animate-bell-swing-scale">
        <Image src={props.image} alt={props.name} className="rounded-2xl" />
      </div>
      <h2 className="font-playfair text-2xl font-bold">{props.name}</h2>
    </motion.div>
  );
};

export default TechSkill;
