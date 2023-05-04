import Head from 'next/head';
import {useEffect} from "react";
import Link from 'next/link';
import ComingSoon from '@/components/comingSoon';

export default function Governance(){
    useEffect(() => {
        AOS.init();
      }, [])
return(
    <>
    <Head>
        <title>The governance platform of Axora-Labs</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;

    </Head>
  <div className='max-h-screen' style={{backgroundColor:"#2b313d", padding:"2%", paddingBottom:"100%", color:"#eee", fontFamily:"georgia"}}>
    <div>
    
    <Link href='/'><span className='py-3 text-3xl' style={{color:"#d7b679"}}><i class="fa fa-caret-left"></i> &nbsp; BACK</span></Link>

        <div className='pl-5 pr-5' style={{marginTop:"3%"}}>
        <span className='' style={{fontSize:"200%", fontWeight:"bold"}}>Governance</span>
        <span className='float-right'><button className="rounded px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Connect wallet</button></span>
        </div>
        <ComingSoon />
    </div>
  </div>
</>
);
}