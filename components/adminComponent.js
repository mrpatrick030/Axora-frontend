import { yieldfarmcontract } from "@/utils/contractInfo";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export default function AdminComponent() {


    const [addInfo, setAddInfo] = useState({withUpdate: false});

    const {config: addPoolConfig} = usePrepareContractWrite({
        ...yieldfarmcontract,
        functionName: "add",
        args: [addInfo?.allocPoint, addInfo?.tokenAddr, addInfo?.withUpdate]
    })

    const {data, write: addPool} = useContractWrite(addPoolConfig);


    return (
        <div className=''>
            <div className="rounded-md px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money">
                </i>&nbsp;&nbsp; Admin
                <form className="flex flex-col gap-3">
                    <label>Allocated Points: 
                        <input type="number" placeholder="Allocated points" onChange={(e) => {setAddInfo({...addInfo, allocPoint: e.target.value})}}/>
                    </label>
                    <label> Token Address: 
                        <input type="string" placeholder="LP token address" onChange={(e) => {setAddInfo({...addInfo, tokenAddr: e.target.value})}}/>
                    </label>
                    <label> Update Pools: 
                        <input type="boolean" placeholder="with update" onChange={(e) => {
                            e.target.value == "true" ?
                            setAddInfo({...addInfo, withUpdate: true}) :
                            setAddInfo({...addInfo, withUpdate: false}) 
                            }}/>
                    </label>
                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log(addInfo);
                        addPool?.();
                    }}>Submit</button>
                </form>
            </div>
        </div>
    )
}