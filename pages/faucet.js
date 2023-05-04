import Head from 'next/head';
import {useEffect, useState} from "react";
import Link from 'next/link';
import FaucetToggle from '@/components/faucetToggle';
import { testtokencontract } from '@/utils/contractInfo';
import { erc20ABI, useAccount, useContractReads } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';

export default function Faucet(){


  const [tokenInfo, setTokenInfo] = useState();
  const [account, setAccount] = useState(0);

  const {address} = useAccount();
  
  const {data, isLoading, isError} = useContractReads({
    contracts: [
      {
        ...testtokencontract,
        functionName: "balanceOf",
        args: [address]
      },
      {
        ...testtokencontract,
        functionName: "totalSupply",
      },
      {
        ...testtokencontract,
        functionName: "name",
      },
    ]
  })




    useEffect(() => {
      AOS.init();
      setAccount(address);
      setTokenInfo(data);
    }, [data])


return(
    <>
    <Head>
        <title>The Faucet platform of Axora-Labs</title>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;

    </Head>
  <div className='max-h-screen' style={{backgroundColor:"#2b313d", padding:"2%", paddingBottom:"100%", color:"#eee", fontFamily:"georgia"}}>
    <div>
    
    <Link href='/'><span className='py-3 text-3xl' style={{color:"#d7b679"}}><i className="fa fa-caret-left"></i> &nbsp; BACK</span></Link>

        <div className='pl-5 pr-5' style={{marginTop:"3%"}}>
          <span className='' style={{fontSize:"200%", fontWeight:"bold"}}>Faucet</span>
          <span className='float-right'>{<ConnectButton /> ?? <button className="rounded px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Connect wallet</button>}</span>
        </div>
        <div className='grid grid-cols-3 gap-3' style={{marginBottom:"5%", textAlign:"center"}}>
          <div className='grid-cols-1'>
          <div>Your Balance</div>
          <div style={{fontSize:"140%", fontWeight:"bold"}}>{tokenInfo?.[0]?.toString() / ethers.utils.parseEther("1")}</div>
          </div>
          <div className='grid-cols-1'>
            <div>Token Address</div>
            <div style={{fontSize:"140%", fontWeight:"bold"}}>{testtokencontract.address}</div>
          </div>
          <div className='grid-cols-1'>
          <div>Total Supply</div>
          <div style={{fontSize:"140%", fontWeight:"bold"}}>{tokenInfo?.[1]?.toString() / ethers.utils.parseEther("1")}</div>
          </div>
        </div>
        <FaucetToggle name={tokenInfo?.[2]} balance={tokenInfo?.[0]?.toString()}/>
    </div>
  </div>
</>
);
}