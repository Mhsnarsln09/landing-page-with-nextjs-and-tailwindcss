import Image from 'next/image';
import image3 from "../../assets/images/image-3.jpg";
import image4 from "../../assets/images/image-4.jpg";
import image5 from "../../assets/images/image-5.jpg";

const WhoWereAre = () => {
    return (
        <div className='relative max-w-[393px] xl:max-w-[1440px] mx-auto '>
            <div className='max-xl:hidden absolute left-9'>
                <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.5" cx="50.3013" cy="50.3013" r="50" transform="rotate(-30 50.3013 50.3013)" fill="url(#paint0_linear_70_162)" />
                    <defs>
                        <linearGradient id="paint0_linear_70_162" x1="50.3013" y1="0.30127" x2="50.3013" y2="100.301" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4361EE" />
                            <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='pt-[86px] w-full px-[30px] xl:px-[160px] grid grid-cols-1 xl:grid-cols-2 gap-x-[8rem] gap-y-6 auto-rows-auto'>
                <div className="xl:w-[500px]">
                    <div className="text-[19.4px] text-color1 font-medium">WHO ARE WE</div>
                    <h2 className="mt-2.5 text-[39.8px] text-textColor2 leading-[47px] font-semibold">
                        Assisting individuals in locating the appropriate real estate.
                    </h2>
                    <p className="mt-2.5 text-base font-normal text-textColor3">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                </div>
                <div className='xl:row-span-2'>
                    <div className='grid grid-cols-2 gap-[3rem] xl:gap-[8rem]'>
                        <div className='pt-12'>
                            <div className="relative w-[170px] h-[260px] xl:w-[280px] xl:h-[500px]">
                                <Image
                                    src={image5}
                                    alt="image5"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <div className="relative w-[143px] h-[140px] xl:w-[280px] xl:h-[280px] ">
                                <Image
                                    src={image3}
                                    alt="image6"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            <div className="relative w-[143px] h-[100px] xl:w-[280px] xl:h-[180px]">
                                <Image
                                    src={image4}
                                    alt="image7"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                                <div className='absolute bottom-[-20%] xl:bottom-[-10%] left-1/4'>
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.5" cx="20.3205" cy="20.3205" r="20" transform="rotate(30 20.3205 20.3205)" fill="url(#paint0_linear_410_244)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_410_244" x1="20.3205" y1="0.320507" x2="20.3205" y2="40.3205" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#4361EE" />
                                                <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 xl:w-[400px]">
                    <div className="flex items-center bg-white md:rounded-[30px] rounded-[20px] p-6 shadow-lg">
                        <div className="mr-10">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.531 38.8724H19.1277C18.3736 38.8724 17.7483 38.2471 17.7483 37.493C17.7483 36.7389 18.3736 36.1136 19.1277 36.1136H30.531C32.499 36.1136 34.4301 34.4765 34.7612 32.5269L37.2074 17.8867C37.4281 16.5625 36.6926 14.6679 35.6626 13.8402L22.9165 3.651C21.4451 2.47389 18.999 2.47387 17.546 3.63259L4.8001 13.8402C3.75174 14.6863 3.03444 16.5625 3.25514 17.8867L3.77013 20.9949C3.89888 21.7489 3.38391 22.4662 2.62982 22.5766C1.87574 22.7237 1.17685 22.1904 1.0481 21.4363L0.533113 18.3465C0.146873 16.0659 1.25043 13.1415 3.07128 11.6885L15.8172 1.48061C18.2817 -0.505767 22.1624 -0.487356 24.6454 1.49902L37.3913 11.6885C39.1938 13.1415 40.2973 16.0659 39.9295 18.3465L37.4833 32.9867C36.9315 36.2421 33.8232 38.8724 30.531 38.8724Z" fill="#4361EE" />
                                <path d="M7.35738 39.2221C6.60329 39.2221 5.99634 38.6151 5.97795 37.8794C5.92277 35.3964 4.28587 33.7595 1.80291 33.7043C1.04882 33.686 0.441854 33.0606 0.460246 32.2881C0.478638 31.5341 1.08559 30.9455 1.83967 30.9455H1.87644C5.8308 31.0375 8.66324 33.8515 8.7368 37.8058C8.7552 38.5599 8.14823 39.2037 7.39415 39.2221C7.37575 39.2221 7.37577 39.2221 7.35738 39.2221Z" fill="#4361EE" />
                                <path d="M12.8751 39.222C12.121 39.222 11.4956 38.6151 11.4956 37.861C11.4772 36.6471 11.2749 35.4884 10.9071 34.4032C9.96906 31.7179 7.9643 29.7314 5.27901 28.775C4.19386 28.3887 3.03515 28.1866 1.82125 28.1866C1.06716 28.1866 0.441842 27.5612 0.460235 26.7888C0.460235 26.0347 1.08557 25.4277 1.83966 25.4277H1.85805C3.38462 25.4461 4.8376 25.7036 6.19863 26.1818C9.67479 27.4141 12.2681 30.0074 13.5004 33.4836C13.9786 34.8446 14.2361 36.316 14.2545 37.8242C14.2545 38.5967 13.6476 39.222 12.8751 39.222Z" fill="#4361EE" />
                                <path d="M1.83924 39.6819C0.809264 39.6819 0 38.8542 0 37.8427C0 36.8311 0.827656 36.0034 1.83924 36.0034C2.85082 36.0034 3.67847 36.8311 3.67847 37.8427C3.67847 38.8542 2.86921 39.6819 1.83924 39.6819Z" fill="#4361EE" />
                            </svg>

                        </div>
                        <div>
                            <h3 className="text-[19.4px] text-color1 font-medium">Lorem ipsum has been the</h3>
                            <p className="text-base font-normal text-textColor3">when an unknown printer took a galley</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-white md:rounded-[30px] rounded-[20px] p-6 shadow-lg">
                        <div className="mr-10">
                            <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42 16.4855V31.5433C42 34.0089 40.6791 36.2984 38.5437 37.5532L25.4672 45.1041C23.3318 46.3369 20.6901 46.3369 18.5327 45.1041L5.45625 37.5532C3.32086 36.3204 2 34.0309 2 31.5433V16.4855C2 14.0199 3.32086 11.7303 5.45625 10.4755L18.5327 2.9246C20.6681 1.6918 23.3098 1.6918 25.4672 2.9246L38.5437 10.4755C40.6791 11.7303 42 13.9979 42 16.4855Z" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.011 21.8132C24.844 21.8132 27.1403 19.5165 27.1403 16.6837C27.1403 13.8508 24.844 11.5544 22.011 11.5544C19.1782 11.5544 16.8817 13.8508 16.8817 16.6837C16.8817 19.5165 19.1782 21.8132 22.011 21.8132Z" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.8167 34.2734C30.8167 30.3108 26.8761 27.0967 22.0109 27.0967C17.1458 27.0967 13.2052 30.3108 13.2052 34.2734" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <div className="text-[19.4px] text-color1 font-medium">Lorem ipsum has been the</div>
                            <p className="text-base font-normal text-textColor3">when an unknown printer took a galley</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWereAre;
