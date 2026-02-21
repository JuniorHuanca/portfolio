import { projectsData } from "@/shared/data/Projects";
import { IProject, IProjects, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Link from "next/link";
import LineGradient from "../LineGradient/LineGradient";
import Subtitle from "../Subtitle";
import Project from "./Project";
type Props = {
  projects: IProjects;
  setSelectedPage?: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage, projects }: Props) => {
  return (
    <section
      id="projects"
      className="mx-auto min-h-full w-5/6 py-20 max-w-screen-2xl"
    >
      <motion.div
        onViewportEnter={() =>
          setSelectedPage && setSelectedPage(SelectedPage.Projects)
        }
      >
        <motion.div
          className="md:my-6 md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:my-5 md:w-2/5">
            <Subtitle>{projects.title}</Subtitle>
            <div className="flex justify-center mt-5">
              <LineGradient />
            </div>
          </div>
          <p className="text-xl">{projects.description}</p>
          <div className="flex justify-center w-full gap-12 flex-wrap mt-6">
            {projectsData
              .slice(0, projects.data.length)
              .map((project: IProject, index) => (
                <Project
                  key={index}
                  project={project}
                  data={projects.data[index]}
                  buttons={projects.buttons}
                />
              ))}
          </div>
        </motion.div>
      </motion.div>
      {setSelectedPage && (
        <Link
          className="mx-auto block w-max text-xl rounded-lg bg-blue-500 hover:bg-white hover:text-blue-500 hover:ring-2 hover:ring-blue-500 px-20 py-3 transition duration-500 text-white"
          href={`/projects`}
        >
          {projects.more}
        </Link>
      )}
    </section>
  );
};

export default Projects;
