export default function Footer(){
    return(
    <div className="" style={{background:"#141722", padding:"5%", paddingBottom:"10%", color:"#eee", fontSize:"120%"}}>
        <div className="grid md:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1" >
       <div className="grid-cols-1 col-span-2" style={{marginBottom:"5%"}}>
        <div style={{fontSize:"150%", fontWeight:"bold", marginBottom:"2%"}}>Axora-labs</div>
        <div style={{fontSize:"140%", marginBottom:"2%"}}><i class="fab fa-twitter"></i> &nbsp; &nbsp; <i class="fab fa-discord"></i> &nbsp; &nbsp;<i class="fab fa-github"></i> &nbsp; &nbsp; <i class="fab fa-instagram"></i></div>
        <div style={{fontSize:"140%", marginBottom:"2%"}}><i class="fab fa-telegram"></i> &nbsp; &nbsp; <i class="fab fa-facebook"></i> &nbsp; &nbsp;<i class="fab fa-linkedin"></i> &nbsp; &nbsp; <i class="fab fa-reddit"></i></div>
        </div>
       <div className="grid-cols-1" style={{marginBottom:"5%"}}>
        <div style={{marginBottom:"3%", fontWeight:"bold"}}>Products &nbsp; <i class="fa-solid fa-code"></i></div>
          Axora Pro<br></br>
          Staking <br></br>
          Bonds <br></br>
        </div>
       <div className="grid-cols-1" style={{marginBottom:"5%"}}>
       <div style={{marginBottom:"3%", fontWeight:"bold"}}>Learn &nbsp; <i class="fa-solid fa-graduation-cap"></i></div>
       Documentation<br></br>
       Blog<br></br>
       Medium <br></br>
        </div>
       <div className="grid-cols-1" style={{marginBottom:"5%"}}>
       <div style={{marginBottom:"3%", fontWeight:"bold"}}>Contact us &nbsp; <i class="fa-solid fa-phone"></i></div>
        Join Axora Discord <br></br>
        Media Inquiries<br></br>
        </div>
        </div>
     </div>
    );
}