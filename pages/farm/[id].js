import Head from 'next/head';
import {useEffect, useState} from "react";
import Link from 'next/link';
import FarmToggle from '@/components/farmToggle';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useAccount, useContractRead } from 'wagmi';
import { yieldfarmcontract } from '@/utils/contractInfo';
import { ethers } from 'ethers';

export default function Farm(){

  const router = useRouter();
  const {id} = router.query;
  const {address} = useAccount();

  const [poolId, setPoolId] = useState(0);
  const [account, setAccount] = useState();
  const [userInfo, setUserInfo] = useState();
  
  const {data, isLoading, isError} = useContractRead({
      ...yieldfarmcontract,
      functionName: "userInfo",
      args: [poolId, account]
  })





    useEffect(() => {
      AOS.init();
      setPoolId(id);
      setAccount(address);
      setUserInfo(data);
      console.log(poolId)
    }, [id, data, poolId])


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
    
    <button onClick={() => router.back()}><span className='py-3 text-3xl' style={{color:"#d7b679"}}><i class="fa fa-caret-left"></i> &nbsp; BACK</span></button>

        <div className='pl-5 pr-5' style={{marginTop:"3%"}}>
        <span className='' style={{fontSize:"200%", fontWeight:"bold"}}>Farm</span>
        <span className='float-right'>{<ConnectButton /> ?? <button className="rounded px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Connect wallet</button>}</span>
        </div>

        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1' data-aos="zoom-out" style={{marginTop:"3%", transition:"1s ease-in-out"}}>
            <div className='grid-cols-1'></div>
             
            <div className='grid-cols-1'>
            <div className='grid grid-cols-3 gap-3' style={{marginBottom:"5%", textAlign:"center"}}>
                <div className='grid-cols-1'>
                <div>Pending Reward</div>
                <div style={{fontSize:"140%", fontWeight:"bold"}}>{userInfo?.rewardAccrued.toString() ?? 0}</div>
                </div>
                <div className='grid-cols-1'>
                <div>Last Interacted</div>
                <div style={{fontSize:"140%", fontWeight:"bold"}}>{userInfo?.lastInteracted.toString() ?? 0}</div>
                </div>
                <div className='grid-cols-1'>
                <div>Your Deposit</div>
                <div style={{fontSize:"140%", fontWeight:"bold"}}>{userInfo?.amount.toString() / ethers.utils.parseEther("1") ?? 0}</div>
                </div>
            </div>

          <FarmToggle poolId={poolId}/>
            </div>

            <div className='grid-cols-1'></div>
        </div>
        
    </div>
  </div>
</>
);
}