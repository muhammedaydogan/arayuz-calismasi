import React from "react";
import ProductCard from "./ProductCard";
import { Product1, Product2, Product3 } from "../../images";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";

const ProductsPage = () => {
  const productData = [
    {
      title: "Title 1",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: Product1,
    },
    {
      title: "Title 2",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: Product2,
    },
    {
      title: "Title 3",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: Product3,
    },
  ];

  const createProducts = () =>
    productData.map((e, i) => (
      <div className="flex-1 z-[5]">
        <ProductCard key={i + "product"} {...e} />
      </div>
    ));

  return (
    <div className="flex flex-col bg-tertiary p-6 md:p-12 lg:p-20 gap-20 -z-[10]">
      {/* TOP LINE */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <div className=" text-white font-bold text-4xl md:text-5xl text-center">
          The best of the best
        </div>
        <div className="flex justify-center md:justify-end">
          <CollersButton
            text="Sign up now"
            border={true}
            isWhite={true}
            className="w-auto"
          />
        </div>
      </div>
      {/* PRODUCTS */}
      {/* TODO add div flexshrink */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Colorful Background */}
        <div className="absolute w-full h-full flex justify-center">
          <CollersIcon name="bg-product" />
        </div>
        {createProducts()}
      </div>
    </div>
  );
};

export default ProductsPage;
