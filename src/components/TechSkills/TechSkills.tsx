import { ITechskills, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Subtitle from "../Subtitle";
import { technologies } from "@/shared/data/Technologies";
import TechSkill from "./TechSkill";
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
    <section id="techskills" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.TechSkills)}
      >
        <motion.div
          className="md:my-5 md:w-full"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Subtitle>{techskills.title}</Subtitle>
          <p className="text-xl">{techskills.description}</p>
          <motion.div
            className="flex justify-center w-full gap-8 flex-wrap mt-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
