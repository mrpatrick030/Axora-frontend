import { yieldfarmcontract } from "@/utils/contractInfo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";

const PoolCard = ({poolId}) => {

    const [poolInfo, setPoolInfo] = useState();
  
    const {data, isLoading, isError} = useContractRead({
        ...yieldfarmcontract,
        functionName: "poolInfo",
        args: [poolId]
    })

    useEffect(() => {
        setPoolInfo(data);
    }, [data])


    return (
        <Link href={`/farm/${poolId}`}>
            <div className=''>
                <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                    <p>Pool token:{poolInfo?.lpToken.toString()}</p>
                    <p>Allocated Point:{poolInfo?.allocPoint.toString()}</p>
                    <p>Last Reward Block:{poolInfo?.lastRewardBlock.toString()}</p>
                    <p>Accumulated Axora Reward:{poolInfo?.accAxoraReward.toString()}</p>
                    <p>Total Depositors:{poolInfo?.totalDepositors.toString()}</p>
                </div>
            </div>
        </Link>
    )
}

export default PoolCard