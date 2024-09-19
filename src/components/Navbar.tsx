"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", href: "/" },
    {
      title: "Blogs",
      subItems: [
        { title: "LIFESTYLE", href: "/life" },
        { title: "TECHNOLOGY", href: "/business" },
      ],
    },
    {
      title: "Services",
      subItems: [
        { title: "WEB DEVELOPMENT", href: "/" },
        { title: "WEB MANAGEMENT", href: "/" },
        { title: "3D VISUALIZATION", href: "/" },
      ],
    },
    { title: "Products", href: "/products" },
    { title: "Contact Us", href: "#contacts" },
    { title: "About Us", href: "/about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50 p-10">
      <div className="mx-auto flex items-center justify-between h-full">
        <Logo title="The Balance" className="text-black" />
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <div key={item.title} className="relative group">
              {item.href ? (
                <Link href={item.href} passHref>
                  <span className="text-sm uppercase font-semibold relative group overflow-hidden cursor-pointer">
                    {item.title}
                    <span className="w-full h-[1px] bg-blue-700 absolute left-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  </span>
                </Link>
              ) : (
                <span className="text-sm uppercase font-semibold relative group overflow-hidden cursor-pointer">
                  {item.title}
                  <span className="w-full h-[1px] bg-blue-700 absolute left-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                </span>
              )}
              {item.subItems && (
                <div className="absolute z-10 bg-white shadow-lg mt-1 py-2 w-48 rounded-md hidden group-hover:block">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href} passHref>
                      <span className="block px-4 py-2 hover:bg-gray-300 cursor-pointer text-gray-700">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md dark:bg-gray-700 z-40">
          {navigation.map((item) => (
            <div key={item.title} className="relative group">
              {item.href ? (
                <Link href={item.href} passHref>
                  <span className="block px-4 py-2 text-sm uppercase font-semibold relative cursor-pointer">
                    {item.title}
                  </span>
                </Link>
              ) : (
                <span className="block px-4 py-2 text-sm uppercase font-semibold relative cursor-pointer">
                  {item.title}
                </span>
              )}
              {item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href} passHref>
                      <span className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-4 py-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
