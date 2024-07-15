import React, { useState, useEffect, useRef } from "react";
import { CollersButton } from "../../components/CollersButton";
import CollersIcon from "../../components/CollersIcon";

export const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const createButtons = () => {
    const buttonProps = [
      { text: "Products" },
      { text: "Solutions" },
      { text: "Pricing" },
      { text: "Resources" },
      { text: "Log In" },
      { text: "Sign Up Now", border: true },
    ];

    return buttonProps.map((props, i) => <CollersButton key={i} {...props} />);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row py-6 px-12 md:px-20 justify-between items-center flex-wrap">
      <h1 className="text-[32px] font-sans font-bold text-primary">Collers</h1>
      <div className="bg-transparent text-primary flex items-center">
        <div className="hidden md:flex md:flex-row space-x-4">
          {createButtons()}
        </div>
        <div className="block md:hidden">
          <CollersButton
            svg={<CollersIcon name="menu" />}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`absolute top-16 right-20 bg-light-orange bg-opacity-90 shadow-lg rounded-md z-10 md:hidden`}
        >
          <div className="flex flex-col p-4">{createButtons()}</div>
        </div>
      )}
    </div>
  );
};
