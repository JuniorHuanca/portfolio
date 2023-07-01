import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function SoftSkills({ setSelectedPage }: Props) {
  return (
    <section id="softskills" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.SoftSkills)}
      ></motion.div>
    </section>
  );
}

export default SoftSkills;
