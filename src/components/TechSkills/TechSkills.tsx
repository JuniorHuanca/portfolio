import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const TechSkills = ({ setSelectedPage }: Props) => {
  return (
    <section id="techskills" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.TechSkills)}
      >
        TechSkills
      </motion.div>
    </section>
  );
};

export default TechSkills;
