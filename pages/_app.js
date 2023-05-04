import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, arbitrum, goerli, polygonMumbai, sepolia } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';



const { chains, provider } = configureChains(
  [mainnet, polygon, goerli, arbitrum, polygonMumbai, sepolia],
  [
    infuraProvider({ apiKey: process.env.INFURA_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});



export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  )
}
