import Head from 'next/head';
import {useEffect} from "react";

export default function FAQ() {
    useEffect(() => {
        AOS.init();
      }, []);
async function faqRenderLogicF1(){
var displayF1 = "No, Axora is not a stable coin. Our goal is to develop a Web3-native asset that helps users preserve purchasing power, has deep liquidity across the ecosystem, is utilized.";
document.getElementById("faqRender1").innerHTML = displayF1;
}

async function faqRenderLogicF2(){
    var displayF2 = "Our goal is to build a policy-controlled financial reserve currency that: — Preserves purchasing power via long-term price stability — Has deep liquidity across decentralized and centralized exchanges";
    document.getElementById("faqRender2").innerHTML = displayF2;
}

async function faqRenderLogicF3(){
   var displayF3 = "Dollar-pegged stablecoins have become an essential part of crypto due to their lack of volatility as compared to tokens such as Bitcoin and Ether. Users are comfortable with transacting using stablecoins knowing that they hold the same amount of purchasing power today vs. tomorrow. But this is a fallacy. The dollar is controlled by the US government and the Federal Reserve. This means a" 
   document.getElementById("faqRender3").innerHTML = displayF3;
}


return (
    <>
    <Head>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
       </Head>
    <div style={{marginLeft:"5%", marginRight:"5%", marginBottom:"5%", color:"#141722", transition:"1s ease-in-out"}}>
    <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1">
    <div className="grid-cols-1" data-aos="flip-up" style={{fontSize:"300%", fontWeight:"bold", color:"#141722",}}> FAQ </div>
    <div className="grid-cols-1 col-span-2" style={{marginTop:"10%"}}>  
   
    <div style={{marginBottom:"10%"}}>
    <div onClick={faqRenderLogicF1} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%",}}><i class="fa-solid fa-plus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div>
    <div style={{fontSize:"250%", paddingLeft:"5%", paddingRight:"5%"}}>What is Axora-labs?</div>
    <div id="faqRender1" data-aos="zoom-in" style={{color:"#141722",paddingLeft:"5%", fontSize:"120%",paddingRight:"5%"}}></div>
    <div style={{borderBottom:"2px solid #d7b679", marginTop:"2%"}}></div>
    </div>

    <div style={{marginBottom:"10%"}}>
    <div onClick={faqRenderLogicF2} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%"}}><i class="fa-solid fa-plus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div>
    <div style={{fontSize:"250%", paddingLeft:"5%",paddingRight:"5%"}}>What is the goal of Axora-labs?</div>
    <div id="faqRender2" data-aos="zoom-in" style={{color:"#141722",paddingLeft:"5%", fontSize:"120%",paddingRight:"5%"}}></div>
    <div style={{borderBottom:"2px solid #d7b679", marginTop:"2%"}}></div>
    </div>

    <div style={{marginBottom:"10%"}}>
    <div onClick={faqRenderLogicF3} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%"}}><i class="fa-solid fa-plus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div>    
    <div style={{fontSize:"250%", paddingLeft:"5%",paddingRight:"5%"}}>Why do we need Axora in the first place?</div>
    <div id="faqRender3" data-aos="zoom-in" style={{color:"#141722",paddingLeft:"5%",paddingRight:"5%", fontSize:"120%",}}></div>
    <div style={{borderBottom:"2px solid #d7b679", marginTop:"2%"}}></div>
    </div>

    </div>
    </div>
    </div>
    </>
);
}