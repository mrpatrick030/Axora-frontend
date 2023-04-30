import Head from 'next/head';
import ProjectHeader from '../components/header';
import SecondSection from '@/components/secondsection';
import Participate from '@/components/participate';
import FAQ from '../components/faq';


export default function Home(){
  return (
    <>
    <Head>
   <title>The official website of Axora-Labs</title>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;
    </Head>
  <div id="allTheComponents" style={{fontFamily:"georgia"}}>
  <div className='' style={{backgroundImage:"url(../images/bitcoin1.jpg)", 
  paddingBottom:"20%", backgroundPositionX:"", backgroundPositionY:"", backgroundSize:""}}>
  <ProjectHeader />
  <div style={{fontSize:"300%", fontWeight:"600", color:"#fff", marginTop:"5%", marginLeft:"5%", marginBottom:"2%"}}><span id="the">The </span> 
  <span id="future">Future </span><span id="decentralized">Decentralized </span> <span id="reserve">Reserve </span> <span id="currency">Currency </span> </div>
  <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1' style={{marginLeft:"6%", color:"#fff", fontSize:"120%"}}>
  <div className='grid-cols-1'><span id="intro1">Axora-labs is building Axora, </span> 
   <span id="intro2"> a community-owned, decentralized and censorship-resistant 
    reserve currency </span> <span id="intro3"> that is asset-backed, deeply liquid and used widely across Web3.</span></div>
    </div>
    </div>
  <SecondSection />
  <Participate />
  <FAQ />
  </div>
  </>
  );
};