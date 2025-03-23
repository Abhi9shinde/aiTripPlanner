import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Marquee from "../ui/marquee";
import { Link } from "react-router-dom";

const images = [
  {
    name: "Chichen Itza",
    src: "/images/itza.jpg",
    link: "https://en.wikipedia.org/wiki/Chichen_Itza",
  },
  {
    name: "Christ the Redeemer",
    src: "/images/christ-redeemer.jpg",
    link: "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
  },
  {
    name: "Colosseum",
    src: "/images/colosseum.jpg",
    link: "https://en.wikipedia.org/wiki/Colosseum",
  },
  {
    name: "Great Pyramid of Giza",
    src: "/images/pyramids.jpg",
    link: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
  },
  {
    name: "Machu Picchu",
    src: "/images/machu-picchu.avif",
    link: "https://en.wikipedia.org/wiki/Machu_Picchu",
  },
  {
    name: "Taj Mahal",
    src: "/images/taj.jpg",
    link: "https://en.wikipedia.org/wiki/Taj_Mahal",
  },
  {
    name: "India Gate",
    src: "/images/indiaGate.jpg",
    link: "https://en.wikipedia.org/wiki/India_Gate",
  },
  {
    name: "Great Wall of China",
    src: "/images/china.jpg",
    link: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
  },
  {
    name: "Eiffel Tower",
    src: "/images/eiffel.jpg",
    link: "https://en.wikipedia.org/wiki/Eiffel_Tower",
  },
  {
    name: "Statue of Liberty",
    src: "/images/statue-of-liberty.jpg",
    link: "https://en.wikipedia.org/wiki/Statue_of_Liberty",
  },
  {
    name: "Sydney Opera House",
    src: "/images/sydney-opera.jpg",
    link: "https://en.wikipedia.org/wiki/Sydney_Opera_House",
  },
  {
    name: "Mount Everest",
    src: "/images/mountains.jpg",
    link: "https://en.wikipedia.org/wiki/Mount_Everest",
  },
  {
    name: "Stonehenge",
    src: "/images/stonehenge.jpg",
    link: "https://en.wikipedia.org/wiki/Stonehenge",
  },
];

const first = images.slice(0, images.length / 2);
const second = images.slice(images.length / 2);

const ImageSlider = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="marquee relative flex w-[75vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {second.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="img cursor-pointer border hover:border-foreground transition-all overflow-hidden rounded-md w-[200px] md:w-[250px]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-full hover:scale-110 duration-300"
                  loading="lazy"
                  role="presentation"
                  fetchPriority="high"
                />
              </Link>
            );
          })}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:60s]">
          {first.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="img cursor-pointer border hover:border-foreground transition-all overflow-hidden rounded-md w-[200px] md:w-[250px]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-full hover:scale-110 duration-300"
                  loading="lazy"
                  role="presentation"
                  fetchPriority="high"
                />
              </Link>
            );
          })}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default ImageSlider;
