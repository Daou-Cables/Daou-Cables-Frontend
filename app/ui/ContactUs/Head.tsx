import React from "react";
import SectionTitle from "../General/SectionTitle";

type Props = {
  title: string;
  body: string;
};

const Head = ({ title, body }: Props) => {
  return (
    <div>
      <SectionTitle title={title} />
      <p className="mt-8 text-lg sm:text-2xl">{body}</p>
    </div>
  );
};

export default Head;
