import React from "react";
import ProductCard from "./ProductCard";
import { ProductCardSkeleton } from "../skeletons";
import { getProducts } from "@/app/lib/services/MainServices";

export default async function Products() {
    const products = await getProducts();

    return (
        <div>
            <div className="mt-20 w-full flex justify-center">
                <div className="w-[100%] flex-col flex items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-24">
                    {products[0] ? (
                        <ProductCard product={products[0]} />
                    ) : (
                        <ProductCardSkeleton />
                    )}
                    {products[1] ? (
                        <ProductCard product={products[1]} />
                    ) : (
                        <ProductCardSkeleton />
                    )}
                    {products[2] ? (
                        <ProductCard product={products[2]} />
                    ) : (
                        <ProductCardSkeleton />
                    )}
                </div>
            </div>
        </div>
    );
}
