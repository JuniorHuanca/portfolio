import { motionDivProps } from "@/shared/config";
import { ISoftskills, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Subtitle from "../Subtitle";
import SoftSkill from "./SoftSkill";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  softskills: ISoftskills;
};

function SoftSkills({ setSelectedPage, softskills }: Props) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <section id="softskills" className="mx-auto min-h-full w-5/6 py-20 max-w-screen-2xl">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.SoftSkills)}
      >
        <motion.div
          className="md:my-5 md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Subtitle>{softskills.title}</Subtitle>
          <p className="text-xl">{softskills.description}</p>
          <motion.div
            className="flex justify-center w-full gap-8 flex-wrap mt-6"
            {...motionDivProps}
            variants={container}
            viewport={{ once: true, amount: 0.2 }}
          >
            {softskills.data.map((skill, index) => (
              <SoftSkill
                image={skill.image}
                title={skill.title}
                text={skill.text}
                key={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SoftSkills;
