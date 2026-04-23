import { useState, useEffect } from "react";
import Sidebar from "./layout/Sidebar";
import StockStats from "./components/StockStats";
import MainChart from "./components/MainChart";
import StockTable from "./components/StockTable";
import { Sun, Moon } from "lucide-react";

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

      <main className="flex-1 p-10 ml-64">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Dashboard Overview
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Welcome back, Thomas!
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-yellow-400 hover:scale-110 transition-all cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <StockStats />

        <MainChart />

        <StockTable />
      </main>
    </div>
  );
}

export default App;
