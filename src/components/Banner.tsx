import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="relative ">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div className="">
            <Image
              className=""
              width={1200}
              height={50}
              src="/images/slider/slider1.jpg"
              alt="slider-image"
              priority
            />
          </div>

          <div className="">
            <Image
              className=""
              width={1200}
              height={50}
              src="/images/slider/slider2.jpg"
              alt="slider-image"
            />
          </div>

          <div className="">
            <Image
              className=""
              width={1200}
              height={50}
              src="/images/slider/slider3.jpg"
              alt="slider-image"
            />
          </div>
        </Carousel>
        <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
      </div>
    </div>
  );
};

export default Banner;
