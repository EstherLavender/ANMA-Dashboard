### 📈 **Validator Stats** (`ValidatorsChart.jsx`)

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { fetchValidators } from '../services/avalancheAPI';

const ValidatorsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const validators = await fetchValidators();
        setData(validators);
      } catch (err) {
        console.error('Error fetching validators:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="stake" fill="#4ade80" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ValidatorsChart;
