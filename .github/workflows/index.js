require('dotenv').config(); // Only if you use .env locally
const { ethers } = require('ethers');

// Access the secrets via environment variables
const BASE_RPC_URL = process.env.BASE_RPC_URL;
const BSC_RPC_URL = process.env.BSC_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Define your network provider (Base and BSC)
const baseProvider = new ethers.JsonRpcProvider(BASE_RPC_URL);
const bscProvider = new ethers.JsonRpcProvider(BSC_RPC_URL);

// Define your wallet
const wallet = new ethers.Wallet(PRIVATE_KEY);

// Interact with Base Mainnet (Example: Get balance of a specific address)
async function interactWithBase() {
  const baseAddress = '0xYourAddressHere'; // Replace with actual address
  const balance = await baseProvider.getBalance(baseAddress);
  console.log(`Base Mainnet Balance: ${ethers.utils.formatEther(balance)} ETH`);
}

// Interact with BSC (Example: Get balance of a specific address)
async function interactWithBSC() {
  const bscAddress = '0xYourAddressHere'; // Replace with actual address
  const balance = await bscProvider.getBalance(bscAddress);
  console.log(`BSC Balance: ${ethers.utils.formatEther(balance)} BNB`);
}

// Main function to run interactions
async function main() {
  await interactWithBase();
  await interactWithBSC();
}

main().catch((error) => {
  console.error(error);
});
