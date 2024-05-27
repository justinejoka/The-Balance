import React from "react";
import Container from "../../components/Container";
import Image from "next/image";
import soonImage from "@/images/soon.png";
import Navbar from "../../components/Navbar";
import "../style/globals.css";
import Footer from "@/components/Footer";

const productData = [
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
  {
    name: "Soon",
    description: "Varied type of artistic and digital products coming soon.",
    image: soonImage,
  },
];

const Products = () => {
  return (
    <div>
    <Navbar />
    
    <Container className="bg-white-100 pb-20 ">
      
      <div  >
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product items go here */}
          {productData.map((product, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 shadow-md rounded-md transition duration-300 hover:bg-white hover:shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p>{product.description}</p>
              <div className="mt-4 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
    <Footer />
    </div>
  );
};

export default Products;
