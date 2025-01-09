import React from "react";
import Image, { StaticImageData } from "next/image";

interface User {
    id: number;
    name: string;
    testimonials: string;
    rate: number;
    avatar: StaticImageData;
}

interface TestimonialCardProps {
    user: User;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ user }) => {
    return (
        <div className="">
            <div className="flex flex-col space-y-10 xl:space-y-8">
                <div>
                    <svg width="60" height="39" viewBox="0 0 60 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9606 0.989746L0 38.2529H21.7241L30.1478 0.989746H15.9606ZM45.8128 0.989746L29.8522 38.2529H51.5764L60 0.989746H45.8128Z" fill="#FFC700" fill-opacity="0.4" />
                    </svg>
                </div>
                <div className="font-medium text-base xl:text-[19.4px] xl:leading-[29.1px] text-textColor2">{user.testimonials}</div>
                <hr className="border border-textColor5" />
                <div className="flex items-center mt-4 gap-4">
                    <div className="relative w-[50px] h-[50px]">
                        <Image
                            src={user.avatar}
                            alt={user.name}
                            fill
                            className="object-cover rounded-full w-full"
                        />
                    </div>
                    <div className="flex flex-col xl:flex-row xl:items-center xl:w-[314px] xl:justify-between">
                        <h4 className="font-medium text-[19.4px] leading-[29.1px] text-textColor2">{user.name}</h4>
                        <div className="flex">
                            {[...Array(user.rate)].map((_, i) => (
                                <span key={i} className="text-yellow-500 text-xl">★</span>
                            ))}
                            {[...Array(5 - user.rate)].map((_, i) => (
                                <span key={i} className="text-gray-300 text-xl">★</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
