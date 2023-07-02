import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        Projects
      </motion.div>
    </section>
  );
};

export default Projects;
