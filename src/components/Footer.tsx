import Logo from "./Logo";
import Link from "next/link";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";


const Footer = () => {
  
  return (
    <div className="p-10 bg-black text-gray-100 relative">
     

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col items-center md:items-start md:mr-auto">
          <div className="mb-4 md:mb-4">
            <Logo title="The Balance" className="mb-4 md:mb-4" />
          </div>
          <div className="mb-4 md:mb-4 md:text-left text-center">
            <Link href={"https://wa.me/254707898700"}>
            <p className="text-white mb-2">Contact Us: +254 707 898 700 </p>
            </Link>
            
            <Link href={"thebalance254@gmail.com"}>
            <p>thebalance254@gmail.com</p>
            </Link>
            
            
          </div>
          <div className="mb-4 md:text-left text-center">
            <Link href="/about">
              <p className="text-white mb-2">About Us</p>
            </Link>
          </div>
          <div className="mb-4 md:text-left text-center">
            <Link href="/terms">
              <p className="text-white mb-2">Terms & Conditions</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-7 text-gray-300">
            <Link href={"#"} target="blank">
              <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
            </Link>
            <Link href={"https://wa.me/254707898700"} target="blank">
              <BsWhatsapp className="text-2xl hover:text-green-500 duration-200" />
            </Link>
            <Link href={"https://x.com/thebalance254"} target="blank">
              <BsTwitterX className="text-2xl hover:text-blue-400 duration-200 cursor-pointer" />
            </Link>
            <Link href={"#"} target="blank">
              <BsFacebook className="text-2xl hover:text-blue-800 duration-200 cursor-pointer" />
            </Link>
            <Link href={"https://www.instagram.com/thebalance254/"} target="blank">
              <BsInstagram className="text-2xl hover:text-purple-500 duration-200 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-4 md:mt-8 md:text-left text-center">
            <p className="text-lg font-semibold text-white mb-2 md:text-center">Join Our Newsletter</p>
            <form className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <input type="email" placeholder="Enter your email" className="p-2 rounded-md text-black" />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-300">
          © All rights reserved{" "}
          <Link href={"#"} target="blank" className="hover:text-white font-semibold duration-200">
            @2024
          </Link>
          <Link href="/studio">.</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
