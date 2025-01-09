import React from "react";
import EmailInput from "../ui/EmailInput";

export default function Footer() {
    return (
        <footer className=" bg-footerBg">
            <div className="py-12 max-w-[333px] xl:max-w-[1120px] mx-auto px-[30px] xl:px-0">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center xl:items-start">
                        <div className='flex items-center space-x-2 mb-5'>
                            <div className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_3)">
                                        <path d="M23.715 9.16499L12.465 0.164989C12.332 0.0584866 12.1667 0.000457764 11.9963 0.000457764C11.8258 0.000457764 11.6605 0.0584866 11.5275 0.164989L0.2775 9.16499C0.156135 9.26236 0.0680565 9.39506 0.025468 9.54471C-0.0171205 9.69436 -0.0121105 9.85356 0.0398037 10.0002C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5006 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V8.99999H2.8875L12 1.70999L21.1125 8.99999H21C20.8011 8.99999 20.6103 9.07901 20.4697 9.21966C20.329 9.36031 20.25 9.55108 20.25 9.74999V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4502 23.6819 10.3601C23.8079 10.27 23.903 10.143 23.9539 9.9967C24.0049 9.85037 24.0093 9.69184 23.9665 9.54291C23.9237 9.39398 23.8359 9.26195 23.715 9.16499ZM10.5 16.5H13.5V22.5H10.5V16.5Z" fill="white" />
                                        <path d="M18.75 19.9425L17.7825 18.975L16.725 20.0325L18.225 21.5325C18.3655 21.6722 18.5556 21.7506 18.7537 21.7506C18.9519 21.7506 19.142 21.6722 19.2825 21.5325L23.7825 17.0325L22.725 15.975L18.75 19.9425Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_3">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 className='text-[20px] font-semibold text-textColor2'>
                                Rezilla
                            </h2>
                        </div>
                        <p className="text-textColor3 xl:text-textColor2 font-medium text-base mb-4 xl:mb-10 text-center xl:text-left">
                            Lorem ipsum has been the industry standard dummy text
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4282 2.07826L19.3951 2.05762L15.2186 0L10.7107 6.0105L12.7847 8.77597C12.7226 9.8189 12.2803 10.8029 11.5416 11.5416C10.8028 12.2804 9.8188 12.7227 8.77587 12.7847L6.01045 10.7107L0 15.2185L2.04049 19.3602L2.05767 19.3951L2.07836 19.4281C2.18725 19.6036 2.33923 19.7482 2.51984 19.8483C2.70046 19.9484 2.90368 20.0006 3.11018 20H4.18787C6.26435 20 8.3205 19.591 10.2389 18.7964C12.1573 18.0017 13.9005 16.837 15.3687 15.3687C16.837 13.9004 18.0017 12.1573 18.7964 10.2389C19.591 8.32046 20 6.2643 20 4.18782V3.11008C20.0007 2.90359 19.9485 2.70036 19.8484 2.51975C19.7483 2.33914 19.6036 2.18715 19.4282 2.07826ZM18.4566 4.18782C18.4566 12.0556 12.0556 18.4566 4.18787 18.4566H3.31584L1.95059 15.685L6.01074 12.6399L8.27122 14.3352H8.52845C10.0681 14.3335 11.5441 13.7211 12.6328 12.6325C13.7215 11.5438 14.3338 10.0677 14.3356 8.52811V8.27089L12.6403 6.01046L15.685 1.95054L18.4566 3.31603V4.18782Z" fill="#2B2B2B" />
                            </svg>

                            <span className="text-textColor3 xl:text-textColor2 font-medium text-base">+90123 45 67</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 5.00024L11 8.50024L16 5.00024" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 13V3C1 1.89543 1.89543 1 3 1H19C20.1046 1 21 1.89543 21 3V13C21 14.1046 20.1046 15 19 15H3C1.89543 15 1 14.1046 1 13Z" stroke="#2B2B2B" stroke-width="1.6" />
                            </svg>
                            <span className="text-textColor3 xl:text-textColor2 font-medium text-base">mail@mail.com</span>
                        </div>
                    </div>
                    <div className="hidden xl:flex space-x-8 mt-4">
                        <div>
                            <h3 className="text-textColor1 font-medium text-[19.4px] mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-textColor2 font-normal text-base">
                                <li><a href="#" className="hover:text-white transition">Home</a></li>
                                <li><a href="#" className="hover:text-white transition">About</a></li>
                                <li><a href="#" className="hover:text-white transition">Listings</a></li>
                                <li><a href="#" className="hover:text-white transition">Services</a></li>
                                <li><a href="#" className="hover:text-white transition">Blogs</a></li>
                                <li><a href="#" className="hover:text-white transition">Become a Agent</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-textColor1 font-medium text-[19.4px] mb-4">Discovery</h3>
                            <ul className="space-y-2 text-textColor2 font-normal text-base">
                                <li><a href="#" className="hover:text-white transition">Canada</a></li>
                                <li><a href="#" className="hover:text-white transition">United States</a></li>
                                <li><a href="#" className="hover:text-white transition">Germany</a></li>
                                <li><a href="#" className="hover:text-white transition">Africa</a></li>
                                <li><a href="#" className="hover:text-white transition">India</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:mt-4 flex flex-col items-center xl:items-start">
                        <h3 className="text-textColor1 font-medium text-[19.4px] mb-4">
                            Subscribe to our <br /> Newsletter!
                        </h3>
                        <EmailInput />

                        <p className="text-textColor1 font-medium text-[19.4px] mb-2">Follow Us on</p>
                        <div className="flex items-center space-x-4">
                            <a href="#">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.92503 22.0008H0.363799V7.31212H4.92503V22.0008ZM2.64167 5.30848C1.18333 5.30848 0 4.1 0 2.64167C0 1.18333 1.18254 0 2.64167 0C4.10079 0 5.28333 1.18254 5.28333 2.64167C5.28333 4.1 4.1 5.30848 2.64167 5.30848ZM21.9961 22.0008H17.4451V14.8505C17.4451 13.1463 17.4105 10.9611 15.0737 10.9611C12.7023 10.9611 12.3385 12.8123 12.3385 14.728V22.0008H7.78199V7.31212H12.1562V9.31576H12.2199C12.8288 8.1615 14.3162 6.9436 16.5352 6.9436C21.1514 6.9436 22 9.98364 22 13.932V22.0008H21.9961Z" fill="#3A0CA3" />
                                </svg>

                            </a>
                            <a href="#">
                                <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0103 12.3743L11.6215 8.393H7.80106V5.80937C7.80106 4.72038 8.33456 3.65819 10.0457 3.65819H11.7824V0.268813C11.7824 0.268813 10.2066 0 8.69963 0C5.55362 0 3.49731 1.90713 3.49731 5.35906V8.39369H0V12.375H3.49731V22H7.80106V12.375L11.0103 12.3743Z" fill="#3A0CA3" />
                                </svg>

                            </a>
                            <a href="#">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 0C8.00969 0 7.63702 0.0144393 6.46675 0.0639455C5.29166 0.121703 4.49681 0.303913 3.79547 0.576197C3.07213 0.859482 2.45606 1.23559 1.84754 1.84754C1.2349 2.45606 0.855357 3.07213 0.576197 3.79547C0.303913 4.49681 0.121703 5.29166 0.0639455 6.46675C0.0110014 7.6377 0 8.00969 0 11C0 13.9903 0.0144393 14.363 0.0639455 15.5333C0.121703 16.7049 0.303913 17.5032 0.576197 18.2045C0.859482 18.9279 1.23559 19.5439 1.84754 20.1525C2.45606 20.7651 3.07213 21.1446 3.79547 21.4238C4.49681 21.6926 5.2951 21.8783 6.46675 21.9361C7.6377 21.989 8.00969 22 11 22C13.9903 22 14.363 21.9856 15.5333 21.9361C16.7049 21.8783 17.5032 21.692 18.2045 21.4238C18.9279 21.1405 19.5439 20.7644 20.1525 20.1525C20.7651 19.5439 21.1446 18.9313 21.4238 18.2045C21.6926 17.5032 21.8783 16.7049 21.9361 15.5333C21.989 14.3623 22 13.9903 22 11C22 8.00969 21.9856 7.63702 21.9361 6.46675C21.8783 5.2951 21.692 4.49269 21.4238 3.79547C21.1405 3.07213 20.7644 2.45606 20.1525 1.84754C19.5439 1.2349 18.9313 0.855357 18.2045 0.576197C17.5032 0.303913 16.7049 0.121703 15.5333 0.0639455C14.3623 0.0110014 13.9903 0 11 0ZM11 1.98025C13.9367 1.98025 14.2873 1.99469 15.448 2.04419C16.5186 2.09439 17.1016 2.27316 17.4887 2.42443C18.0051 2.62452 18.3661 2.86105 18.7567 3.24747C19.1396 3.63045 19.3762 3.99556 19.5763 4.51194C19.7275 4.89905 19.9063 5.48212 19.9565 6.55269C20.006 7.71334 20.0204 8.0647 20.0204 11.0007C20.0204 13.9367 20.006 14.288 19.9524 15.4487C19.8946 16.5193 19.7158 17.1023 19.5653 17.4894C19.3569 18.0058 19.1245 18.3668 18.7408 18.7573C18.3537 19.1403 17.9852 19.3769 17.4729 19.5769C17.0906 19.7282 16.4993 19.907 15.4246 19.9572C14.2578 20.0067 13.914 20.0211 10.9697 20.0211C8.0255 20.0211 7.6824 20.0067 6.51419 19.9531C5.44362 19.8953 4.85298 19.7165 4.46587 19.5659C3.94331 19.3576 3.58507 19.1252 3.2014 18.7415C2.81429 18.3544 2.56813 17.9859 2.37836 17.4736C2.22434 17.0913 2.04832 16.5 1.99125 15.4253C1.95206 14.2722 1.93349 13.9147 1.93349 10.9842C1.93349 8.05507 1.95206 7.69684 1.99125 6.52932C2.04832 5.45462 2.22434 4.86467 2.37836 4.481C2.56813 3.95774 2.81498 3.6002 3.2014 3.21309C3.58439 2.8301 3.94331 2.58257 4.46587 2.38867C4.85298 2.23809 5.42918 2.05932 6.50388 2.00569C7.67071 1.96375 8.0145 1.94862 10.9546 1.94862L11 1.98025ZM11 5.35423C7.87767 5.35423 5.35286 7.88249 5.35286 11.0014C5.35286 14.1237 7.88111 16.6485 11 16.6485C14.1223 16.6485 16.6471 14.1203 16.6471 11.0014C16.6471 7.87905 14.1189 5.35423 11 5.35423ZM11 14.6683C8.973 14.6683 7.3331 13.0284 7.3331 11.0014C7.3331 8.97437 8.973 7.33448 11 7.33448C13.027 7.33448 14.6669 8.97437 14.6669 11.0014C14.6669 13.0284 13.027 14.6683 11 14.6683ZM18.1949 5.1287C18.1949 5.85961 17.6001 6.44956 16.8727 6.44956C16.1418 6.44956 15.5518 5.85892 15.5518 5.1287C15.5518 4.40193 16.1459 3.8106 16.8727 3.8106C17.5994 3.8106 18.1949 4.40193 18.1949 5.1287Z" fill="#3A0CA3" />
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-textColor1 h-[50px]">
                <div className="flex items-center justify-center xl:justify-between max-w-[333px] xl:max-w-[1120px] mx-auto h-full text-textColor4 text-base font-normal">
                    <div>
                        © Company – All rights reserved
                    </div>
                    <div className="hidden xl:block">
                        <ul className="flex items-center space-x-[50px]">
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
