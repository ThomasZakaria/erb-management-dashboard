import { useState, useEffect } from "react";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import StockStats from "./components/StockStats";
import MainChart from "./components/MainChart";
import StockTable from "./components/StockTable";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-64">
        <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Dashboard Overview
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Real-time inventory and sales tracking
            </p>
          </div>

          <StockStats />
          <MainChart />
          <StockTable />
        </main>
      </div>
    </div>
  );
}

export default App;
