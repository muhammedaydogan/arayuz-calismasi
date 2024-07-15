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
      <div className="flex-1 z-[5] p-12">
        <ProductCard key={i + "product"} {...e} />
      </div>
    ));

  return (
    <div className="relative flex flex-col bg-tertiary z-0">
      {/* TOP LINE */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-8 px-6 pt-6 md:px-12 md:pt-12 lg:px-20 lg:pt-20">
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
      <div className="relative grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-2 md:pt-4 lg:pt-6 mt-2 md:mt-4 lg:mt-6">
        {/* Colorful Background */}
        <div className="absolute xl:w-full h-full hidden xl:flex justify-center">
          {/* <div className="relative w-full h-full"> */}
          <CollersIcon name="bg-product-page-h" />
          {/* </div> */}
        </div>
        <div className="absolute w-full h-full flex md:hidden justify-center">
          {/* <div className="relative w-full h-full"> */}
          <CollersIcon name="bg-product-page-v" />
          {/* </div> */}
        </div>
        {createProducts()}
      </div>
    </div>
  );
};

export default ProductsPage;
