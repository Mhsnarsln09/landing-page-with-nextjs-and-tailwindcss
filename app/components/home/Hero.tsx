'use client'

import Carousel from "./HeroItems/Carousel";
import Image from 'next/image';
import image1 from "../../assets/images/image-1.jpg"
import image2 from "../../assets/images/image-2.jpg"
import image3 from "../../assets/images/image-3.jpg"
import image4 from "../../assets/images/image-4.jpg"
import image8 from "../../assets/images/image-8.jpg"
import Form from "./HeroItems/Form";
import avatar1 from "../../assets/images/avatars/avatar1.jpg"
import avatar2 from "../../assets/images/avatars/avatar2.jpg"
import avatar3 from "../../assets/images/avatars/avatar3.jpg"
import avatar4 from "../../assets/images/avatars/avatar4.jpg"
import avatar5 from "../../assets/images/avatars/avatar5.jpg"


const Hero = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar5]
  const slides = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
  ];
  return (
    <div className="relative max-w-[393px] xl:max-w-[1440px] mx-auto">
      <div className="absolute w-full h-[900px] xl:h-[850px]"
        style={{
          borderRadius: "0 0 800px 800px",
          zIndex: -1,
          background:
            "linear-gradient(180deg, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3) 100%)",
        }} />
      <div className="pt-5 xl:pt-[86px] w-full px-[30px] xl:px-[160px] grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-[28rem]" >
        <div className="xl:w-[580px]">
          <div className="text-[19.4px] text-color1 font-medium ">REAL ESTATE</div>
          <h1 className="mt-2.5 text-[39.8px] xl:text-[57.3px] text-textColor1 leading-[47px] xl:leading-[65px] font-semibold">
            Find a perfect home you love..!
          </h1>
          <p className="mt-2.5 text-base font-normal text-textColor3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
          <div className="relative pt-10">
            <svg className="absolute top-0 right-0" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30.1698" cy="30.1699" r="30" transform="rotate(30 30.1698 30.1699)" fill="url(#paint0_linear_29_153)" />
              <defs>
                <linearGradient id="paint0_linear_29_153" x1="30.1698" y1="0.16988" x2="30.1698" y2="60.1699" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4361EE" />
                  <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="xl:w-[540px] xl:h-[350px] drop-shadow-xl">
              <Carousel
                slides={slides}
                autoplayDelay={4000}
                showNavigation={true}
                showPagination={true}
              />
            </div>
          </div>
        </div>
        <div className="mt-9 xl:w-[420px] xl:h-[582px] bg-white rounded-[30px] drop-shadow-xl">
          <Form />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 xl:mt-[100px]">
        <div className="w-[333px] xl:w-[360px] h-[100px] bg-white rounded-[50px] shadow-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex -space-x-4 pl-4 relative">
              {avatars.map((avatar, i) => (
                <div className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-white">
                  <Image
                    key={i}
                    src={avatar}
                    alt={`item-${avatar}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 absolute right-0 rounded-full bg-black/60 border-2 border-white flex items-center justify-center">
                <span className="text-white text-lg font-medium">+</span>
              </div>
            </div>
            <div className="w-[130px] font-medium text-[19.4px] leading-[29.1px] text-textColor2">
              72k+ Happy Customers
            </div>
          </div>
        </div>
        <div className="w-[333px] xl:w-[320px] h-[100px] flex justify-center items-center bg-white rounded-[50px] shadow-lg p-4">
          <div className="flex items-center">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white">
              <Image
                src={image8}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[190px] pl-4 font-medium text-[19.4px] leading-[29.1px] text-textColor2">
              200+ New Listings Everyday!
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
