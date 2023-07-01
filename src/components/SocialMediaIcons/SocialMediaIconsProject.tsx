import Image from "next/image";
import Github from "@/assets/github.svg"
import View from "@/assets/view.svg"
import GithubL from "@/assets/githubL.svg"
import ViewL from "@/assets/viewL.svg"
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type Props = {
  link: string
  repository: string
};
const SocialMediaIconsProject = ({ link, repository }: Props) => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center my-4 gap-7 ">
      <motion.div
        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link
          className="hover:opacity-50 transition duration-500"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {theme && theme === 'light' ? <Image alt="dionisia-link" src={ViewL} className="w-14" priority /> : <Image alt="dionisia-link" src={View} className="w-14" priority />}
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link
          className="hover:opacity-50 transition duration-500"
          href={repository}
          target="_blank"
          rel="noreferrer"
        >
          {theme && theme === 'light' ? <Image alt="Github-link" src={GithubL} className="w-14" priority /> : <Image alt="Github-link" src={Github} className="w-14" priority />}
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialMediaIconsProject;