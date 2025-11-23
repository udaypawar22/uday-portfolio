"use client";

import { useState } from "react";
import ContactButton from "./ContactButton";
import CloseIcon from "./CloseIcon";

export default function MobileNav() {
  const [toggleNav, setToggleNav] = useState(false);

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView();
    setToggleNav(false);
  }

  const className = toggleNav ? "offscreen-nav" : "offscreen-nav-hidden";

  return (
    <>
      <nav className="block bg-white shadow md:hidden">
        <button
          onClick={() => setToggleNav(true)}
          type="button"
          style={{ zIndex: "999999999999999999999999999999999" }}
          className="fixed cursor-pointer top-10 right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="duration-200 p-1.5 bg-gray-100 hover:bg-gray-200 h-12 w-12 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </button>
      </nav>

      <div
        id="mobile-nav"
        style={{ zIndex: "999999999999999999999999999999999" }}
        className={`fixed block ${className} md:hidden duration-300 ease-in bg-gray-100`}
      >
        <button
          onClick={() => setToggleNav(false)}
          type="button"
          className="absolute cursor-pointer top-10 right-4"
        >
          <CloseIcon className="h-12 w-12" />
        </button>

        <button
          onClick={() => scrollToSection("top")}
          type="button"
          className="relative cursor-pointer w-12/12 text-center"
        >
          <span className="inline-block relative top-11 col-center rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold">
            UP
          </span>
        </button>

        <div className="mt-16 text-center col-centered">
          <div className="text-4xl font-extrabold">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="underline--magical cursor-pointer"
            >
              Projects
            </button>
          </div>

          <div className="text-4xl mt-4 font-extrabold">
            <button
              type="button"
              onClick={() => scrollToSection("extras")}
              className="underline--magical cursor-pointer"
            >
              Extras
            </button>
          </div>

          <div className="text-4xl mt-4 font-extrabold">
            <button
              type="button"
              onClick={() => scrollToSection("exp")}
              className="underline--magical cursor-pointer"
            >
              Exp
            </button>
          </div>

          <div className="text-3xl mt-8 relative font-extrabold">
            <ContactButton className="border-4 px-4 py-2 border-gray-900 rounded-md">
              Contact Me
            </ContactButton>
          </div>
        </div>
      </div>
    </>
  );
}
