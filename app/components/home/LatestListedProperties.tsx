'use client'
import ButtonGroup from "./LatestListedPropertiesItems/ButtonGroup";
import PropertyCard from "./LatestListedPropertiesItems/PropertyCard";
import image5 from "../../assets/images/image-5.jpg";
import image6 from "../../assets/images/image-6.jpg";
import image7 from "../../assets/images/image-7.jpg";
import image8 from "../../assets/images/image-8.jpg";
import { DiscountedPriceIcon, NewListingIcon, PopularIcon } from "../ui/Icon";
import Button from "../ui/Button";

const LatestListedProperties = () => {
    const properties = [
        {
            price: "5,970",
            title: "Tranquil Haven in the Woods",
            address: "103 Wright CourtBurien, WA 98168",
            beds: 4,
            baths: 3,
            tag: { type: "Popular" as "Popular", icon: PopularIcon, bgColor: "bg-chipBg1", color:"text-chipTextColor1" },
            image: image5,
        },
        {
            price: "1,970",
            title: "Serene Retreat by the Lake",
            address: "1964 Jehovah Drive, VA 22408",
            beds: 3,
            baths: 2,
            tag: { type: "New Listing" as "New Listing", icon: NewListingIcon, bgColor: "bg-chipBg2", color:"text-chipTextColor2" },
            image: image6,
        },
        {
            price: "3,450",
            title: "Charming Cottage in the Meadow",
            address: "1508 Centennial Farm RoadHarlan, 51537",
            beds: 4,
            baths: 4,
            tag: { type: "Discounted Price" as "Discounted Price", icon: DiscountedPriceIcon, bgColor: "bg-chipBg3", color:"text-chipTextColor3" },
            image: image7,
        },
        {
            price: "2,389",
            title: "Grand Estate on the Hilltop",
            address: "103 Wright CourtBurien, WA 98168",
            beds: 4,
            baths: 3,
            tag: { type: "Popular" as "Popular", icon: PopularIcon, bgColor: "bg-chipBg1", color:"text-chipTextColor3" },
            image: image8,
        }
    ];

    return (
        <div className='max-w-[393px] xl:max-w-[1440px] mx-auto py-[100px]'>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 px-[30px] xl:px-[160px]">
                <div className="xl:w-[500px]">
                    <div className="text-[19.4px] text-color1 font-medium">CHECKOUT OUR NEW</div>
                    <h2 className="mt-2.5 text-[27.6px] xl:text-[39.8px] text-textColor2 leading-[47px] font-semibold">
                        Latest Listed Properties
                    </h2>
                    <p className="mt-2.5 text-[13.3px] xl:text-base font-normal text-textColor3">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                </div>
                <div className="flex items-center xl:justify-end">
                    <ButtonGroup />
                </div>
            </div>
            <div className="py-8 max-w-[1440px]  px-[30px] xl:pl-[160px] xl:overflow-x-auto hide-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-[16rem]">
                    {properties.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
            </div>

            <div className="xl:hidden mt-12 max-w-[1440px] px-[30px] xl:pl-[160px] flex justify-center">
              <Button btnClass="px-7 py-4 border-2 rounded-[30px] text-primary border-primary" title="View more properties"
              />
            </div>

        </div>
    );
}

export default LatestListedProperties;