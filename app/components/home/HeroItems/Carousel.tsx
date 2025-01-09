import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface SlideItem {
    id: number;
    image: StaticImageData;
}

interface CarouselProps {
    slides: SlideItem[];
    autoplayDelay?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
    slides,
    autoplayDelay = 3000,
    showNavigation = true,
    showPagination = true,
}) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const bulletWidth = `calc((100% / ${slides.length}) - 8px)`;
    const customStyles = `
.custom-pagination {
  position: relative;
}

.custom-pagination .swiper-pagination-bullet {
  width: ${bulletWidth};
  height: 4px;
  border-radius: 2px;
  background: white;
  opacity: 1;
}

.custom-pagination .swiper-pagination-bullet-active {
  background: rgba(67, 97, 238, 1);
  opacity: 1;
}
`;


    return (
        <>
            <style>{customStyles}</style>
            <div className="w-full max-w-4xl mx-auto relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={
                        showPagination
                            ? {
                                clickable: true,
                                el: '.custom-pagination',
                                bulletClass: 'swiper-pagination-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active',
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
                    className="h-[340px] w-full rounded-lg"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={slide.image}
                                    alt={`item-${slide.id}`}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority={slide.id === 1}
                                    sizes="(max-width: 896px) 100vw, 896px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {showPagination && <div className="custom-pagination" />}

                {showNavigation && (
                    <div >
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className='absolute top-[40%] left-[-7.6%] z-10'
                        >
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_8_83)">
                                    <circle cx="46" cy="40" r="20" fill="white" />
                                </g>
                                <path d="M49 34L44.4142 38.5858C43.6332 39.3668 43.6332 40.6332 44.4142 41.4142L49 46" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" />
                                <defs>
                                    <filter id="filter0_d_8_83" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="4" dy="10" />
                                        <feGaussianBlur stdDeviation="15" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_83" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_83" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className='absolute top-[40%] right-[-10%] z-10'
                        >
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_8_84)">
                                    <circle cx="46" cy="40" r="20" transform="rotate(180 46 40)" fill="white" />
                                </g>
                                <path d="M43 46L47.5858 41.4142C48.3668 40.6332 48.3668 39.3668 47.5858 38.5858L43 34" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" />
                                <defs>
                                    <filter id="filter0_d_8_84" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="4" dy="10" />
                                        <feGaussianBlur stdDeviation="15" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_84" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_84" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Carousel;