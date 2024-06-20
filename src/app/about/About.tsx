import React from "react";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import "../style/globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import BalanceeImg from "../../images/cover.jpg";
import DrawImg from "../../images/Logodef.jpeg";



const About = () => {
  return (
    <div>
    <Navbar />
    
    
    <Container className="bg-gray-100  px-10 flex flex-col gap-10">
      
      
      <div >
      <Image
        src={BalanceeImg}
        alt="Balancee"
        
        objectFit="contain"
      />
        
        <div className="max-w-3xl mx-auto px-4 py-8 prose lg:prose-xl">
      
        <h1 className="text-3xl font-bold mb-6">About The Balance.</h1>
              
              <p>
              This is a startup company that is focused on creating content that relate to work(employment), life(social and economic), and business. The balance vision is creating more media products.<br></br>

<b>Purpose</b> - To build content relating to technology and modernity.<br></br>

<b>Mission</b> - To build a community that inspires each other to become better by use of technology.<br></br>

<b>Vision:</b> To become a trusted platform/entity that provides technology awareness across Africa.<br></br>

Our logo symbolizes the three tenets of The Balance community (Work, Life, and Business). The circle is our mind, while the black dot is our mindset. The triangle and circle stands on one corner because both are seeking balance.


<Image
        src={DrawImg}
        alt="Drawing"
        
        objectFit="cover"
      />


Technology affects our Work, everyday Life as well as the way we  engage in Business. 

The question is: Where is the balance? Thus, the purpose of this enterprise lies in finding answers to the question. 

This entity is a subsidiary to the main technology company; LAIF TECHNET. 

The balance is the first product under LAIF TECHNET umbrella. 

LAIF TECHNET purpose is to develop more tech products geared towards improving lives  in Kenya and Africa. LAIF represents  Life in Africa. 
Subscribe to receive updates of content and designs.
              </p>
              
            </div>
        </div>
    </Container>
    <Footer />
    </div>
  );
};

export default About;
