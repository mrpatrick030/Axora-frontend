import { liquidstakingcontract } from "@/utils/contractInfo";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useBalance, useContractReads, useContractWrite, usePrepareContractWrite } from "wagmi";

export default function StakeToggle() {


    const [toggle, setToggle] = useState(true);

    async function letsSetToggleState(){
        setToggle(!toggle);
    };

    const {address} = useAccount();

    const [contractInfo, setContractInfo] = useState();
    const [account, setAccount] = useState();
    const [amount, setAmount] = useState();
    const [selectedToken, setSelectedToken] = useState();
    const [bal, setBal] = useState();

    const {data: Tokenbalance, isLoading: TokenBalanceLoading, isError: TokenBalanceError} = useBalance({
        address: account
    })
  
    const {data, isLoading, isError} = useContractReads({
      contracts: [
        {
          ...liquidstakingcontract,
          functionName: "balanceOf",
          args: [account]
        },
        {
          ...liquidstakingcontract,
          functionName: "totalSupply",
        },
        {
          ...liquidstakingcontract,
          functionName: "symbol",
        },
      ]
    })

    const handleSelectToken = (e) => {
        e.preventDefault();
        if (e.target.value == "ETH") {

        }
    }

    
    const {config} = usePrepareContractWrite({
        ...liquidstakingcontract,
        functionName: "stakeETH",
        overrides: {
            value: amount
        }
    })
    
    const {data: stakeETHData, isLoading: stakeETHIsLoading, isError: stakeETHIsError, write: stakeETH} = useContractWrite(config)
  
    const {config: unstakeETHConfig} = usePrepareContractWrite({
        ...liquidstakingcontract,
        functionName: "withDrawETH",
        args: [amount]
    })
    
    const {data: unstakeETHData, isLoading: unstakeETHIsLoading, isError: unstakeETHIsError, write: unstakeETH} = useContractWrite(unstakeETHConfig)
  
  
      useEffect(() => {
        setContractInfo(data);
        setAccount(address);
        setBal(Tokenbalance);
        console.log(Tokenbalance)
    }, [data, address])


    if (toggle){
        return (
            <div className=''>
            <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}} onClick={letsSetToggleState}>Stake</div>
            <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i>
                 <select onChange={handleSelectToken} style={{background:"#2b313d", outline:"none"}}>
                    {/* <option>AXORA</option>
                    <option>USDT</option>
                    <option>DAI</option> */}
                    <option>{bal?.symbol}</option>
                </select>
                 </button><br></br>
                <input type="text" onChange={(e) => {
                    let val = ethers.utils.parseEther(e.target.value) ?? "0";
                    setAmount(val);
                }} style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                <span style={{float:"right", fontSize:"90%", color:"#aaa"}}>Balance: {bal?.formatted} {bal?.symbol}</span>
                </div>
            <div style={{textAlign:"center"}}><i class="fa fa-chevron-up" onClick={letsSetToggleState}></i></div>
            <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> {contractInfo?.[2]}</button><br></br>
                <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: {contractInfo?.[0]?.toString() / ethers.utils.parseEther("1")} {contractInfo?.[2]}</span>
                </div>
                <div className="rounded-md px-4 py-1" onClick={(e) => {
                    e.preventDefault();
                    stakeETH?.();
                }} id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Stake</div>
        </div>
        )
    }
    else{
        return  <div className=''>
        <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}} onClick={letsSetToggleState}>Unstake</div>
        <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
            <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> {contractInfo?.[2]}</button><br></br>
            <input type="text" onChange={(e) => {
                    let val = ethers.utils.parseEther(e.target.value) ?? "0";
                    setAmount(val);
            }} style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0.00'></input>
            <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: {contractInfo?.[0]?.toString() / ethers.utils.parseEther("1")} {contractInfo?.[2]}</span>
            </div>
        <div style={{textAlign:"center"}}><i class="fa fa-chevron-down" onClick={letsSetToggleState}></i></div>
        <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
            <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> {bal?.symbol}</button><br></br>
            <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0.00'></input>
            <span style={{float:"right", fontSize:"90%", color:"#aaa"}}>Balance: {bal?.formatted} {bal?.symbol}</span>
            </div>
            <div className="rounded-md px-4 py-1" onClick={(e) => {
                    e.preventDefault();
                    unstakeETH?.();
            }} id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Unstake</div>
        </div>
    }
}