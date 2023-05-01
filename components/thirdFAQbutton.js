import {useEffect, useState} from "react";

export default function ThirdFAQ(){
const [toggle, setToggle] = useState(true);
async function handleClick() {
    setToggle(!toggle)
  };
    if (toggle){
        return(
            <div>
            <div onClick={handleClick} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%",}}><i class="fa-solid fa-plus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div>
    <div style={{fontSize:"250%", paddingLeft:"5%", paddingRight:"5%"}}>Why do we need Axora in the first place?</div>
    </div>
        );
        
    }
    else{ 
        return <div><div onClick={handleClick} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%",}}>
            <i class="fa-solid fa-minus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div> <div style={{fontSize:"250%", paddingLeft:"5%", paddingRight:"5%"}}>Why do we need Axora in the first place?</div>    <div id="faqRender2" data-aos="zoom-in"
         style={{color:"#141722",paddingLeft:"5%", fontSize:"120%",paddingRight:"5%", transition:"1s ease-in-out"}}>Dollar-pegged stablecoins have become an essential part of crypto due to their lack of volatility as compared 
         to tokens such as Bitcoin and Ether. Users are comfortable with transacting using stablecoins knowing that they hold the same amount of purchasing power today
          vs. tomorrow. But this is a fallacy. The dollar is controlled by the US government and the Federal Reserve.</div></div>
    };

}
