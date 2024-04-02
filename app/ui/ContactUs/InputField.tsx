import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
  placeholder: string;
  name: string;
  wide?: boolean;
  customWidth?: number;
  value: string;
  setValue: (value: string) => void;
};

const InputField = ({
  icon,
  placeholder,
  name,
  wide = false,
  customWidth,
  value,
  setValue
}: Props) => {
  return (
    <div className="bg-[#F5F5F5] flex p-4 space-x-4">
      <Image
        src={icon}
        alt=""
        width={customWidth ? customWidth : 25}
        height={25}
        className="self-start"
      />
      {wide || (
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          name={name}
          placeholder={placeholder}
          className="bg-inherit text-base outline-none w-full"
        />
      )}
      {wide && (
        <textarea
          name={name}
          rows={12}
          placeholder={placeholder}
          style={{
            marginLeft: 10,
          }}
          className="bg-inherit text-base outline-none w-full"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default InputField;
