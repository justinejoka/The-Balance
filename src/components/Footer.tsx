import Logo from "./Logo";
import Link from "next/link";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsGithub,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-10 bg-black text-gray-100 relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center"> {/* Added this div */}
          <Logo title="The Balance" className="mb-4" />
          
        </div>
        <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="blank"
          >
            <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="blank"
          >
            <BsWhatsapp className="text-2xl hover:text-green-500 duration-200" />
          </Link>
          <Link href={"https://github.com/noorjsdivs"} target="blank">
            <BsTwitterX className="text-2xl hover:text-blue-400 duration-200 cursor-pointer" />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="blank"
          >
            <BsFacebook className="text-2xl hover:text-blue-800 duration-200 cursor-pointer" />
          </Link>
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="blank"
          >
            <BsInstagram className="text-2xl hover:text-purple-500 duration-200 cursor-pointer" />
          </Link>
        </div>
      </div>

      <div id="contacts" className="mb-4">
        <p className="text-white mb-2">Contact Us:</p>
        <p className="text-gray-300">Phone: +1-234-567-8901</p>
      </div>
      <div id="contacts" className="mb-4">
  <Link href="/about">
    <p className="text-white mb-2">About Us</p>
  </Link>
 
</div>
     <Link href="/terms">
     <p className="text-white mb-2">Terms && Conditions</p>
     </Link>
        
        
      

      <div className="absolute bottom-0 right-8">
        <p className="text-sm text-gray-300">
          © All rights reserved{" "}
          <Link
            href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
            target="blank"
            className="hover:text-white font-semibold duration-200"
          >
            @2024
          </Link>
          <Link href="/studio">.</Link>
        </p>
      </div>

     
    </div>
  );
};

export default Footer;
