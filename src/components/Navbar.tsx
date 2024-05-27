import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Blogs", subItems: [
        { title: "WORK", href: "/work" },
        { title: "LIFE", href: "/life" },
        { title: "BUSINESS", href: "/business" }
      ]
    },
    { title: "Products", href: "/products" },
    { title: "Contact Us", href: "#contacts" },
    { title: "About Us", href: "/about" },
  ];

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
                <div className="absolute z-10 bg-white shadow-md mt-1 py-1 w-32 hidden group-hover:block">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href} passHref>
                      <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
