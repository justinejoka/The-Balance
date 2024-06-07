import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import "../style/globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import BalanceeImg from "../../images/Balancee.jpeg";



const About = () => {
  return (
    <div>
    <Navbar />
    
    
    <Container className="bg-gray-100 py-20 px-10 flex flex-col gap-10">
      
      
      <div >
      <Image
        src={BalanceeImg}
        alt="Balancee"
        
        objectFit="cover"
      />
        
        <div className="max-w-3xl mx-auto px-4 py-8 prose lg:prose-xl">
      
        <h1 className="text-3xl font-bold mb-6">About The Balance.</h1>
              
              <p>
Hello, I am Jeremy Zero. I am a young ambitious individual and humble student of life. Before the balance, I had an opportunity to start few businesses where I made mistakes therefore gaining  a lot of lessons.
Now the year is 2024. Everything feels great. The Balance project is here. Almost 10 years in creation. does it matter? yes. 
Here, I will be writing about work(employment), general life, and business. These stories will come from my personal experiences as well as other people experiences. 
Genuinely,  all of us have a deep desire for fulfillment in success and money. Life is fast, we are lost in the chase for material success barely finding the balance to live life. Time passes, and passes again. We in the same broke place, and we cannot even notice that we are stagnant. For this reason, I decided to create this website so we can help each other find solutions to stupid non existent problems we face.
Every week I will be publishing stories on life, work, and business. Sign up and check in for updates. Enjoy. 

Thank you.
              </p>
              
            </div>
        </div>
    </Container>
    <Footer />
    </div>
  );
};

export default About;
