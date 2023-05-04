import Link from "next/link";
import { useState } from "react";
import PoolCard from "./poolCard";
import { usePrepareContractWrite } from "wagmi";
import { yieldfarmcontract } from "@/utils/contractInfo";

export default function AllPools() {

    const {config} = usePrepareContractWrite({
        ...yieldfarmcontract,
        functionName: "poolLength",
    })
    return (
        <PoolCard />
    )
}