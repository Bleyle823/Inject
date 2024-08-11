import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { BaseSepoliaTestnet } from "@thirdweb-dev/chains";
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//  const activeChain = "BaseSepoliaTestnet";
//const activeChain = "mumbai";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={BaseSepoliaTestnet}
      supportedWallets={[
        embeddedWallet(),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
    </SessionProvider>
  );
}


