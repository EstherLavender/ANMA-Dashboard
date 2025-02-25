### 🧩 **Block Details & TPS** (`BlockTPSChart.jsx`)

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { fetchBlockDetails } from '../services/avalancheAPI';

const BlockTPSChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTPS = async () => {
      try {
        const blockData = await fetchBlockDetails();
        setData(blockData);
      } catch (err) {
        console.error('Error fetching TPS:', err);
      }
    };

    fetchTPS();
    const interval = setInterval(fetchTPS, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="time" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="tps" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BlockTPSChart;
