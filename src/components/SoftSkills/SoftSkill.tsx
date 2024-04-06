import defaultPhoto from "@/assets/96/github.png";
import { motionDivProps } from "@/shared/config";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Props = {
  image: string;
  title: string;
  text: string;
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const SoftSkill = ({ image, title, text }: Props) => {
  const [photo, setPhoto] = useState<StaticImageData>(defaultPhoto);
  useEffect(() => {
    (async () => {
      const response = await import(`@/assets/${image}.webp`);
      setPhoto(response.default);
    })();
  }, [image]);
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
        <Image src={photo} alt={title} />
      </motion.div>
      <h3 className="py-4 text-2xl font-bold xl:text-4xl">
        <span className="text-blue-500">{title}</span>
      </h3>
      <p className="text-lg xl:text-xl">{text}</p>
    </motion.div>
  );
};

export default SoftSkill;
