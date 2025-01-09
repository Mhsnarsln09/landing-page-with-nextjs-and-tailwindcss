'use client'

import { useState } from "react"
import avatar4 from "../../assets/images/avatars/avatar4.jpg"
import avatar5 from "../../assets/images/avatars/avatar5.jpg"
import avatar6 from "../../assets/images/avatars/avatar6.jpg"
import TestimonialsCarousel from "./TestimonialsItems/TestimonialsCarousel"
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';


const Testimonials = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const users = [
        {
            id: 1,
            name: "Barbara D. Smith",
            testimonials: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
            rate: 4,
            avatar: avatar6
        },
        {
            id: 2,
            name: "Ervin Howell",
            testimonials: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
            rate: 5,
            avatar: avatar5
        },
        {
            id: 3,
            name: "Clementine Bauch",
            testimonials: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
            rate: 4,
            avatar: avatar4
        }
    ]
    return (
        <div className="max-w-[393px] xl:max-w-[1440px] mx-auto py-[100px]">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 px-[30px] xl:px-[160px]">
                <div className="xl:w-[415px]">
                    <div className="text-[19.4px] text-color1 font-medium">TESTIMONIALS</div>
                    <h2 className="xl:mt-2.5 text-[27.6px] xl:text-[39.8px] text-textColor2 leading-[47px] font-semibold">
                        Look What Our Customers Say!
                    </h2>
                    <p className="xl:mt-7 text-[13.3px] xl:text-base font-normal text-textColor3">Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. </p>
                    <div className="flex items-center mt-20 space-x-[48px] max-xl:hidden">
                        <button onClick={() => swiperInstance?.slidePrev()}>
                            <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25.9897" r="24.5" transform="rotate(180 25 25.9897)" fill="white" stroke="#4361EE" />
                                <path d="M35 26.9897C35.5523 26.9897 36 26.542 36 25.9897C36 25.4375 35.5523 24.9897 35 24.9897L35 26.9897ZM14.2929 25.2826C13.9024 25.6732 13.9024 26.3063 14.2929 26.6969L20.6569 33.0608C21.0474 33.4513 21.6805 33.4513 22.0711 33.0608C22.4616 32.6703 22.4616 32.0371 22.0711 31.6466L16.4142 25.9897L22.0711 20.3329C22.4616 19.9424 22.4616 19.3092 22.0711 18.9187C21.6805 18.5282 21.0474 18.5282 20.6569 18.9187L14.2929 25.2826ZM35 24.9897L15 24.9897L15 26.9897L35 26.9897L35 24.9897Z" fill="#4361EE" />
                            </svg>
                        </button>
                        <button onClick={() => swiperInstance?.slideNext()}>
                            <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25.9897" r="24.5" fill="white" stroke="#4361EE" />
                                <path d="M15 24.9897C14.4477 24.9897 14 25.4375 14 25.9897C14 26.542 14.4477 26.9897 15 26.9897V24.9897ZM35.7071 26.6969C36.0976 26.3063 36.0976 25.6732 35.7071 25.2826L29.3431 18.9187C28.9526 18.5282 28.3195 18.5282 27.9289 18.9187C27.5384 19.3092 27.5384 19.9424 27.9289 20.3329L33.5858 25.9897L27.9289 31.6466C27.5384 32.0371 27.5384 32.6703 27.9289 33.0608C28.3195 33.4513 28.9526 33.4513 29.3431 33.0608L35.7071 26.6969ZM15 26.9897H35V24.9897H15V26.9897Z" fill="#4361EE" />
                            </svg>
                        </button>

                    </div>
                </div>
                <div className="relative xl:w-[500px] ">
                    <div className="absolute top-[-10%] left-[-5%] -z-10 max-xl:hidden">
                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="30.9808" cy="30.9705" r="30" transform="rotate(-30 30.9808 30.9705)" fill="url(#paint0_linear_70_388)" />
                            <defs>
                                <linearGradient id="paint0_linear_70_388" x1="30.9808" y1="0.970509" x2="30.9808" y2="60.9705" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4361EE" />
                                    <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="hidden max-xl:block absolute top-[-5%] right-[15%] -z-10">
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="20.3205" cy="20.3205" r="20" transform="rotate(-30 20.3205 20.3205)" fill="url(#paint0_linear_410_391)" />
                            <defs>
                                <linearGradient id="paint0_linear_410_391" x1="20.3205" y1="0.320507" x2="20.3205" y2="40.3205" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4361EE" />
                                    <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full border-textColor5 shadow-xl rounded-[20px] py-[30px] px-[30px] xl:px-[60px] bg-white relative">
                        <TestimonialsCarousel
                            users={users}
                            autoplayDelay={4000}
                            showPagination={true}
                            onSwiper={(e) => setSwiperInstance(e)} />
                    </div>
                    <div className="testimonial-custom-pagination" />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
