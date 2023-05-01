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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;

    </Head>
  <div style={{backgroundColor:"#2b313d", padding:"2%", color:"#eee", fontFamily:"georgia"}}>
    <div>

        <div className='pl-5 pr-5'>
        <span className='' style={{fontSize:"200%", fontWeight:"bold"}}>Stake</span>
        <span className='float-right'><button className="rounded px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer"}}><i class="fa fa-check-square"></i>&nbsp;&nbsp; Connect wallet</button></span>
        </div>

        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1' data-aos="slide-right" style={{marginTop:"3%", transition:"2s ease-in-out"}}>
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

            <div className=''>
                <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center"}}>Stake</div>
                <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                    <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> AXORA</button><br></br>
                    <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                    <span style={{float:"right", fontSize:"90%", color:"#aaa"}}>Balance: 0.00 AXORA</span>
                    </div>
                <div style={{textAlign:"center"}}>switch</div>
                <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                    <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> gAXORA</button><br></br>
                    <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                    <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: 0.00 gAXORA</span>
                    </div>
                    <div className="rounded-md px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-check-square"></i>&nbsp;&nbsp; Connect wallet</div>
            </div>
            </div>

            <div className='grid-cols-1'></div>
        </div>
        
    </div>
  </div>
</>
);
}