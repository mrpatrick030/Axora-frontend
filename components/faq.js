import Head from 'next/head';
import {useEffect, useState} from "react";
import FirstFAQ from "./firstFAQbutton";
import SecondFAQ from "./secondFAQbutton";
import ThirdFAQ from "./thirdFAQbutton";

export default function FAQ() {
    useEffect(() => {
        AOS.init();
      }, []);

return (
    <>
    <Head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
       </Head>
    <div style={{marginLeft:"5%", marginRight:"5%", marginBottom:"5%", color:"#141722", transition:"1s ease-in-out",}}>
    <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
    <div className="grid-cols-1" data-aos="flip-up" style={{fontSize:"300%", fontWeight:"bold", color:"#141722",}}> FAQ </div>
    <div className="grid-cols-1 col-span-2" style={{marginTop:"10%"}}>  
   
    <div style={{marginBottom:"10%", transition:"1s ease-in-out"}}>
     <FirstFAQ />
    <div style={{borderBottom:"2px solid #d7b679", marginTop:"2%"}}></div>
    </div>

    <div style={{marginBottom:"10%"}}>
    <SecondFAQ />
   <div style={{borderBottom:"2px solid #d7b679", marginTop:"2%"}}></div>
    </div>

    <div style={{marginBottom:"10%"}}>
    <ThirdFAQ />
   <div style={{borderBottom:"2px solid #d7b679", marginTop:"2%"}}></div>
    </div>

    </div>
    </div>
    </div>
    </>
);
}