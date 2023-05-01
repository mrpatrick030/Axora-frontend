import {useEffect, useState} from "react";

export default function SecondFAQ(){
const [toggle, setToggle] = useState(true);
async function handleClick() {
    setToggle(!toggle)
  };
    if (toggle){
        return(
            <div>
            <div onClick={handleClick} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%",}}><i class="fa-solid fa-plus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div>
    <div style={{fontSize:"250%", paddingLeft:"5%", paddingRight:"5%"}}>What is the goal of Axora-labs?</div>
    </div>
        );
        
    }
    else{ 
        return <div><div onClick={handleClick} style={{float:"right",paddingLeft:"5%", paddingRight:"10%", marginTop:"-5%", fontSize:"200%",}}>
            <i class="fa-solid fa-minus-circle" style={{color:"#141722", cursor:"pointer"}}></i></div> <div style={{fontSize:"250%", paddingLeft:"5%", paddingRight:"5%"}}>What is the goal of Axora-labs?</div>    <div id="faqRender2" data-aos="zoom-in"
         style={{color:"#141722",paddingLeft:"5%", fontSize:"120%",paddingRight:"5%", transition:"1s ease-in-out"}}>Our goal is to build a policy-controlled financial reserve currency that: — Preserves purchasing power via long-term price stability 
         — Has deep liquidity across decentralized and centralized exchanges</div></div>
    };

}
