import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { motionDivProps } from "@/shared/config";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const SoftSkill = (props: Props) => {
  return (
    <motion.div
      className="w-full md:w-[30%] bg-indigo-900/20 p-4 flex flex-col items-center"
      variants={projectVariant}
    >
      <motion.div
        {...motionDivProps}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          damping: 100,
        }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.7 }}
      >
        <Image src={props.image} alt={props.title} />
      </motion.div>
      <h3 className="py-4 font-playfair text-2xl font-bold xl:text-4xl ">
        <span className="text-primary-500">{props.title}</span>
      </h3>
      <p className="text-lg xl:text-xl">{props.text}</p>
    </motion.div>
  );
};

export default SoftSkill;
