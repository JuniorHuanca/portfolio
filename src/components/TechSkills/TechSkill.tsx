import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion";

type Props = {
  name: string,
  image: StaticImageData,
  url: string
}
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const TechSkill = (props: Props) => {
  return (
    <motion.div className="w-[40%] sm:w-[30%] md:w-[20%] bg-indigo-900/20 p-4 flex flex-col items-center"
    variants={projectVariant}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          damping: 100,
          repeat: Infinity,
          repeatDelay: 5
        }}
        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
      >
        <Image src={props.image} alt={props.name} className="rounded-2xl"></Image>
      </motion.div>
      <h2 className="font-playfair text-2xl font-bold">{props.name}</h2>
    </motion.div>
  )
}

export default TechSkill