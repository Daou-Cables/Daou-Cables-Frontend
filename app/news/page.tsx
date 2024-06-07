import React from "react";
import PageHeader from "../ui/General/PageHeader";
import Image from "next/image";
import ContactUs from "../ui/General/ContactUs";

type Props = {};

type ArticlePreviewProps = {
  title: string;
  description: string;
  image: string;
  date: string;
};

const ArticlePreview = ({
  title,
  description,
  image,
  date,
}: ArticlePreviewProps) => {
  return (
    <div className="flex flex-col items-center w-80">
      <Image
        src={image}
        alt={title}
        className="w-full h-72 mb-4"
        width={340}
        height={300}
      />

      <div className="flex w-full justify-between px-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{date}</p>
      </div>
      <p className="self-start ml-2">{description}</p>
    </div>
  );
};

const page = (props: Props) => {
  return (
    <div>
      <PageHeader title="News" subTitle1="Daou Cables" subTitle2="Newsroom" />
      <div className="flex justify-center flex-wrap gap-10 mb-44 mt-12">
        <ArticlePreview
          title="Title 1"
          description="Description 1"
          image="/images/NewsPlaceholder.png"
          date="2021-01-01"
        />
        <ArticlePreview
          title="Title 2"
          description="Description 2"
          image="/images/NewsPlaceholder.png"
          date="2021-01-02"
        />
        <ArticlePreview
          title="Title 3"
          description="Description 3"
          image="/images/NewsPlaceholder.png"
          date="2021-01-03"
        />
        <ArticlePreview
          title="Title 4"
          description="Description 3"
          image="/images/NewsPlaceholder.png"
          date="2021-01-03"
        />
        <ArticlePreview
          title="Title 4"
          description="Description 3"
          image="/images/NewsPlaceholder.png"
          date="2021-01-03"
        />
      </div>

      <ContactUs />
    </div>
  );
};

export default page;
