# ANMA-Dashboard
The Avalanche Network Monitoring and Analytics Dashboard provides real-time insights into the Avalanche blockchain's performance.

A modern dashboard to monitor and analyze the Avalanche blockchain network with **real-time data updates**, **sorting**, **filtering**, and **interactive charts**. Built for developers seeking actionable network insights.

---

## 🌟 Features
✅ **Validator Stats 📈** – Visualize validator stakes with interactive bar charts.

✅ **Block Details 🧩** – Track transactions per block with real-time data.

✅ **Transaction History 🧾** – Sort and filter transactions by value or gas used.

✅ **Real-Time Updates 🚀** – Data refreshes automatically for live monitoring.

✅ **Responsive UI** – Mobile-friendly with smooth animations.

---

## 🛠️ Tech Stack
- ⚛️ **React** – Frontend UI components  
- 🎨 **Tailwind CSS** – Fast, responsive styling  
- 📊 **Recharts** – Data visualization with interactive graphs  
- 🔄 **Axios** – Fetching data from Avalanche RPC  
- 🎥 **Framer Motion** – Smooth animations and transitions  

---

## 🚀 Getting Started

### Prerequisites
✅ [Node.js](https://nodejs.org/) (v14 or higher)  
✅ [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)  

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
   Visit [http://localhost:5173](http://localhost:5173) to explore the dashboard.

---

## 📁 Project Structure
```plaintext
├── public/                # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ValidatorsChart.jsx    # Bar chart for validator stats
│   │   ├── BlockTPSChart.jsx      # TPS line chart with real-time data
│   │   └── TransactionsList.jsx   # Transaction history with sorting/filtering
│   ├── services/          # API services
│   │   └── avalancheAPI.js        # RPC API calls to Avalanche network
│   ├── App.jsx            # Main application entry point
│   └── index.jsx          # React DOM render
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies & scripts
```

---

## 📊 Usage & Features
### ✅ Validator Stats 📈
Displays top validators and their stakes via an interactive bar chart. Data auto-refreshes every 10 seconds.

### ✅ Transactions Per Block 🧩
Real-time TPS monitoring with updates every 5 seconds. Easily track network activity.

### ✅ Transaction History 🧾
- **Sorting:** Arrange by transaction value or gas usage.
- **Filtering:** Filter by minimum transaction value.
- **Auto-Refresh:** Updates every 7 seconds for the latest transactions.

---

## 🚦 API Endpoints Used
Using Avalanche’s **C-Chain Mainnet RPC**:
- `fetchBlockNumber()`: Retrieve the latest block number.
- `fetchBlockDetails(blockNumber)`: Get transaction details of a specific block.
- `fetchRecentTransactions()`: Access the latest transaction list.
- `fetchValidators()`: Simulated endpoint for validator data.

---

## 🖼️ Screenshots
> *(Add screenshots or GIFs here)*
> - ✅ Validator Stats Bar Chart  
> - ✅ TPS Line Chart in Action  
> - ✅ Transaction History with Filters & Sort Options  

---

## 📢 Contributing
💙 Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push your branch: `git push origin feature/your-feature`.
5. Submit a pull request for review.

---

## 📄 License
Licensed under the **MIT License** – free to use and modify.

---

## 🙌 Acknowledgements
- Built with ❤️ by the **Devtools Track** team during the hackathon.  
- Special thanks to the Avalanche community and open-source contributors.  

---

## 🔗 Useful Links
- 🌐 [Avalanche Docs](https://docs.avax.network/)  
- 📊 [Recharts Documentation](https://recharts.org/)  
- 🎥 [Framer Motion](https://www.framer.com/motion/)  
- 🎨 [Tailwind CSS](https://tailwindcss.com/)  

---

🚀 *Start monitoring the Avalanche network like a pro!* 🚀




