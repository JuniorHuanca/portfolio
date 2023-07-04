// import Image, { StaticImageData } from "next/image";
// import { useState } from "react";
// import right from "@/assets/right.svg";
// import left from "@/assets/left.svg";
// type Props = {
//   photos: StaticImageData[];
//   index: number;
//   setPhotos: (value: StaticImageData[] | null) => void;
// };

// const Gallery = ({ photos, index, setPhotos }: Props) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(index);
//   const [zoomLevel, setZoomLevel] = useState<number>(1);

//   const handleNextPhoto = () => {
//     // setZoomLevel(1);
//     setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
//   };

//   const handlePreviousPhoto = () => {
//     // setZoomLevel(1);
//     setCurrentPhotoIndex((prevIndex) =>
//       prevIndex === 0 ? photos.length - 1 : prevIndex - 1
//     );
//   };

//   // const handleZoomIn = () => {
//   //   setZoomLevel((prevZoom) => {
//   //     if (prevZoom <= 3) {
//   //       return prevZoom + 0.5;
//   //     }
//   //     return prevZoom;
//   //   });
//   // };
//   const handleZoomIn = () => {
//     setZoomLevel((prevZoom) => {
//       if (prevZoom <= 3) {
//         const imageElement = document.querySelector(
//           ".zoom-image"
//         ) as HTMLImageElement;

//         if (imageElement) {
//           const imageRect = imageElement.getBoundingClientRect();
//           const mouseX = mousePosition.x - imageRect.left;
//           const mouseY = mousePosition.y - imageRect.top;
//           const relativeX = mouseX / imageRect.width;
//           const relativeY = mouseY / imageRect.height;
//           const newZoom = prevZoom + 0.5;
//           const translateX = (relativeX - 0.5) * newZoom * imageRect.width;
//           const translateY = (relativeY - 0.5) * newZoom * imageRect.height;
//           imageElement.style.transform = `scale(${newZoom}) translate(${translateX}px, ${translateY}px)`;
//           return newZoom;
//         }
//       }
//       return prevZoom;
//     });
//   };

//   const handleZoomOut = () => {
//     setZoomLevel((prevZoom) => {
//       if (prevZoom > 1) {
//         return prevZoom - 0.5;
//       }
//       return prevZoom;
//     });
//   };
//   const currentPhoto = photos[currentPhotoIndex];

//   return (
//     <div className="flex justify-center items-center fixed top-0 right-0 w-screen h-screen bg-black/70 dark:bg-black/20 z-10">
//       <div className="relative flex items-center w-full xs:w-[85%] h-auto dark:bg-blue-950 bg-white p-6 xs:p-2 gap-2 rounded-lg">
//         <button onClick={handlePreviousPhoto} className="w-[5%]">
//           <Image width={60} height={60} src={left} alt="left" priority />
//         </button>
//         <div className="w-[90%] overflow-hidden">
//           <Image
//             className="hover:cursor-crosshair zoom-image object-scale-down h-full"
//             src={currentPhoto}
//             alt={`Photo ${currentPhotoIndex + 1}`}
//             style={{ transform: `scale(${zoomLevel})` }}
//             // onClick={handleZoomIn}
//             // onMouseMove={handleMouseMove}
//             // onContextMenu={(e) => {
//             //   e.preventDefault();
//             //   handleZoomOut();
//             // }}
//           />
//         </div>
//         <button onClick={handleNextPhoto} className="w-[5%]">
//           <Image width={60} height={60} src={right} alt="right" priority />
//         </button>
//         <button
//           type="button"
//           className="absolute top-2 right-2 bg-blue-950 inline-flex items-center justify-center p-2 rounded-md hover:text-gray-400 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
//           onClick={() => setPhotos(null)}
//         >
//           <svg
//             className={`h-6 w-6`}
//             stroke="currentColor"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

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
        <div className="relative w-full xs:w-[85%] h-auto sm:h-[90%] bg-black p-6 xs:p-2 gap-2 rounded-lg">
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
