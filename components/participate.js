export default function Participate() {
    return(
  <div style={{marginLeft:"5%", marginRight:"5%", marginBottom:"5%"}}>
    <div style={{fontSize:"300%", textAlign:"center", fontWeight:"bold", color:"#141722", marginBottom:"1%"}}>How to Participate</div>
    <div className="" style={{textAlign:"center", marginBottom:"2%", fontSize:"400%", color:"#141722"}}><i class="fa-solid fa-user-circle"></i></div>
   <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
    <div className="grid-cols-1 rounded-l-3xl rounded-r-3xl lg:rounded-r-none md:rounded-r-none" style={{padding:"10%", backgroundColor:"#55a", marginBottom:"5%", color:"#ddd"}}>
        <div className="grid grid-cols-4">
            <div className="grid-cols-1 col-span-3"></div>
            <div className="grid-cols-1" style={{marginTop:"-20%"}}><img src="../images/coin1.png" width="100" height="100" /></div>
        </div>
        <div style={{fontSize:"250%"}}>Staking</div>
        <div style={{fontSize:"110%"}}>Stakers play an important role in the Olympus ecosystem. Stakers deposit their OHM into the protocol, 
            which contributes to OHM's long-term price stability. 
            In exchange, stakers receive their pro rata share of rebases and governance rights.</div>
            <button className="px-7 py-2 rounded-full" id="participateButton" style={{marginTop:"5%", border:"2px solid #ddd", fontSize:"110%", transition:"1s ease-in-out"}}>STAKE &nbsp;<i class="fa-solid fa-arrow-right" style={{color:"#ddd",}}></i></button>
    </div>
    <div className="grid-cols-1 rounded-r-3xl rounded-l-3xl lg:rounded-l-none md:rounded-l-none" style={{padding:"10%", backgroundColor:"#d7b679", marginBottom:"5%", color:"#222"}}>
    <div className="grid grid-cols-4">
            <div className="grid-cols-1 col-span-3"></div>
            <div className="grid-cols-1" style={{marginTop:"-20%"}}><img src="../images/coin1.png" width="100" height="100" /></div>
        </div>
        <div style={{fontSize:"250%"}}>Bonding</div>
        <div style={{fontSize:"110%"}}>Bonding allows you to trade various tokens for OHM at a discounted price. 
        In exchange, bond sales provide additional liquidity and reserve assets to the Olympus treasury, 
        contributing to the stability of the protocol. As a result, 99% of all liquidity is owned by Olympus.</div>
        <button className="px-7 py-2 rounded-full" id="participateButton" style={{marginTop:"5%", border:"2px solid #222", fontSize:"110%", transition:"1s ease-in-out"}}>BOND &nbsp;<i class="fa-solid fa-arrow-right" style={{color:"#111",}}></i></button>
    </div>
   </div>
  </div>
    );
}