import Projects from "@/components/Projects/Projects";
import { IProjects, SelectedPage } from "@/shared/types";

type Props = {
  data: IProjects;
};

const ProjectsPage = ({ data }: Props) => {
  return (
    <div className="dark:bg-blue-950 text-blue-900 dark:text-white">
      <Projects projects={data} />
    </div>
  );
};

export default ProjectsPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const response = await import(`@/lang/${locale}/projects.json`);
  return {
    props: {
      data: response.default,
    },
  };
}
