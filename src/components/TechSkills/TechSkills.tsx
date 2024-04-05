import { ITechskills, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Subtitle from "../Subtitle";
import { technologies } from "@/shared/data/Technologies";
import TechSkill from "./TechSkill";
import { motionDivProps } from "@/shared/config";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  techskills: ITechskills;
};

const TechSkills = ({ setSelectedPage, techskills }: Props) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <section id="techskills" className="mx-auto min-h-full w-5/6 py-20 max-w-screen-2xl">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.TechSkills)}
      >
        <motion.div className="md:my-5 md:w-full" {...motionDivProps}>
          <Subtitle>{techskills.title}</Subtitle>
          <p className="text-xl">{techskills.description}</p>
          <motion.div
            className="flex justify-center w-full gap-8 flex-wrap mt-6"
            {...motionDivProps}
            variants={container}
          >
            {technologies.map((tech, index) => (
              <TechSkill
                key={index}
                name={tech.name}
                image={tech.image}
                url={tech.url}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechSkills;
