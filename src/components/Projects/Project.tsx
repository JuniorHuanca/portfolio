import { IProject, IProjectData } from "@/shared/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCube,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import Gallery from "../Gallery";
import { motionDivProps } from "@/shared/config";

type Props = {
  project: IProject;
  setPhotos: (value: StaticImageData[] | null) => void;
  setIndex: (value: number) => void;
  data: IProjectData;
  buttons: { [key: string]: string };
};

const Project = ({ project, setPhotos, setIndex, data, buttons }: Props) => {
  return (
    <motion.div
      className="w-full flex flex-col items-center shadow-lg shadow-indigo-500 bg-indigo-500/20 rounded-md overflow-hidden drop-shadow-2xl md:odd:flex-row md:even:flex-row-reverse"
      {...motionDivProps}
    >
      <div className="w-full md:w-[50%] flex flex-col justify-between p-4">
        <div>
          <h3 className="text-2xl xs:text-3xl font-bold">{project.title}</h3>
          <p className="text-lg xl:text-xl text-justify">
            {data[project.title].description}
          </p>
          <div className="flex flex-wrap my-6 gap-2 justify-center">
            {project.tecnologies.map((Icon, index) => (
              <Icon
                key={index}
                className="text-4xl hover:scale-110 transition-all"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-around">
          <Link
            href={project.link}
            className="flex justify-center items-center dark:bg-indigo-800 text-white bg-blue-950 border-2 dark:border-indigo-800 border-blue-900 rounded-xl p-2 gap-3 hover:scale-110 transition duration-500"
          >
            <span className="font-bold xs:text-lg">{buttons.watch}</span>
            <BiLinkExternal className="text-4xl" />
          </Link>
          <Link
            href={project.repository}
            className="flex justify-center items-center border-2 dark:border-indigo-800 border-blue-900 rounded-xl p-2 gap-3 hover:scale-110 transition duration-500"
          >
            <span className="font-bold xs:text-lg">{buttons.repository}</span>
            <BsGithub className="text-4xl" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-wrap justify-center gap-4 p-2 md:p-4">
        {/* <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectCube]}
          effect={"cube"}
          grabCursor={true}
          loop={true}
          className="h-full w-full"
        >
          {project.images.map((e, index) => (
            <SwiperSlide key={index} className="rounded-xl overflow-hidden">
              <Image src={e} alt={project.title} priority />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
          grabCursor={true}
          effect={"creative"}
          pagination={{
            clickable: true,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[Autoplay, Pagination, EffectCube, EffectCreative]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {project.images.map((e, index) => (
            <SwiperSlide key={index} className="rounded-xl overflow-hidden">
              <Image
                className="h-[180px] xs:h-auto"
                src={e}
                alt={project.title}
                loading="lazy"
                onClick={() => {
                  setPhotos(project.images);
                  setIndex(index);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <Gallery photos={project.images} /> */}
    </motion.div>
  );
};

export default Project;
