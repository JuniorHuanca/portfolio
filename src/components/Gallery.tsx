import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
type Props = {
  photos: StaticImageData[];
};

const Gallery = ({ photos }: Props) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(photos.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === photos.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {photos.map((s, index) => {
          return (
            <Image
              src={s}
              alt={`img${index}`}
              key={index}
              className="aspect-video object-scale-down"
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-4 text-3xl">
        <button
          className="bg-black/30 rounded-full p-1"
          onClick={previousSlide}
          type="button"
        >
          <BiChevronLeft />
        </button>
        <button
          className="bg-black/30 rounded-full p-1"
          onClick={nextSlide}
          type="button"
        >
          <BiChevronRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {photos.map((_, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                i == current
                  ? "bg-white ring-inset ring-2 ring-black"
                  : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
