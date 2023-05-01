import Head from 'next/head';
import {useEffect} from "react";


export default function Stake(){
    useEffect(() => {
        AOS.init();
      }, [])
return(
    <>
    <Head>
        <title>The staking platform of Axora-Labs</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   
    </Head>
<div>
    <div className="grid md:grid-cols-6 lg:grid-cols-6 sm:grid-ols-1">
   <div className="grid-cols-1" data-aos="slide-up" style={{backgroundColor:"#141722"}}>here</div>
   <div className="grid-cols-1 col-span-5" style={{backgroundColor:"#2b313d"}}>here</div>
    </div>
</div>
</>
);
}