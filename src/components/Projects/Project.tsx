import { IProject, IProjectData } from "@/shared/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCube,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import Gallery from "../Gallery";

type Props = {
  project: IProject;
  setPhotos: (value: StaticImageData[] | null) => void;
  setIndex: (value: number) => void;
  data: IProjectData;
};

const Project = ({ project, setPhotos, setIndex, data }: Props) => {
  const keys = Object.keys(project);
  const [images, title, description, link, repository, tecnologies] = keys;
  return (
    <div className="w-full flex flex-col items-center shadow-lg shadow-indigo-500 bg-indigo-500/20 rounded-md overflow-hidden drop-shadow-2xl md:odd:flex-row md:even:flex-row-reverse">
      <div className="w-full md:w-[50%] flex flex-col justify-between p-4">
        <div>
          <h3 className="text-2xl xs:text-3xl font-bold">{project.title}</h3>
          <p className="text-lg xl:text-xl text-justify">
            {data[project.title].description}
          </p>
          <div className="flex flex-wrap my-4 gap-2 justify-center">
            {project.tecnologies.map((Icon, index) => (
              <Icon key={index} className="text-4xl hover:scale-110 transition-all" />
            ))}
          </div>
        </div>
        <div className="flex justify-around">
          <Link
            href={project.link}
            className="hover:opacity-50 transition duration-500"
          >
            <BiLinkExternal className="text-5xl text-indigo-500 " />
          </Link>
          <Link
            href={project.repository}
            className="hover:opacity-50 transition duration-500"
          >
            <BsGithub className="text-5xl text-indigo-500 " />
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
                priority
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
    </div>
  );
};

export default Project;