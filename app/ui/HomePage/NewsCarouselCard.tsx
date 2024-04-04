import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  date: string
};

const NewsCarouselCard = ({ title, description, image, date }: Props) => {
  return (
    <div className="w-[400px]">
      <div>
        <Image src={image} alt={title} width={400} height={450} />
      </div>
      <div>
        <div className="flex justify-between pt-4">
            <h3 className="font-medium text-xl">{title}</h3>
            <p className="text-xs">{date}</p>
        </div>
        <p className="text-[rgb(0,0,0,.6)] pt-4">{description}</p>
      </div>
    </div>
  );
};

export default NewsCarouselCard;
