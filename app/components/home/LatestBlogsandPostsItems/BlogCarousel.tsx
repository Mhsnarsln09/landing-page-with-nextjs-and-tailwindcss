'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { StaticImageData } from "next/image";
import { useState } from "react";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface DateProp {
    day: string;
    weekday: string
}

interface SlideGroup {
    id: number;
    image: StaticImageData;
    date: DateProp;
    title: string
    description: string
}

interface BlogCarousel {
    slides: SlideGroup[][];
    autoplayDelay?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
}

const BlogCarousel: React.FC<BlogCarousel> = ({
    slides,
    autoplayDelay,
    showNavigation,
    showPagination,
}) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const bulletWidth = `calc((100% / ${slides.length}) - 12px)`;
    const blogCustomStyles = `
.blog-custom-pagination {
  position: relative;
  width:380px!important;
  margin: 70px auto 0 auto;
}

.blog-custom-pagination .swiper-pagination-bullet {
  width: ${bulletWidth};
  height: 4px;
  border-radius: 2px;
  background: white;
  opacity: 0.5;
}

.blog-custom-pagination .swiper-pagination-bullet-active {
  background: white;
  opacity: 1;
}
`;

    return (
        <>
            <style>{blogCustomStyles}</style>
            <div className="w-full mx-auto relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={
                        showPagination
                            ? {
                                clickable: true,
                                el: ".blog-custom-pagination",
                                bulletClass: "swiper-pagination-bullet",
                                bulletActiveClass: "swiper-pagination-bullet-active",
                            }
                            : false
                    }
                    autoplay={
                        autoplayDelay
                            ? {
                                delay: autoplayDelay,
                                disableOnInteraction: false,
                            }
                            : false
                    }
                    onSwiper={setSwiperInstance}
                    className="h-[400px] w-full rounded-lg"
                >
                    {slides.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center space-x-10">
                                {group.map((item) => (
                                    <BlogCard key={item.id} {...item} />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {showNavigation && (
                    <div className="w-full flex items-center justify-center space-x-[340px] mt-6">
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className=""
                        >
                            <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25.9897" r="24.5" transform="rotate(-180 25 25.9897)" fill="white" stroke="#3A0CA3" />
                                <path d="M35 26.9897C35.5523 26.9897 36 26.542 36 25.9897C36 25.4375 35.5523 24.9897 35 24.9897L35 26.9897ZM14.2929 25.2826C13.9024 25.6732 13.9024 26.3063 14.2929 26.6969L20.6569 33.0608C21.0474 33.4513 21.6805 33.4513 22.0711 33.0608C22.4616 32.6703 22.4616 32.0371 22.0711 31.6466L16.4142 25.9897L22.0711 20.3329C22.4616 19.9424 22.4616 19.3092 22.0711 18.9187C21.6805 18.5282 21.0474 18.5282 20.6569 18.9187L14.2929 25.2826ZM35 24.9897L15 24.9897L15 26.9897L35 26.9897L35 24.9897Z" fill="#3A0CA3" />
                            </svg>
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className=""
                        >
                            <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25.9897" r="24.5" fill="white" stroke="#3A0CA3" />
                                <path d="M15 24.9897C14.4477 24.9897 14 25.4375 14 25.9897C14 26.542 14.4477 26.9897 15 26.9897V24.9897ZM35.7071 26.6969C36.0976 26.3063 36.0976 25.6732 35.7071 25.2826L29.3431 18.9187C28.9526 18.5282 28.3195 18.5282 27.9289 18.9187C27.5384 19.3092 27.5384 19.9424 27.9289 20.3329L33.5858 25.9897L27.9289 31.6466C27.5384 32.0371 27.5384 32.6703 27.9289 33.0608C28.3195 33.4513 28.9526 33.4513 29.3431 33.0608L35.7071 26.6969ZM15 26.9897H35V24.9897H15V26.9897Z" fill="#3A0CA3" />
                            </svg>
                        </button>
                    </div>
                )}

                {showPagination && <div className="blog-custom-pagination" />}
            </div>
        </>
    );
};

export default BlogCarousel;
