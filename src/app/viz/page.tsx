// src/app/services/3d-visualization.tsx
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import CubeCanvas from "@/components/cube"; // Import the Cube component
import { FaCube, FaPaintBrush, FaLayerGroup, FaLaptop, FaVrCardboard } from 'react-icons/fa';
import { ThemeToggle } from "@/components/ThemeToggle";


// Define the visualization services array
const visualizationServices = [
  {
    title: "Product Visualization",
    icon: <FaCube className="text-blue-500 h-12 w-12" />,
    description: "Bring your product designs to life with high-quality, realistic 3D models. Perfect for marketing, prototyping, and presentations.",
    price: "Kes. 50,000 - 75,000",
    marketing: "Turn your concepts into reality with visually stunning 3D models that capture attention and drive sales.",
    link: "https://wa.me/254707898700?text=I%20would%20like%20to%20inquire%20about%20Product%20Visualization"
  },
  
  {
    title: "3D Animation & Motion Graphics",
    icon: <FaPaintBrush className="text-purple-500 h-12 w-12" />,
    description: "Dynamic animations that bring your stories to life, whether for advertisements, educational content, or visual effects.",
    price: "Kes. 60,000 - 120,000",
    marketing: "Capture attention with compelling animations that tell your story in an engaging and memorable way.",
    link: "https://wa.me/254707898700?text=I%20would%20like%20to%20inquire%20about%203D%20Animation"
  },
  {
    title: "Interactive 3D Web Applications",
    icon: <FaLaptop className="text-indigo-500 h-12 w-12" />,
    description: "Develop interactive 3D applications that users can explore directly from their browser. Ideal for e-commerce, education, and more.",
    price: "Kes. 80,000 - 150,000",
    marketing: "Make your website stand out with interactive 3D elements that engage visitors and elevate the user experience.",
    link: "https://wa.me/254707898700?text=I%20would%20like%20to%20inquire%20about%20Interactive%203D%20Web%20Applications"
  }
];

const VisualizationServicePage = () => {
  return (
    <div>
      <Navbar />
      <Container className="bg-gray-100 dark:bg-gray-900 py-20 px-10">
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
          3D Visualization
      </h2>
        </div>
        {/* Add 3D Cube Component Here */}
        <div className="mb-10">
          <CubeCanvas />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visualizationServices.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform"
            >
              <div className="flex items-center mb-6 space-x-4">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Price Range: <span className="text-lg font-semibold text-gray-900 dark:text-white">{service.price}</span></p>
              <p className="text-gray-700 dark:text-gray-400 italic mb-4">{service.marketing}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 hover:from-blue-600 hover:via-teal-500 hover:to-green-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 w-full shadow-lg hover:shadow-xl"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default VisualizationServicePage;
