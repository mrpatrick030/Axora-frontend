import { useState } from "react";

export default function StakeToggle() {
    const [toggle, setToggle] = useState(true);
    async function letsSetToggleState(){
        setToggle(!toggle);
    };
    if (toggle){
        return (
            <div className=''>
            <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}} onClick={letsSetToggleState}>Stake</div>
            <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i>
                 <select style={{background:"#2b313d", outline:"none"}}>
                    <option>AXORA</option>
                    <option>USDT</option>
                    <option>DAI</option>
                </select>
                 </button><br></br>
                <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                <span style={{float:"right", fontSize:"90%", color:"#aaa"}}>Balance: 0.00 AXORA</span>
                </div>
            <div style={{textAlign:"center"}}><i class="fa fa-chevron-up" onClick={letsSetToggleState}></i></div>
            <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
                <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> gAXORA</button><br></br>
                <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0'></input>
                <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: 0.00 gAXORA</span>
                </div>
                <div className="rounded-md px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Connect wallet</div>
        </div>
        )
    }
    else{
        return  <div className=''>
        <div style={{fontSize:"120%", marginBottom:"5%", fontWeight:"bold", textDecoration:"underline",  textAlign:"center", cursor:"pointer"}} onClick={letsSetToggleState}>Unstake</div>
        <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
            <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> gAXORA</button><br></br>
            <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0.00'></input>
            <span style={{float:"right", fontSize:"80%", color:"#aaa"}}>Balance: 0.00 gAXORA</span>
            </div>
        <div style={{textAlign:"center"}}><i class="fa fa-chevron-down" onClick={letsSetToggleState}></i></div>
        <div className='rounded-2xl p-4' style={{background:"#141722", fontSize:"80%"}}>
            <button className='px-3 py-1 rounded-md' style={{background:"#2b313d", marginBottom:"3%"}}><i class="fa fa-usd" style={{}}></i> AXORA</button><br></br>
            <input type="text" style={{color:"#eee", background:"#141722",outline:"none", fontSize:"130%"}} placeholder='0.00'></input>
            <span style={{float:"right", fontSize:"90%", color:"#aaa"}}>Balance: 0.00 AXORA</span>
            </div>
            <div className="rounded-md px-4 py-1" id="stakeConnectWallet" style={{background:"#d7b679", color:"#141722", cursor:"pointer", textAlign:"center", marginTop:"3%"}}><i class="fa fa-money"></i>&nbsp;&nbsp; Connect wallet</div>
    </div>
    }
}