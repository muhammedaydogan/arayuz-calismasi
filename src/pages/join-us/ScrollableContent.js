import React, { forwardRef, useEffect } from "react";
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

  useEffect(() => {
    // Scroll to the center of the content
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth;
      const clientWidth = ref.current.clientWidth;
      ref.current.scrollLeft = (scrollWidth - clientWidth) / 2; // Centering
    }
  }, [ref]);

  return (
    <div className="relative flex justify-center items-center overflow-hidden w-full bg-orange">
      <div className="absolute inset-x-0 md:left-[24px] md:right-[44px] bottom-[72px] top-0 bg-yellow z-[2]"></div>
      <div
        className="flex overflow-x-scroll scroll-smooth whitespace-nowrap w-max no-scrollbar py-12 rounded-[20px] mx-auto z-[5]"
        ref={ref}
      >
        {content.map((item, index) => (
          <div
            key={"cardElement" + index}
            className={`w-[319px] md:w-[380px] h-[326px] md:h-[430px] min-w-[319px] md:min-w-[380px] mx-2 p-10 bg-white rounded-lg shadow-lg flex flex-col shadow-dark ${
              index === 0 && "ml-20"
            } ${index === content.length - 1 && "mr-[100px]"}`}
          >
            <div className="flex flex-row items-center mb-4">
              <img
                src={item.icon}
                alt={`${item.name} logo`}
                className="mr-4 object-contain"
              />
              <div className="text-lg md:text-2xl font-semibold">
                {item.name}
              </div>
            </div>
            <div className="flex-grow mb-4 text-base whitespace-normal text-lg md:text-2xl flex items-center justify-center md:leading-relaxed">
              {item.description}
            </div>
            <div className="flex flex-row items-center gap-4">
              <img src={item.profileIcon} className="w-10 h-10" />
              <div className="flex flex-col">
                <div className="font-bold text-xl">{item.profileName}</div>
                <div className="text-gray-500">{item.profileTitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ScrollableContent;
