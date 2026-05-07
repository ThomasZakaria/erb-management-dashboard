import { useState, useEffect } from "react";
import { Bell, ChevronDown, Globe, Sun, Moon } from "lucide-react";

export default function Topbar({ darkMode, setDarkMode }) {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    fetch("http://management.runasp.net/api/v1/warehouses")
      .then((res) => res.json())
      .then((data) => {
        setBranches(data);
        if (data.length > 0) setSelectedBranch(data[0].name);
      })
      .catch((err) => console.error("Error fetching branches:", err));
  }, []);

  return (
    <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-4">
        <div className="relative group">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-all"
          >
            {branches.map((branch) => (
              <option key={branch.id} value={branch.name}>
                {branch.name}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors cursor-pointer">
          <Globe size={18} />
          <span>العربية</span>
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} />
          )}
        </button>

        <div className="relative cursor-pointer group">
          <Bell
            size={20}
            className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 transition-colors"
          />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 border-2 border-white dark:border-slate-900 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
            4
          </span>
        </div>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-100 dark:border-slate-800">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">
              Thomas Zakaria
            </p>
            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              Administrator
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200 dark:shadow-none">
            TZ
          </div>
        </div>
      </div>
    </header>
  );
}
