"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCarouselCard from "./NewsCarouselCard";

type Props = {};

const data = [
  {
    title: "Title 1",
    description: "Description 1",
    image: "/images/placeholder.png",
    date: "2021-01-01",
  },
  {
    title: "Title 2",
    description: "Description 2",
    image: "/images/placeholder.png",
    date: "2021-01-02",
  },
  {
    title: "Title 3",
    description: "Description 3",
    image: "/images/placeholder.png",
    date: "2021-01-03",
  },
  {
    title: "Title 4",
    description: "Description 3",
    image: "/images/placeholder.png",
    date: "2021-01-03",
  },
  {
    title: "Title 4",
    description: "Description 3",
    image: "/images/placeholder.png",
    date: "2021-01-03",
  },
];
const News = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  
  return (
    <div className="">
      <div className="">
        <Slider {...settings}>
        {data.map((d) => {
          return (
            <NewsCarouselCard date={d.date} key={d.title} title={d.title} description={d.description} image={d.image}/>
          );
        })}
        </Slider>
      </div>
    </div>
  );
};

export default News;
