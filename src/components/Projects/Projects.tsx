import { motionDivProps } from "@/shared/config";
import { IProject, IProjects, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";
import Subtitle from "../Subtitle";
import LineGradient from "../LineGradient/LineGradient";
import { projectsData } from "@/shared/data/Projects";
import Project from "./Project";
import Gallery from "../Gallery";
import { StaticImageData } from "next/image";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  projects: IProjects;
};

const Projects = ({ setSelectedPage, projects }: Props) => {
  const [photos, setPhotos] = useState<StaticImageData[] | null>(null);
  const [index, setIndex] = useState<number>(1);

  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
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
          <div className="md:my-5 md:w-2/5">
            <Subtitle>{projects.title}</Subtitle>
            <div className="flex justify-center mt-5">
              <LineGradient />
            </div>
          </div>
          <p className="text-xl">{projects.description}</p>
          <div className="flex justify-center w-full gap-12 flex-wrap mt-6">
            {projectsData.map((project: IProject, index) => (
              <Project
                key={index}
                project={project}
                setPhotos={setPhotos}
                setIndex={setIndex}
                data={projects.data[index]}
                buttons={projects.buttons}
              />
            ))}
            {photos && (
              <Gallery photos={photos} index={index} setPhotos={setPhotos} />
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
