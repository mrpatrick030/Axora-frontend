import Head from 'next/head';
import {useEffect} from "react";
import StakeToggle from "../components/stakeToggle"

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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;

    </Head>
  <div style={{backgroundColor:"#2b313d", padding:"2%", color:"#eee", fontFamily:"georgia"}}>
    <div>

        <div className='pl-5 pr-5'>
        <span className='' style={{fontSize:"200%", fontWeight:"bold"}}>Stake</span>
        <span className='float-right'><button className="rounded px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer"}}><i class="fa fa-check-square"></i>&nbsp;&nbsp; Connect wallet</button></span>
        </div>

        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1' data-aos="zoom-out" style={{marginTop:"3%", transition:"1s ease-in-out"}}>
            <div className='grid-cols-1'></div>
             
            <div className='grid-cols-1'>
            <div className='grid grid-cols-3 gap-3' style={{marginBottom:"5%", textAlign:"center"}}>
                <div className='grid-cols-1'>
                <div>Annualized Rebases</div>
                <div style={{fontSize:"140%", fontWeight:"bold"}}>5.8%</div>
                </div>
                <div className='grid-cols-1'>
                <div>Time to Next Rebase</div>
                <div style={{fontSize:"140%", fontWeight:"bold"}}>20 mins</div>
                </div>
                <div className='grid-cols-1'>
                <div>Current Index</div>
                <div style={{fontSize:"140%", fontWeight:"bold"}}>332.7 AXORA</div>
                </div>
            </div>

          <StakeToggle />
            </div>

            <div className='grid-cols-1'></div>
        </div>
        
    </div>
  </div>
</>
);
}