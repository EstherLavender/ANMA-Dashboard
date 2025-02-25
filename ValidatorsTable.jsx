### 🗂️ **Validator List with Sorting/Filtering** (`ValidatorsTable.jsx`)

import { useEffect, useState } from 'react';
import { fetchValidators } from '../services/avalancheAPI';

const ValidatorsTable = () => {
  const [validators, setValidators] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchValidators();
        setValidators(data);
      } catch (err) {
        console.error('Error fetching validators:', err);
      }
    };

    fetchData();
  }, []);

  const filteredValidators = validators.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Validator"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Stake (AVAX)</th>
          </tr>
        </thead>
        <tbody>
          {filteredValidators.map((v) => (
            <tr key={v.name} className="text-center border-t">
              <td className="p-2">{v.name}</td>
              <td className="p-2">{v.stake.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ValidatorsTable;
