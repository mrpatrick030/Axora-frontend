export default function SecondSection() {
    return(
        <div className="ml-6 mr-6 rounded-3xl" style={{marginLeft:"5%", marginRight:"5%", border:"1px solid #333", boxShadow:"2px 2px 10px 2px #222", color:"#141722", marginTop:"-5%", paddingTop:"7%", paddingBottom:"7%",marginBottom:"8%", background:"#bbb"}}>
         <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1" style={{paddingLeft:"5%", paddingRight:"5%", marginBottom:"12%"}}>
          <div className="grid-cols-1" style={{fontSize:"250%"}}>Protocol <br></br> Stats</div>
          <div className="grid-cols-1" style={{fontSize:"140%"}}>Treasury Balance <br></br>
           <span style={{fontSize:"250%",}}>$221,118,338 </span></div>
           <div className="grid-cols-1" style={{fontSize:"140%"}}>Number of holders <br></br>
           <span style={{fontSize:"250%",}}>120,000+ </span></div>
          </div>  

          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1" style={{paddingLeft:"5%", paddingRight:"5%",}}>
          <div className="grid-cols-1" style={{fontSize:"250%"}}><img className="sm:opacity-0 md:opacity-100 lg:opacity-100" src="../images/bnb8.png" style={{marginLeft:"-60%", marginTop:"-30%"}} /></div>
          <div className="grid-cols-1" style={{fontSize:"140%"}}>Protocol-Owned Liquidity <br></br>
           <span style={{fontSize:"250%",}}>$62,489,711 </span></div>
           <div className="grid-cols-1" style={{fontSize:"140%"}}>Unique Tokens in Treasury <br></br>
           <span style={{fontSize:"250%",}}>50+ </span></div>
          </div>  
       </div>
    );
}