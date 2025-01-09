import Image, { StaticImageData } from "next/image";

interface PropertyCardProps {
    price: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    tag: {
        type: "Popular" | "New Listing" | "Discounted Price";
        icon: React.ReactNode;
        bgColor: string;
        color: string;
    };
    image: StaticImageData;
}


const PropertyCard: React.FC<PropertyCardProps> = ({
    price,
    title,
    address,
    beds,
    baths,
    tag,
    image,
}) => {
    return (
        <div className="w-full">
            <div className="relative">
                <div className="relative w-[333px] h-[220px] xl:w-[340px] xl:h-[340px]">
                    <Image
                        src={image}
                        alt="image5"
                        fill
                        className="object-cover rounded-3xl"
                    />
                </div>
                <div className={`absolute bottom-8 left-8 px-6 py-2 rounded-full text-base font-medium whitespace-nowrap max-xl:hidden ${tag.color} ${tag.bgColor}`}>
                    <span className="flex items-center">
                        <span className="mr-2">{tag.icon}</span> {tag.type}
                    </span>
                </div>
            </div>
            <div className="space-y-2 w-[333px] mt-2">
                <h3 className="text-[27.6px] leading-[41.4px] font-semibold text-textColor2">${price}</h3>
                <p className="text-[19.4px] leading-[29.1px] font-medium text-textColor2">{title}</p>
                <p className="text-base leading-[26px] font-normal text-textColor3">{address}</p>
                <div className="flex items-center text-base leading-[26px] font-normal text-textColor2">
                    <div className="flex items-center mr-6">
                        <span className="mr-2">
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 5.48975H12V13.0284H10.6154V10.4659C10.6138 9.01407 10.0363 7.62213 9.00971 6.5955C7.9831 5.56887 6.59117 4.99138 5.13931 4.98975H2V0.989746H0V22.4897H2V19.5058L28 19.7138V22.4897H30V10.4897C29.9985 9.16413 29.4712 7.89323 28.5339 6.95587C27.5965 6.01852 26.3256 5.49125 25 5.48975ZM2 6.98975H5.13931C6.0609 6.99079 6.94445 7.35735 7.59611 8.00901C8.24777 8.66067 8.61433 9.54422 8.61537 10.4658V13.0283H2V6.98975ZM28 17.7137L2 17.5057V15.0284H28V17.7137ZM28 13.0284H14V7.48975H25C25.7954 7.49066 26.5579 7.80702 27.1203 8.36943C27.6827 8.93184 27.9991 9.69438 28 10.4897V13.0284Z" fill="#2B2B2B" />
                            </svg>
                        </span> {beds} Beds
                    </div>
                    <div className="flex items-center">
                        <span className="mr-3">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.4 14.2494H3.2V5.24938C3.19907 4.91045 3.26538 4.5747 3.39509 4.26156C3.5248 3.94843 3.71533 3.66413 3.95565 3.42513L3.97565 3.40513C4.35228 3.02905 4.83584 2.77842 5.36026 2.68748C5.88468 2.59654 6.42438 2.66972 6.90565 2.89703C6.45114 3.65273 6.26222 4.53865 6.36892 5.41402C6.47562 6.28939 6.87181 7.10399 7.49455 7.72838L8.0421 8.27593L7.03425 9.28383L8.16555 10.4151L9.1734 9.40728L14.7579 3.82293L15.7657 2.81508L14.6344 1.68373L13.6264 2.69158L13.0789 2.14403C12.4233 1.4903 11.5592 1.08731 10.637 1.0053C9.71481 0.923285 8.79309 1.16745 8.03245 1.69523C7.23036 1.18869 6.27983 0.97001 5.33702 1.07512C4.39422 1.18023 3.51519 1.60288 2.84435 2.27363L2.82435 2.29363C2.43497 2.68088 2.12627 3.14151 1.91611 3.64887C1.70595 4.15622 1.59851 4.70022 1.6 5.24938V14.2494H0V15.8494H1.6V17.3844C1.59997 17.5134 1.62077 17.6415 1.6616 17.7638L3.15 22.2288C3.22943 22.4679 3.38216 22.6758 3.5865 22.8231C3.79084 22.9704 4.0364 23.0496 4.2883 23.0494H4.9333L4.35 25.0494H6.01665L6.6 23.0494H17.005L17.605 25.0494H19.275L18.675 23.0494H19.7115C19.9634 23.0496 20.209 22.9705 20.4134 22.8232C20.6178 22.6759 20.7706 22.4679 20.85 22.2288L22.3383 17.7638C22.3791 17.6415 22.4 17.5134 22.4 17.3844V15.8494H24V14.2494H22.4ZM8.626 3.27538C9.0668 2.83554 9.66407 2.58852 10.2868 2.58852C10.9095 2.58852 11.5068 2.83554 11.9476 3.27538L12.495 3.82293L9.17355 7.14438L8.626 6.59693C8.18619 6.15612 7.93918 5.55885 7.93918 4.93616C7.93918 4.31346 8.18619 3.71619 8.626 3.27538ZM20.8 17.3194L19.4234 21.4494H4.5766L3.2 17.3194V15.8494H20.8V17.3194Z" fill="#2B2B2B" />
                            </svg>
                        </span> {baths} Bath
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;