import Navbar from "../../components/Navbar";
import Products from "./Products";
import { ThemeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";


const ProductsPage = () => {
  return ( <main>
       <Navbar />
    <ThemeToggle/> 
    <Products />
    <Footer />
    </main>

  )
};

export default ProductsPage;
