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
}

export interface ILanguages {
  en: string;
  es: string;
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
