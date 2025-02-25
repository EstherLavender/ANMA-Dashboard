// ✅ Updated Avalanche Dashboard Code with Charts, Sorting, and Filtering
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
    { name: "Validator A", uptime: 99.9, stake: 50000 },
    { name: "Validator B", uptime: 98.7, stake: 40000 },
    { name: "Validator C", uptime: 97.5, stake: 30000 },
  ];
}

// --- File: src/components/ValidatorsChart.jsx ---
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchValidators } from "../services/avalancheAPI";

export default function ValidatorsChart() {
  const [validators, setValidators] = useState([]);

  useEffect(() => {
    fetchValidators().then(setValidators);
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Validator Stake 📈</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={validators}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stake" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// --- File: src/components/BlockTPSChart.jsx ---
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchBlockNumber, fetchBlockDetails } from "../services/avalancheAPI";

export default function BlockTPSChart() {
  const [tpsData, setTpsData] = useState([]);

  useEffect(() => {
    async function fetchTPS() {
      const latestBlock = await fetchBlockNumber();
      const blocks = await Promise.all(
        Array.from({ length: 10 }, (_, i) => fetchBlockDetails(latestBlock - i))
      );
      const formatted = blocks.map((block) => ({
        blockNumber: parseInt(block.number, 16),
        transactions: block.transactions.length,
      })).reverse();
      setTpsData(formatted);
    }
    fetchTPS();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Transactions Per Block 🧩</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={tpsData}>
          <XAxis dataKey="blockNumber" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="transactions" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// --- File: src/components/TransactionsList.jsx ---
import { useEffect, useState } from "react";
import { fetchRecentTransactions } from "../services/avalancheAPI";

export default function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [sortKey, setSortKey] = useState("value");
  const [filterValue, setFilterValue] = useState(0);

  useEffect(() => {
    fetchRecentTransactions().then(setTransactions);
  }, []);

  const sortedTransactions = transactions
    .filter((tx) => tx.value >= filterValue)
    .sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div className="p-4 bg-white rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Transaction History 🧾</h2>
      <div className="flex space-x-4 mb-4">
        <select
          className="p-2 border rounded"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="value">Sort by Value</option>
          <option value="gasUsed">Sort by Gas Used</option>
        </select>
        <input
          type="number"
          placeholder="Min Value (AVAX)"
          className="p-2 border rounded"
          value={filterValue}
          onChange={(e) => setFilterValue(Number(e.target.value))}
        />
      </div>
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
          {sortedTransactions.map((tx) => (
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
import ValidatorsChart from "./components/ValidatorsChart";
import BlockTPSChart from "./components/BlockTPSChart";
import TransactionsList from "./components/TransactionsList";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center">Avalanche Dashboard 🚀</h1>
      <ValidatorsChart />
      <BlockTPSChart />
      <TransactionsList />
    </div>
  );
}
