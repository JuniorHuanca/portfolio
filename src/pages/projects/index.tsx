import Layout from "@/components/Layout";
import Projects from "@/components/Projects/Projects";
import {
  IFooter,
  IMetaTags,
  INavbar,
  IProjects,
  SelectedPage,
} from "@/shared/types";
import Link from "next/link";

type Props = {
  metaTags: IMetaTags;
  data: IProjects;
  footer: IFooter;
  navbar: INavbar;
};

const ProjectsPage = ({ metaTags, data, footer, navbar }: Props) => {
  return (
    // <div className="dark:bg-blue-950 text-blue-900 dark:text-white">
    //   <MetaTags title={metaTags.title} description={metaTags.description} />
    //   <Link
    //     href="/"
    //     className="block p-8 text-2xl underline underline-offset-4"
    //   >
    //     {data.buttons.back}
    //   </Link>
    //   <Projects projects={data} />
    // </div>
    <Layout
      metaTags={metaTags}
      footer={footer}
      navbar={navbar}
      initialSelectedPage={SelectedPage.Projects}
    >
      <Projects projects={data} />
    </Layout>
  );
};

export default ProjectsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const [response, projects] = await Promise.all([
    import(`@/lang/${locale}.json`),
    import(`@/lang/${locale}/projects.json`),
  ]);
  return {
    props: {
      metaTags: response.default.metaTags,
      footer: response.default.footer,
      navbar: response.default.navbar,
      data: projects.default,
    },
  };
}
