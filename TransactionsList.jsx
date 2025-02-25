### 🧾 **Transaction History** (`TransactionsList.jsx`)

import { useEffect, useState } from 'react';
import { fetchRecentTransactions } from '../services/avalancheAPI';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);
  const [minValue, setMinValue] = useState(0);

  useEffect(() => {
    const fetchTx = async () => {
      try {
        const txs = await fetchRecentTransactions();
        setTransactions(txs);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };

    fetchTx();
    const interval = setInterval(fetchTx, 7000);
    return () => clearInterval(interval);
  }, []);

  const filteredTxs = transactions.filter((tx) => tx.value >= minValue);

  return (
    <div>
      <input
        type="number"
        placeholder="Min Value"
        value={minValue}
        onChange={(e) => setMinValue(Number(e.target.value))}
        className="p-2 border rounded mb-4 w-full"
      />
      <ul className="space-y-2">
        {filteredTxs.map((tx) => (
          <li key={tx.hash} className="p-3 bg-gray-100 rounded shadow">
            <p><strong>Hash:</strong> {tx.hash}</p>
            <p><strong>Value:</strong> {tx.value} AVAX</p>
            <p><strong>Gas Used:</strong> {tx.gasUsed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
