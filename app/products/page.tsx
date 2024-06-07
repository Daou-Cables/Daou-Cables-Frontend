import React from "react";
import PageHeader from "../ui/General/PageHeader";
import Image from "next/image";

type Props = {};

export default function ProductsPage({}: Props) {
  const products = [
    {
      name: "Title 1",
      description: "Description 1",
      picture: "/images/NewsPlaceholder.png",
    },
    {
      name: "Title 2",
      description: "Description 2",
      picture: "/images/NewsPlaceholder.png",
    },
    {
      name: "Title 3",
      description: "Description 3",
      picture: "/images/NewsPlaceholder.png",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Products"
        subTitle1="List of Products"
        subTitle2="Daou Cables"
      />

      <div className="flex justify-center flex-wrap gap-10 mb-44 mt-12">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

type Product = {
  name: string;
  description: string;
  picture: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-96 flex flex-col shadow-md">
      <Image
        src={product.picture}
        alt={product.name}
        width={350}
        height={186}
        className=" h-48 w-full"
      />
      <div className="py-4 px-2 flex flex-col w-full">
        <h1 className="font-bold">{product.name}</h1>
        <p className="text-opacity-70">{product.description}</p>
      </div>
    </div>
  );
};
