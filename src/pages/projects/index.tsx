import Projects from "@/components/Projects/Projects";
import { IProjects, SelectedPage } from "@/shared/types";
import Head from "next/head";
import Link from "next/link";

type Props = {
  data: IProjects;
};

const ProjectsPage = ({ data }: Props) => {
  return (
    <div className="dark:bg-blue-950 text-blue-900 dark:text-white">
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Soy un desarrollador web full-stack con experiencia en React y Next.js. Construyo soluciones web escalables y modernas, abarcando frontend y backend."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.png" />
      </Head>
      <Link
        href="/"
        className="block p-8 text-2xl underline underline-offset-4"
      >
        {data.buttons.back}
      </Link>
      <Projects projects={data} />
    </div>
  );
};

export default ProjectsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const response = await import(`@/lang/${locale}/projects.json`);
  return {
    props: {
      data: response.default,
    },
  };
}
