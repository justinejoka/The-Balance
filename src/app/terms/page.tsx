import Terms from "./Terms";
import { ThemeToggle } from "@/components/ThemeToggle";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
    <Navbar />
    
    <ThemeToggle/>
  <Terms />
  <Footer />
  </>
)
};

export default TermsPage;