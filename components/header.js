import { useState } from "react";
import Link from 'next/link';
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ProjectHeader(){
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
    return (
      <nav className='flex items-center flex-wrap pl-6 pr-6 pb-2 pt-2' style={{background:"rgba(20,20,20,0.3)"}}>
      <div id="logo">
        <Link href='/' className='inline-flex items-center p-2 mr-4 '>
        <span className='' style={{}}>
            <img src="../images/axoralogo.png" width="130" height="130" style={{height:""}}/>
          </span>
        </Link>
      </div>
      <button id="headerbutton"
        className=' inline-flex p-3 hover:bg-maroon-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={3}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {/* Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex gap-4 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center md:items-center items-start  flex flex-col lg:h-auto'
        style={{fontSize:"115%", transition:"2s ease-in-out"}}>
           
            <div>
            <Link href='/stake' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'
             >
              Stake
            </Link>
          </div>

          <div>
            <Link href='/farm' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'>
              Farm
          
          </Link>
          </div>
          
          <div>
            <a href='/exchange' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'>
              Exchange
            </a>
            </div>

            <div>
            <a href='/moneymarket' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'>
              Money Market
            </a>
            </div>
          
            <div>
            <a href='/governance' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'>
              Governance
            </a>
            </div>

            <div>
            <a href='/faucet' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'>
              Faucet
            </a>
            </div>

            <div>
            <a href='/admin' id="headeranchors" className='lg:inline-flex lg:w-auto w-full px-4 rounded-full text-white items-center justify-center'>
              Admin
            </a>
            </div>


            {<ConnectButton /> ??
            <button>
            <Link href='/stake' id="firstsectionbutton" className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded-full text-white items-center justify-center'>
              Enter App &nbsp;<i class="fa-solid fa-arrow-right" style={{color:"#ddd",}}></i>
            </Link>
            </button>}

        </div>
      </div>
    </nav>

    );
}