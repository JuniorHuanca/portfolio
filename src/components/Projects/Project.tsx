import { IProject } from "@/shared/types";
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
};

const Project = ({ project, setPhotos, setIndex }: Props) => {
  return (
    <div
      // className="w-full flex shadow-inner rounded-md overflow-hidden drop-shadow-2xl shadow-white hover:blur-sm hover:skew-y-6 odd:bg-slate-500 even:bg-teal-800 odd:flex-row even:flex-row-reverse"
      className="w-full flex flex-col shadow-lg shadow-indigo-500 bg-indigo-500/20 rounded-md overflow-hidden drop-shadow-2xl md:odd:flex-row md:even:flex-row-reverse"
    >
      <div className="w-full md:w-[50%] flex flex-col justify-between p-4">
        <div>
          <h3 className="text-2xl xs:text-3xl font-bold">{project.title}</h3>
          <p className="text-lg xl:text-xl">{project.description}</p>
        </div>
        <div className="flex justify-around">
          <Link
            href={project.link}
            className="hover:opacity-50 transition duration-500"
          >
            <BiLinkExternal className="text-5xl" />
          </Link>
          <Link
            href={project.repository}
            className="hover:opacity-50 transition duration-500"
          >
            <BsGithub className="text-5xl" />
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
