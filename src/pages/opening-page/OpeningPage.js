import React from "react";
import { CollersButton } from "../.././components/CollersButton";
import { TopBar } from "./TopBar";
import CollersIcon from "../../components/CollersIcon";
import { YellowSneaker } from "../.././images";

export const OpeningPage = () => {
  return (
    <div className="w-screen h-fit max-h-screen max-w-screen max-h-screen relative overflow-hidden flex flex-col">
      {/* BACKGROUND sol taraf  - Gradyan */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-light-yellow to-white -z-50"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* BACKGROUND duz renk sag taraf */}
      <div
        className="absolute inset-0 bg-[#FEF3C7] -z-50"
        style={{ clipPath: "polygon(100% 16%, 0 100%, 100% 100%)" }}
      />

      {/* TOP BAR */}
      <TopBar />

      {/* CONTENT */}
      <div className="flex flex-row justify-evenly px-20 py-1">
        <div className="flex flex-col py-[83px] gap-8 self-center">
          <div className="text-black text-7xl font-extrabold font-sans">
            Collectible Sneakers
          </div>
          <div className="text-black text-lg self-center font-sans font-normal">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </div>
          <div className="flex flex-row">
            <CollersButton text="Sign Up Now" border={true} />
            <CollersButton
              text="Watch Demo"
              svg={<CollersIcon name="watchDemo" />}
            />
          </div>
        </div>
        <div className="relative max-h-[400px] max-w-[400px]">
          {/* Yellow Background */}
          <div className="absolute bottom-[3%] left-[9%] rounded-[50px] bg-[#FBBF24] -z-50 h-[77%] w-[78%]"></div>
          <img src={YellowSneaker} alt="" />
        </div>
      </div>

      <div className="flex flex-row bg-pink w-full max-w-screen justify-evenly px-20 py-20">
        <div className="flex flex-col">
          <CollersIcon name="op-1" />
          <div>Nibh viverra</div>
          <div>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </div>
        </div>
        <div className="flex flex-col">
          <CollersIcon name="op-2" />
          <div>Cursus amet</div>
          <div>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <CollersIcon name="op-3" />
          <div>Ipsum fermentum</div>
          <div>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
