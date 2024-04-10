import Gallery from "@/components/Gallery";
import { projectsData } from "@/shared/data/Projects";
import { IProjects } from "@/shared/types";
import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
type Props = {
  name: string;
  projects: IProjects;
};

const ProjectDetail = ({ name, projects }: Props) => {
  const project = projectsData.find((p) => p.title === name);
  const index = projectsData.findIndex((p) => p.title === name);
  if (!project || !projects) return null;
  return (
    <div className="flex flex-col items-center dark:bg-blue-950 text-blue-900 dark:text-white min-h-screen">
      <Head>
        <title>Projects - {project.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.png" />
      </Head>
      <Link
        href="/"
        className="block p-8 text-2xl underline underline-offset-4"
      >
        VOLVER
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 max-w-[1400px] flex-1">
        <div className="col-span-1 lg:col-span-6">
          <Gallery photos={project.images} />
        </div>
        <div className="col-span-1 lg:col-span-4 p-2 md:p-4">
          <h1 className={`text-xl md:text-2xl font-bold`}>{project.title}</h1>
          <h3 className="font-bold text-sm">Descripción</h3>
          <p className="text-lg xl:text-xl text-justify">
            {projects.data[index][project.title].description}
          </p>
          <div className="flex justify-center flex-wrap my-6 gap-2">
            {project.tecnologies.map((Icon, index) => (
              <Icon
                key={index}
                className="text-4xl xl:text-5xl hover:scale-125 transition-all"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-around">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center dark:bg-indigo-800 text-white bg-blue-950 border-2 dark:border-indigo-800 border-blue-900 rounded-xl p-2 gap-3 hover:scale-110 transition duration-500"
            >
              <span className="font-bold xs:text-lg">
                {projects.buttons.watch}
              </span>
              <BiLink className="text-4xl" />
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center border-2 dark:border-indigo-800 border-blue-900 rounded-xl p-2 gap-3 hover:scale-110 transition duration-500"
            >
              <span className="font-bold xs:text-lg">
                {projects.buttons.repository}
              </span>
              <BsGithub className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { name } = context.query;
  const response = await import(`@/lang/${context.locale}/projects.json`);
  return {
    props: {
      projects: response.default,
      name,
    },
  };
}

export default ProjectDetail;
