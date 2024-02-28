import React from "react";
import Link from "next/link";
import {
  RiMore2Fill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const Header = (props) => {
  const { setShowSidebar } = props;

  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0A0A0A]/90 flex items-center justify-between p-4 z-40">
      <div>
        <RiMore2Fill
          onClick={() => setShowSidebar(true)}
          className="text-2xl hover:cursor-pointer p-2 box-content md:hidden"
        />
        <div className="hidden md:flex items-center gap-2 text-2xl">
          <RiArrowLeftSLine className="p-2 box-content hover:cursor-pointer bg-spotify-gray rounded-full" />
          <RiArrowRightSLine className="p-2 box-content hover:cursor-pointer bg-spotify-gray rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
