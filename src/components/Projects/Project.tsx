import { motionDivProps } from "@/shared/config";
import { IProject, IProjectData } from "@/shared/types";
import { motion } from "framer-motion";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Gallery from "../Gallery";
import Link from "next/link";

type Props = {
  project: IProject;
  data: IProjectData;
  buttons: { [key: string]: string };
};

const Project = ({ project, data, buttons }: Props) => {
  return (
    <motion.div
      className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 shadow-lg shadow-indigo-500 bg-indigo-500/20 rounded-md overflow-hidden drop-shadow-2xl md:odd:flex-row md:even:flex-row-reverse"
      {...motionDivProps}
    >
      <div className="w-full flex flex-col justify-between p-4">
        <div>
          <Link
            href={`/projects/${project.title}`}
            className="text-2xl xs:text-3xl font-bold"
          >
            {project.title}
          </Link>
          <p className="text-lg xl:text-xl text-justify">
            {data[project.title].description}
          </p>
        </div>
        <div className="flex justify-center flex-wrap my-6 gap-2">
          {project.tecnologies.map((Icon, index) => (
            <Icon
              key={index}
              className="text-4xl xl:text-5xl hover:scale-125 transition-all"
            />
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-2 justify-around">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center dark:bg-indigo-800 text-white bg-blue-950 border-2 dark:border-indigo-800 border-blue-900 rounded-xl p-2 gap-3 hover:scale-110 transition duration-500"
          >
            <span className="font-bold xs:text-lg">{buttons.watch}</span>
            <BiLink className="text-4xl" />
          </a>
          <a
            href={project.repository}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center border-2 dark:border-indigo-800 border-blue-900 rounded-xl p-2 gap-3 hover:scale-110 transition duration-500"
          >
            <span className="font-bold xs:text-lg">{buttons.repository}</span>
            <BsGithub className="text-4xl" />
          </a>
        </div> */}
      </div>
      <Link
        href={`/projects/${project.title}`}
        className="p-2 md:p-4 self-center"
      >
        <Gallery photos={project.images} />
      </Link>
    </motion.div>
  );
};

export default Project;
