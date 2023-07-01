import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Software from "@/assets/software.jpg";
import Subtitle from "../Subtitle";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutme" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
            <Image
              className="mx-auto"
              alt="benefits-page-graphic"
              src={Software}
              priority
            />
          </div>
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  className="w-5/6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Subtitle>Habilidades blandas</Subtitle>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="w-5/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="">
                Soy Junior Huanca, un desarrollador web full-stack con 19 años
                de edad, apasionado por el software. Vivo en Perú y tengo
                habilidades en tecnologías como JavaScript, React, Redux, Node
                JS, Express, Sequelize, HTML y CSS. Me enfoco en entregar
                soluciones de alta calidad y presto atención a los detalles.
              </p>
              <p className="mb-5">
                Soy un trabajador en equipo con una ética de trabajo sólida y
                estoy comprometido a mejorar continuamente mis habilidades y
                aprender nuevas tecnologías. Estoy dispuesto a ser un valioso
                miembro de cualquier equipo de desarrollo de software.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
