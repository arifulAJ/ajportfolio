"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="pl-4 md:px-32">
      <nav className="">
        <div className="md:flex md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <img
              style={{ width: "80px" }}
              src="https://i.ibb.co/0crR6X4/LOGO-AJ.png"
              alt="logo"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          {!isMobileMenuOpen && (
            <div className="absolute right-3 top-8 md:hidden">
              <button onClick={toggleMobileMenu}>
                <svg
                  className="h-6 w-6 text-button"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          {/* Close Icon for Mobile */}
          {isMobileMenuOpen && (
            <div className="absolute right-2 top-8 md:hidden">
              <button onClick={toggleMobileMenu}>
                <svg
                  className="h-6 w-6 text-button"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          {/* Navigation Links */}
          <ul
            className={`md:flex flex-row md:flex-row items-center space-x-6 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            {/* <li
              className="hover:text-button cursor-pointer px-6 font-bold "
              onClick={handleNavItemClick}
            >
              Home
            </li>
            <li
              className="hover:text-button cursor-pointer py-2 font-bold"
              onClick={handleNavItemClick}
            >
              About
            </li>
            <li
              className="hover:text-button cursor-pointer font-bold"
              onClick={handleNavItemClick}
            >
              Service
            </li>
            <li
              className="hover:text-button cursor-pointer py-2 font-bold"
              onClick={handleNavItemClick}
            >
              Blog
            </li>
            <li
              className="hover:text-button cursor-pointer font-bold"
              onClick={handleNavItemClick}
            >
              Resume
            </li> */}

            <li
              className="hover:text-button cursor-pointer px-6 font-bold  "
              onClick={handleNavItemClick}
            >
              <a href="/">Home</a>
            </li>
            <li
              className="hover:text-button cursor-pointer py-2 font-bold"
              onClick={handleNavItemClick}
            >
              <a href="/about">About</a>
              {/* <Link href={"#/about"}>About</Link> */}
            </li>
            <li
              className="hover:text-button cursor-pointer font-bold"
              onClick={handleNavItemClick}
            >
              <a href="#service">Service</a>
            </li>
            <li
              className="hover:text-button cursor-pointer py-2 font-bold"
              onClick={handleNavItemClick}
            >
              <a href="#blog">Blog</a>
            </li>
            <li
              className="hover:text-button cursor-pointer font-bold"
              onClick={handleNavItemClick}
            >
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
