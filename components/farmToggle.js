import { testtokencontract, yieldfarmcontract } from "@/utils/contractInfo";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { erc20ABI, useAccount, useContractRead, useContractReads, useContractWrite, usePrepareContractWrite } from "wagmi";

 const FarmToggle = ({poolId}) => {

    const router = useRouter();
    const {id} = router.query;
    const {address} = useAccount();

    const [toggle, setToggle] = useState(true);
    const [PoolId, setPoolId] = useState();
    const [amount, setAmount] = useState();
    const [tokenInfo, setTokenInfo] = useState();
    const [poolInfo, setPoolInfo] = useState();

    async function letsSetToggleState(){
        setToggle(!toggle);
    };

    const {data, isLoading, isError} = useContractRead({
        ...yieldfarmcontract,
        functionName: "poolInfo",
        args: [PoolId]
    })


    const {data: lpData, isLoading: lpIsLoading, isError: lpIsError} = useContractReads({
        contracts: [
            {
                address: poolInfo?.lpToken,
                abi: erc20ABI,
                functionName: "name",
            },
            {
                address: poolInfo?.lpToken,
                abi: erc20ABI,
                functionName: "balanceOf",
                args: [address]
            },
        ]
    })

    const {config} = usePrepareContractWrite({
        ...yieldfarmcontract,
        functionName: "deposit",
        args: [PoolId, amount],
    })

    const {data: depositData, isLoading: depositIsLoading, isError: depositIsError, write: depositWrite} = useContractWrite(config)

    useEffect(() => {
        setPoolId(id);
        setPoolInfo(data);
        setTokenInfo(lpData);
        console.log(lpData?.[0]);
        console.log(data);
        console.log(PoolId);
    }, [poolId, PoolId, lpData, data])


    if (toggle){
        return (
            <div className=''>
            <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}} onClick={letsSetToggleState}>Deposit</div>
            <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i>
                    <span>{tokenInfo?.[0]}</span>
                 </button><br></br>
                <input type="text" onChange={(e) => {
                    let val = ethers.utils.parseUnits(e.target.value, 18).toString();
                    console.log(val.toString());
                    setAmount(val)
                    }
                } style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                <span style={{float:"right", fontSize:"90%", color:"#aaa"}}>Balance: {tokenInfo?.[1].toString() / ethers.utils.parseEther("1")} {tokenInfo?.[0]}</span>
                </div>

                <div className="rounded-md px-4 py-1" id="stakeConnectWallet" onClick={(e) => {
                    e.preventDefault();
                    depositWrite?.();
                }} style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Deposit</div>
        </div>
        )
    }
    else{
        return  <div className=''>
        <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}} onClick={letsSetToggleState}>Withdraw</div>
        <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
            <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> gAXORA</button><br></br>
            <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0.00'></input>
            <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: 0.00 gAXORA</span>
            </div>

            <div className="rounded-md px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Withdraw</div>
    </div>
    }
}

export default FarmToggle