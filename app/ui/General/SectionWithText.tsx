import React from "react";
import SectionTitle from "./SectionTitle";
import ImageWithText from "./ImageWithText";

type Props = {
  title: string;
  url: string;
  text: string;
  reversed?: boolean;
};

const SectionWithText = ({ title, url, text, reversed = false }: Props) => {
  return (
    <div className="pt-24">
      <div className="flex items-center justify-center">
        <SectionTitle title={title} />
      </div>
      <ImageWithText url={url} alt={title} text={text} reversed={reversed} />
    </div>
  );
};

export default SectionWithText;
