import { testtokencontract } from "@/utils/contractInfo";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

export default function FaucetToggle({name, balance}) {

        const [amount, setAmount] = useState();
        const [account, setAccount] = useState();

        const {address} = useAccount();

        const {config} = usePrepareContractWrite({
                ...testtokencontract,
                functionName: "mint",
                args: [amount],
                overrides: {
                        from: account,
                }
        })

        const {data, isLoading, isError, write} = useContractWrite(config)

        useEffect(() => {
                setAccount(address);
        }, [account])


        return (
            <div className=''>
            <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}}>Mint</div>
            <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i className="fa fa-usd" style={{}}></i> {name}</button><br></br>
                <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} onChange={(e) => {
                        let val = ethers.utils.parseEther(e.target.value);
                        setAmount(val);
                }} placeholder='0'></input>
                <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: {balance / ethers.utils.parseEther("1")} {name}</span>
                </div>
                <div className="rounded-md px-4 py-1" onClick={(e) => {
                        e.preventDefault();
                        write?.();
                }} id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i className="fa fa-money"></i>&nbsp;&nbsp; Mint</div>
        </div>
        )
}