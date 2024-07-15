import React from "react";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="flex-1 flex flex-col m-4 p-0 rounded-[10px] shadow-light aspect-card bg-tertiary">
      <div className="flex-1">
        <img
          src={image}
          alt="title"
          className="rounded-t-[10px] object-cover w-full aspect-[20/11] transition-transform transform hover:scale-110 hover:rounded-b-[10px] object-center"
        />
      </div>
      <div className="p-8 flex flex-col flex-1 text-white justify-between">
        <div className="font-bold text-[32px] md:text-[38px] lg:text-[26px] xl:text-[28px] 2xl:text-[36px]">
          {title}
        </div>
        <div className="font-normal text-[24px] md:text-[38px] lg:text-[24px] xl:text-[22px] 2xl:text-[28px] my-8">
          {description}
        </div>
        <CollersButton
          text="Buy Now"
          svg={<CollersIcon name="shopping" />}
          border={true}
          isWhite={true}
          wrapperClassName={"flex justify-center"}
        />
      </div>
    </div>
  );
};

export default ProductCard;
