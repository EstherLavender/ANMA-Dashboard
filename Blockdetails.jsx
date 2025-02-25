// ✅ Updated Avalanche Dashboard Code with Interactive Components
// Technologies: React, Tailwind CSS, Recharts, Axios

// --- File: src/services/avalancheAPI.js ---
import axios from "axios";

const AVALANCHE_RPC = "https://api.avax.network/ext/bc/C/rpc"; // Avalanche C-Chain Mainnet RPC

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

// 🧾 Fetch Recent Transactions
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

// 🧑‍💻 Fetch Validator Data (Example Static Data)
export async function fetchValidators() {
  return [
    { name: "Validator A", uptime: "99.9%", stake: 50000 },
    { name: "Validator B", uptime: "98.7%", stake: 40000 },
    { name: "Validator C", uptime: "97.5%", stake: 30000 },
  ];
}

// --- File: src/components/ValidatorsTable.jsx ---
import { useEffect, useState } from "react";
import { fetchValidators } from "../services/avalancheAPI";

export default function ValidatorsTable() {
  const [validators, setValidators] = useState([]);

  useEffect(() => {
    fetchValidators().then(setValidators);
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Validator Stats 📈</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Uptime</th>
            <th className="p-2 border">Stake (AVAX)</th>
          </tr>
        </thead>
        <tbody>
          {validators.map((v, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{v.name}</td>
              <td className="p-2 border">{v.uptime}</td>
              <td className="p-2 border">{v.stake.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- File: src/components/BlockDetails.jsx ---
import { useEffect, useState } from "react";
import { fetchBlockNumber, fetchBlockDetails } from "../services/avalancheAPI";

export default function BlockDetails() {
  const [block, setBlock] = useState(null);

  useEffect(() => {
    async function getBlock() {
      const latestBlock = await fetchBlockNumber();
      const blockData = await fetchBlockDetails(latestBlock);
      setBlock(blockData);
    }
    getBlock();
  }, []);

  if (!block) return <div className="p-4">Loading block details...</div>;

  return (
    <div className="p-4 bg-white rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Block Details 🧩</h2>
      <ul className="list-disc pl-5">
        <li><strong>Block Number:</strong> {parseInt(block.number, 16)}</li>
        <li><strong>Timestamp:</strong> {new Date(parseInt(block.timestamp, 16) * 1000).toLocaleString()}</li>
        <li><strong>Transactions:</strong> {block.transactions.length}</li>
        <li><strong>Miner:</strong> {block.miner}</li>
      </ul>
    </div>
  );
}

// --- File: src/components/TransactionsList.jsx ---
import { useEffect, useState } from "react";
import { fetchRecentTransactions } from "../services/avalancheAPI";

export default function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchRecentTransactions().then(setTransactions);
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Transaction History 🧾</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Hash</th>
            <th className="p-2 border">From</th>
            <th className="p-2 border">To</th>
            <th className="p-2 border">Value (AVAX)</th>
            <th className="p-2 border">Gas Used</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash} className="text-center">
              <td className="p-2 border truncate max-w-[120px]">{tx.hash.slice(0, 10)}...</td>
              <td className="p-2 border truncate max-w-[100px]">{tx.from.slice(0, 10)}...</td>
              <td className="p-2 border truncate max-w-[100px]">{tx.to ? tx.to.slice(0, 10) : "N/A"}...</td>
              <td className="p-2 border">{tx.value.toFixed(4)}</td>
              <td className="p-2 border">{tx.gasUsed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- File: src/App.jsx ---
import ValidatorsTable from "./components/ValidatorsTable";
import BlockDetails from "./components/BlockDetails";
import TransactionsList from "./components/TransactionsList";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Avalanche Dashboard 🚀</h1>
      <ValidatorsTable />
      <BlockDetails />
      <TransactionsList />
    </div>
  );
}
