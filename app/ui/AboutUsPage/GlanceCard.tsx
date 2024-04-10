"use client";
import React, { useState, useEffect, useRef } from "react";

enum GlanceCardType {
  PERCENTAGE,
  MILLION_DOLLARS,
}

type Props = {
  number: number;
  title: string;
  type: GlanceCardType;
};

const GlanceCard = ({ number, title, type }: Props) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.01 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (displayNumber < number) {
          setDisplayNumber((prevNumber) => prevNumber + 1);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [displayNumber, number, isInView]);

  return (
    <div
      ref={cardRef}
      className="bg-[#f5f5f5] w-full row-span-1 col-span-1 sm:max-w-[400px] h-[200px] md:p-8 flex md:block flex-col items-center justify-center"
    >
      <h1 className="font-bold text-7xl">
        {type === GlanceCardType.PERCENTAGE
          ? `${displayNumber}%`
          : `$${displayNumber}M`}
      </h1>
      <p className="mt-4 md:pl-2">{title}</p>
    </div>
  );
};

export default GlanceCard;
