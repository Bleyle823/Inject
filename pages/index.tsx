import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Header from "../components/header";
const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

const Home: NextPage = () => {
  const address = useAddress();

  if(!address) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <ConnectWallet btnTitle="Sign In" />
      </div>
    )
  }
  return (
    <main>
        <Header/>
        <ConnectWallet />
        <MapWithNoSSR />
    </main>
  );
};

export default Home;
