"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const links = (
    <>
      <li>
        <Link
          href="/about"
          className={`hover:border-b-2 text-sm md:text-base ${
            location.pathname.includes("#about")
              ? "text-primary-c"
              : "border-transparent"
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <a
          smooth
          href="#services"
          className={`hover:border-b-2 text-sm md:text-base ${
            location.pathname.includes("#services")
              ? " text-primary-c"
              : "border-transparent"
          }`}
        >
          Services
        </a>
      </li>
      <li>
        <a
          smooth
          href="#form"
          className={`hover:border-b-2 text-sm md:text-base ${
            location.pathname.includes("#about")
              ? "text-primary-c"
              : "border-transparent"
          }`}
        >
          Pricing
        </a>
      </li>

      <li>
        <a
          smooth
          href="#gallery"
          className={`hover:border-b-2 hidden md:inline
          }`}
        >
          Work Gallery
        </a>
      </li>
      <li>
        <a
          smooth
          href="#faq"
          className={`hover:border-b-2 hidden md:inline ${
            location.pathname.includes("#faq")
              ? "text-primary-c"
              : "border-transparent"
          }`}
        >
          FAQ
        </a>
      </li>
    </>
  );

  return (
    <div
      className={
        scrolling
          ? "flex items-center py-10 shadow-xl xsm:py-10 md:py-10 z-30 bg-secendary-c fixed top-0  w-full mx-auto"
          : `fixed top-0 w-full mx-auto flex items-center py-10 z-20 transition duration-300 ease-in-out `
      }
    >
      <div className="lg:mx-auto md:max-w-6xl w-full">
        <div
          className={
            "flex items-center  fixed top-0 md:max-w-6xl mx-auto w-full"
          }
        >
          <div className="navbar-start  lg:pt-5 lg:pb-5 lg:pe-5 mmd:p-5 msm:p-5 flex items-center">
            {/* menu icon form small devices */}

            {/* <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMenu
                  className={
                    scrolling ? "text-xl text-black" : "text-xl text-white"
                  }
                ></HiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
                <li>
                  <Link className=" bg-[#69BB48] text-white">Contact us</Link>
                </li>
              </ul>
             
            </div> */}
            <a
              smooth
              href="/#home"
              className={`md:text-3xl font-bold inline-block ${
                scrolling ? "text-black" : "text-white"
              }`}
            >
              <span className="md:font-light">OzShine</span> Cleaners
            </a>
          </div>

          {/* for large devices */}
          <div
            className={`navbar-center flex${
              scrolling ? `text-black` : ` text-white`
            }`}
          >
            <ul className="menu-horizontal space-x-5 text-lg">{links}</ul>
          </div>
          <div className="md:navbar-end hidden lg:flex">
            <a
              smooth
              href="/#form"
              className="md:px-4 md:py-2 rounded-lg bg-primary-c text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
