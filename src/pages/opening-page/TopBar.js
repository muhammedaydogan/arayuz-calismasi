import React from "react";
import { CollersButton } from "../../components/CollersButton";

export const TopBar = () => {
  return (
    <div className="bg-transparent text-primary w-full py-6 px-20 flex justify-between items-center">
      <h1 className="text-[32px] font-sans font-bold">COLLERS</h1>
      <div className="flex flex-row">
        <CollersButton text="Products" />
        <CollersButton text="Solutions" />
        <CollersButton text="Pricing" />
        <CollersButton text="Resources" />
        <CollersButton text="Lon In" />
        <CollersButton text="Sign Up Now" border={true} />
      </div>
    </div>
  );
};
