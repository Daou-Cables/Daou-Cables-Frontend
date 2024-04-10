import React from "react";
import Products from "./Products";
import SectionTitle from "../General/SectionTitle";
import Button from "./Button";

export default function OurProducts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
      <SectionTitle title="Our Products" />
      <Products />
      <Button title="View All" url="/products" className="mt-32" />
    </div>
  );
}
