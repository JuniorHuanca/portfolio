import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Home from "@/components/Home/Home";
import Layout from "@/components/Layout";
import LineGradient from "@/components/LineGradient/LineGradient";
import Projects from "@/components/Projects/Projects";
import SoftSkills from "@/components/SoftSkills/SoftSkills";
import TechSkills from "@/components/TechSkills/TechSkills";
import {
  IAboutme,
  IContacme,
  IFooter,
  IHome,
  IMetaTags,
  INavbar,
  IProjects,
  ISoftskills,
  ITechskills,
  SelectedPage,
} from "@/shared/types";
import { useState } from "react";

type Props = {
  metaTags: IMetaTags;
  home: IHome;
  navbar: INavbar;
  aboutme: IAboutme;
  softskills: ISoftskills;
  techskills: ITechskills;
  projects: IProjects;
  contactme: IContacme;
  footer: IFooter;
};
export default function App({
  metaTags,
  home,
  navbar,
  aboutme,
  softskills,
  techskills,
  projects,
  contactme,
  footer,
}: Props) {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <Layout
      metaTags={metaTags}
      footer={footer}
      navbar={navbar}
      initialSelectedPage={selectedPage}
    >
      <>
        <Home setSelectedPage={setSelectedPage} home={home} />
        <LineGradient />
        <AboutMe setSelectedPage={setSelectedPage} aboutme={aboutme} />
        <LineGradient />
        <SoftSkills setSelectedPage={setSelectedPage} softskills={softskills} />
        <LineGradient />
        <TechSkills setSelectedPage={setSelectedPage} techskills={techskills} />
        <LineGradient />
        <Projects setSelectedPage={setSelectedPage} projects={projects} />
        <LineGradient />
        <ContactMe setSelectedPage={setSelectedPage} contactme={contactme} />
      </>
    </Layout>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const [response, projects] = await Promise.all([
    import(`@/lang/${locale}.json`),
    import(`@/lang/${locale}/projects.json`),
  ]);
  return {
    props: {
      metaTags: response.default.metaTags,
      navbar: { ...response.default.navbar, locale },
      home: response.default.home,
      aboutme: response.default.aboutme,
      softskills: response.default.softskills,
      techskills: response.default.techskills,
      projects: {
        ...projects.default,
        data: projects.default.data.slice(0, 3),
      },
      contactme: response.default.contactme,
      footer: response.default.footer,
    },
  };
}
