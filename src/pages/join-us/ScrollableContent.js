import React, { forwardRef } from "react";
import {
  Artvenue,
  Charolette,
  David,
  Hellen,
  Hellena,
  Konsantr,
  Ralph,
  Shells,
  Waves,
  Zoomerr,
} from "../../images";
import CollersIcon from "../../components/CollersIcon";

const ScrollableContent = forwardRef((props, ref) => {
  const content = [
    {
      icon: Konsantr,
      name: "konsantr",
      description:
        "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      profileIcon: Ralph,
      profileName: "Ralph Edwards",
      profileTitle: "Product Designer",
    },
    {
      icon: Zoomerr,
      name: "Zoomerr",
      description:
        "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      profileIcon: Hellen,
      profileName: "Hellen Jummy",
      profileTitle: "Team Lead",
    },
    {
      icon: Shells,
      name: "SHELLS",
      description:
        "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      profileIcon: Hellena,
      profileName: "Hellena John",
      profileTitle: "Co-Founder",
    },
    {
      icon: Artvenue,
      name: "ArtVenue",
      description:
        "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      profileIcon: David,
      profileName: "David Oshodi",
      profileTitle: "Manager",
    },
    {
      icon: Waves,
      name: "Waves",
      description:
        "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      profileIcon: Charolette,
      profileName: "Charolette Hanlin",
      profileTitle: "CEO",
    },
  ];

  return (
    <div className="flex justify-center items-center overflow-hidden w-full">
      <div
        className="flex overflow-x-scroll scroll-smooth whitespace-nowrap w-max no-scrollbar py-12 rounded-[20px]"
        ref={ref}
      >
        {content.map((item, index) => (
          <div
            key={index + "cardElement"}
            className="w-[384px] mx-2 p-4 bg-white rounded-lg shadow-lg flex flex-col shadow-dark"
          >
            <div className="flex flex-row items-center mb-4">
              <img
                src={item.icon}
                alt={`${item.name} logo`}
                className="w-12 h-12 mr-4"
              />
              <div className="text-lg font-semibold">{item.name}</div>
            </div>
            <div className="flex-grow mb-4  text-base whitespace-normal">
              {item.description}
            </div>
            <div className="flex flex-row items-center">
              <img src={item.profileIcon} />
              <div className="flex flex-col">
                <div className="font-bold">{item.profileName}</div>
                <div className="text-sm text-gray-500">{item.profileTitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ScrollableContent;
