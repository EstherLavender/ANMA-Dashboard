// ✅ Updated Avalanche Dashboard Code with API Endpoints for Validators, Blocks, and Transactions
// Technologies: React, Tailwind CSS, Recharts, Axios

// --- File: src/services/avalancheAPI.js ---
import axios from "axios";

const AVALANCHE_RPC = "https://api.avax.network/ext/bc/C/rpc"; // Avalanche C-Chain Mainnet RPC
const AVALANCHE_PLATFORM_API = "https://api.avax.network/v2/platform"; // For validator data (Hypothetical endpoint)

// 🚀 Fetch Latest Block Number
export async function fetchBlockNumber() {
  const { data } = await axios.post(AVALANCHE_RPC, {
    jsonrpc: "2.0",
    method: "eth_blockNumber",
    params: [],
    id: 1,
  });
  return parseInt(data.result, 16);
}

// 📦 Fetch Latest Block Details
export async function fetchBlockDetails(blockNumber) {
  const { data } = await axios.post(AVALANCHE_RPC, {
    jsonrpc: "2.0",
    method: "eth_getBlockByNumber",
    params: ["0x" + blockNumber.toString(16), true],
    id: 1,
  });
  return data.result;
}

// ⛽ Fetch Current Gas Price
export async function fetchGasPrice() {
  const { data } = await axios.post(AVALANCHE_RPC, {
    jsonrpc: "2.0",
    method: "eth_gasPrice",
    params: [],
    id: 1,
  });
  return parseInt(data.result, 16) / 1e9; // Gas price in Gwei
}

// 🧾 Fetch Recent Transactions from Latest Block
export async function fetchRecentTransactions() {
  const latestBlockNumber = await fetchBlockNumber();
  const block = await fetchBlockDetails(latestBlockNumber);
  return block.transactions.map((tx) => ({
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    value: parseInt(tx.value, 16) / 1e18, // Value in AVAX
    gasUsed: parseInt(tx.gas, 16),
  }));
}

// 🧑‍💻 Fetch Validator Data (Example Static Data - Replace with real API if available)
export async function fetchValidators() {
  // Replace with actual validator API when available
  return [
    { name: "Validator A", uptime: "99.9%", stake: 50000 },
    { name: "Validator B", uptime: "98.7%", stake: 40000 },
    { name: "Validator C", uptime: "97.5%", stake: 30000 },
  ];
}
