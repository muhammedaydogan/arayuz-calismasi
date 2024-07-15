import React from "react";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";
import WhyJoinUsSection from "./WhyJoinUsSection";
import TheyLoveUsSection from "./TheyLoveUsSection";

const JoinUsPage = () => {
  return (
    <div className="bg-cream py-[100px] flex flex-col gap-40">
      <WhyJoinUsSection />
      <TheyLoveUsSection />
    </div>
  );
};

export default JoinUsPage;
