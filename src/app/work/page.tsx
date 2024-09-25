// src/app/work/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '@/lib/fetchPosts';
import WorkContent from "@/components/WorkContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Post } from '../../../types';
import "../style/globals.css";

import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  FaNewspaper, 
  FaBriefcase, 
  FaShoppingCart, 
  FaHome, 
  FaChartLine, 
  FaUserFriends, 
  FaGraduationCap, 
  FaRocket, 
  FaTools // Import the missing FaTools icon
} from 'react-icons/fa'; // Importing FontAwesome icons

// Define colors and styles
const buttonStyles = "block text-center bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 hover:from-blue-600 hover:via-teal-500 hover:to-green-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 w-full shadow-lg hover:shadow-xl";

// Enhanced Web Development Pricing Component
const WebDevPricing = () => {
  const services = [
    { type: "News Website", icon: <FaNewspaper className="h-8 w-8 text-blue-500" />, priceRange: "Kes.40, 000-Kes 45, 000", marketing: "Keep your audience informed with up-to-date news on a dynamic platform." },
    { type: "Business Website", icon: <FaBriefcase className="h-8 w-8 text-green-500" />, priceRange: "Kes.60, 000 – Kes.65, 000", marketing: "Make your business stand out online with a professional, user-friendly website." },
    { type: "Real Estate Website", icon: <FaHome className="h-8 w-8 text-orange-500" />, priceRange: "Kes.85, 700 - Kes.90, 000", marketing: "Showcase properties and close deals faster with an engaging real estate platform." },
    { type: "Ecommerce Website", icon: <FaShoppingCart className="h-8 w-8 text-purple-500" />, priceRange: "Kes 35, 000- Kes 40, 000", marketing: "Sell your products effortlessly with a secure and intuitive e-commerce platform." },
    { type: "Non-Profit Website", icon: <FaUserFriends className="h-8 w-8 text-red-500" />, priceRange: "Kes. 50, 000 – Kes. 55, 000", marketing: "Share your mission and grow your community with a powerful online presence." },
    { type: "Personal Blog/Portfolio", icon: <FaGraduationCap className="h-8 w-8 text-yellow-500" />, priceRange: "Kes. 15, 000 – Kes.25, 000", marketing: "Display your talents and experiences with a personalized portfolio site." },
    { type: "Membership Website", icon: <FaUserFriends className="h-8 w-8 text-teal-500" />, priceRange: "Kes. 65, 000 - Kes.70, 000", marketing: "Provide exclusive content and grow your community with a membership site." },
    { type: "Landing Page", icon: <FaRocket className="h-8 w-8 text-pink-500" />, priceRange: "Kes. 20, 000 - Kes.25, 000", marketing: "Capture leads and convert visitors with a high-converting landing page." },
    { type: "Student Portal", icon: <FaGraduationCap className="h-8 w-8 text-indigo-500" />, priceRange: "Kes.90, 000 – Kes.150, 000", marketing: "Empower students with a centralized platform for academic resources." },
    { type: "Custom Web Application", icon: <FaChartLine className="h-8 w-8 text-cyan-500" />, priceRange: "Kes. 90, 000 – Kes.150, 000", marketing: "Bring your vision to life with a custom, interactive web application." },
  ];

  return (
    <div className="service-pricing my-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
        Website Types and Pricing
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform">
            <div className="flex items-center mb-6 space-x-4">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{service.type}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.marketing}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Price Range: <span className="text-lg font-semibold text-gray-900 dark:text-white">{service.priceRange}</span></p>
            <a 
              href={`https://wa.me/+254707898700?text=Hello%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.type)}%20service.`} 
              className={buttonStyles}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Enhanced Web Management Pricing Component
const WebMgtPricing = () => {
  const managementServices = [
    { service: "Hosting Management", priceRange: "Ksh. 2,000 – Ksh. 4,500", marketing: "Keep your website running smoothly with reliable hosting management." },
    { service: "Content Updates", priceRange: "Ksh. 5,000 – Ksh. 15,000", marketing: "Ensure your website content is always fresh and up-to-date." },
    { service: "Security & Backups", priceRange: "Ksh. 2,500 – Ksh. 4,500", marketing: "Protect your site from threats and keep your data safe with regular backups." },
    { service: "SEO Management", priceRange: "Ksh. 10,000 – Ksh. 30,000", marketing: "Boost your search engine ranking and attract more visitors to your site." },
    { service: "Technical Support", priceRange: "Ksh. 3,000 – Ksh. 5,000", marketing: "Resolve technical issues quickly with expert support and guidance." },
  ];

  return (
    <div className="service-pricing my-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
        Web Management Services and Pricing
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {managementServices.map((service, index) => (
          <li key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 transform">
            <div className="flex items-center mb-6 space-x-4">
              <FaTools className="h-8 w-8 text-indigo-500" /> {/* Use FaTools icon here */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{service.service}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.marketing}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Price Range: <span className="text-lg font-semibold text-gray-900 dark:text-white">{service.priceRange}</span></p>
            <a 
              href={`https://wa.me/+254707898700?text=Hello%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.service)}%20service.`} 
              className={buttonStyles}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Page Component
export default function WorkPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
       
        <div className="mt-8">
          <WebDevPricing />
          <WebMgtPricing />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
