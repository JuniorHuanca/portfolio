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
      className="w-2/5 sm:w-[30%] md:w-1/5 lg:w-1/6 bg-indigo-500/20 dark:bg-indigo-800 p-4 flex flex-col items-center rounded"
      {...motionDivProps}
    >
      <div className="hover:animate-bell-swing-scale p-1 rounded-2xl bg-white">
        <Image src={props.image} alt={props.name} className="rounded-2xl" />
      </div>
      <h3 className="font-playfair md:text-2xl text-xl font-bold">{props.name}</h3>
    </motion.div>
  );
};

export default TechSkill;
