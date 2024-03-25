import { Product } from "@/app/lib/definitions";
import React from "react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="w-auto h-[100%] shadow-md">
            <Image
                src={product.picture}
                alt={product.name}
                width={500}
                height={100}
            />
            <div className="p-4">
                <span className="font-medium text-lg md:text-xl leading-tight mb-0">
                    {product.name}
                </span>
                <p className="mt-0 text-xs leading-tight">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
