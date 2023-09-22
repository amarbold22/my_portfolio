import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-tl from-slate-800 to-slate-900 hover:bg-gradient-to-l flex justify-evenly items-center w-full text-white h-24 text-xl">
          <div className="text-white text-3xl">
            Amarbold
          </div>
          <div className="flex text-white gap-14">
              <Link className="ml-3" href="/">
                Home
              </Link>
              <Link className="ml-3" href="/about">
                About
              </Link>
              <Link className="ml-3" href="/works">
                Works
              </Link>
              <Link className="ml-3" href="/services">
                Services
              </Link>
              <Link className="ml-3" href="/contact">
                Contact
              </Link>
          </div>
        <button className="bg-purple-400 text-black rounded-xl flex justify-center items-center w-32 h-10">
          Let's talk
        </button>
    </header>
  );
};

export default Header;
