import React, { useRef } from "react";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";
import ScrollableContent from "./ScrollableContent";

const TheyLoveUsSection = () => {
  const cardContainerRef = useRef(null);

  const handlePrev = () => {
    cardContainerRef.current.scrollBy({
      left: -400, // Kaydirma uzunlugu padding ve marginler dahil. Zaten mobilde el ile kaydiriliyor orasi sorun degil direk buyuk ekranlarda da gayet guzel calisiyor.
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    cardContainerRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="p-10 font-normal font-bold font-sans text-7xl">
          Because they love us
        </div>
        <div className="hidden md:flex flex flex-row gap-2">
          <CollersButton
            svg={<CollersIcon name={"left-arrow"} />}
            onClick={handlePrev}
            iconMode={true}
          />
          <CollersButton
            svg={<CollersIcon name={"right-arrow"} />}
            onClick={handleNext}
            iconMode={true}
            className={"mr-12"}
          />
        </div>
      </div>
      <div className="w-full">
        <ScrollableContent ref={cardContainerRef} />
      </div>
    </div>
  );
};

export default TheyLoveUsSection;
