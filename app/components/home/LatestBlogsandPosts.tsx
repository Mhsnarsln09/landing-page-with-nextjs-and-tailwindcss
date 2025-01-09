'use client'

import BlogCarousel from "./LatestBlogsandPosts/BlogCarousel";
import image9 from "../../assets/images/image-9.jpg"
import image10 from "../../assets/images/image-10.jpg"
import image11 from "../../assets/images/image-11.jpg"
import BlogCard from "./LatestBlogsandPosts/BlogCard";
import Button from "../ui/Button";

const LatestBlogsandPosts = () => {
    const slides = [
        [{
            id: 11,
            image: image9,
            date: { day: '28', weekday: 'Tue' },
            title: "Top 10 Home Buying Mistakes to Avoid",
            description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"

        },
        {
            id: 12,
            image: image10,
            date: { day: '08', weekday: 'Mon' },
            title: "How to Stage Your Home for a Quick Sale",
            description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
        },
        {
            id: 13,
            image: image11,
            date: { day: '26', weekday: 'Wed' },
            title: "5 Tips for First-Time Home Sellers",
            description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
        }],
        [{
            id: 21,
            image: image9,
            date: { day: '28', weekday: 'Tue' },
            title: "Top 10 Home Buying Mistakes to Avoid",
            description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        },
        {
            id: 22,
            image: image10,
            date: { day: '08', weekday: 'Mon' },
            title: "How to Stage Your Home for a Quick Sale",
            description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
        },
        {
            id: 3,
            image: image11,
            date: { day: '26', weekday: 'Wed' },
            title: "5 Tips for First-Time Home Sellers",
            description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
        }],
        [{
            id: 31,
            image: image9,
            date: { day: '28', weekday: 'Tue' },
            title: "Top 10 Home Buying Mistakes to Avoid",
            description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
        },
        {
            id: 32,
            image: image10,
            date: { day: '08', weekday: 'Mon' },
            title: "How to Stage Your Home for a Quick Sale",
            description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
        },
        {
            id: 33,
            image: image11,
            date: { day: '26', weekday: 'Wed' },
            title: "5 Tips for First-Time Home Sellers",
            description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
        }],
    ];
    return (
        <div className="bg-primary relative">
            <div className="max-xl:hidden absolute top-[-2%] right-[10%] -z-50">
                <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.5" cx="50.3013" cy="50.291" r="50" transform="rotate(-30 50.3013 50.291)" fill="url(#paint0_linear_70_203)" />
                    <defs>
                        <linearGradient id="paint0_linear_70_203" x1="50.3013" y1="0.291016" x2="50.3013" y2="100.291" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4361EE" />
                            <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="max-w-[393px] xl:max-w-[1440px] mx-auto py-[100px] px-[30px] xl:px-[160px]">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="text-base xl:text-[19.4px] text-white font-medium">WHAT’S TRENDING</div>
                    <h2 className="mt-2 xl:mt-7 text-[27.6px] xl:text-[39.8px] text-white leading-[47px] font-semibold">
                        Latest Blogs & Posts
                    </h2>
                </div>
                <div className="mt-20 max-xl:hidden">
                    <BlogCarousel
                        slides={slides}
                        autoplayDelay={4000}
                        showNavigation={true}
                        showPagination={true}
                    />
                </div>
                <div className="mt-10 hidden max-xl:block">
                    <div className="flex justify-center flex-col space-y-10">
                        {slides[0].map((item) => (
                            <BlogCard key={item.id} {...item} />
                        ))}
                    </div>

                    <div className="mt-20">
                    <Button btnClass="px-7 py-4 border-2 rounded-[30px] text-primary border-primary bg-white" title="View more blogs"
              />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LatestBlogsandPosts;