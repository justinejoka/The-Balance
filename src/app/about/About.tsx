import React from "react";
import Container from "../../components/Container";

import "../style/globals.css";

import Image from "next/image";
import BalanceeImg from "../../images/cover.jpg";
import DrawImg from "../../images/Drawbalance.jpg";



const About = () => {
  return (
    <div>
    
    
    
    <Container className="bg-gray-100 dark:bg-gray-900 px-10 flex flex-col gap-10">
      
      
      <div >
      <Image
        src={BalanceeImg}
        alt="Balancee"
        
        objectFit="contain"
      />
        
        <div className="max-w-3xl mx-auto px-4 py-8 prose lg:prose-xl">
      
        <h1 className="text-3xl font-bold mb-6">About The Balance.</h1>
              
              <p>
              This is a startup company that is focused on creating content that relate to work(employment), <br></br>
              life(social and economic), and business. The balance vision is creating more media products.<br></br><br></br>

<b>Purpose</b> To create content that explains how technology affects our daily life at work and in our businesses.<br></br>

<b>Mission</b> To build a community that inspires each other to use technology at either their work or businesses.<br></br>

<b>Vision:</b> To become a trusted platform/entity that provides technology awareness across Africa.<br></br><br></br>

Our logo symbolizes the three tenets of The Balance community (Work, Life, and Business). <br></br>
The circle is our mind, while the black dot is our mindset. The triangle and circle stands on one <br></br>
corner because both are seeking balance.<br></br><br></br>


<Image
        src={DrawImg}
        alt="Drawing"
        
        objectFit="cover"
      />



<br></br>Technology affects our Work, everyday Life as well as the way we  engage in Business. <br></br>

The question is: <b> Where is the balance? </b><br></br>
Thus, the purpose of this enterprise lies in finding answers to the question. <br></br>

This entity is a subsidiary to the main technology company; <b>LAIF TECHNET.</b> 

The balance is the first product under LAIF TECHNET umbrella. <br></br>

LAIF TECHNET purpose is to develop more tech products geared towards improving lives  in <br></br>
Kenya and Africa.<b> LAIF represents  Life in Africa.</b> <br></br>
Subscribe to receive updates of content and designs.
              </p>
              
            </div>
        </div>
    </Container>
    
    </div>
  );
};

export default About;
