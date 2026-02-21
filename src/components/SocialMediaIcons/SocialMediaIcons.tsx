import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { GITHUB, LINKEDIN } from "@/shared/constanst";

type Props = {};
const SocialMediaIcons = (props: Props) => {
  return (
    <div className="flex justify-center md:justify-start my-6 gap-10">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link
          className="hover:opacity-50 transition duration-500"
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-5xl" />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link
          className="hover:opacity-50 transition duration-500"
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="text-5xl" />
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialMediaIcons;
