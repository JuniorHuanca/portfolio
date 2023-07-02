import { IAboutme, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Software from "@/assets/software.jpg";
import Subtitle from "../Subtitle";
import { motionDivProps } from "@/shared/config";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  aboutme: IAboutme;
};

const AboutMe = ({ setSelectedPage, aboutme }: Props) => {
  return (
    <section id="aboutme" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        <div className="mt-16 items-center justify-between gap-10 md:flex">
          <div className="relative w-full md:w-[70%] mb-10 md:m-0">
            <Image alt="Software" src={Software} priority />
          </div>
          <motion.div className="w-full" {...motionDivProps}>
            <Subtitle>{aboutme.title}</Subtitle>
            <motion.div
              className="w-full"
              {...motionDivProps}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="my-8 text-xl text-justify">
                {aboutme.description.split("\n").map((item, index) => (
                  <span key={index}>
                    {item}
                    <br />
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
