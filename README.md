# ANMA-Dashboard
The Avalanche Network Monitoring and Analytics Dashboard provides real-time insights into the Avalanche blockchain's performance.

# Avalanche Dashboard 🚀

A modern dashboard to monitor and analyze the Avalanche blockchain network with real-time data updates, sorting, filtering, and interactive charts.

## 🌟 Features
- **Validator Stats 📈**: Visualize validator stakes.
- **Block Details 🧩**: Monitor transactions per block in real-time.
- **Transaction History 🧾**: View live transaction data with sorting and filtering.
- **Real-Time Updates 🚀**: Data refreshes automatically for live monitoring.
- **Responsive UI**: Optimized for all screen sizes with smooth animations.

---

## 🛠️ Tech Stack
- **React**: Frontend framework for UI components.
- **Tailwind CSS**: For styling and responsive layouts.
- **Recharts**: Data visualization for charts and graphs.
- **Axios**: Handling API requests.
- **Framer Motion**: Animations and transitions.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/avalanche-dashboard.git
   cd avalanche-dashboard
   ```

2. **Install dependencies:**
   ```bash
   yarn install # or npm install
   ```

3. **Run the development server:**
   ```bash
   yarn dev # or npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the dashboard.

---

## 📁 Project Structure
```
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ValidatorsChart.jsx    # Validator stats bar chart
│   │   ├── BlockTPSChart.jsx      # Transactions per block line chart
│   │   └── TransactionsList.jsx   # Transaction history with sorting & filtering
│   ├── services/          # API services
│   │   └── avalancheAPI.js        # Avalanche RPC API calls
│   ├── App.jsx            # Main application entry
│   └── index.jsx          # React DOM render
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Project dependencies & scripts
```

---

## 📊 Usage & Features
### ✅ Validator Stats 📈
- Displays validators and their stakes.
- Real-time data with smooth animations.

### ✅ Transactions Per Block 🧩
- Real-time TPS visualization updated every 5 seconds.
- Helps monitor network activity and block throughput.

### ✅ Transaction History 🧾
- Live transaction updates every 7 seconds.
- Sorting by transaction value or gas used.
- Filter by minimum transaction value.

---

## 🚦 API Endpoints
Powered by Avalanche’s **C-Chain Mainnet RPC**:
- `fetchBlockNumber()`: Latest block number.
- `fetchBlockDetails(blockNumber)`: Specific block details.
- `fetchRecentTransactions()`: Recent transactions in the latest block.
- `fetchValidators()`: Example validator data.

---

## 🖼️ Screenshots
> *(Add screenshots or gifs of the dashboard here for better visuals.)*

---

## 📢 Contributing
Contributions are welcome! ✨
1. Fork the repository.
2. Create your branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## 📄 License
This project is licensed under the MIT License.

---

## 🙌 Acknowledgements
- Built with ❤️ using React, Tailwind CSS, and Avalanche RPC.
- Inspired by the **Devtools Track** at the hackathon.

---

## 🔗 Links
- [Avalanche Docs](https://docs.avax.network/)
- [Recharts](https://recharts.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

🚀 *Happy Building!* 🚀


🧑‍💻 fetchValidators: Provides sample validator data (replaceable with a real API).
