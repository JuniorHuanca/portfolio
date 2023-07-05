import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { type Swiper as SwiperRef } from "swiper";
type Props = {
  photos: StaticImageData[];
  index: number;
  setPhotos: (value: StaticImageData[] | null) => void;
};

const Gallery = ({ photos, index, setPhotos }: Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef>();
  return (
    <>
      <div className="flex justify-center items-center fixed top-0 right-0 w-screen h-screen bg-black/70 dark:bg-black/20 z-10">
        <div className="relative w-full xs:w-[85%] h-auto sm:h-[90%] bg-black xs:p-6 py-1 gap-1 xs:gap-2 rounded-lg">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            initialSlide={index}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <Image src={photo} alt={"Error"} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <Image src={photo} alt={"Error"} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="absolute top-2 right-2 bg-blue-950 inline-flex items-center justify-center p-2 hover:text-gray-400 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white z-50"
            onClick={() => setPhotos(null)}
          >
            <svg
              className={`h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
