import React from "react";
import { DecoVideo, Desktop } from "../../images";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";

const TheyLoveUsSection = () => {
  return (
    <div className="px-12 flex flex-col">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="font-normal font-bold font-sans text-7xl">
          Because they love us
        </div>
        <div className="hidden md:flex flex flex-row gap-2">
          <CollersButton svg={<CollersIcon name={"left-arrow"} />} />
          <CollersButton svg={<CollersIcon name={"right-arrow"} />} />
        </div>
      </div>
      <div>A List here</div>
    </div>
  );
};

export default TheyLoveUsSection;
