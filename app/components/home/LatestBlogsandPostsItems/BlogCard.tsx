import Image, { StaticImageData } from "next/image";

interface DateProp {
    day: string;
    weekday: string
}

interface CardProp {
    id: number;
    image: StaticImageData;
    date: DateProp;
    title: string
    description: string
}

const BlogCard: React.FC<CardProp> = ({ id, image, date, title, description }) => {
    return (
        <div className="w-[333px] xl:w-[340px]" >
            <div className="relative w-full h-[200px] xl:h-[240px] rounded-[30px] overflow-hidden" >
                <Image
                    src={image}
                    alt={`item-${id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                />
                <div className="absolute top-0 left-10 px-3 py-1 bg-white rounded-b-[10px]">
                    <div className="font-medium text-base xl:text-[19.4px] leading-[29.1px] text-textColor2 text-center">{date.day}</div>
                    <div className="font-normal text-[13.3px] xl:text-base leading-[22px] xl:leading-[26px] text-textColor3 text-center -mt-2">{date.weekday}</div>
                </div>
            </div>
            <div className="w-full mt-4 space-y-2">
                <h3 className="text-[19.4px] leading-[29.1px] xl:text-[27.6px] xl:leading-[41.4px] font-medium text-white text-center">{title}</h3>
                <p className="text-center text-[13.3px] xl:text-base leading-[22px] xl:leading-[26px] font-normal text-textColor5">{description}</p>
            </div>
        </div>
    );
}

export default BlogCard;