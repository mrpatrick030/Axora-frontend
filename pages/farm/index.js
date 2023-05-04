import Head from 'next/head';
import {useEffect, useState} from "react";
import Link from 'next/link';
import { useContractReads } from 'wagmi';
import { yieldfarmcontract } from '@/utils/contractInfo';
import PoolCard from '@/components/poolCard';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Farm(){

  const [poolInfo, setPoolInfo] = useState();
  const [pools, setPools] = useState();

  const {data, isLoading, isError} = useContractReads({
    contracts: [
      {
        ...yieldfarmcontract,
        functionName: "poolLength"
      },
      {
        ...yieldfarmcontract,
        functionName: "totalAllocPoint"
      },
      {
        ...yieldfarmcontract,
        functionName: "axoraPerBlock"
      },

    ]
  })

  const poolArr = () => {
    const arr = [];
    for (let i = 0; i < poolInfo?.[0]; i++ ){
      arr.push(i);
    };
    setPools(arr);
  }


  useEffect(() => {
      AOS.init();
      setPoolInfo(data);
      poolArr();
    }, [poolInfo])


return(
    <>
    <Head>
        <title>The farming platform of Axora-Labs</title>
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
        <span className='' style={{fontSize:"200%", fontWeight:"bold"}}>Farm</span>
        <span className='float-right'>{<ConnectButton /> ?? <button className="rounded px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Connect wallet</button>}</span>
        </div>

        <div className='' data-aos="zoom-out" style={{marginTop:"3%", transition:"1s ease-in-out"}}>
            <div className='grid-cols-1'></div>
             
            <div className=''>
              <div className='grid grid-cols-1 md:grid-cols-3' style={{marginBottom:"5%", textAlign:"center"}}>
                  <div className='grid-cols-1'>
                  <div>Total Staking Pools</div>
                  <div style={{fontSize:"140%", fontWeight:"bold"}}>{poolInfo?.[0]?.toString()}</div>
                  </div>
                  <div className='grid-cols-1'>
                  <div>Total Allocated Points</div>
                  <div style={{fontSize:"140%", fontWeight:"bold"}}>{poolInfo?.[1]?.toString()}</div>
                  </div>
                  <div className='grid-cols-1'>
                  <div>Axora Per Block</div>
                  <div style={{fontSize:"140%", fontWeight:"bold"}}>{poolInfo?.[2]?.toString()}</div>
                  </div>
              </div>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {
                  pools?.map((item) => {
                    return <PoolCard key={item} poolId={item}/>
                  })
                }
              </div>
            </div>

            <div className='grid-cols-1'></div>
        </div>
        
    </div>
  </div>
</>
);
}