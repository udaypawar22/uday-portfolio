"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ContactButton from "./ContactButton";

export default function NavigationBar() {
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ,background:"rgba(53,211,153, 0.975)" */}
      <nav
        id="nav-on-scroll"
        style={{ background: "rgba(53,211,153,0.975)" }}
        className={`fixed hidden md:block lg:block ease-in-out duration-300 shadow left-0 w-full p-4 text-gray-900 z-40 ${
          isVisible ? "nav-top-visible" : "nav-top-hidden"
        }`}
      >
        <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-9/12 col-centered">
          <Link href="#top" className="kill-link-style xl:mr-6">
            <span className="inline-block animate__animated animate__fadeInDown rounded-md border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl rxl:text-3xl font-extrabold">
              UP
            </span>
          </Link>
          <Link
            href="#projects"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Projects
          </Link>
          <Link
            href="#extras"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Extras
          </Link>
          <Link
            href="#media"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
          >
            Media
          </Link>
          <ContactButton className="inline-block animate__animated animate__flipInX delay4 ml-6 mr-3 duration-300 float-right text-2xl xl:text-3xl cursor-pointer border-4 rounded-md px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 font-extrabold">
            Contact Me
          </ContactButton>
        </div>
      </nav>
    </>
  );
}
