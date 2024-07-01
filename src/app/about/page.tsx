
import About from "./About";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";


const AboutPage = () => {
  return (
    <main>
       <Navbar />
  <ThemeToggle/> 
  <About />
  <Footer />
  </main>
  )
};

export default AboutPage;