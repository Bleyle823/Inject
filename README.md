# Inject 💉
This is a decentralized application (DApp) that enables users to claim unique NFTs by verifying their presence at specific locations where protests and demonstrations are taking place. GeoProtest guarantees that participants obtain verified digital tokens as evidence of their participation in social and political movements by utilizing blockchain technology and geolocation. These NFTs function as a digital activism badge, offering a verifiable record of involvement and encouraging a feeling of camaraderie and unity among activists.



## 📋 Table of Contents
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Setting Up the Backend](#-setting-up-the-backend)
- [Worldcoin Integration](#-worldcoin-integration)
- [Mapbox & Leaflet Setup](#-mapbox--leaflet-setup)
- [Smart Contracts](#-smart-contracts)
- [Additional Information](#-additional-information)

---

## 🚀 Getting Started

### 1. Clone the Project
First, clone the repository to your local machine:
```bash
git clone https://github.com/Bleyle823/Inject.git
cd Inject-main
```
## Install Dependencies
Make sure you have Node.js installed. Then, install the required packages:

```bash
npm install
```
## Set Up Environment Variables
Create a .env.local file at the root of the project and add the following variables:

```bash
# Thirdweb
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=your_client_id_here
TW_ENGINE_URL=your_thirdweb_engine_url
TW_ACCESS_TOKEN=your_thirdweb_access_token
TW_BACKEND_WALLET=your_thirdweb_backend_wallet_address

# Worldcoin
WLD_CLIENT_ID=your_worldcoin_client_id
WLD_CLIENT_SECRET=your_worldcoin_client_secret

# Mapbox
NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_api_key

# Leaflet
NEXT_PUBLIC_LEAFLET_TILE_LAYER_URL=your_leaflet_tile_layer_url
```
# 🐳 Setting Up the Backend

## 1. Install Docker
Ensure Docker is installed on your machine. Download Docker here.

## 2. Start PostgreSQL, Redis, and Thirdweb Engine
Run the following Docker commands to start the necessary services:

```bash
docker-compose up -d
```
## This will start:

- PostgreSQL: Your primary database for storing user data.
- Redis: Used for caching and speeding up queries.
- Thirdweb Engine: For managing NFT minting and blockchain interactions.

## 3. Configure Thirdweb Backend Wallet
To interact with the blockchain, you'll need to set up a Thirdweb backend wallet. This wallet will be used for signing transactions and interacting with smart contracts. Update your .env.local with your wallet information:

```bash
TW_BACKEND_WALLET=your_wallet_private_key_here
```

## 4. Obtain API Keys
- NEXT_PUBLIC_TEMPLATE_CLIENT_ID: Get this from the Thirdweb developer portal under your app’s settings.
- TW_ENGINE_URL: Available in your Thirdweb Engine setup.
- TW_ACCESS_TOKEN: Generated from your Thirdweb account.

### 🌍 Worldcoin Integration
## 1. Worldcoin Authentication
This project uses Worldcoin's "Log in with World ID" to ensure user privacy and security. It allows users to authenticate without revealing their identity.

## 2. Get Worldcoin Credentials
To use Worldcoin, you need to set up a developer account and get your credentials:

- Go to the Worldcoin Developer Portal.
- Create a new app and obtain your WLD_CLIENT_ID and WLD_CLIENT_SECRET.
- Add these to your .env.local file.

```bash
WLD_CLIENT_ID=your_worldcoin_client_id
WLD_CLIENT_SECRET=your_worldcoin_client_secret
  ```
### 🗺️ Mapbox & Leaflet Setup
## 1. Mapbox Integration
Mapbox is used for rendering the maps and marking the protest locations. To get started:

- Sign up at Mapbox and get your API key.
- Add your API key to the .env.local file:
  
```bash
  NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_api_key
```
## Leaflet Configuration
Leaflet is a lightweight library for interactive maps. The Tile Layer URL is necessary to load map tiles. Add it to your environment variables:

```bash
NEXT_PUBLIC_LEAFLET_TILE_LAYER_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```
### 🔗 Smart Contracts
## This project deploys smart contracts on multiple testnets for broad compatibilit:

- Mode Testnet: Contract address: `0x81542767a42a3c6858A2A4a0605c30343d747619`
- Metal L2 Testnet: Contract address: `0x22513AB26b2C22c5ed81EcA641E1Ba7166078Ffa`
- Celo Alfajores Testnet: Contract address: `0x0feF1554faC65a49fd9C8f4E4522a0aAb40D675B`
- Base Sepolia Testnet: Contract address: `0x986F524cf877A31d01E5bEBdc81CAd17676Ea87F`
- Op Sepolia Testnet: Contract address: `0xAaD3D1B128b3B5578e8f9b4CD0f1d5541c327374`
Each contract manages the minting of NFTs based on geolocation data, ensuring that participation is recorded on the blockchain.

### 📚 Additional Information
## 🛠 Development Mode
To start the development server:

```bash
npm run dev
```
Visit http://localhost:3000 to see the app in action.

### 📦 Production Build
## To build the project for production:

```bash
npm run build
npm start
```
### 🧩 Extending Functionality
Feel free to fork the project and add new features. Contributions are welcome!

👋 Join the Movement! Immortalize your participation and help preserve the legacy of protests. Together, we can ensure that the fight for justice is never forgotten.



