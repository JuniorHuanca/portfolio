export enum SelectedPage {
  Home = "home",
  AboutMe = "aboutme",
  SoftSkills = "softskills",
  TechSkills = "techskills",
  Projects = "projects",
  ContactMe = "contactme",
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

export interface IHome {
  career: string;
  introduction: string;
  contactMe: string;
  donwload: string;
}