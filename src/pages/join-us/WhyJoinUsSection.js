import React from "react";
import { DecoVideo, Desktop } from "../../images";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";

const WhyJoinUsSection = () => {
  return (
    <div className="relative px-12 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row px-20 border-2 shadow-dark mx-4 p-3 rounded-[30px]">
        {/* Text Side */}
        <div className="flex flex-col gap-12 justify-center items-center z-[20]">
          <div className="font-normal font-extrabold text-7xl">Why join us</div>
          <div className="flex flex-col text-xl font-normal">
            <div className="flex flex-row gap-2">
              <CollersIcon name={"check"} />
              Est et in pharetra magna adipiscing ornare aliquam.
            </div>
            <div className="flex flex-row gap-2">
              <CollersIcon name={"check"} />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </div>
            <div className="flex flex-row gap-2">
              <CollersIcon name={"check"} />
              Ullamcorper ornare in et egestas dolor orci.
            </div>
          </div>
          <div>
            <CollersButton text="Sign up now" border={true} />
          </div>
        </div>
        {/* Desktop Side */}
        <div className="flex relative justify-center items-center">
          <img src={Desktop} alt="Desktop" className="object-contain z-[10]" />
          <img
            src={DecoVideo}
            alt="DecoVideo"
            className="absolute object-contain z-[8]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUsSection;
