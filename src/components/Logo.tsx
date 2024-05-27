import Link from "next/link";
import Image from "next/image";
import logoImage from "@/images/Logo.png"; // Assuming Logo.jpeg is located in the images folder

interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <div className={`flex items-center ${className}`}>
        <div>
          <Image
            src={logoImage}
            alt={title || "The Balance"}
            width={40} // Set the desired width of the image
            height={40} // Set the desired height of the image
            className="mr-2" // Add margin to separate the image from the text
          />
        </div>
        <div className="text-xl font-bold">{title || "The Balance"}</div>
      </div>
    </Link>
  );
};

export default Logo;
