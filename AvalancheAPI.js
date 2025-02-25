## 📦 **API Services** (`avalancheAPI.js`)

import axios from 'axios';

const RPC_URL = 'https://api.avax.network/ext/bc/C/rpc';

export const fetchValidators = async () => [
  { name: 'Validator 1', stake: 20000 },
  { name: 'Validator 2', stake: 15000 },
  { name: 'Validator 3', stake: 18000 },
];

export const fetchBlockDetails = async () => {
  const now = new Date();
  return Array.from({ length: 10 }, (_, i) => ({
    time: new Date(now - i * 1000).toLocaleTimeString(),
    tps: Math.floor(Math.random() * 30) + 10,
  })).reverse();
};

export const fetchRecentTransactions = async () => Array.from({ length: 8 }, (_, i) => ({
  hash: `0x${Math.random().toString(16).substr(2, 8)}`,
  value: Math.floor(Math.random() * 20),
  gasUsed: Math.floor(Math.random() * 100000),
}));
