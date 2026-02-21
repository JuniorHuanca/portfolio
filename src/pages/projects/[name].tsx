import Gallery from "@/components/Gallery";
import Layout from "@/components/Layout";
import { projectsData } from "@/shared/data/Projects";
import {
  IFooter,
  IMetaTags,
  INavbar,
  IProjects,
  SelectedPage,
} from "@/shared/types";
import { NextPageContext } from "next";
import { useRouter } from "next/navigation";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

type Props = {
  metaTags: IMetaTags;
  name: string;
  projects: IProjects;
  navbar: INavbar;
  footer: IFooter;
};

const ProjectDetail = ({ metaTags, name, projects, navbar, footer }: Props) => {
  const router = useRouter();
  const project = projectsData.find((p) => p.title === name);
  const index = projectsData.findIndex((p) => p.title === name);
  if (!project || !projects) return null;
  const description = projects.data[index][project.title].description;

  return (
    <Layout
      metaTags={metaTags}
      footer={footer}
      navbar={navbar}
      initialSelectedPage={SelectedPage.Projects}
    >
      <button
        onClick={() => router.back()}
        className="block p-2 my-6 ml-6 text-2xl underline underline-offset-4 w-max"
      >
        {projects.buttons.back}
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-10 px-2 sm:px-4 gap-4 max-w-screen-xl flex-1 min-h-[calc(100vh-10rem)] m-auto items-center">
        <div className="col-span-1 lg:col-span-6">
          <Gallery photos={project.images} />
        </div>
        <div className="col-span-1 lg:col-span-4 p-2 md:p-4">
          <h1 className={`text-xl md:text-2xl font-bold`}>{project.title}</h1>
          <p className="text-lg xl:text-xl text-justify">{description}</p>
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
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { locale } = context;
  const { name } = context.query;
  const [response, responseNav] = await Promise.all([
    import(`@/lang/${context.locale}/projects.json`),
    import(`@/lang/${locale}.json`),
  ]);
  return {
    props: {
      metaTags: responseNav.default.metaTags,
      navbar: { ...responseNav.default.navbar, locale },
      footer: responseNav.default.footer,
      projects: response.default,
      name,
    },
  };
}

export default ProjectDetail;
