'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialCard from './TestimonialCard';


interface User {
    id: number;
    name: string;
    testimonials: string;
    rate: number
    avatar: StaticImageData;
}

interface TestimonialsCarouselProps {
    users: User[];
    autoplayDelay?: number;
    showPagination?: boolean;
    onSwiper?: (swiper: SwiperType) => void;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
    users,
    autoplayDelay,
    showPagination,
    onSwiper
}) => {
    const customStyles = `
    @media (min-width: 1280px) { /* xl ve üstü ekranlar için */
  .testimonial-custom-pagination {
    position: relative;
    display: inline-block;
    transform: rotate(90deg); 
    transform-origin: right bottom;
    top: 47%!important;
    left: 4%!important;
  }

}
@media (max-width: 1279px) { 
.testimonial-custom-pagination {
  position: relative;
  top: 2%!important;
  left: 25%!important;
}
  }

.testimonial-custom-pagination .swiper-pagination-bullet {
  width: 38px!important;
  height: 4px;
  border-radius: 2px;
  background: rgba(170, 170, 170, 1);
  opacity: 1;
}

.testimonial-custom-pagination .swiper-pagination-bullet-active {
  background: rgba(128, 128, 128, 1);
  opacity: 1;
}
`;


    return (
        <>
            <style>{customStyles}</style>
            <div className="w-full max-w-4xl mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={
                        showPagination
                            ? {
                                clickable: true,
                                el: '.testimonial-custom-pagination',
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
                    onSwiper={onSwiper}
                    className="h-[340px] w-full rounded-lg"
                >
                    {users.map((user) => (
                        <SwiperSlide key={user.id}>
                            <TestimonialCard user={user} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default TestimonialsCarousel;