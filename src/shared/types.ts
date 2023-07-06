import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export enum SelectedPage {
  Home = "home",
  AboutMe = "aboutme",
  SoftSkills = "softskills",
  TechSkills = "techskills",
  Projects = "projects",
  ContactMe = "contactme",
}

export interface IHome {
  career: string;
  introduction: string;
  contactMe: string;
  donwload: string;
}

export interface IAboutme {
  title: string;
  description: string;
}

export interface ISoftskills {
  title: string;
  description: string;
  data: ISoftskill[];
}

export interface ITechskills {
  title: string;
  description: string;
}

export interface IProjects {
  title: string;
  description: string;
  data: IProjectData[];
  buttons: { [key: string]: string };
}

export interface IContacme {
  title: string;
  description: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  errors: { [key: string]: string };
  status: { [key: string]: string };
}

export interface INavbar {
  links: ILinks;
  languages: ILanguages;
  mode: IMode;
  locale: string;
}

export interface ILanguages {
  [key: string]: string;
  en: string;
  es: string;
}

export interface IMode {
  [key: string]: string;
  system: string;
  light: string;
  dark: string;
}
export interface ILinks {
  [key: string]: string;
  home: string;
  aboutMe: string;
  softSkills: string;
  techSkills: string;
  projects: string;
  contactMe: string;
}

export interface ISoftskill {
  image: string;
  title: string;
  text: string;
}

export interface IProjectData {
  [key: string]: {
    [key: string]: string;
  };
}

export interface IProject {
  images: StaticImageData[];
  title: string;
  description: string;
  link: string;
  repository: string;
  tecnologies: IconType[];
}
