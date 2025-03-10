# Boom Token 🚀

Boom Token is a cutting-edge **ERC-20** token designed to transform the decentralized finance (DeFi) ecosystem with its robust, scalable features. Boom Token aims to integrate seamlessly into decentralized exchanges, cross-chain liquidity bridges, and provide users with secure token interactions.

---

## 🌐 Features & Capabilities

### 1. **Cross-Chain Bridge Integration**
Boom Token leverages **Celer cBridge** to facilitate seamless token transfers across multiple blockchains, ensuring liquidity and ease of access for users on different networks like **Base**, **BSC**, and **Ethereum**.

- **Base ↔ BSC ↔ Ethereum**: Efficient cross-chain liquidity and token transfers powered by **cBridge**.
- **Wrapped Boom Token (BEP-20)**: A **BEP-20** token deployed on the **BSC** network, pegged 1:1 with Boom Token’s ERC-20 version on the Base network.

### 2. **Liquidity Management**
Boom Token integrates with leading decentralized exchanges (DEXs) such as **Uniswap** (Base) and **PancakeSwap** (BSC), allowing for deeper liquidity and efficient trading.

- **Uniswap (Base)**: Boom Token can be traded seamlessly on the **Base** network.
- **PancakeSwap (BSC)**: Boom Token’s **BEP-20** version is integrated into the **WBNB** liquidity pool on **PancakeSwap**.

### 3. **Tokenomics & Governance**
Boom Token supports a community-driven governance model that ensures decentralized decision-making. Tokenomics are designed to incentivize long-term growth, staking, and liquidity provisioning.

- **Total Supply**: 1,000,000,000 BOOM
- **Initial Circulating Supply**: 20% (200,000,000 BOOM)
- **Reserved for Liquidity**: 30% (300,000,000 BOOM)
- **Community Growth & Partnerships**: 35% (350,000,000 BOOM)
- **Team & Advisors**: 15% (150,000,000 BOOM)

Holders of Boom Token can participate in governance by voting on proposals that impact the token's future development and ecosystem growth.

### 4. **Contract Addresses**
Boom Token is deployed on the following blockchains:

- **Boom Token (Base)**:  
  Contract Address: `0x02C9974C9f3E3D96E8acF8c8eb9C46e19125630a`

- **Boom Token (BSC)**:  
  Contract Address: `0xcd6a51559254030ca30c2fb2cbdf5c492e8caf9c`

- **Uniswap (Base) Pool Address**:  
  Pool Address: `0x9090f998bCAB813B297992D01CdbFBB287954E73`

- **PancakeSwap (BSC) Pool Address**:  
  Pool Address: `0x...`

---

## ⚡ Installation & Setup (Using Alpine Linux)

**Alpine Linux** is a lightweight distribution that is ideal for deploying and managing Boom Token on decentralized platforms. This section covers the process of setting up **Alpine Linux** for smart contract deployment.

### 1. Install Alpine Linux

You can use **Alpine Linux** directly or within a **Docker** container for a minimal and efficient setup.

#### Alpine Docker Example:

```bash
docker pull alpine:latest
docker run -it alpine:latest /bin/sh
