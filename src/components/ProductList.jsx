import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
        <div className=" mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 px-auto">
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
