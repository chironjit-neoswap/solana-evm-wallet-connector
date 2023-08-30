import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum-all';
import { SolanaWalletConnectors } from '@dynamic-labs/solana-all';

const Home = () => (
  <DynamicContextProvider
    settings={{
      environmentId: 'YOUR_ENVIRONMENT_ID',
      walletConnectors: [EthereumWalletConnectors, SolanaWalletConnectors],
      // ...
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default Home;
