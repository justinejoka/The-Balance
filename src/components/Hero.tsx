import Image from "next/image";
import bannerImage from "@/images/balance.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen overflow-hidden">
        <Image
          src={bannerImage}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-[-1]"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-4">
            Discover the Perfect Balance
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
            Achieve Work-Life Harmony with Our Insights
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
          <a
  href="#blog-content"
>
  Explore Ideas
</a>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;