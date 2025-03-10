// Import required libraries
const { ethers } = require('ethers');
require('dotenv').config();

// Set up your Infura URL, private key, and contract address using environment variables
const INFURA_URL = process.env.INFURA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BOOM_TOKEN_CONTRACT_ADDRESS = process.env.BOOM_TOKEN_CONTRACT_ADDRESS;

// Connect to the Ethereum network using Infura
const provider = new ethers.JsonRpcProvider(INFURA_URL);

// Initialize wallet with the private key
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Create a contract instance for Boom Token
const abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function transfer(address recipient, uint256 amount) public returns (bool)",
];

const boomTokenContract = new ethers.Contract(BOOM_TOKEN_CONTRACT_ADDRESS, abi, wallet);

// Example function to check the balance of an address
async function checkBalance(address) {
    try {
        const balance = await boomTokenContract.balanceOf(address);
        console.log(`Balance of ${address}: ${ethers.utils.formatUnits(balance, 18)} BOOM`);
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

// Example function to send tokens
async function sendTokens(toAddress, amount) {
    try {
        const tx = await boomTokenContract.transfer(toAddress, ethers.utils.parseUnits(amount, 18));
        console.log(`Transaction hash: ${tx.hash}`);
        await tx.wait();
        console.log(`Transaction confirmed. ${amount} BOOM sent to ${toAddress}`);
    } catch (error) {
        console.error("Error sending tokens:", error);
    }
}

// Use the functions (Example)
const recipientAddress = '0xRecipientAddressHere'; // Replace with the recipient address
const amountToSend = '10'; // Amount of tokens to send (adjust as needed)

checkBalance(wallet.address);
sendTokens(recipientAddress, amountToSend);
