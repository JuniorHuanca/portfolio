import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export const motionDivProps = {
  initial: "hidden",
  whileInView: "visible",
  transition: { delay: 0.2, duration: 0.5 },
  variants: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
};

const iconNameMap: Record<string, string> = {
  SiNextdotjs: "Next.js",
  SiTailwindcss: "Tailwind CSS",
  SiTypescript: "TypeScript",
  BiLogoPostgresql: "PostgreSQL",
  SiPrisma: "Prisma",
  SiRedux: "Redux",
  SiNodedotjs: "Node.js",
  FaReact: "React",
  SiCss3: "CSS3",
  SiJavascript: "JavaScript",
  SiPhp: "PHP",
  SiExpress: "Express",
  SiSequelize: "Sequelize",
};

export function getTechnologyName(Icon: IconType): string {
  const icon = Icon as { displayName?: string; name?: string };
  const name = icon.displayName || icon.name || "";
  return iconNameMap[name] || name.replace(/^(Si|Fa|Bi)/, "").replace(/([A-Z])/g, " $1").trim();
}

export function importarImagenes(
  carpeta: string,
  imagenes: string[]
): StaticImageData[] {
  const imports: StaticImageData[] = [];
  for (const imagen of imagenes) {
    imports.push(require(`@/assets/${carpeta}/${imagen}.png`));
  }
  return imports;
}
